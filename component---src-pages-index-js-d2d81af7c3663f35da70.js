(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{147:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return b});n(52);var a=n(244),r=n.n(a),i=n(0),o=n.n(i),c=n(152),l=n(168),u=n.n(l),s=n(166),d=n.n(s),m=n(150),f=n(163),p=n(165),g=n(151);function h(){var e=r()(["\n  video {\n    max-width: 100%;\n  }\n"]);return h=function(){return e},e}Object(m.b)(h());t.default=function(e){var t=u()(e,"data.site.siteMetadata.title"),n=u()(e,"data.site.siteMetadata.description"),a=u()(e,"data.allMarkdownRemark.edges"),r=e.location;return o.a.createElement(p.a,{location:r},o.a.createElement(d.a,{htmlAttributes:{lang:"en"},meta:[{name:"description",content:n}],title:t}),o.a.createElement(f.a,null),a.map(function(e){var t=e.node,n=u()(t,"frontmatter.title")||t.fields.slug;return o.a.createElement("div",{key:t.fields.slug},o.a.createElement("h3",{style:{marginBottom:Object(g.a)(.25)}},o.a.createElement(c.Link,{style:{boxShadow:"none"},to:t.fields.slug},n)),o.a.createElement("small",null,t.frontmatter.date),o.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.excerpt}}))}))};var b="3352422197"},151:function(e,t,n){"use strict";n.d(t,"a",function(){return l}),n.d(t,"b",function(){return s});var a=n(175),r=n.n(a),i=n(176),o=n.n(i);o.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete o.a.googleFonts;var c=new r.a(o.a);var l=c.rhythm,u=c.scale,s=function(e,t){var n=u(e,t);return"font-size: "+n.fontSize+"; line-height: "+n.lineHeight}},152:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return g}),n.d(t,"StaticQueryContext",function(){return f}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),i=n(5),o=n.n(i),c=n(149),l=n.n(c);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var u=n(27);n.d(t,"waitForRouteChange",function(){return u.c});var s=n(153),d=n.n(s);n.d(t,"PageRenderer",function(){return d.a});var m=n(40);n.d(t,"parsePath",function(){return m.a});var f=r.a.createContext({}),p=function(e){return r.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},153:function(e,t,n){var a;e.exports=(a=n(158))&&a.default||a},158:function(e,t,n){"use strict";n.r(t);n(38);var a=n(0),r=n.n(a),i=n(5),o=n.n(i),c=n(56),l=n(1),u=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({key:t.pathname,location:t,pageResources:n},n.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=u},163:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=(n(173),n(174),n(150)),o=n(164),c=n.n(o),l=n(151),u=i.a.div.withConfig({displayName:"Bio__Container",componentId:"sc-1xze3le-0"})(["display:flex;margin-bottom:",";"],Object(l.a)(2.5)),s=i.a.img.withConfig({displayName:"Bio__ProfilePic",componentId:"sc-1xze3le-1"})(["margin-right:",";margin-bottom:0;width:",";height:",";"],Object(l.a)(.5),Object(l.a)(2),Object(l.a)(2)),d=i.a.div.withConfig({displayName:"Bio__Small",componentId:"sc-1xze3le-2"})(["",""],Object(l.b)(-.7));t.a=function(){return r.a.createElement(u,null,r.a.createElement(s,{src:c.a,alt:"Roger Hamilton"}),r.a.createElement("div",null,"Written by"," ",r.a.createElement("strong",null,"Roger Hamilton")," ","who lives and works in Oklahoma City, creating useful* things."," ",r.a.createElement("a",{href:"https://www.linkedin.com/in/roger-hamilton-995b6290/"},"You should connect with him on LinkedIn"),r.a.createElement(d,null,"*ish")))}},164:function(e,t,n){e.exports=n.p+"static/profile-pic-7501b5939485d3340b4a873cd3b584ab.jpg"},165:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(152),o=n(150),c=n(151),l=n(8),u=n.n(l),s=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={installEvent:null},t.handleEvent=function(e){t.setState({installEvent:e})},t}u()(t,e);var n=t.prototype;return n.componentDidMount=function(){document.addEventListener("beforeinstallprompt",this.handleEvent)},n.componentWillUnmount=function(){document.removeEventListener("beforeinstallprompt",this.handleEvent)},n.render=function(){return null},t}(r.a.Component),d=o.a.div.withConfig({displayName:"Layout__Container",componentId:"g3mgjj-0"})(["margin-left:auto;margin-right:auto;max-width:",";padding:"," ",";"],Object(c.a)(24),Object(c.a)(1.5),Object(c.a)(.75)),m=o.a.h1.withConfig({displayName:"Layout__RootHeader",componentId:"g3mgjj-1"})([""," margin-bottom:",";margin-top:0;"],Object(c.b)(1.5),Object(c.a)(1.5)),f=o.a.h1.withConfig({displayName:"Layout__SubPageHeader",componentId:"g3mgjj-2"})(["margin-top:0;margin-bottom:",";"],Object(c.a)(-1)),p=Object(o.a)(i.Link).withConfig({displayName:"Layout__HeaderLink",componentId:"g3mgjj-3"})(["box-shadow:none;text-decoration:none;color:inherit;"]);t.a=function(e){var t=e.location,n=e.children,a="/"===t.pathname?m:f;return r.a.createElement(d,null,r.a.createElement(a,null,r.a.createElement(p,{to:"/"},"Faros Dev Blog")),n,r.a.createElement(s,null))}},244:function(e,t){e.exports=function(e,t){return t||(t=e.slice(0)),e.raw=t,e}}}]);
//# sourceMappingURL=component---src-pages-index-js-d2d81af7c3663f35da70.js.map