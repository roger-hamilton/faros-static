---
title: Running Go code in Node
date: "2018-09-21"
---
#

In this article we will be exploring running WebAssembly (or WASM) in node. Specifically we will see how to get Go 1.11 code compiled down to WASM and run that code in Node.js.

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
  if n == 1 || n == 2 {
    return 1
  }
  return fib(n-1) + fib(n-2)
}

func main() {
  n, err := strconv.Atoi(os.Args[1])
  if err != nil {
    fmt.Println(err)
  } else {
    fmt.Printf("fib(%d) = %d\n", n, fib(n))
  }
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
![but why?](but-why.gif "But why?")

Well... *because* that's why! Let's go over the pros and cons:

## Pros

- I wanted to see if I could

## Cons

- It is slow (by an order of magnitude)
- Go compiles even simple programs to more than 2MB files
- It adds unnecessary complexity to a simple process
- Go code already runs on the server (WASM is primarily targeted at the browser)

As you can see I am not going to be running this in production any time soon. But let's do it anyway!

## Compiling Go 1.11 to WebAssembly

Make sure you have the correct version of the go binary. I have:

```bash
$ go version
go version go1.11 windows/amd64
```

Clone the repo to your local machine:

```bash
git clone https://github.com/rhamilton/....
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

