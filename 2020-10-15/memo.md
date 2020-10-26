## React.memo
`React.memo` 是一个高阶组件

通过`React.memo`包装的组件，在props相同的情况下，会复用最近一次渲染的结果，避免
重复渲染。

`React.memo` 仅检查 props 变更，如果被包裹的组件中拥有 `useState`或`useContext`
的hook，当 context 变化时，它还是会重新渲染。

默认情况只会对复杂对象做浅对比，但是允许传入第二个参数（比较函数）来控制对比过程。
