exports.id = "component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-babel-learning-md";
exports.ids = ["component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-babel-learning-md"];
exports.modules = {

/***/ "./content/posts/babel learning.md":
/*!*****************************************!*\
  !*** ./content/posts/babel learning.md ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mdx-js/react */ "./node_modules/@mdx-js/react/lib/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/*@jsxRuntime classic @jsx React.createElement @jsxFrag React.Fragment*/


function _createMdxContent(props) {
  const _components = Object.assign({
    h3: "h3",
    p: "p",
    ul: "ul",
    li: "li",
    ol: "ol",
    code: "code",
    strong: "strong",
    a: "a",
    blockquote: "blockquote"
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.useMDXComponents)(), props.components);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.h3, null, "babel编译流程"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.p, null, "babel 是 source to source 的转换，babel 就是一个 Javascript Transpiler，整体编译流程分为三步："), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.ul, null, "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.li, null, "parse：通过 parser 把源码转成抽象语法树（AST）"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.li, null, "transform：遍历 AST，调用各种 transform 插件对 AST 进行增删改"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.li, null, "generate：把转换后的 AST 打印成目标代码，并生成 sourcemap"), "\n"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.ol, null, "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.li, null, "parse 的过程其实就是", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.code, null, "分词"), " + ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.code, null, "组装 AST"), "这两步（一般叫词法分析和语法分析）。 JS  parser 的历史，基于火狐浏览器的 JS 引擎 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.code, null, "SpiderMonkey"), " 的 AST 标准，制定了 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.code, null, "espree"), " 的标准，最早的 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.code, null, "estree"), " 标准的实现是 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.code, null, "esprima"), "，但是随着 es2015 开始一年一个版本，", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.code, null, "esprima"), " 的迭代速度逐渐跟不上了，这时候 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.code, null, "acorn"), " 流行起来，因为速度更快，而且支持插件扩展，于是 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.code, null, "espree"), "、", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.code, null, "babel parser(babylon)"), " 等都基于 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.code, null, "acorn"), " 来实现各自的 parser。虽然 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.code, null, "estree"), " 系列的 js parser 挺多的，但也不是全部，", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.code, null, "terser"), "、", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.code, null, "typescript"), " 等都是用自己的 AST。babel parser 能不断地支持新的语法，就是通过修改词法分析、语法分析阶段的代码来实现的。其实现在 babel parser 的代码里已经看不到", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.code, null, "acorn"), " 的依赖了，因为在 babel4 以后，babel 直接 fork 了 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.code, null, "acorn"), " 的代码来修改，而不是引入 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.code, null, "acorn"), " 包再通过插件扩展的方式。但是，原理还是一样的"), "\n"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.p, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.strong, null, "常见parser如下")), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.ul, null, "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.li, null, "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.p, null, "babel 用于 es next、flow、typescript、jsx 等语法转目标环境支持的 js"), "\n"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.li, null, "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.p, null, "typescript 用于处理 typescript 语法，并进行类型检查，然后转成 es5 或者 es3"), "\n"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.li, null, "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.p, null, "terser 用于 parse es6 的代码，并进行压缩和混淆，输出处理后的代码"), "\n"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.li, null, "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.p, null, "prettier 用于处理各种 css、js、html 等代码，进行格式化代码，然后输出格式化后的代码"), "\n"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.li, null, "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.p, null, "eslint 是对代码风格和一些常见错误进行静态检查，通过 --fix 还可以自动修复"), "\n"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.li, null, "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.p, null, "postcss 用于 css 的 parse，之后通过插件对 ast 进行各种处理，最后输出处理后的 css"), "\n"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.li, null, "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.p, null, "posthtml 和 postcss 类似，不过是用于 html 处理的。"), "\n"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.li, null, "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.p, null, "vue template compiler 是 vue 专用的，用于把 vue template 转成优化以后的 render 函数"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.p, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.a, {
    href: "https://juejin.cn/post/6959502530745204772"
  }, "【转译器原理 parser 篇】实现 js 新语法并编译到 css - 掘金")), "\n"), "\n"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.ol, {
    start: "2"
  }, "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.li, null, "源码 parse 成 AST 之后，需要进行 AST 的遍历和增删改（transform）。那么 transform 的流程是什么样的？babel 会递归遍历 AST，遍历过程中处理到不同的 AST 会调用不同的 visitor 函数来实现 transform。这其实是一种设计模式，叫做访问者模式"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.li, null, "generate 就是递归打印 AST 成字符串，在递归打印的过程中会根据源码位置和计算出的目标代码的位置来生成 mapping，加到 sourcemap 中。 sourcemap 是源码和目标代码的映射，用于开发时调试源码和生产时定位线上错误。 babel 通过 source-map 这个包来生成的 sourcemap"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.li, null, "@babel/code-frame 包是 babel 用来打印错误信息的，别的工具（比如 eslint、tsc）也会打印 code frame 的格式，原理一样"), "\n"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.h3, null, "babel能用来干什么"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.p, null, "babel 是一个 js 转译器，用于 es next、typescript等代码的转换，同时还暴露出了 api 让开发者可以进行特定用途的转换。除此以外，还可以做各种静态分析"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.h3, null, "AST"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.p, null, "ST 也是有标准的，JS parser 的 AST 大多是 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.a, {
    href: "https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Festree%2Festree",
    title: "https://github.com/estree/estree"
  }, "estree 标准"), "，AST 是对源码的抽象，字面量、标识符、表达式、语句、模块语法、class 语法都有各自的 AST。标识符 Identifer、各种字面量 xxLiteral、各种语句 xxStatement，各种声明语句 xxDeclaration，各种表达式 xxExpression，以及 Class、Modules、File、Program、Directive、Comment 这些 AST 节点。了解了这些节点，就能知道平时写的代码是怎么用 AST 表示的。当然也不需要记，可以用 (", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.a, {
    href: "https://link.juejin.cn/?target=https%3A%2F%2Fastexplorer.net%2F",
    title: "https://astexplorer.net/"
  }, "astexpoler.net"), ") 可视化的查看。AST 节点可能同时有多种类型，确定一种 AST 节点是什么类型主要看它的特点，比如 Statement 的特点是可以单独执行，Expression 的特点是有返回值，所以一些可以单独执行的 Expression 会包一层 ExpressionStatement。不同 AST 节点有不同的属性来存放对应的源码信息，但是都有一些公共属性如 type、xxComments、loc 等。"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.h3, null, "babel常见的 API"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.ul, null, "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.li, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.code, null, "@babel/parser"), " 对源码进行 parse，可以通过 plugins、sourceType 等来指定 parse 语法"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.li, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.code, null, "@babel/traverse"), " 通过 visitor 函数对遍历到的 ast 进行处理，分为 enter 和 exit 两个阶段，具体操作 AST 使用 path 的 api，还可以通过 state 来在遍历过程中传递一些数据"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.li, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.code, null, "@babel/types"), " 用于创建、判断 AST 节点，提供了 xxx、isXxx、assertXxx 的 api"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.li, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.code, null, "@babel/template"), " 用于批量创建节点"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.li, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.code, null, "@babel/code-frame"), " 可以创建友好的报错信息"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.li, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.code, null, "@babel/generator"), " 打印 AST 成目标代码字符串，支持 comments、minified、sourceMaps 等选项。"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.li, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.code, null, "@babel/core"), " 基于上面的包来完成 babel 的编译流程，可以从源码字符串、源码文件、AST 开始。"), "\n"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.blockquote, null, "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.p, null, "[!NOTE]\n注意，我们学习的 api 是 babel 7.x 的，babel 6 的 api 还没有按照 scope 来划分，也就是 babel-parser 这种，而 babel 7 变成了@babel/parser 这种。对应的插件也是从 babel-plugin-xxx 变成了 @babel/plugin-xxx。但只是包名变了，api 没啥大的变动，我们学的是一些原理性的东西，这些东西在版本迭代中是不会变的。"), "\n"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.p, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.a, {
    href: "https://babeljs.io/docs/"
  }, "What is Babel? · Babel"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.a, {
    href: "https://www.babelrc.cn/docs/babel-standalone.html"
  }, "babel/独立 - Babel 中文文档")));
}
function MDXContent(props = {}) {
  const {
    wrapper: MDXLayout
  } = Object.assign({}, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.useMDXComponents)(), props.components);
  return MDXLayout ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MDXLayout, props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_createMdxContent, props)) : _createMdxContent(props);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MDXContent);

/***/ }),

/***/ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/@lekoarts/gatsby-theme-minimal-blog-core/components/post.tsx":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/@lekoarts/gatsby-theme-minimal-blog-core/components/post.tsx ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Head: () => (/* reexport safe */ _components_post__WEBPACK_IMPORTED_MODULE_1__.Head),
/* harmony export */   "default": () => (/* binding */ MinimalBlogCorePost)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/post */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/post.tsx");


function MinimalBlogCorePost({
  ...props
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_post__WEBPACK_IMPORTED_MODULE_1__["default"], props);
}


/***/ }),

/***/ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/code.tsx":
/*!**********************************************************************************!*\
  !*** ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/code.tsx ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! theme-ui */ "./node_modules/@theme-ui/color-modes/dist/theme-ui-color-modes.esm.js");
/* harmony import */ var prism_react_renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prism-react-renderer */ "./node_modules/prism-react-renderer/dist/index.mjs");
/* harmony import */ var _lekoarts_themes_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lekoarts/themes-utils */ "./node_modules/@lekoarts/themes-utils/dist/index.js");
/* harmony import */ var _copy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./copy */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/copy.tsx");
/* harmony import */ var _hooks_use_minimal_blog_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/use-minimal-blog-config */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config.tsx");
/* harmony import */ var _utils_prism_themes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/prism-themes */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/utils/prism-themes.ts");







const Code = ({
  codeString,
  withLineNumbers = false,
  title = ``,
  className: blockClassName,
  highlight = ``
}) => {
  const {
    showLineNumbers,
    showCopyButton
  } = (0,_hooks_use_minimal_blog_config__WEBPACK_IMPORTED_MODULE_4__["default"])();
  const [colorMode] = (0,theme_ui__WEBPACK_IMPORTED_MODULE_6__.useColorMode)();
  const isDark = colorMode === `dark`;
  const language = (0,_lekoarts_themes_utils__WEBPACK_IMPORTED_MODULE_2__.getLanguage)(blockClassName);
  const shouldHighlightLine = (0,_lekoarts_themes_utils__WEBPACK_IMPORTED_MODULE_2__.calculateLinesToHighlight)(highlight);
  const shouldShowLineNumbers = withLineNumbers || showLineNumbers;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(prism_react_renderer__WEBPACK_IMPORTED_MODULE_1__.Highlight, {
    code: codeString
    // @ts-ignore
    ,

    language: language,
    theme: isDark ? _utils_prism_themes__WEBPACK_IMPORTED_MODULE_5__.darkTheme : _utils_prism_themes__WEBPACK_IMPORTED_MODULE_5__.lightTheme
  }, ({
    className,
    tokens,
    getLineProps,
    getTokenProps
  }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "gatsby-highlight",
    "data-language": language
  }, title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "code-title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("pre", {
    className: className,
    "data-linenumber": shouldShowLineNumbers
  }, showCopyButton && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_copy__WEBPACK_IMPORTED_MODULE_3__["default"], {
    content: codeString,
    fileName: title
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", {
    className: `code-content language-${language}`
  }, tokens.map((line, i) => {
    const lineProps = getLineProps({
      line,
      key: i
    });
    if (shouldHighlightLine(i)) {
      lineProps.className = `${lineProps.className} highlight-line`;
      lineProps.style = {
        ...lineProps.style,
        backgroundColor: `var(--theme-ui-colors-highlightLineBg)`
      };
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", lineProps, shouldShowLineNumbers && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "line-number-style"
    }, i + 1), line.map((token, key) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", getTokenProps({
      token,
      key
    }))));
  }))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Code);

/***/ }),

/***/ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/colormode-toggle.tsx":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/colormode-toggle.tsx ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "./node_modules/@theme-ui/css/dist/theme-ui-css.esm.js");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/theme-ui.esm.js");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! theme-ui */ "./node_modules/@theme-ui/color-modes/dist/theme-ui-color-modes.esm.js");
/** @jsx jsx */



// CSS Styles adapted from: https://codepen.io/aaroniker/pen/KGpXZo

const iconBaseStyles = {
  position: `relative`,
  width: `24px`,
  height: `24px`,
  borderRadius: `50%`,
  transition: `all 0.45s ease`,
  "&:before": {
    content: `""`,
    position: `absolute`,
    right: `-9px`,
    top: `-9px`,
    height: `24px`,
    width: `24px`,
    transition: `transform 0.45s ease`,
    borderRadius: `50%`
  },
  "&:after": {
    content: `""`,
    width: `8px`,
    height: `8px`,
    borderRadius: `50%`,
    margin: `-4px 0 0 -4px`,
    position: `absolute`,
    top: `50%`,
    left: `50%`,
    transition: `all 0.35s ease`,
    boxShadow: t => `0 -23px 0 ${(0,theme_ui__WEBPACK_IMPORTED_MODULE_1__.get)(t, `colors.toggleIcon`)}, 0 23px 0 ${(0,theme_ui__WEBPACK_IMPORTED_MODULE_1__.get)(t, `colors.toggleIcon`)}, 23px 0 0 ${(0,theme_ui__WEBPACK_IMPORTED_MODULE_1__.get)(t, `colors.toggleIcon`)}, -23px 0 0 ${(0,theme_ui__WEBPACK_IMPORTED_MODULE_1__.get)(t, `colors.toggleIcon`)}, 15px 15px 0 ${(0,theme_ui__WEBPACK_IMPORTED_MODULE_1__.get)(t, `colors.toggleIcon`)}, -15px 15px 0 ${(0,theme_ui__WEBPACK_IMPORTED_MODULE_1__.get)(t, `colors.toggleIcon`)}, 15px -15px 0 ${(0,theme_ui__WEBPACK_IMPORTED_MODULE_1__.get)(t, `colors.toggleIcon`)}, -15px -15px 0 ${(0,theme_ui__WEBPACK_IMPORTED_MODULE_1__.get)(t, `colors.toggleIcon`)}`
  }
};
const buttonBaseStyles = {
  opacity: 0.65,
  position: `relative`,
  borderRadius: `4px`,
  width: `40px`,
  height: `25px`,
  display: `flex`,
  alignItems: `center`,
  justifyContent: `center`,
  transition: `opacity 0.3s ease`,
  border: `none`,
  outline: `none`,
  background: `none`,
  cursor: `pointer`,
  padding: 0,
  appearance: `none`,
  "&:hover, &:focus": {
    opacity: 1
  }
};
const FallbackIcon = () => (0,theme_ui__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
  type: "button",
  sx: buttonBaseStyles,
  "aria-label": "Color mode toggle"
}, (0,theme_ui__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
  sx: {
    ...iconBaseStyles,
    transform: `scale(0.55)`,
    "&:before": {
      ...iconBaseStyles[`&:before`],
      opacity: 0
    },
    "&:after": {
      ...iconBaseStyles[`&:after`],
      transform: `scale(0)`
    }
  }
}));
const TogglePrimitive = ({
  children,
  fallback = undefined
}) => {
  const [mounted, setMounted] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    if (!fallback) {
      return null;
    }
    return (0,theme_ui__WEBPACK_IMPORTED_MODULE_2__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, fallback);
  }
  return (0,theme_ui__WEBPACK_IMPORTED_MODULE_2__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, children);
};
const ColorModeToggle = () => {
  const [colorMode, setColorMode] = (0,theme_ui__WEBPACK_IMPORTED_MODULE_3__.useColorMode)();
  const isDark = colorMode === `dark`;
  return (0,theme_ui__WEBPACK_IMPORTED_MODULE_2__.jsx)(TogglePrimitive, {
    fallback: (0,theme_ui__WEBPACK_IMPORTED_MODULE_2__.jsx)(FallbackIcon, null)
  }, (0,theme_ui__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
    onClick: () => {
      const next = isDark ? `light` : `dark`;
      setColorMode(next);
      document.documentElement.classList.value = `theme-ui-${next}`;
    },
    type: "button",
    "aria-label": isDark ? `Activate Light Mode` : `Activate Dark Mode`,
    title: isDark ? `Activate Light Mode` : `Activate Dark Mode`,
    sx: buttonBaseStyles
  }, (0,theme_ui__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    sx: {
      ...iconBaseStyles,
      border: t => isDark ? `4px solid ${(0,theme_ui__WEBPACK_IMPORTED_MODULE_1__.get)(t, `colors.toggleIcon`)}` : `none`,
      backgroundColor: isDark ? `toggleIcon` : `transparent`,
      transform: isDark ? `scale(0.55)` : `scale(1)`,
      overflow: isDark ? `visible` : `hidden`,
      boxShadow: t => isDark ? `none` : `inset 8px -8px 0px 0px ${(0,theme_ui__WEBPACK_IMPORTED_MODULE_1__.get)(t, `colors.toggleIcon`)}`,
      "&:before": {
        ...iconBaseStyles[`&:before`],
        border: t => isDark ? `2px solid ${(0,theme_ui__WEBPACK_IMPORTED_MODULE_1__.get)(t, `colors.toggleIcon`)}` : `none`,
        transform: isDark ? `translate(14px, -14px)` : `translate(0, 0)`,
        opacity: isDark ? 0 : 1
      },
      "&:after": {
        ...iconBaseStyles[`&:after`],
        transform: isDark ? `scale(1)` : `scale(0)`
      }
    }
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ColorModeToggle);

/***/ }),

/***/ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/copy.tsx":
/*!**********************************************************************************!*\
  !*** ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/copy.tsx ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/theme-ui.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/copy-to-clipboard */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/utils/copy-to-clipboard.ts");
/* harmony import */ var _styles_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/utils */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/styles/utils.ts");
/** @jsx jsx */




const delay = duration => new Promise(resolve => {
  setTimeout(resolve, duration);
});
const Copy = ({
  content,
  duration = 5000,
  fileName = ``,
  trim = false
}) => {
  const {
    0: copied,
    1: setCopied
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const label = copied ? `${fileName ? `${fileName} ` : ``}copied to clipboard` : `${fileName ? `${fileName}: ` : ``}copy code to clipboard`;
  return (0,theme_ui__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
    type: "button",
    name: label,
    disabled: copied,
    className: "code-copy-button",
    sx: {
      variant: `copyButton`
    },
    onClick: async () => {
      await (0,_utils_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__["default"])(trim ? content.trim() : content);
      setCopied(true);
      await delay(duration);
      setCopied(false);
    }
  }, copied ? `Copied` : `Copy`, (0,theme_ui__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
    sx: _styles_utils__WEBPACK_IMPORTED_MODULE_2__.visuallyHidden,
    "aria-roledescription": "status"
  }, label));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Copy);

/***/ }),

/***/ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/footer.tsx":
/*!************************************************************************************!*\
  !*** ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/footer.tsx ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/theme-ui.esm.js");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! theme-ui */ "./node_modules/@theme-ui/components/dist/theme-ui-components.esm.js");
/* harmony import */ var _hooks_use_site_metadata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../hooks/use-site-metadata */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata.tsx");
/** @jsx jsx */


const Footer = () => {
  const {
    siteTitle
  } = (0,_hooks_use_site_metadata__WEBPACK_IMPORTED_MODULE_0__["default"])();
  return (0,theme_ui__WEBPACK_IMPORTED_MODULE_1__.jsx)("footer", {
    sx: {
      boxSizing: `border-box`,
      display: `flex`,
      justifyContent: `space-between`,
      mt: [6],
      color: `secondary`,
      a: {
        variant: `links.secondary`
      },
      flexDirection: [`column`, `column`, `row`],
      variant: `dividers.top`
    }
  }, (0,theme_ui__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", null, "\xA9 ", new Date().getFullYear(), " by ", siteTitle, ". All rights reserved."), (0,theme_ui__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", null, (0,theme_ui__WEBPACK_IMPORTED_MODULE_1__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_2__.Link, {
    "aria-label": "Link to the theme's GitHub repository",
    href: "https://github.com/LekoArts/gatsby-themes/tree/main/themes/gatsby-theme-minimal-blog"
  }, "Theme"), ` `, "by", ` `, (0,theme_ui__WEBPACK_IMPORTED_MODULE_1__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_2__.Link, {
    "aria-label": "Link to the theme author's website",
    href: "https://www.lekoarts.de?utm_source=minimal-blog&utm_medium=Theme"
  }, "LekoArts")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/header-external-links.tsx":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/header-external-links.tsx ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/theme-ui.esm.js");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! theme-ui */ "./node_modules/@theme-ui/components/dist/theme-ui-components.esm.js");
/* harmony import */ var _hooks_use_minimal_blog_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/use-minimal-blog-config */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config.tsx");
/** @jsx jsx */



const HeaderExternalLinks = () => {
  const {
    externalLinks
  } = (0,_hooks_use_minimal_blog_config__WEBPACK_IMPORTED_MODULE_1__["default"])();
  return (0,theme_ui__WEBPACK_IMPORTED_MODULE_2__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, externalLinks && externalLinks.length > 0 && (0,theme_ui__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    sx: {
      "a:not(:first-of-type)": {
        ml: 3
      },
      fontSize: [1, `18px`]
    }
  }, externalLinks.map(link => (0,theme_ui__WEBPACK_IMPORTED_MODULE_2__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_3__.Link, {
    key: link.url,
    href: link.url
  }, link.name))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeaderExternalLinks);

/***/ }),

/***/ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/header-title.tsx":
/*!******************************************************************************************!*\
  !*** ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/header-title.tsx ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/theme-ui.esm.js");
/* harmony import */ var _utils_replaceSlashes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/replaceSlashes */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes.ts");
/* harmony import */ var _hooks_use_site_metadata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/use-site-metadata */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata.tsx");
/* harmony import */ var _hooks_use_minimal_blog_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/use-minimal-blog-config */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config.tsx");
/** @jsx jsx */





const HeaderTitle = () => {
  const {
    siteTitle
  } = (0,_hooks_use_site_metadata__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const {
    basePath
  } = (0,_hooks_use_minimal_blog_config__WEBPACK_IMPORTED_MODULE_3__["default"])();
  return (0,theme_ui__WEBPACK_IMPORTED_MODULE_4__.jsx)(gatsby__WEBPACK_IMPORTED_MODULE_0__.Link, {
    to: (0,_utils_replaceSlashes__WEBPACK_IMPORTED_MODULE_1__["default"])(`/${basePath}`),
    "aria-label": `${siteTitle} - Back to home`,
    sx: {
      color: `heading`,
      textDecoration: `none`
    }
  }, (0,theme_ui__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
    sx: {
      my: 0,
      fontWeight: `semibold`,
      fontSize: [3, 4]
    }
  }, siteTitle));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeaderTitle);

/***/ }),

/***/ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/header.tsx":
/*!************************************************************************************!*\
  !*** ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/header.tsx ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/theme-ui.esm.js");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! theme-ui */ "./node_modules/@theme-ui/components/dist/theme-ui-components.esm.js");
/* harmony import */ var _hooks_use_minimal_blog_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../hooks/use-minimal-blog-config */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config.tsx");
/* harmony import */ var _colormode_toggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./colormode-toggle */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/colormode-toggle.tsx");
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navigation */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/navigation.tsx");
/* harmony import */ var _header_title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header-title */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/header-title.tsx");
/* harmony import */ var _header_external_links__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header-external-links */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/header-external-links.tsx");
/** @jsx jsx */






const Header = () => {
  const {
    navigation: nav
  } = (0,_hooks_use_minimal_blog_config__WEBPACK_IMPORTED_MODULE_0__["default"])();
  return (0,theme_ui__WEBPACK_IMPORTED_MODULE_5__.jsx)("header", {
    sx: {
      mb: [5, 6]
    }
  }, (0,theme_ui__WEBPACK_IMPORTED_MODULE_5__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_6__.Flex, {
    sx: {
      alignItems: `center`,
      justifyContent: `space-between`
    }
  }, (0,theme_ui__WEBPACK_IMPORTED_MODULE_5__.jsx)(_header_title__WEBPACK_IMPORTED_MODULE_3__["default"], null), (0,theme_ui__WEBPACK_IMPORTED_MODULE_5__.jsx)(_colormode_toggle__WEBPACK_IMPORTED_MODULE_1__["default"], null)), (0,theme_ui__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
    sx: {
      boxSizing: `border-box`,
      display: `flex`,
      variant: `dividers.bottom`,
      alignItems: `center`,
      justifyContent: `space-between`,
      mt: 3,
      color: `secondary`,
      a: {
        color: `secondary`,
        ":hover": {
          color: `heading`
        }
      },
      flexFlow: `wrap`
    }
  }, (0,theme_ui__WEBPACK_IMPORTED_MODULE_5__.jsx)(_navigation__WEBPACK_IMPORTED_MODULE_2__["default"], {
    nav: nav
  }), (0,theme_ui__WEBPACK_IMPORTED_MODULE_5__.jsx)(_header_external_links__WEBPACK_IMPORTED_MODULE_4__["default"], null)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/item-tags.tsx":
/*!***************************************************************************************!*\
  !*** ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/item-tags.tsx ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/theme-ui.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _hooks_use_minimal_blog_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/use-minimal-blog-config */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config.tsx");
/* harmony import */ var _utils_replaceSlashes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/replaceSlashes */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes.ts");
/** @jsx jsx */





const ItemTags = ({
  tags
}) => {
  const {
    tagsPath,
    basePath
  } = (0,_hooks_use_minimal_blog_config__WEBPACK_IMPORTED_MODULE_2__["default"])();
  return (0,theme_ui__WEBPACK_IMPORTED_MODULE_4__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, tags.map((tag, i) => (0,theme_ui__WEBPACK_IMPORTED_MODULE_4__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: tag.slug
  }, !!i && `, `, (0,theme_ui__WEBPACK_IMPORTED_MODULE_4__.jsx)(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    sx: t => {
      var _t$styles;
      return {
        ...((_t$styles = t.styles) === null || _t$styles === void 0 ? void 0 : _t$styles.a)
      };
    },
    to: (0,_utils_replaceSlashes__WEBPACK_IMPORTED_MODULE_3__["default"])(`/${basePath}/${tagsPath}/${tag.slug}`)
  }, tag.name))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ItemTags);

/***/ }),

/***/ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/layout.tsx":
/*!************************************************************************************!*\
  !*** ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/layout.tsx ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.development.esm.js");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/theme-ui.esm.js");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! theme-ui */ "./node_modules/@theme-ui/css/dist/theme-ui-css.esm.js");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! theme-ui */ "./node_modules/@theme-ui/components/dist/theme-ui-components.esm.js");
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mdx-js/react */ "./node_modules/@mdx-js/react/lib/index.js");
/* harmony import */ var _mdx_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mdx-components */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/mdx-components.tsx");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/header.tsx");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/footer.tsx");
/* harmony import */ var _styles_code__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/code */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/styles/code.ts");
/* harmony import */ var _skip_nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./skip-nav */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/skip-nav.tsx");
/** @jsx jsx */









const Layout = ({
  children,
  className = ``
}) => (0,theme_ui__WEBPACK_IMPORTED_MODULE_5__.jsx)(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.MDXProvider, {
  components: _mdx_components__WEBPACK_IMPORTED_MODULE_0__["default"]
}, (0,theme_ui__WEBPACK_IMPORTED_MODULE_5__.jsx)(_emotion_react__WEBPACK_IMPORTED_MODULE_7__.Global, {
  styles: t => ({
    "*": {
      boxSizing: `inherit`
    },
    "[hidden]": {
      display: `none`
    },
    "::selection": {
      backgroundColor: (0,theme_ui__WEBPACK_IMPORTED_MODULE_8__.get)(t, `colors.text`),
      color: (0,theme_ui__WEBPACK_IMPORTED_MODULE_8__.get)(t, `colors.background`)
    }
  })
}), (0,theme_ui__WEBPACK_IMPORTED_MODULE_5__.jsx)(_skip_nav__WEBPACK_IMPORTED_MODULE_4__["default"], null, "Skip to content"), (0,theme_ui__WEBPACK_IMPORTED_MODULE_5__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_9__.Container, null, (0,theme_ui__WEBPACK_IMPORTED_MODULE_5__.jsx)(_header__WEBPACK_IMPORTED_MODULE_1__["default"], null), (0,theme_ui__WEBPACK_IMPORTED_MODULE_5__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_9__.Box, {
  id: "skip-nav",
  as: "main",
  variant: "layout.main",
  sx: {
    ..._styles_code__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  className: className
}, children), (0,theme_ui__WEBPACK_IMPORTED_MODULE_5__.jsx)(_footer__WEBPACK_IMPORTED_MODULE_2__["default"], null)));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/mdx-components.tsx":
/*!********************************************************************************************!*\
  !*** ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/mdx-components.tsx ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! theme-ui */ "./node_modules/@theme-ui/components/dist/theme-ui-components.esm.js");
/* harmony import */ var _lekoarts_themes_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lekoarts/themes-utils */ "./node_modules/@lekoarts/themes-utils/dist/index.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/code.tsx");
/* harmony import */ var _title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./title */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/title.tsx");





const MdxComponents = {
  Text: props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(theme_ui__WEBPACK_IMPORTED_MODULE_4__.Text, props),
  Title: props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_title__WEBPACK_IMPORTED_MODULE_3__["default"], props),
  pre: preProps => {
    const props = (0,_lekoarts_themes_utils__WEBPACK_IMPORTED_MODULE_1__.preToCodeBlock)(preProps);
    // if there's a codeString and some props, we passed the test
    if (props) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_code__WEBPACK_IMPORTED_MODULE_2__["default"], props);
    }
    // it's possible to have a pre without a code in it
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("pre", preProps);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MdxComponents);

/***/ }),

/***/ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/navigation.tsx":
/*!****************************************************************************************!*\
  !*** ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/navigation.tsx ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/theme-ui.esm.js");
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _hooks_use_minimal_blog_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/use-minimal-blog-config */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config.tsx");
/* harmony import */ var _utils_replaceSlashes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/replaceSlashes */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes.ts");
/** @jsx jsx */





const Navigation = ({
  nav
}) => {
  const {
    basePath
  } = (0,_hooks_use_minimal_blog_config__WEBPACK_IMPORTED_MODULE_2__["default"])();
  return (0,theme_ui__WEBPACK_IMPORTED_MODULE_4__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, nav && nav.length > 0 && (0,theme_ui__WEBPACK_IMPORTED_MODULE_4__.jsx)("nav", {
    sx: {
      "a:not(:last-of-type)": {
        mr: 3
      },
      fontSize: [1, `18px`],
      ".active": {
        color: `heading`
      }
    }
  }, nav.map(item => (0,theme_ui__WEBPACK_IMPORTED_MODULE_4__.jsx)(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    activeClassName: "active",
    key: item.slug,
    sx: t => {
      var _t$styles;
      return {
        ...((_t$styles = t.styles) === null || _t$styles === void 0 ? void 0 : _t$styles.a)
      };
    },
    to: (0,_utils_replaceSlashes__WEBPACK_IMPORTED_MODULE_3__["default"])(`/${basePath}/${item.slug}`)
  }, item.title))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navigation);

/***/ }),

/***/ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/post-footer.tsx":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/post-footer.tsx ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* eslint-disable @typescript-eslint/no-unused-vars */

const PostFooter = ({
  post
}) => null;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostFooter);

/***/ }),

/***/ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/post.tsx":
/*!**********************************************************************************!*\
  !*** ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/post.tsx ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Head: () => (/* binding */ Head),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/theme-ui.esm.js");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! theme-ui */ "./node_modules/@theme-ui/components/dist/theme-ui-components.esm.js");
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/layout.tsx");
/* harmony import */ var _item_tags__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./item-tags */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/item-tags.tsx");
/* harmony import */ var _seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./seo */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/seo.tsx");
/* harmony import */ var _post_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./post-footer */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/post-footer.tsx");
/** @jsx jsx */







const px = [`16px`, `8px`, `4px`];
const shadow = px.map(v => `rgba(0, 0, 0, 0.1) 0px ${v} ${v} 0px`);
const Post = ({
  data: {
    post
  },
  children
}) => (0,theme_ui__WEBPACK_IMPORTED_MODULE_5__.jsx)(_layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, (0,theme_ui__WEBPACK_IMPORTED_MODULE_5__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_6__.Heading, {
  as: "h1",
  variant: "styles.h1"
}, post.title), (0,theme_ui__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
  sx: {
    color: `secondary`,
    mt: 3,
    a: {
      color: `secondary`
    },
    fontSize: [1, 1, 2]
  }
}, (0,theme_ui__WEBPACK_IMPORTED_MODULE_5__.jsx)("time", null, post.date), post.tags && (0,theme_ui__WEBPACK_IMPORTED_MODULE_5__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, ` — `, (0,theme_ui__WEBPACK_IMPORTED_MODULE_5__.jsx)(_item_tags__WEBPACK_IMPORTED_MODULE_2__["default"], {
  tags: post.tags
})), post.timeToRead && ` — `, post.timeToRead && (0,theme_ui__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", null, post.timeToRead, " min read")), (0,theme_ui__WEBPACK_IMPORTED_MODULE_5__.jsx)("section", {
  sx: {
    my: 5,
    ".gatsby-resp-image-wrapper": {
      my: [4, 4, 5],
      borderRadius: `4px`,
      boxShadow: shadow.join(`, `),
      ".gatsby-resp-image-image": {
        borderRadius: `4px`
      }
    },
    variant: `layout.content`
  }
}, children), (0,theme_ui__WEBPACK_IMPORTED_MODULE_5__.jsx)(_post_footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
  post: post
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);
const Head = ({
  data: {
    post
  }
}) => {
  var _post$banner, _post$banner$childIma, _post$banner$childIma2;
  return (0,theme_ui__WEBPACK_IMPORTED_MODULE_5__.jsx)(_seo__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: post.title,
    description: post.description ? post.description : post.excerpt,
    image: post.banner ? (_post$banner = post.banner) === null || _post$banner === void 0 ? void 0 : (_post$banner$childIma = _post$banner.childImageSharp) === null || _post$banner$childIma === void 0 ? void 0 : (_post$banner$childIma2 = _post$banner$childIma.resize) === null || _post$banner$childIma2 === void 0 ? void 0 : _post$banner$childIma2.src : undefined,
    pathname: post.slug,
    canonicalUrl: post.canonicalUrl
  });
};

/***/ }),

/***/ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/seo.tsx":
/*!*********************************************************************************!*\
  !*** ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/seo.tsx ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _hooks_use_site_metadata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/use-site-metadata */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata.tsx");



const Seo = ({
  title = ``,
  description = ``,
  pathname = ``,
  image = ``,
  children = null,
  canonicalUrl = ``
}) => {
  const site = (0,_hooks_use_site_metadata__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const {
    siteTitle,
    siteTitleAlt: defaultTitle,
    siteUrl,
    siteDescription: defaultDescription,
    siteImage: defaultImage,
    author,
    siteLanguage
  } = site;
  const seo = {
    title: title ? `${title} | ${siteTitle}` : defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname || ``}`,
    image: `${siteUrl}${image || defaultImage}`
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("html", {
    lang: siteLanguage
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", null, seo.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    name: "description",
    content: seo.description
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    name: "image",
    content: seo.image
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    property: "og:title",
    content: seo.title
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    property: "og:url",
    content: seo.url
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    property: "og:description",
    content: seo.description
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    property: "og:image",
    content: seo.image
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    property: "og:type",
    content: "website"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    property: "og:image:alt",
    content: seo.description
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    name: "twitter:card",
    content: "summary_large_image"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    name: "twitter:title",
    content: seo.title
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    name: "twitter:url",
    content: seo.url
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    name: "twitter:description",
    content: seo.description
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    name: "twitter:image",
    content: seo.image
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    name: "twitter:image:alt",
    content: seo.description
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    name: "twitter:creator",
    content: author
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    name: "gatsby-theme",
    content: "@lekoarts/gatsby-theme-minimal-blog"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("link", {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: (0,gatsby__WEBPACK_IMPORTED_MODULE_1__.withPrefix)(`/favicon-32x32.png`)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("link", {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: (0,gatsby__WEBPACK_IMPORTED_MODULE_1__.withPrefix)(`/favicon-16x16.png`)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("link", {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: (0,gatsby__WEBPACK_IMPORTED_MODULE_1__.withPrefix)(`/apple-touch-icon.png`)
  }), canonicalUrl ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("link", {
    rel: "canonical",
    href: canonicalUrl
  }) : null, children);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Seo);

/***/ }),

/***/ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/skip-nav.tsx":
/*!**************************************************************************************!*\
  !*** ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/skip-nav.tsx ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/theme-ui.esm.js");
/** @jsx jsx */

const skipNavStyles = {
  border: 0,
  clip: `react(0 0 0 0)`,
  height: `1px`,
  width: `1px`,
  margin: `-1px`,
  padding: 0,
  overflow: `hidden`,
  position: `absolute`,
  "&:focus": {
    padding: 3,
    position: `fixed`,
    top: `15px`,
    left: `15px`,
    backgroundColor: `heading`,
    color: `background`,
    zIndex: 1,
    width: `auto`,
    height: `auto`,
    clip: `auto`,
    textDecoration: `none`
  }
};
const SkipNavLink = ({
  children,
  ...props
}) => (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", Object.assign({}, props, {
  sx: skipNavStyles,
  href: "#skip-nav",
  "data-skip-link": "true"
}), children);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SkipNavLink);

/***/ }),

/***/ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/title.tsx":
/*!***********************************************************************************!*\
  !*** ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/title.tsx ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/theme-ui.esm.js");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "./node_modules/@theme-ui/components/dist/theme-ui-components.esm.js");
/** @jsx jsx */


const Title = ({
  text,
  children,
  as = `h2`,
  className = ``
}) => (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
  sx: {
    justifyContent: `space-between`,
    alignItems: `center`,
    borderBottomStyle: `solid`,
    borderBottomWidth: `1px`,
    borderBottomColor: `divide`,
    pb: 3,
    mb: 4,
    flexFlow: `wrap`,
    boxSizing: `border-box`,
    display: `flex`
  }
}, (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_1__.Box, {
  as: as,
  sx: {
    fontWeight: `medium`,
    fontSize: [3, 4],
    fontFamily: `heading`,
    lineHeight: `heading`,
    color: `heading`
  },
  className: className
}, text), children ? (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
  sx: {
    color: `secondary`,
    a: {
      variant: `links.secondary`
    }
  }
}, children) : null);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Title);

/***/ }),

/***/ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config.tsx":
/*!************************************************************************************************!*\
  !*** ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config.tsx ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_3090400250_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../public/page-data/sq/d/3090400250.json */ "./public/page-data/sq/d/3090400250.json");

const useMinimalBlogConfig = () => {
  const data = _public_page_data_sq_d_3090400250_json__WEBPACK_IMPORTED_MODULE_0__.data;
  return data.minimalBlogConfig;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useMinimalBlogConfig);

/***/ }),

/***/ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata.tsx":
/*!******************************************************************************************!*\
  !*** ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata.tsx ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_2421966660_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../public/page-data/sq/d/2421966660.json */ "./public/page-data/sq/d/2421966660.json");

const useSiteMetadata = () => {
  const data = _public_page_data_sq_d_2421966660_json__WEBPACK_IMPORTED_MODULE_0__.data;
  return data.site.siteMetadata;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useSiteMetadata);

/***/ }),

/***/ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/styles/code.ts":
/*!*****************************************************************************!*\
  !*** ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/styles/code.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/styles/utils.ts");

const code = {
  ".prism-code": {
    fontSize: [1, 1, 2],
    webkitOverflowScrolling: `touch`,
    backgroundColor: `transparent`,
    minWidth: `100%`,
    mb: 0,
    mt: 0,
    overflow: `auto`,
    '&[data-linenumber="false"]': {
      ".token-line": {
        pl: 3
      }
    }
  },
  ".gatsby-highlight[data-language='none'], .gatsby-highlight[data-language='']": {
    ".code-content": {
      pt: `1rem`
    }
  },
  ".code-content": {
    padding: `2rem 1rem 1rem 1rem`,
    color: `plain-color`,
    backgroundColor: `plain-backgroundColor`
  },
  ".token": {
    display: `inline-block`
  },
  "p > code, li > code": {
    bg: `muted`,
    color: `heading`,
    px: 2,
    py: 1,
    borderRadius: `4px`,
    fontSize: `0.95em`
  },
  ".gatsby-highlight": {
    fontSize: [1, 1, 2],
    position: `relative`,
    webkitOverflowScrolling: `touch`,
    borderRadius: `4px`,
    overflow: `hidden`,
    mx: [0, 0, 0, -3],
    ".token-line": {
      mx: -3,
      minWidth: `100%`
    },
    "pre code": {
      float: `left`,
      minWidth: `100%`
    },
    'pre[class*="language-"]:before': {
      bg: `white`,
      borderRadius: `0 0 4px 4px`,
      color: `black`,
      fontSize: `12px`,
      letterSpacing: `0.035rem`,
      padding: `0.1rem 0.5rem`,
      position: `absolute`,
      left: `1rem`,
      textAlign: `right`,
      textTransform: `uppercase`,
      fontFamily: `body`,
      fontWeight: 600
    },
    'pre[class~="language-golang"]:before, pre[class~="language-go"]:before': {
      content: `"go"`,
      background: `#79d4fd`,
      color: `black`
    },
    'pre[class~="language-javascript"]:before, pre[class~="language-js"]:before': {
      content: `"js"`,
      background: `#f7df1e`,
      color: `black`
    },
    'pre[class~="language-jsx"]:before': {
      content: `"jsx"`,
      background: `#61dafb`,
      color: `black`
    },
    'pre[class~="language-ts"]:before': {
      content: `"ts"`,
      background: `#61dafb`,
      color: `black`
    },
    'pre[class~="language-tsx"]:before': {
      content: `"tsx"`,
      background: `#61dafb`,
      color: `black`
    },
    'pre[class~="language-html"]:before': {
      content: `"html"`,
      background: `#005a9c`,
      color: `white`
    },
    'pre[class~="language-xml"]:before': {
      content: `"xml"`,
      background: `#005a9c`,
      color: `white`
    },
    'pre[class~="language-svg"]:before': {
      content: `"svg"`,
      background: `#005a9c`,
      color: `white`
    },
    'pre[class~="language-graphql"]:before': {
      content: `"GraphQL"`,
      background: `#E10098`
    },
    'pre[class~="language-css"]:before': {
      content: `"css"`,
      background: `#ff9800`,
      color: `black`
    },
    'pre[class~="language-mdx"]:before': {
      content: `"mdx"`,
      background: `#f9ac00`,
      color: `black`
    },
    'pre[class~="language-php"]:before': {
      content: `"php"`,
      background: `#777bb3`,
      color: `black`
    },
    'pre[class~="language-py"]:before, pre[class~="language-python"]:before': {
      content: `"py"`,
      background: `#306998`,
      color: `white`
    },
    'pre[class~="language-text"]:before': {
      content: `"text"`
    },
    "pre[class~='language-shell']:before": {
      content: `'shell'`
    },
    "pre[class~='language-sh']:before": {
      content: `'sh'`
    },
    "pre[class~='language-bash']:before": {
      content: `'bash'`
    },
    "pre[class~='language-yaml']:before": {
      content: `'yaml'`,
      background: `#ffa8df`
    },
    "pre[class~='language-yml']:before": {
      content: `'yml'`,
      background: `#ffa8df`
    },
    "pre[class~='language-markdown']:before": {
      content: `'md'`
    },
    "pre[class~='language-json']:before, pre[class~='language-json5']:before": {
      content: `'json'`,
      background: `linen`
    },
    "pre[class~='language-diff']:before": {
      content: `'diff'`,
      background: `#e6ffed`
    }
  },
  '.gatsby-highlight > code[class*="language-"], .gatsby-highlight > pre[class=*="language-"]': {
    wordSpacing: `normal`,
    wordBreak: `normal`,
    overflowWrap: `normal`,
    lineHeight: 1.5,
    tabSize: 4,
    hyphens: `none`
  },
  ".gatsby-highlight pre::-webkit-scrollbar": {
    width: 2,
    height: 2
  },
  ".gatsby-highlight pre::-webkit-scrollbar-thumb": {
    backgroundColor: `primary`
  },
  ".gatsby-highlight pre::-webkit-scrollbar-track": {
    background: `muted`
  },
  ".line-number-style": {
    display: `inline-block`,
    width: `3em`,
    userSelect: `none`,
    opacity: 0.3,
    textAlign: `center`,
    position: `relative`
  },
  ".code-title": {
    backgroundColor: `muted`,
    color: `text`,
    fontSize: 1,
    px: 3,
    py: 2,
    fontFamily: `body`
  },
  ".token-line": {
    pr: 3
  },
  ".highlight-line": {
    borderLeft: `4px solid rgb(2, 155, 206)`,
    ".line-number-style": {
      width: `calc(3em - 4px)`,
      opacity: 0.5,
      left: `-2px`
    }
  },
  ".footnotes": {
    borderTopStyle: `solid`,
    borderTopWidth: `1px`,
    borderTopColor: `divide`,
    pt: 2,
    mt: 5,
    overflow: `auto`,
    ".sr-only": _utils__WEBPACK_IMPORTED_MODULE_0__.visuallyHidden
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/styles/utils.ts":
/*!******************************************************************************!*\
  !*** ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/styles/utils.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   visuallyHidden: () => (/* binding */ visuallyHidden)
/* harmony export */ });
const visuallyHidden = {
  // include `px` so we can use it with `sx`
  border: 0,
  clip: `rect(0, 0, 0, 0)`,
  height: `1px`,
  margin: `-1px`,
  overflow: `hidden`,
  padding: 0,
  position: `absolute`,
  whiteSpace: `nowrap`,
  width: `1px`
};

/***/ }),

/***/ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/utils/copy-to-clipboard.ts":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/utils/copy-to-clipboard.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const copyToClipboard = str => {
  const {
    clipboard
  } = window.navigator;
  /*
   * fallback to older browsers (including Safari)
   * if clipboard API is not supported
   */
  if (!clipboard || typeof clipboard.writeText !== `function`) {
    const textarea = document.createElement(`textarea`);
    textarea.value = str;
    textarea.setAttribute(`readonly`, `true`);
    textarea.setAttribute(`contenteditable`, `true`);
    textarea.style.position = `absolute`;
    textarea.style.left = `-9999px`;
    document.body.appendChild(textarea);
    textarea.select();
    const range = document.createRange();
    const sel = window.getSelection();
    sel === null || sel === void 0 ? void 0 : sel.removeAllRanges();
    sel === null || sel === void 0 ? void 0 : sel.addRange(range);
    textarea.setSelectionRange(0, textarea.value.length);
    document.execCommand(`copy`);
    document.body.removeChild(textarea);
    return Promise.resolve(true);
  }
  return clipboard.writeText(str);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (copyToClipboard);

/***/ }),

/***/ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes.ts":
/*!**************************************************************************************!*\
  !*** ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Replace double slashes // with one slash /
 * @description This prevents double slashes as users might add e.g. the basePath as "/blog" or "blog"
 * @param input
 * @return {string} - Sanitized string
 */
function replaceSlashes(input) {
  return input.replace(/\/\/+/g, `/`);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (replaceSlashes);

/***/ }),

/***/ "./node_modules/@lekoarts/gatsby-theme-minimal-blog-core/src/templates/post-query.tsx?__contentFilePath=/Users/chenyawei/blog/GIScyw.github.io/content/posts/babel learning.md&export=default":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@lekoarts/gatsby-theme-minimal-blog-core/src/templates/post-query.tsx?__contentFilePath=/Users/chenyawei/blog/GIScyw.github.io/content/posts/babel learning.md&export=default ***!
  \****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Head: () => (/* reexport safe */ _components_post__WEBPACK_IMPORTED_MODULE_2__.Head),
/* harmony export */   "default": () => (/* binding */ GatsbyMDXWrapper)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_chenyawei_blog_GIScyw_github_io_content_posts_babel_learning_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content/posts/babel learning.md */ "./content/posts/babel learning.md");
/* harmony import */ var _components_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/post */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/@lekoarts/gatsby-theme-minimal-blog-core/components/post.tsx");



_components_post__WEBPACK_IMPORTED_MODULE_2__["default"];
function GatsbyMDXWrapper(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_post__WEBPACK_IMPORTED_MODULE_2__["default"], props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Users_chenyawei_blog_GIScyw_github_io_content_posts_babel_learning_md__WEBPACK_IMPORTED_MODULE_1__["default"], props));
}

const query = "2040642971";

/***/ }),

/***/ "./node_modules/lodash.kebabcase/index.js":
/*!************************************************!*\
  !*** ./node_modules/lodash.kebabcase/index.js ***!
  \************************************************/
/***/ ((module) => {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match words composed of alphanumeric characters. */
var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

/** Used to match Latin Unicode letters (excluding mathematical operators). */
var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f\\ufe20-\\ufe23',
    rsComboSymbolsRange = '\\u20d0-\\u20f0',
    rsDingbatRange = '\\u2700-\\u27bf',
    rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
    rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
    rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
    rsPunctuationRange = '\\u2000-\\u206f',
    rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
    rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
    rsVarRange = '\\ufe0e\\ufe0f',
    rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;

/** Used to compose unicode capture groups. */
var rsApos = "['\u2019]",
    rsBreak = '[' + rsBreakRange + ']',
    rsCombo = '[' + rsComboMarksRange + rsComboSymbolsRange + ']',
    rsDigits = '\\d+',
    rsDingbat = '[' + rsDingbatRange + ']',
    rsLower = '[' + rsLowerRange + ']',
    rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsUpper = '[' + rsUpperRange + ']',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var rsLowerMisc = '(?:' + rsLower + '|' + rsMisc + ')',
    rsUpperMisc = '(?:' + rsUpper + '|' + rsMisc + ')',
    rsOptLowerContr = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?',
    rsOptUpperContr = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?',
    reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq;

/** Used to match apostrophes. */
var reApos = RegExp(rsApos, 'g');

/**
 * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
 * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
 */
var reComboMark = RegExp(rsCombo, 'g');

/** Used to match complex or compound words. */
var reUnicodeWord = RegExp([
  rsUpper + '?' + rsLower + '+' + rsOptLowerContr + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')',
  rsUpperMisc + '+' + rsOptUpperContr + '(?=' + [rsBreak, rsUpper + rsLowerMisc, '$'].join('|') + ')',
  rsUpper + '?' + rsLowerMisc + '+' + rsOptLowerContr,
  rsUpper + '+' + rsOptUpperContr,
  rsDigits,
  rsEmoji
].join('|'), 'g');

/** Used to detect strings that need a more robust regexp to match words. */
var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

/** Used to map Latin Unicode letters to basic Latin letters. */
var deburredLetters = {
  // Latin-1 Supplement block.
  '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
  '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
  '\xc7': 'C',  '\xe7': 'c',
  '\xd0': 'D',  '\xf0': 'd',
  '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
  '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
  '\xcc': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
  '\xec': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
  '\xd1': 'N',  '\xf1': 'n',
  '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
  '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
  '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
  '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
  '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
  '\xc6': 'Ae', '\xe6': 'ae',
  '\xde': 'Th', '\xfe': 'th',
  '\xdf': 'ss',
  // Latin Extended-A block.
  '\u0100': 'A',  '\u0102': 'A', '\u0104': 'A',
  '\u0101': 'a',  '\u0103': 'a', '\u0105': 'a',
  '\u0106': 'C',  '\u0108': 'C', '\u010a': 'C', '\u010c': 'C',
  '\u0107': 'c',  '\u0109': 'c', '\u010b': 'c', '\u010d': 'c',
  '\u010e': 'D',  '\u0110': 'D', '\u010f': 'd', '\u0111': 'd',
  '\u0112': 'E',  '\u0114': 'E', '\u0116': 'E', '\u0118': 'E', '\u011a': 'E',
  '\u0113': 'e',  '\u0115': 'e', '\u0117': 'e', '\u0119': 'e', '\u011b': 'e',
  '\u011c': 'G',  '\u011e': 'G', '\u0120': 'G', '\u0122': 'G',
  '\u011d': 'g',  '\u011f': 'g', '\u0121': 'g', '\u0123': 'g',
  '\u0124': 'H',  '\u0126': 'H', '\u0125': 'h', '\u0127': 'h',
  '\u0128': 'I',  '\u012a': 'I', '\u012c': 'I', '\u012e': 'I', '\u0130': 'I',
  '\u0129': 'i',  '\u012b': 'i', '\u012d': 'i', '\u012f': 'i', '\u0131': 'i',
  '\u0134': 'J',  '\u0135': 'j',
  '\u0136': 'K',  '\u0137': 'k', '\u0138': 'k',
  '\u0139': 'L',  '\u013b': 'L', '\u013d': 'L', '\u013f': 'L', '\u0141': 'L',
  '\u013a': 'l',  '\u013c': 'l', '\u013e': 'l', '\u0140': 'l', '\u0142': 'l',
  '\u0143': 'N',  '\u0145': 'N', '\u0147': 'N', '\u014a': 'N',
  '\u0144': 'n',  '\u0146': 'n', '\u0148': 'n', '\u014b': 'n',
  '\u014c': 'O',  '\u014e': 'O', '\u0150': 'O',
  '\u014d': 'o',  '\u014f': 'o', '\u0151': 'o',
  '\u0154': 'R',  '\u0156': 'R', '\u0158': 'R',
  '\u0155': 'r',  '\u0157': 'r', '\u0159': 'r',
  '\u015a': 'S',  '\u015c': 'S', '\u015e': 'S', '\u0160': 'S',
  '\u015b': 's',  '\u015d': 's', '\u015f': 's', '\u0161': 's',
  '\u0162': 'T',  '\u0164': 'T', '\u0166': 'T',
  '\u0163': 't',  '\u0165': 't', '\u0167': 't',
  '\u0168': 'U',  '\u016a': 'U', '\u016c': 'U', '\u016e': 'U', '\u0170': 'U', '\u0172': 'U',
  '\u0169': 'u',  '\u016b': 'u', '\u016d': 'u', '\u016f': 'u', '\u0171': 'u', '\u0173': 'u',
  '\u0174': 'W',  '\u0175': 'w',
  '\u0176': 'Y',  '\u0177': 'y', '\u0178': 'Y',
  '\u0179': 'Z',  '\u017b': 'Z', '\u017d': 'Z',
  '\u017a': 'z',  '\u017c': 'z', '\u017e': 'z',
  '\u0132': 'IJ', '\u0133': 'ij',
  '\u0152': 'Oe', '\u0153': 'oe',
  '\u0149': "'n", '\u017f': 'ss'
};

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array ? array.length : 0;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

/**
 * Splits an ASCII `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */
function asciiWords(string) {
  return string.match(reAsciiWord) || [];
}

/**
 * The base implementation of `_.propertyOf` without support for deep paths.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyOf(object) {
  return function(key) {
    return object == null ? undefined : object[key];
  };
}

/**
 * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
 * letters to basic Latin letters.
 *
 * @private
 * @param {string} letter The matched letter to deburr.
 * @returns {string} Returns the deburred letter.
 */
var deburrLetter = basePropertyOf(deburredLetters);

/**
 * Checks if `string` contains a word composed of Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a word is found, else `false`.
 */
function hasUnicodeWord(string) {
  return reHasUnicodeWord.test(string);
}

/**
 * Splits a Unicode `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */
function unicodeWords(string) {
  return string.match(reUnicodeWord) || [];
}

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var Symbol = root.Symbol;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Creates a function like `_.camelCase`.
 *
 * @private
 * @param {Function} callback The function to combine each word.
 * @returns {Function} Returns the new compounder function.
 */
function createCompounder(callback) {
  return function(string) {
    return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '');
  };
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * Deburrs `string` by converting
 * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
 * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
 * letters to basic Latin letters and removing
 * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to deburr.
 * @returns {string} Returns the deburred string.
 * @example
 *
 * _.deburr('déjà vu');
 * // => 'deja vu'
 */
function deburr(string) {
  string = toString(string);
  return string && string.replace(reLatin, deburrLetter).replace(reComboMark, '');
}

/**
 * Converts `string` to
 * [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the kebab cased string.
 * @example
 *
 * _.kebabCase('Foo Bar');
 * // => 'foo-bar'
 *
 * _.kebabCase('fooBar');
 * // => 'foo-bar'
 *
 * _.kebabCase('__FOO_BAR__');
 * // => 'foo-bar'
 */
var kebabCase = createCompounder(function(result, word, index) {
  return result + (index ? '-' : '') + word.toLowerCase();
});

/**
 * Splits `string` into an array of its words.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to inspect.
 * @param {RegExp|string} [pattern] The pattern to match words.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the words of `string`.
 * @example
 *
 * _.words('fred, barney, & pebbles');
 * // => ['fred', 'barney', 'pebbles']
 *
 * _.words('fred, barney, & pebbles', /[^, ]+/g);
 * // => ['fred', 'barney', '&', 'pebbles']
 */
function words(string, pattern, guard) {
  string = toString(string);
  pattern = guard ? undefined : pattern;

  if (pattern === undefined) {
    return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
  }
  return string.match(pattern) || [];
}

module.exports = kebabCase;


/***/ }),

/***/ "./node_modules/@lekoarts/themes-utils/dist/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@lekoarts/themes-utils/dist/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calculateLinesToHighlight: () => (/* binding */ m),
/* harmony export */   getLanguage: () => (/* binding */ d),
/* harmony export */   kebabCase: () => (/* reexport default export from named module */ lodash_kebabcase__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   mdxResolverPassthrough: () => (/* binding */ y),
/* harmony export */   preToCodeBlock: () => (/* binding */ h),
/* harmony export */   slugify: () => (/* binding */ L)
/* harmony export */ });
/* harmony import */ var lodash_kebabcase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash.kebabcase */ "./node_modules/lodash.kebabcase/index.js");
var d=(e="")=>e.split("language-").pop(),h=e=>{if(e?.children?.props){let{children:a,className:s="",...t}=e.children.props,n=s.match(/language-([\0-\uFFFF]*)/);return{codeString:a.trim(),className:s,language:n!==null?n[1]:"",...t}}},m=e=>{if(!e)return()=>!1;let a=e.split(",").map(s=>s.split("-").map(t=>parseInt(t,10)));return s=>{let t=s+1;return a.some(([n,r])=>r?t>=n&&t<=r:t===n)}},y=e=>async(a,s,t,n)=>{let r=n.schema.getType("Mdx"),g=t.nodeModel.getNodeById({id:a.parent}),l=r.getFields()[e].resolve;return await l(g,s,t,n)},L=(e,a)=>{let s=e.slug?e.slug:lodash_kebabcase__WEBPACK_IMPORTED_MODULE_0__(e.title);return`/${a}/${s}`.replace(/\/\/+/g,"/")};


/***/ }),

/***/ "./public/page-data/sq/d/2421966660.json":
/*!***********************************************!*\
  !*** ./public/page-data/sq/d/2421966660.json ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"data":{"site":{"siteMetadata":{"siteTitle":"Zombie Blog","siteTitleAlt":"Minimal Blog - Gatsby Theme","siteHeadline":"Minimal Blog - Gatsby Theme from @lekoarts","siteUrl":"https://minimal-blog.lekoarts.de","siteDescription":"Typography driven, feature-rich blogging theme with minimal aesthetics. Includes tags/categories support and extensive features for code blocks such as live preview, line numbers, and line highlighting.","siteImage":"/banner.jpg","siteLanguage":"en","author":"@lekoarts_de"}}}}');

/***/ }),

/***/ "./public/page-data/sq/d/3090400250.json":
/*!***********************************************!*\
  !*** ./public/page-data/sq/d/3090400250.json ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"data":{"minimalBlogConfig":{"basePath":"/","blogPath":"/blog","postsPath":"content/posts","pagesPath":"content/pages","tagsPath":"/tags","externalLinks":[{"name":"Twitter","url":"https://twitter.com/lekoarts_de"},{"name":"Homepage","url":"https://www.lekoarts.de?utm_source=minimal-blog&utm_medium=Starter"}],"navigation":[{"title":"Blog","slug":"/blog"},{"title":"About","slug":"/about"}],"showLineNumbers":false,"showCopyButton":true}}}');

/***/ })

};
;
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-babel-learning-md.js.map