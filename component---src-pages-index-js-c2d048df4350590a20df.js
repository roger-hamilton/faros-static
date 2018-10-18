(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageQuery", function() { return pageQuery; });
/* harmony import */ var core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52);
/* harmony import */ var core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(244);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(152);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(168);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(166);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(150);
/* harmony import */ var _components_Bio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(163);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(165);
/* harmony import */ var _utils_typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(151);



function _templateObject() {
  var data = _babel_runtime_helpers_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_1___default()(["\n  video {\n    max-width: 100%;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}









/* eslint-disable no-unused-expressions */

Object(styled_components__WEBPACK_IMPORTED_MODULE_6__[/* injectGlobal */ "b"])(_templateObject());
/* eslint-enable no-unused-expressions */

var BlogIndex = function BlogIndex(props) {
  var siteTitle = lodash_get__WEBPACK_IMPORTED_MODULE_4___default()(props, 'data.site.siteMetadata.title');
  var siteDescription = lodash_get__WEBPACK_IMPORTED_MODULE_4___default()(props, 'data.site.siteMetadata.description');
  var posts = lodash_get__WEBPACK_IMPORTED_MODULE_4___default()(props, 'data.allMarkdownRemark.edges');
  var location = props.location;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
    location: location
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_5___default.a, {
    htmlAttributes: {
      lang: 'en'
    },
    meta: [{
      name: 'description',
      content: siteDescription
    }],
    title: siteTitle
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Bio__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], null), posts.map(function (_ref) {
    var node = _ref.node;
    var title = lodash_get__WEBPACK_IMPORTED_MODULE_4___default()(node, 'frontmatter.title') || node.fields.slug;
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      key: node.fields.slug
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", {
      style: {
        marginBottom: Object(_utils_typography__WEBPACK_IMPORTED_MODULE_9__[/* rhythm */ "a"])(1 / 4)
      }
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      style: {
        boxShadow: 'none'
      },
      to: node.fields.slug
    }, title)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("small", null, node.frontmatter.date), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
      dangerouslySetInnerHTML: {
        __html: node.excerpt
      }
    }));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (BlogIndex);
var pageQuery = "3352422197";

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return rhythm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return scaled; });
/* harmony import */ var typography__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(175);
/* harmony import */ var typography__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(typography__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var typography_theme_wordpress_2016__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(176);
/* harmony import */ var typography_theme_wordpress_2016__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(typography_theme_wordpress_2016__WEBPACK_IMPORTED_MODULE_1__);



typography_theme_wordpress_2016__WEBPACK_IMPORTED_MODULE_1___default.a.overrideThemeStyles = function () {
  return {
    'a.gatsby-resp-image-link': {
      boxShadow: 'none'
    }
  };
};

delete typography_theme_wordpress_2016__WEBPACK_IMPORTED_MODULE_1___default.a.googleFonts;
var typography = new typography__WEBPACK_IMPORTED_MODULE_0___default.a(typography_theme_wordpress_2016__WEBPACK_IMPORTED_MODULE_1___default.a); // Hot reload typography in development.

if (false) {}

/* unused harmony default export */ var _unused_webpack_default_export = (typography);
var rhythm = typography.rhythm,
    scale = typography.scale;

var scaled = function scaled(x, y) {
  var _scale = scale(x, y),
      fontSize = _scale.fontSize,
      lineHeight = _scale.lineHeight;

  return "font-size: " + fontSize + "; line-height: " + lineHeight;
};

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "graphql", function() { return graphql; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticQueryContext", function() { return StaticQueryContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticQuery", function() { return StaticQuery; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(149);
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gatsby_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2___default.a; });
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withPrefix", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["withPrefix"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigate", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["navigate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "push", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["push"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["replace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateTo", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["navigateTo"]; });

/* harmony import */ var _wait_for_route_change__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "waitForRouteChange", function() { return _wait_for_route_change__WEBPACK_IMPORTED_MODULE_3__["c"]; });

/* harmony import */ var _public_page_renderer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(153);
/* harmony import */ var _public_page_renderer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_page_renderer__WEBPACK_IMPORTED_MODULE_4__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "PageRenderer", function() { return _public_page_renderer__WEBPACK_IMPORTED_MODULE_4___default.a; });
/* harmony import */ var _parse_path__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(40);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parsePath", function() { return _parse_path__WEBPACK_IMPORTED_MODULE_5__["a"]; });







var StaticQueryContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({});

var StaticQuery = function StaticQuery(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StaticQueryContext.Consumer, null, function (staticQueryData) {
    if (props.data || staticQueryData[props.query] && staticQueryData[props.query].data) {
      return (props.render || props.children)(props.data ? props.data.data : staticQueryData[props.query].data);
    } else {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Loading (StaticQuery)");
    }
  });
};

StaticQuery.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  query: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  render: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

function graphql() {
  throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls " + "are supposed to only be evaluated at compile time, and then compiled away,. " + "Unfortunately, something went wrong and the query was left in the compiled code.\n\n." + "Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.");
}



/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

var preferDefault = function preferDefault(m) {
  return m && m.default || m;
};

if (false) {} else if (true) {
  module.exports = preferDefault(__webpack_require__(158));
} else {}

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _page_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56);
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1);






var ProdPageRenderer = function ProdPageRenderer(_ref) {
  var location = _ref.location;
  var pageResources = _loader__WEBPACK_IMPORTED_MODULE_4__["default"].getResourcesForPathnameSync(location.pathname);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_page_renderer__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], Object.assign({
    key: location.pathname,
    location: location,
    pageResources: pageResources
  }, pageResources.json));
};

ProdPageRenderer.propTypes = {
  location: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    pathname: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired
  }).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ProdPageRenderer);

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var typeface_montserrat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(173);
/* harmony import */ var typeface_montserrat__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(typeface_montserrat__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var typeface_merriweather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(174);
/* harmony import */ var typeface_merriweather__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(typeface_merriweather__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(150);
/* harmony import */ var _profile_pic_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(164);
/* harmony import */ var _profile_pic_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_profile_pic_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(151);
 // Import typefaces






var Container = styled_components__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].div.withConfig({
  displayName: "Bio__Container",
  componentId: "sc-1xze3le-0"
})(["display:flex;margin-bottom:", ";"], Object(_utils_typography__WEBPACK_IMPORTED_MODULE_5__[/* rhythm */ "a"])(2.5));
var ProfilePic = styled_components__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].img.withConfig({
  displayName: "Bio__ProfilePic",
  componentId: "sc-1xze3le-1"
})(["margin-right:", ";margin-bottom:0;width:", ";height:", ";"], Object(_utils_typography__WEBPACK_IMPORTED_MODULE_5__[/* rhythm */ "a"])(1 / 2), Object(_utils_typography__WEBPACK_IMPORTED_MODULE_5__[/* rhythm */ "a"])(2), Object(_utils_typography__WEBPACK_IMPORTED_MODULE_5__[/* rhythm */ "a"])(2));
var Small = styled_components__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].div.withConfig({
  displayName: "Bio__Small",
  componentId: "sc-1xze3le-2"
})(["", ""], Object(_utils_typography__WEBPACK_IMPORTED_MODULE_5__[/* scaled */ "b"])(-7 / 10));

var Bio = function Bio() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ProfilePic, {
    src: _profile_pic_jpg__WEBPACK_IMPORTED_MODULE_4___default.a,
    alt: "Roger Hamilton"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Written by", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Roger Hamilton"), ' ', "who lives and works in Oklahoma City, creating useful* things.", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.linkedin.com/in/roger-hamilton-995b6290/"
  }, "You should connect with him on LinkedIn"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Small, null, "*ish")));
};

/* harmony default export */ __webpack_exports__["a"] = (Bio);

/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/profile-pic-7501b5939485d3340b4a873cd3b584ab.jpg";

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js
var gatsby_browser_entry = __webpack_require__(152);

// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js
var styled_components_browser_esm = __webpack_require__(150);

// EXTERNAL MODULE: ./src/utils/typography.js
var typography = __webpack_require__(151);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inheritsLoose.js
var inheritsLoose = __webpack_require__(8);
var inheritsLoose_default = /*#__PURE__*/__webpack_require__.n(inheritsLoose);

// CONCATENATED MODULE: ./src/components/PWA.js



var PWA_PWA =
/*#__PURE__*/
function (_React$Component) {
  inheritsLoose_default()(PWA, _React$Component);

  function PWA() {
    var _this;

    _this = _React$Component.call(this) || this;

    _this.handleEvent = function (installEvent) {
      console.log(installEvent);

      _this.setState({
        installEvent: installEvent
      });
    };

    console.error('PWA');
    _this.state = {
      installEvent: null
    };
    return _this;
  }

  var _proto = PWA.prototype;

  _proto.componentDidMount = function componentDidMount() {
    console.error('attaching event listener');
    document.addEventListener('beforeinstallprompt', this.handleEvent);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    console.error('removing event listener');
    document.removeEventListener('beforeinstallprompt', this.handleEvent);
  };

  _proto.render = function render() {
    console.table(this.state); // console.error('hey');

    return JSON.stringify(this.state);
  };

  return PWA;
}(react_default.a.Component);


// CONCATENATED MODULE: ./src/components/Layout.js





var Container = styled_components_browser_esm["a" /* default */].div.withConfig({
  displayName: "Layout__Container",
  componentId: "g3mgjj-0"
})(["margin-left:auto;margin-right:auto;max-width:", ";padding:", " ", ";"], Object(typography["a" /* rhythm */])(24), Object(typography["a" /* rhythm */])(1.5), Object(typography["a" /* rhythm */])(3 / 4));
var RootHeader = styled_components_browser_esm["a" /* default */].h1.withConfig({
  displayName: "Layout__RootHeader",
  componentId: "g3mgjj-1"
})(["", " margin-bottom:", ";margin-top:0;"], Object(typography["b" /* scaled */])(1.5), Object(typography["a" /* rhythm */])(1.5));
var SubPageHeader = styled_components_browser_esm["a" /* default */].h1.withConfig({
  displayName: "Layout__SubPageHeader",
  componentId: "g3mgjj-2"
})(["margin-top:0;margin-bottom:", ";"], Object(typography["a" /* rhythm */])(-1));
var HeaderLink = Object(styled_components_browser_esm["a" /* default */])(gatsby_browser_entry["Link"]).withConfig({
  displayName: "Layout__HeaderLink",
  componentId: "g3mgjj-3"
})(["box-shadow:none;text-decoration:none;color:inherit;"]);

var Layout_Template = function Template(props) {
  var location = props.location,
      children = props.children;
  var rootPath = '/';
  var Header = location.pathname === rootPath ? RootHeader : SubPageHeader;
  console.debug('Layout');
  return react_default.a.createElement(Container, null, react_default.a.createElement(Header, null, react_default.a.createElement(HeaderLink, {
    to: "/"
  }, "Faros Dev Blog")), children, react_default.a.createElement(PWA_PWA, null));
};

/* harmony default export */ var Layout = __webpack_exports__["a"] = (Layout_Template);

/***/ }),

/***/ 244:
/***/ (function(module, exports) {

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  strings.raw = raw;
  return strings;
}

module.exports = _taggedTemplateLiteralLoose;

/***/ })

}]);
//# sourceMappingURL=component---src-pages-index-js-c2d048df4350590a20df.js.map