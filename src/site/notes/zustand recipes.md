---
{"dg-publish":true,"permalink":"/zustand recipes/","title":"zustand recipes","tags":["code"],"created":"2024-11-1"}
---


### 需要注意的点
- zustand 默认做了变量的优化，只要是从 `useStore`解构获得的函数，默认是引用不变的，也就是使用 zustand store 的函数本身并不会造成不必要的重复渲染。所有 zustand 的 action 都默认不会造成重复渲染，因此，理论上只有 state 会造成重复渲染
- 在这种模式下，所有的 Action 都是默认不需要包 useCallback 的
- 因为 zustand 是默认全局单例，所以如果需要变成组件，那么一定需要使用 Context 来隔离多个实例
- 只需要利用 zustand 的 useStore 的 selector 能力，配合 zustand 默认提供的 `shallow` 浅比较能力。我们就能实现「人工的依赖收集」。如此一来，性能优化也就做好了
- zustand默认不需要provider，由于没有 Provider 的存在，所以声明的 useStore 默认都是单实例，如果需要多实例的话，zustand 也提供了对应的 Provider 的书写方式
- zustand 的 store 状态既可以在 react 世界中消费，也可以在 react 世界外消费。实际的复杂应用中，一定会存在某些不在 react 环境内的状态数据，以图表、画布、3D 场景最多。一旦要涉及到多环境下的状态管理，zustand很有用处。、
- `zustand` 基于发布订阅模式实现的响应式


### 业务中比较好的实践
- 业务中的两种形式：hook+zustand， 其中zustand 维护基本的state和原子action，hook维护复合action; 全部zustand
- 复杂应用的建议：合理拆分state, action,selectors; 利用slice切片
- action的定义可以根据用户的行为
- zustand在项目中的应用，可以给我们的开发模式发生变化。基于这样的一种模式，哪怕是这样一个复杂的组件，在实现层面的研发心智仍然非常简单：
	- React 层面仍然只是一个渲染层；
	- 复杂的状态逻辑仍然以 hooks 式的模式进行引入；
	- 复杂的入口方法通过拆分子 Action 进行组合与复用；



### 高级用法：
- 集成一下 devtools，将 Store 研发模式变得更加可视化，做到可控
- 结合 persist 做本地数据缓存的方式
- 利用 subscribe 监听状态变更，自动更新内部状态



### 官网建议

- set是将与 Store 中的现有状态进行浅合并， 对于嵌套更新，层级较少的嵌套直接使用...， 层级较多的嵌套可以使用immer更新嵌套状态
- 自动生成selector
```js
const bears = useBearStore((state) => state.bears)


const useBearStore = createSelectors(useBearStoreBase)
// get the property
const bears = useBearStore.use.bears()
```
- 建议在使用 store 的属性或操作时使用 selector
- 选择你需要的state和action
```js
  const [firstName, updateFirstName] = useStore(

    (state) => [state.firstName, state.updateFirstName],

    shallow

  )
```

- action和状态一般是放在一起的，但是也推荐将action放到store外面，有利于代码拆分
- 使用storage来持久化状态与action
- 重置所有状态
- 在需要依赖注入的情况下，比如一个 store 需要用来自组件的 props 进行初始化，建议使用带有 `React.context` 的原始 store。
- slice模式， 把store分成更小的store
- 在组件外面使用，通过subscribeWithSelector中间件，https://docs.pmnd.rs/zustand/recipes/recipes#reading/writing-state-and-reacting-to-changes-outside-of-components
- 在非react地方使用， https://docs.pmnd.rs/zustand/recipes/recipes#using-zustand-without-react




参考资料：

[谈谈复杂应用的状态管理（上）：为什么是 Zustand - 掘金](https://juejin.cn/post/7177216308843380797?searchId=202312021508198CC91A1B05709C0BBEE6)
[谈谈复杂应用的状态管理（下）：基于 Zustand 的渐进式状态管理实践 - 掘金](https://juejin.cn/post/7182462103297458236#heading-3)
[精读《zustand 源码》 - 掘金](https://juejin.cn/post/7056568996157456398?searchId=202312021508198CC91A1B05709C0BBEE6)


https://zustand-cn.js.org/guides/updating-state
https://codthing.github.io/react/zustand/zustand-base/
https://docs.pmnd.rs/zustand/recipes/recipes