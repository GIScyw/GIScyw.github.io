---
{"dg-publish":true,"permalink":"/css in js/","created":"2023-12-02T22:45:24.168+08:00"}
---




CSS-in-JS 和实用工具/原子 CSS


css的问题：
1. 全局命名空间
2. 依赖
3. 无用代码消除
4. 代码压缩
5. 共享常量
6. 非确定性（Non-Deterministic）解析
7. 隔离


原子化 css的好处：
- 减少css的体积


缺点：
- html更加臃肿，而且css通常都是可以被缓存的，而html却不一定了。- 最直观的的结果就是当业务复杂度提升到某个阶段后，原子化CSS的性价比将急剧下降，带来的HTML代码冗余，可读性差，难以维护的问题将直接影响到业务开发。
- 




[再见，CSS-in-JS - 掘金](https://juejin.cn/post/7257711054901624869)