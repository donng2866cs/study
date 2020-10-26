## performance

#### performance.memory
这是 chrome 的一个独非标准拓展，可以获取到基本的内存使用

### performance.navigation

返回 `PerformanceNavigation` 对象，提供了再置顶的时间段发生的操作相关信息

#### redirectCount
标识到达这个页面前经过多少次重定向跳转，不过这个接口有同源策略限制，仅能检测到同源的重定向。

#### type
返回值有 0, 1, 2, 225

- 0: 表示通过点击链接、书签、表单提交、脚本操作、直接输入url地址进入 => `performance.navigation.TYPE_NAVIGATE`
- 1: 表示点击刷新页面按钮或者 `location.reload()` 方法显示的页面, => `performance.navigation,TYPE_RELOAD`
- 2: 表示页面通过历史记录和前进后退访问， => `performance.navigation.TYPE_BACK_FORWARD`
- 225: 表示任何其他加载方式 => `performance.navigation.TYPE_RESERVED`

### performance.timeOrigin
返回性能测试开始的时间的高精度时间戳
