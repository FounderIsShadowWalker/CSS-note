##制作毛玻璃效果
制作毛玻璃的思路很简单，就是利用伪类，生成和body一样的背景，然后让他的伪类模糊掉就好。当然模糊会削减，削减的幅度就是模糊半径，所以最直接就是不设width，用-margin 撑开来，对于多出来的模糊范围直接在父标签上overflow 就好了。


###思路就是这样,But..........
<i>出现的问题</i>

+ 怎么生成和背景相同的背景
background 一样 带cover<b>(显示屏一般宽更长)</b>，但是这样不会无缝连上，完全是两张独立的图片。 
####background-attachment: fixed;
定义: 规定背景图像是否固定或者随着页面的其余部分滚动。

其实w3c的定义完全没什么软用。attachment的作用是把目前的背景相对于body作为背景时位置显示的图片。

+ 这个问题很有意思，是你打开网页调试工具，图片高度没有显示全，原因很简单，你background-size 用的cover，cover的优先级是宽。自然不会缩放。
最好的方法是使用vh，这个css3的新大小属性，可以把长度定位在当前视窗之中 100vh 相当于 100%。而你打开调试工具的时候，是不属于当前视窗的，就会把高度显示全。 
 