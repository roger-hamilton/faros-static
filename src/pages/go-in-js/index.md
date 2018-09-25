---
title: Running Go in Node.js
date: "2018-09-21"
---
# Lets Get Started

We will be exploring running WebAssembly (or WASM) in node. Specifically we will see how to get Go 1.11 code compiled down to WASM and run that code in Node.js.

We will compile this Go program:

```go
// Main.go
package main

import (
  "fmt"
  "os"
  "strconv"
)

func fib(n int) int {
  if n <= 2 {
    return 1
  }
  return fib(n-1) + fib(n-2)
}

func main() {
  var n int
  if len(os.Args) > 1 {
    n, _ = strconv.Atoi(os.Args[1])
  }
  if n == 0 {
    n = 10
  }

  fmt.Printf("fib(%d) = %d\n", n, fib(n))
}

```

And run it like this within Node:

```javascript
// index.js
const Go = require('./Go');

const go = new Go(`${__dirname}/main.wasm`));

go.run(10);
```

The first thing you might be asking is:

<video autoplay loop muted playsinline>
  <source src="but-why.webm" />
</video>

Well... *because* that's why! Let's go over the pros and cons:

### Pros

- I wanted to see if I could

### Cons

- It is slow (by an order of magnitude)
- Go compiles even simple programs to more than 2MB files
- It adds unnecessary complexity to a simple process
- Go code already runs on the server (WASM is primarily targeted at the browser)

As you can see we are not going to be running this in production any time soon. But let's do it anyway!

## Compiling Go 1.11 to WebAssembly

Make sure you have the correct version of the go binary. I have:

```bash
$ go version
go version go1.11 windows/amd64
```

Clone the [repo](https://github.com/roger-hamilton/go-in-js/tree/master) to your local machine:

```bash
git clone https://github.com/roger-hamilton/go-in-js.git
```

Install dependencies (right now I only have cross-env because working with environment variables is painful on windows):

```bash
cd go-in-js
npm install
```

Run the build command:

```bash
npm run build:go
```

This is the equivalent of running on a *NIX machine:

```bash
GOOS=js GOARCH=wasm go build -o main.wasm
```

This should add a `main.wasm` file to your working directory. On my system it weighs in at a hefty 2.35MB. Not exactly the type of file you would want to distribute over the wire in a browser environment. But when you compare it to compiled go binaries it is in the same ballpark. (the sample program we are looking at comes in at 1.89MB for the compiled binary on windows)

## Actually getting it to run in Node.js

### *please note: I am currently running node 10.11 so your milage may vary*

This is where the pain started... As a starting point I tried to just load the WASM file in node according to the docs for WebAssembly:

```javascript
const filename = `${__dirname}/main.wasm`;
const sourceBuffer = fs.readFileSync(filename);
const wasmInstance = await WebAssembly.instantiate(sourceBuffer);
// [TypeError: WebAssembly Instantiation: Imports argument must be present and must be an object]
```

Cool, the optional second argument to instantiate isn't so optional. Ok. Let's give it an empty object:

```javascript
// ...
const importObject = {};
const wasmInstance = await WebAssembly.instantiate(sourceBuffer, importObject);
// [TypeError: WebAssembly Instantiation: Import #0 module="go" error: module is not an object or function]
```


Okay, progress. Now with a little bit of digging I found a js file ([wasm_exec.js](https://github.com/golang/go/blob/master/misc/wasm/wasm_exec.js)) in the examples for running Go wasm in the browser in the golang github repo. The only problem is that this file only runs in node when called directly, like `node wasmexec.js main.wasm args`. Not exactly what I was looking for. After looking at the source for this file I determined that the import object needs to have an object with the key of "go". So:

```javascript
const importObject = {
  go: {},
};
/// [LinkError: WebAssembly Instantiation: Import #0 module="go" function="debug" error: function import requires a callable]
```

If I add a `debug` function to the go object, I am told I need `runtime.wasmExit`. After that `runtime.wasmWrite` and so on. The list is not short.
So I stubbed out the full list of required functions that map to function calls within the go wasm file:

```javascript
const importObject = {
  go: {
    'debug': () => {},
    'runtime.wasmExit': () => {},
    'runtime.wasmWrite': () => {},
    'runtime.nanotime': () => {},
    'runtime.walltime': () => {},
    'runtime.scheduleCallback': () => {},
    'runtime.clearScheduledCallback': () => {},
    'runtime.getRandomData': () => {},
    'syscall/js.stringVal': () => {},
    'syscall/js.valueGet': () => {},
    'syscall/js.valueSet': () => {},
    'syscall/js.valueIndex': () => {},
    'syscall/js.valueSetIndex': () => {},
    'syscall/js.valueCall': () => {},
    'syscall/js.valueInvoke': () => {},
    'syscall/js.valueNew': () => {},
    'syscall/js.valueLength': () => {},
    'syscall/js.valuePrepareString': () => {},
    'syscall/js.valueLoadString': () => {},
    'syscall/js.valueInstanceOf': () => {},
  },
};

/*
{ instance: Instance [WebAssembly.Instance] {},
  module: Module [WebAssembly.Module] {} }
*/
```

Success! Kinda... this just means that the WebAssembly linker has the functions to map to the imports of the wasm file, not that this will actually run.

Looking at the `wasm_exec` file again it looks like one way to run the program is:

```javascript
wasm.instance.exports.run(/* argc */ 0, /* argv */ 0);
```

Which outputs nothing. So let's switch it up. Instead of an object with explicit keys, let's use a `Proxy`. We can replace our `importObject` with:

```javascript
const importObject = {
  go: new Proxy({}, {
    get(target, prop) {
      // this check is needed since there are some calls with symbols that we don't want to mess with
      if (target[prop]) return target[prop];
      return (...args) => {
        console.log(`${prop}(${args.join(', ')})`);
      }
    },
  }),
}
```

We now get:

```
runtime.nanotime(1339928)
runtime.nanotime(1339000)
runtime.getRandomData(1339960)
runtime.nanotime(1339992)
runtime.nanotime(1339768)
runtime.nanotime(201467768)
runtime.nanotime(201467800)
runtime.wasmWrite(1339808)
runtime.wasmWrite(1339808)
runtime.wasmWrite(1339784)
...
runtime.wasmWrite(1339784)
...
runtime.wasmWrite(1338448)
runtime.wasmWrite(1338384)
runtime.wasmWrite(1338424)
runtime.wasmExit(1339976)
```

But, what the hell does that mean? Looking back at the `wasm_exec` file we see there is a lot of messing around with `DataViews` and `ArrayBuffers` and storing and retrieving raw bytes to the shared memory. Not exactly something that I am familiar with. But let's forge ahead.

It does look like it runs to completion though. Or at least successfully calls wasmExit. So maybe if we implement `wasmWrite` we will start to see some headway.

The `wasm_exec` file gives the call signatures for each of the required functions (in Go syntax), and `wasmWrite` has the signature:

```go
func wasmWrite(fd uintptr, p unsafe.Pointer, n int32)
```

But wait, it is only being called with on parameter. How do we get the three parameters we are seeing in the signature?

It turns out that what is being passed in to our function is just an address in the shared memory that marks the beginning of the data for the parameters, and we have to extract them from the shared buffer.

To do this successfully we need to know the size in memory of each of the types. The first two are stored in 64 bits and the last should be pretty obvious (32 bits). All of them are stored in Little Endian so we have to fiddle with retrieval a bit.

```javascript
// Data view is just a wrapper around a buffer to allow you to
// work on different parts as different variables without having
// to copy any data around
const mem = new DataView(wasm.instance.exports.mem.buffer);
const getInt32 = (addr) => {
  return mem.getInt32(addr, true)
}
const getInt64 = (addr) => {
  // get the first 4 bytes (32 bits)
  // do not include the top bit as the sign
  const low = mem.getUint32(addr, true);
  // get the next 4 bytes (32 bits)
  const high = mem.getInt32(addr + 4, true);
  // low + (high * 2^32)
  return low + (high * 4294967296);
}
```

With these in place let's see what we are working with:

```javascript
const importObject = {
  go: new Proxy({
    'runtime.wasmWrite': (stackPointer) => {
      const fd = getInt64(stackPointer + 8);
      const p = getInt64(stackPointer + 16);
      const n = getInt32(stackPointer + 24);
      fs.writeSync(fd, new Uint8Array(wasm.instance.exports.mem.buffer, p, n));
    },
  }, {
    get(target, prop) {
      if (target[prop]) return target[prop];
      return (...args) => {
        console.log(`${prop}(${args.join(', ')})`);
      }
    },
  }),
}
/*
fatal error: nanotime returning zero

goroutine 1 [running]:
runtime.throw(0x2d1c7, 0x17)
        C:/tools/go/src/runtime/panic.go:608 +0x6 fp=0xc0227a0 sp=0xc022778 pc=0x11a00006
runtime.main()
        C:/tools/go/src/runtime/proc.go:149 +0x40 fp=0xc0227e0 sp=0xc0227a0 pc=0x11b80040
runtime.goexit()
        C:/tools/go/src/runtime/asm_wasm.s:425 +0x1 fp=0xc0227e8 sp=0xc0227e0 pc=0x134f0001
runtime.wasmExit(1339976)
*/
```

Neat, we are getting the error messages from the go program written to the console. But this also means we need to implement `runtime/nanotime`. And after doing that we need `syscall/js.valueGet`, `syscall/js.valueNew`, `syscall/js.valuePrepareString`, and
`syscall/js.valueLoadString`. And once these are complete more are needed, ad infinitum.

After many hours, and using `wasm_exec.js` as a guide, I got all of the functions implemented, and got to see that sweet, sweet output: `fib(10) = 55`. (the final product is in the Go.js file in the repo).

But now I was stuck with a program that only every outputted the same thing. I want to pass data to it!

The trick here was the `argc` and `argv` parameters passed to the run function. We have to prepare each input as a string and store those strings in the shared buffer in just the right way. This took me a couple of more hours to achieve.

All these hours of work to get a program that takes 3000ms to compute what Node is able to do in 800ms. But I learned a lot about how much a programming language does for you in terms of managing and aligning memory.

Overall this seems like a very fragile solution, but it is Go's first steps into the world of wasm. The benefit of having a portable binary that can be streamed and run in _most_ browsers is very powerful, but the benefit of getting it to run in Node is not that appealing. Maybe something will change and make it more worthwhile to target the server with WASM (but I wouldn't count on it).

<video autoplay loop muted playsinline>
  <source src="i-learned-something-today.webm" />
</video>

### As this is my very first technical blog post: your feed back is very much appreciated