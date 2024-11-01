---
{"dg-publish":true,"permalink":"/tailwindcss recipes/","title":"tailwindcss recipes","tags":["code"],"created":"2024-11-1"}
---




### 适用场景分析
1. 小的活动、简单的中后台，这种不会长期迭代的项目，用tw还是比较爽的，能很大提高dx，主要就是不用在css和HTML文件之间跳来跳去，而且也不用花时间为classname起名字，还是很推荐的
2. 复杂程度较高的项目和长期迭代的项目，还是不建议使用tw， 后期维护性会越来越差
3. 具有设计规范的场景，tw完善的设计规范结合自定义配置让我们脱离TailWind CSS开发, 所以说ts更是一套设计系统，这点的价值是很大的

### 最佳实践
1. **全局的修改**可以通过配置theme，也就是说所有 tailwind 提供的所有内置原子 class 都可以配置
2. **临时的设置**可以用[]语法，但是页面太多，这样写不好维护和管理，还是建议使用统一的设计配置theme
3. 用  @apply 指令方式扩展原子 class
4. 用 @layer 扩展原子class
5. 用**插件**的方式扩展原子 class，跨项目的场景很适合
6. 用 **prefix** 来避免 class 名字冲突
7. 可以与 classnames 搭配使用
8. 我的项目是多人维护的，我如何保证原子化的样式类名称有一个比较合理的顺序呢？比如你喜欢先写宽高然后写定位，但是你的同事跟你相反，如何制定一个规范呢？`tailwindcss`提供了一个`prettier`插件[prettier-plugin-tailwindcss](https://link.juejin.cn?target=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fprettier-plugin-tailwindcss "https://www.npmjs.com/package/prettier-plugin-tailwindcss")，可以通过安装插件并且配置保存后更新即可规范不同成员写样式类的格式化问题

### 关键
1. 重用样式
2. 定制主题
3. 使用任意值
4. 使用CSS和@layer
5. 编写插件
### 配置
1. 生产优化Tree-Shake
2. rem默认模式配置成px模式, see [article]([tailwindcss 如何配置默认单位为px - CSS|Tailwind CSS - 乐闻世界](https://www.levenx.com/article/how-to-configure-the-default-unit-of-tailwindcss-is-px1#heading-1))


### 注意事项
1. 不要使用字符串连接来创建类名，因为在生产优化时，purgeCss 是通过正则匹配 html 类的属性，并不会解析 html，purgeCss 将不知道保存这些通过字符串连接的类。
```js
// 错误
<div class=`text-${error?'red':'green'}-600`></div>

// 正确
<div class=`${error?'text-red-600':'text-green-600'}`></div>
```



### tailwind css原理

tailwind 本质上就是个 postcss 插件。tailwind 就是基于 postcss 的 AST 实现的 css 代码生成工具，并且做了通过 extractor 提取 js、html 中 class 的功能。
tailwind 还有种叫 JIT 的编译方式，这个原理也容易理解，本来是全部引入原子 css 然后过滤掉没有用到的，而 JIT 的话就是根据提取到的 class 来动态引入原子 css，更高效一点。


### 遇到的问题
- PurgeCSS 有可能过多删除 class
- 样式覆盖问题
具体可以看[这篇文章]([TailwindCSS 为什么这么好用？ - 掘金](https://juejin.cn/post/7022810832379576357?searchId=2023121013432148778EA121C948C11E8F))和[这篇文章]([使用 Tailwind CSS 可能会遇到的问题及新方案 - 掘金](https://juejin.cn/post/6925734845062578184?searchId=2023121013432148778EA121C948C11E8F))
- tailwind有个问题是，在react里改了className会导致全局刷新，而改css文件只会更新页面样式而不会刷新。因为在react里改jsx感觉就是改js，导致重新编译。请问这个有解决方案吗

### 进阶使用
- variant，您可以通过在 @variant 指令中包装它们的定义来生成响应式、hover, focus, active 和其他伪类。 see[ article]([Tailwind Variant備註 – Kencoder 開發日誌](https://kendevlog.wordpress.com/2021/10/23/tailwind-variant/))
- responsive，通过将 class 的定义包装在 @responsive 指令中，您可以生成自己 class 的响应式
- theme()，使用 theme() 函数和 . 访问你的 Tailwind 配置值。



### 周边
- [Tailwind CSS IntelliSense (vscode)](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [Tailwind Documentation](https://link.juejin.cn/?target=https%3A%2F%2Fmarketplace.visualstudio.com%2Fitems%3FitemName%3Dalfredbirk.tailwind-documentation "https://marketplace.visualstudio.com/items?itemName=alfredbirk.tailwind-documentation")
- [Tailwind Fold](https://link.juejin.cn/?target=https%3A%2F%2Fmarketplace.visualstudio.com%2Fitems%3FitemName%3Dstivo.tailwind-fold "https://marketplace.visualstudio.com/items?itemName=stivo.tailwind-fold")
- [Tailwind Config Viewer](https://link.juejin.cn/?target=https%3A%2F%2Fmarketplace.visualstudio.com%2Fitems%3FitemName%3DKalimahApps.tailwind-config-viewer "https://marketplace.visualstudio.com/items?itemName=KalimahApps.tailwind-config-viewer") 在侧边栏中查看Tailwind CSS项目的配置
- [tailwindplay](https://link.juejin.cn/?target=https%3A%2F%2Fplay.tailwindcss.com%2F "https://play.tailwindcss.com/")：在线编辑器
- [tailblocks](https://link.juejin.cn/?target=https%3A%2F%2Fmertjf.github.io%2Ftailblocks%2F "https://mertjf.github.io/tailblocks/")：内涵大量模版
- [vue-tailwind](https://link.juejin.cn/?target=https%3A%2F%2Fwww.vue-tailwind.com%2F "https://www.vue-tailwind.com/")：一个 vue tailwind 组件库



### awsome
[tailwind-learning](https://xxholly32.github.io/tailwind-learning/#/doc/Intro)
[Tailwind UI - Official Tailwind CSS Components & Templates](https://tailwindui.com/)
[TailwindCSS Awesome | Wener Live & Life](https://wener.me/notes/web/style/tailwindcss/awesome)
[GitHub - aniftyco/awesome-tailwindcss: 😎 Awesome things related to Tailwind CSS](https://github.com/aniftyco/awesome-tailwindcss)



### 学习
- [tailwind-learning](https://xxholly32.github.io/tailwind-learning/#/doc/Intro)


**参考资料：**
[深入浅出 tailwindcss - 掘金](https://juejin.cn/post/6902291855782707214?searchId=2023121013432148778EA121C948C11E8F)
[快速掌握 Tailwind：最流行的原子化 CSS 框架 - 掘金](https://juejin.cn/post/7231539903649398843?searchId=20231210120244BA5B6C0292B671B5022C)
[使用 Tailwind CSS 一年后，我的一些感受 - 掘金](https://juejin.cn/post/6951300894684577823?searchId=2023121013432148778EA121C948C11E8F)
[TailwindCSS的使用，看这一篇就够了！ - 掘金](https://juejin.cn/post/7200782261997338681?searchId=2023121013432148778EA121C948C11E8F)
[tailwindCss配置集合 - POPO文档](https://docs.popo.netease.com/lingxi/2fb40eef2fbf458385680a34c3993db9?xyz=1702263280208&appVersion=3.84.0&deviceType=4&popo_hidenativebar=1&popo_noindicator=1&disposable_login_token=1&xyz=1702263302245#edit)
[前端好朋友 — tailwindcss. 大家好，我是奶綠茶 | by Milk Midi | Medium](https://milkmidi.medium.com/%E5%89%8D%E7%AB%AF%E5%A5%BD%E6%9C%8B%E5%8F%8B-tailwindcss-e1e187df6fed)
[How to setup Tailwind 3 in React with CRA 5 ? - GeeksforGeeks](https://www.geeksforgeeks.org/how-to-setup-tailwind-3-in-react-with-cra-5/)


[Tailwindcss的浅试和实践_网易KM](https://kms.netease.com/article/83752)
[关于tailwind使用过程中自己的一些感受与实践成果_网易KM](https://kms.netease.com/article/67074#%E5%88%87%E5%85%A5%E6%AD%A3%E9%A2%98)
