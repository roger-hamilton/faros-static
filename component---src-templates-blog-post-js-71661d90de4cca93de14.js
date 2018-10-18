(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageQuery", function() { return pageQuery; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(166);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(152);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(168);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(150);
/* harmony import */ var disqus_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(236);
/* harmony import */ var disqus_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(disqus_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Bio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(163);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(165);
/* harmony import */ var _utils_typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(151);









var Date = styled_components__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].p.withConfig({
  displayName: "blog-post__Date",
  componentId: "sc-1993m0e-0"
})(["", " display:block;margin-bottom:", ";margin-top:", ";"], Object(_utils_typography__WEBPACK_IMPORTED_MODULE_8__[/* scaled */ "b"])(-1 / 5), Object(_utils_typography__WEBPACK_IMPORTED_MODULE_8__[/* rhythm */ "a"])(1), Object(_utils_typography__WEBPACK_IMPORTED_MODULE_8__[/* rhythm */ "a"])(-1));
var DiscoverList = styled_components__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].ul.withConfig({
  displayName: "blog-post__DiscoverList",
  componentId: "sc-1993m0e-1"
})(["display:flex;flex-wrap:wrap;justify-content:space-between;list-style:none;padding:0;"]);

var BlogPostTemplate = function BlogPostTemplate(props) {
  var post = props.data.markdownRemark,
      _props$pageContext = props.pageContext,
      previous = _props$pageContext.previous,
      next = _props$pageContext.next,
      location = props.location;
  var siteTitle = lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(props, 'data.site.siteMetadata.title');
  var siteDescription = post.excerpt;
  var disqusConfig = {
    url: "https://blog.farosdev.com" + location.path,
    identifier: post.id,
    title: post.frontmatter.title
  };
  var disqusShortname = 'blog-farosdev-com';
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    location: location
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1___default.a, {
    htmlAttributes: {
      lang: 'en'
    },
    meta: [{
      name: 'description',
      content: siteDescription
    }],
    title: post.frontmatter.title + " | " + siteTitle
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, post.frontmatter.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Date, null, post.frontmatter.date), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: post.html
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    style: {
      marginBottom: Object(_utils_typography__WEBPACK_IMPORTED_MODULE_8__[/* rhythm */ "a"])(1)
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Bio__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], null), location.hostname !== 'localhost' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(disqus_react__WEBPACK_IMPORTED_MODULE_5___default.a.DiscussionEmbed, {
    shortname: disqusShortname,
    config: disqusConfig
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DiscoverList, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, previous && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: previous.fields.slug,
    rel: "prev"
  }, "\u2190 ", previous.frontmatter.title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, next && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: next.fields.slug,
    rel: "next"
  }, next.frontmatter.title, " \u2192"))));
};

/* harmony default export */ __webpack_exports__["default"] = (BlogPostTemplate);
var pageQuery = "3804820323";

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
    console.table(this.state);
    console.group('stuff');
    console.group('stuff2');
    console.groupEnd();
    console.groupEnd(); // console.error('hey');

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

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.insertScript = insertScript;
exports.removeScript = removeScript;
exports.debounce = debounce;
function insertScript(src, id, parentElement) {
    var script = window.document.createElement('script');
    script.async = true;
    script.src = src;
    script.id = id;
    parentElement.appendChild(script);

    return script;
}

function removeScript(id, parentElement) {
    var script = window.document.getElementById(id);
    if (script) parentElement.removeChild(script);
}

function debounce(func, wait, runOnFirstCall) {
    var timeout = void 0;
    return function () {
        var context = this; // eslint-disable-line consistent-this
        var args = arguments;

        var deferredExecution = function deferredExecution() {
            timeout = null;
            if (!runOnFirstCall) func.apply(context, args);
        };

        var callNow = runOnFirstCall && !timeout;

        window.clearTimeout(timeout);
        timeout = setTimeout(deferredExecution, wait);

        if (callNow) func.apply(context, args);
    };
}

/***/ }),

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DiscussionEmbed = exports.CommentEmbed = exports.CommentCount = undefined;

var _CommentCount = __webpack_require__(237);

var _CommentEmbed = __webpack_require__(238);

var _DiscussionEmbed = __webpack_require__(239);

exports.CommentCount = _CommentCount.CommentCount;
exports.CommentEmbed = _CommentEmbed.CommentEmbed;
exports.DiscussionEmbed = _DiscussionEmbed.DiscussionEmbed;


var Disqus = {
    CommentCount: _CommentCount.CommentCount,
    CommentEmbed: _CommentEmbed.CommentEmbed,
    DiscussionEmbed: _DiscussionEmbed.DiscussionEmbed
};

exports.default = Disqus;

/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CommentCount = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _utils = __webpack_require__(172);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var queueResetCount = (0, _utils.debounce)(function () {
    if (window.DISQUSWIDGETS) window.DISQUSWIDGETS.getCount({ reset: true });
}, 300, false); // eslint-disable-line no-magic-numbers

var CommentCount = exports.CommentCount = function (_React$Component) {
    _inherits(CommentCount, _React$Component);

    function CommentCount() {
        _classCallCheck(this, CommentCount);

        return _possibleConstructorReturn(this, (CommentCount.__proto__ || Object.getPrototypeOf(CommentCount)).apply(this, arguments));
    }

    _createClass(CommentCount, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.loadInstance();
        }
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps) {
            if (this.props.shortname !== nextProps.shortname) return true;

            var nextConfig = nextProps.config;
            var config = this.props.config;
            if (nextConfig.url === config.url || nextConfig.identifier === config.identifier) return false;
            return true;
        }
    }, {
        key: 'componentWillUpdate',
        value: function componentWillUpdate(nextProps) {
            if (this.props.shortname !== nextProps.shortname) this.cleanInstance();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            this.loadInstance();
        }
    }, {
        key: 'loadInstance',
        value: function loadInstance() {
            var doc = window.document;
            if (doc.getElementById('dsq-count-scr')) queueResetCount();else (0, _utils.insertScript)('https://' + this.props.shortname + '.disqus.com/count.js', 'dsq-count-scr', doc.body);
        }
    }, {
        key: 'cleanInstance',
        value: function cleanInstance() {
            var body = window.document.body;
            (0, _utils.removeScript)('dsq-count-scr', body);

            // count.js only reassigns this window object if it's undefined.
            window.DISQUSWIDGETS = undefined;
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'span',
                {
                    className: 'disqus-comment-count',
                    'data-disqus-identifier': this.props.config.identifier,
                    'data-disqus-url': this.props.config.url
                },
                this.props.children
            );
        }
    }]);

    return CommentCount;
}(_react2.default.Component);

/***/ }),

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CommentEmbed = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RADIX_BASE = 36;

var CommentEmbed = exports.CommentEmbed = function (_React$Component) {
    _inherits(CommentEmbed, _React$Component);

    function CommentEmbed() {
        _classCallCheck(this, CommentEmbed);

        return _possibleConstructorReturn(this, (CommentEmbed.__proto__ || Object.getPrototypeOf(CommentEmbed)).apply(this, arguments));
    }

    _createClass(CommentEmbed, [{
        key: 'getSrc',
        value: function getSrc() {
            var post = Number(this.props.commentId).toString(RADIX_BASE);
            var parentParam = this.props.showParentComment ? '1' : '0';
            var mediaParam = this.props.showMedia ? '1' : '0';

            return 'https://embed.disqus.com/p/' + post + '?p=' + parentParam + '&m=' + mediaParam;
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('iframe', {
                src: this.getSrc(),
                width: this.props.width,
                height: this.props.height,
                seamless: 'seamless',
                scrolling: 'no',
                frameBorder: '0'
            });
        }
    }]);

    return CommentEmbed;
}(_react2.default.Component);

CommentEmbed.defaultProps = {
    showMedia: true,
    showParentComment: true,
    width: 420,
    height: 320
};

/***/ }),

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DiscussionEmbed = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _utils = __webpack_require__(172);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DiscussionEmbed = exports.DiscussionEmbed = function (_React$Component) {
    _inherits(DiscussionEmbed, _React$Component);

    function DiscussionEmbed() {
        _classCallCheck(this, DiscussionEmbed);

        return _possibleConstructorReturn(this, (DiscussionEmbed.__proto__ || Object.getPrototypeOf(DiscussionEmbed)).apply(this, arguments));
    }

    _createClass(DiscussionEmbed, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            if (typeof window !== 'undefined' && window.disqus_shortname && window.disqus_shortname !== this.props.shortname) this.cleanInstance();
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.loadInstance();
        }
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps) {
            if (this.props.shortname !== nextProps.shortname) return true;

            var nextConfig = nextProps.config;
            var config = this.props.config;
            if (nextConfig.url === config.url || nextConfig.identifier === config.identifier) return false;
            return true;
        }
    }, {
        key: 'componentWillUpdate',
        value: function componentWillUpdate(nextProps) {
            if (this.props.shortname !== nextProps.shortname) this.cleanInstance();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            this.loadInstance();
        }
    }, {
        key: 'loadInstance',
        value: function loadInstance() {
            var doc = window.document;
            if (window && window.DISQUS && doc.getElementById('dsq-embed-scr')) {
                window.DISQUS.reset({
                    reload: true,
                    config: this.getDisqusConfig(this.props.config)
                });
            } else {
                window.disqus_config = this.getDisqusConfig(this.props.config);
                window.disqus_shortname = this.props.shortname;
                (0, _utils.insertScript)('https://' + this.props.shortname + '.disqus.com/embed.js', 'dsq-embed-scr', doc.body);
            }
        }
    }, {
        key: 'cleanInstance',
        value: function cleanInstance() {
            var doc = window.document;
            (0, _utils.removeScript)('dsq-embed-scr', doc.body);
            if (window && window.DISQUS) window.DISQUS.reset({});

            try {
                delete window.DISQUS;
            } catch (error) {
                window.DISQUS = undefined;
            }
            var disqusThread = doc.getElementById('disqus_thread');
            if (disqusThread) {
                while (disqusThread.hasChildNodes()) {
                    disqusThread.removeChild(disqusThread.firstChild);
                }
            }
        }
    }, {
        key: 'getDisqusConfig',
        value: function getDisqusConfig(config) {
            return function () {
                this.page.identifier = config.identifier;
                this.page.url = config.url;
                this.page.title = config.title;
                this.callbacks.onNewComment = [config.onNewComment];
            };
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', { id: 'disqus_thread' });
        }
    }]);

    return DiscussionEmbed;
}(_react2.default.Component);

/***/ })

}]);
//# sourceMappingURL=component---src-templates-blog-post-js-71661d90de4cca93de14.js.map