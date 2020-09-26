# BFC

## BFC定义
>BFC(Block Formatting Context)译为“块级格式化上下文”。它是一个独立的渲染区域，只有Block-level
 box参与，它规定了内部的Block-leve Box何如布局，并且与这个区域外部毫不相干。
 
#### Box：css布局基本单位
页面是由很多个`Box`组成的。元素的类型和`display` 属性决定了这个`Box`的类型。

- `block-level` display: `block`/`list-item`/`table`
- `inline-level` display: `inline`/`inline-block`/`inline-table`
- `run-in` css3属性

#### Formatting Context
Formatting Context 是 W3C CSS2.1 规范的一个概念。
它是页面中的一块渲染区域，并且有一套渲染规则，它决定了其子元素将如何定位，以及和其他元素的关系和相互作用。
最常见的 Formatting Context 有 Block Formatting Context简称(BFC)和 Inline Formatting Context(简称IFC)。

### BFC布局规则
- 内部的Box都会在垂直方向，一个接一个的放
- Box垂直方向的距离由margin决定，属于同一个 BFC 两个相邻 Box的 margin 会发生重叠。
- 每个盒子的 margin box 的左边，与包含块 border box 的左边相接触，即使存在浮动也会如此。
- BFC的区域不会和 float box 重叠
- BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响外面的元素，相反也是。
- 计算BFC的高度时，浮动元素也参与计算

### 创建BFC

1. float值不为none
2. position值不是 static或者 relative
3. display的值不是 inline-block、table-cell、flex、table-caption、inline-flex
4. overflow的值不是visible