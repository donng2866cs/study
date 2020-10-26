### React.PureComponent

`React.Component` 与 `React.PureComponent` 相似。

区别：`React.Component`没有实现 `shouldComponentUpdate()`，而 `React.PureComponent`
中以浅对比 prop 和 state 的方式来实现了该函数。

