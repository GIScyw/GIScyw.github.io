---
{"dg-publish":true,"permalink":"/babel learning/","title":"babel learning","tags":["code"],"created":"2024-10-31"}
---

### babel编译流程


babel 是 source to source 的转换，babel 就是一个 Javascript Transpiler，整体编译流程分为三步：
- parse：通过 parser 把源码转成抽象语法树（AST）
- transform：遍历 AST，调用各种 transform 插件对 AST 进行增删改
- generate：把转换后的 AST 打印成目标代码，并生成 sourcemap

1.  parse 的过程其实就是`分词` + `组装 AST`这两步（一般叫词法分析和语法分析）。 JS  parser 的历史，基于火狐浏览器的 JS 引擎 `SpiderMonkey` 的 AST 标准，制定了 `espree` 的标准，最早的 `estree` 标准的实现是 `esprima`，但是随着 es2015 开始一年一个版本，`esprima` 的迭代速度逐渐跟不上了，这时候 `acorn` 流行起来，因为速度更快，而且支持插件扩展，于是 `espree`、`babel parser(babylon)` 等都基于 `acorn` 来实现各自的 parser。虽然 `estree` 系列的 js parser 挺多的，但也不是全部，`terser`、`typescript` 等都是用自己的 AST。babel parser 能不断地支持新的语法，就是通过修改词法分析、语法分析阶段的代码来实现的。其实现在 babel parser 的代码里已经看不到`acorn` 的依赖了，因为在 babel4 以后，babel 直接 fork 了 `acorn` 的代码来修改，而不是引入 `acorn` 包再通过插件扩展的方式。但是，原理还是一样的

**常见parser如下**
- babel 用于 es next、flow、typescript、jsx 等语法转目标环境支持的 js
- typescript 用于处理 typescript 语法，并进行类型检查，然后转成 es5 或者 es3
- terser 用于 parse es6 的代码，并进行压缩和混淆，输出处理后的代码
- prettier 用于处理各种 css、js、html 等代码，进行格式化代码，然后输出格式化后的代码
- eslint 是对代码风格和一些常见错误进行静态检查，通过 --fix 还可以自动修复
- postcss 用于 css 的 parse，之后通过插件对 ast 进行各种处理，最后输出处理后的 css
- posthtml 和 postcss 类似，不过是用于 html 处理的。
- vue template compiler 是 vue 专用的，用于把 vue template 转成优化以后的 render 函数

  [【转译器原理 parser 篇】实现 js 新语法并编译到 css - 掘金](https://juejin.cn/post/6959502530745204772)
2. 源码 parse 成 AST 之后，需要进行 AST 的遍历和增删改（transform）。那么 transform 的流程是什么样的？babel 会递归遍历 AST，遍历过程中处理到不同的 AST 会调用不同的 visitor 函数来实现 transform。这其实是一种设计模式，叫做访问者模式
3.  generate 就是递归打印 AST 成字符串，在递归打印的过程中会根据源码位置和计算出的目标代码的位置来生成 mapping，加到 sourcemap 中。 sourcemap 是源码和目标代码的映射，用于开发时调试源码和生产时定位线上错误。 babel 通过 source-map 这个包来生成的 sourcemap
4. @babel/code-frame 包是 babel 用来打印错误信息的，别的工具（比如 eslint、tsc）也会打印 code frame 的格式，原理一样



### babel能用来干什么
babel 是一个 js 转译器，用于 es next、typescript等代码的转换，同时还暴露出了 api 让开发者可以进行特定用途的转换。除此以外，还可以做各种静态分析
### AST
ST 也是有标准的，JS parser 的 AST 大多是 [estree 标准](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Festree%2Festree "https://github.com/estree/estree")，AST 是对源码的抽象，字面量、标识符、表达式、语句、模块语法、class 语法都有各自的 AST。标识符 Identifer、各种字面量 xxLiteral、各种语句 xxStatement，各种声明语句 xxDeclaration，各种表达式 xxExpression，以及 Class、Modules、File、Program、Directive、Comment 这些 AST 节点。了解了这些节点，就能知道平时写的代码是怎么用 AST 表示的。当然也不需要记，可以用 ([astexpoler.net](https://link.juejin.cn/?target=https%3A%2F%2Fastexplorer.net%2F "https://astexplorer.net/")) 可视化的查看。AST 节点可能同时有多种类型，确定一种 AST 节点是什么类型主要看它的特点，比如 Statement 的特点是可以单独执行，Expression 的特点是有返回值，所以一些可以单独执行的 Expression 会包一层 ExpressionStatement。不同 AST 节点有不同的属性来存放对应的源码信息，但是都有一些公共属性如 type、xxComments、loc 等。


### babel常见的 API
- `@babel/parser` 对源码进行 parse，可以通过 plugins、sourceType 等来指定 parse 语法
- `@babel/traverse` 通过 visitor 函数对遍历到的 ast 进行处理，分为 enter 和 exit 两个阶段，具体操作 AST 使用 path 的 api，还可以通过 state 来在遍历过程中传递一些数据
- `@babel/types` 用于创建、判断 AST 节点，提供了 xxx、isXxx、assertXxx 的 api
- `@babel/template` 用于批量创建节点
- `@babel/code-frame` 可以创建友好的报错信息
- `@babel/generator` 打印 AST 成目标代码字符串，支持 comments、minified、sourceMaps 等选项。
- `@babel/core` 基于上面的包来完成 babel 的编译流程，可以从源码字符串、源码文件、AST 开始。

> [!NOTE]
> 注意，我们学习的 api 是 babel 7.x 的，babel 6 的 api 还没有按照 scope 来划分，也就是 babel-parser 这种，而 babel 7 变成了@babel/parser 这种。对应的插件也是从 babel-plugin-xxx 变成了 @babel/plugin-xxx。但只是包名变了，api 没啥大的变动，我们学的是一些原理性的东西，这些东西在版本迭代中是不会变的。
> 












[What is Babel? · Babel](https://babeljs.io/docs/)
[babel/独立 - Babel 中文文档](https://www.babelrc.cn/docs/babel-standalone.html)




