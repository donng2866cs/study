## css优先规则
内联样式 > id 选择器 > 类选择器 = 属性选择器 = 伪类选择器 > 标签选择器 = 伪元素选择器

- id选择器， 如  #id {}
- 类选择器， 如 .class {}
- 属性选择器， 如 a[target="_blank"] {}
- 伪类选择器， 如 :hover {}
- 标签选择器， 如 span {}
- 伪元素选择器， 如 ::before {}
- 通配选择器， 如 * {}

### 计算优先规则
定义三个变量 a, b, c 计数
- a : id选择器的个数
- b : 类选择器、属性选择器、伪类选择器的个数
- c : 标签选择器、伪元素选择器的个数

然后按照 a, b, c 的顺序依次比较大小，大的则优先级更高，相等则比较下一个，若最后两个选择器中的 a, b, c
都相等，就按照 `就近原则` 来判断。

```
Examples:
*               /* a=0 b=0 c=0 */
LI              /* a=0 b=0 c=1 */
UL LI           /* a=0 b=0 c=2 */
UL OL+LI        /* a=0 b=0 c=3 */
H1 + *[REL=up]  /* a=0 b=1 c=1 */
UL OL LI.red    /* a=0 b=1 c=3 */
LI.red.level    /* a=0 b=2 c=1 */
#x34y           /* a=1 b=0 c=0 */
#s12:not(FOO)   /* a=1 b=0 c=1 */
.foo :matches(.bar, #baz)
                /* Either a=1 b=1 c=0
                   or a=0 b=2 c=0, depending
                   on the element being matched. */
```

``` html
<div id="con-id">
    <span class="con-span"></span>
</div>
```
``` css
#con-id span {
    color: red;
}

div .con-span {
    color: blue;
}
```