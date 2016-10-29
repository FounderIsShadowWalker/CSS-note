##CSS 常用居中的方法

###父级position 为 relative的情况

1.子级div Position: relative;

	Position 首先并不具有继承性，子级 div 没有设置position 则默认为 static。
	static 很多东西都无法使用，比如 top，left，比如 z-index 之类的。
	staic  的div 默认从父类剩余位置开始布局。
	
	
代码如下:
<pre>
div.outer{
            position: relative;
            background: red;
            width: 200px;
            height: 200px;
            overflow: hidden;
        }
        div.outer > div.inner{
            position: relative;
            background: #0000f6;
            width: 100px;
            height: 100px;
            top: 50%;
            left: 50%;
            margin: -50px 0 0 -50px;
        }
</pre>

2.子级 postion: static 的居中方法。

<pre>
div.outer{
            position: relative;
            background: red;
            width: 200px;
            height: 200px;
            overflow: hidden;
        }
        div.outer > div.inner{
            background: #0000f6;
            width: 100px;
            height: 100px;
            margin: 50px auto 0 auto;
        }
</pre>

 3.子级absolute 的居中方法设置top left margin 等同于父级relative 与 子级relative的 方案。


##父级position 为absolute 情况
1.子级position: relative和absolute的情况
   
   设置top left margin 等同于父级relative 与 子级relative的 方案。
2.子级 static: 等同于 父级 relative 与 子级 static 的方案

## 父级postion 为static 情况
  这里给一些知识点
  
  1. top 和 left 百分比是相对于 height 和 width的, absolute 是相对于离它最近的 absolute 父类 的 height 和 width，relative 是相对于 父类。
  
  
***
华丽的分割线

上面的布局其实实际运用非常有限，我们很少会写死每个元素的宽高。大部分都是百分比布局。

百分比布局最大的问题，就是我们不知道具体的宽高，所以margin无法设置准确值。

##父级relative 宽高固定 子级宽高百分比
1. 子级relative 和 absolute的情况

<pre>
        div.outer{
            position: static;
            top: 0;
            left: 0;
            background: red;
            width: 500px;
            height: 200px;
            overflow: hidden;
        }
        div.outer > div.inner{
            position: relative;
            background: #0000f6;
            width: 50%;
            height: 50%;
            top: 50%;
            left: 50%;
            transform: translateX(-50%) translateY(-50%);
        }
</pre>

上面的方法作用于 定位元素 包治百病 除了ie8 及以下 不支持css3 的浏览器。

2.子级static

无能为力


一些非主流的居中方案  table-cell 居中

table-cell 对应于 table 中的 td  对于 td 我们自然可以使用verical-align 来实现垂直居中， 水平居中在内层使用margin: 0 auto。

<pre>
 div.outer{
            position: static;
            top: 0;
            left: 0;
            background: red;
            width: 500px;
            height: 200px;
            overflow: hidden;
            display: table;
        }
        div.outer > div.inner{
            position: relative;
            background: #0000f6;
            width: 100%;
            height: 100%;
            display: table-cell;
            vertical-align: middle;
        }
        div.inner > div.target{
            width: 100px;
            height: 100px;
            background: #FFFFFF;
            margin: 0 auto;
        }
</pre>

显然这样的居中有好有坏，好处自然是没有 ie8 的坎, 但是却多出来了一个标签，先前仿 Tumblr 的时候，发现里面的前端喜欢这样,至于好坏大家拿捏吧。

最后有一种懒人居中法，适应于你不想使用以上两种方法，然后想取巧的话，当然适用方法只适用于内标签为absolute 情况.

<pre>
 div.outer{
            position: absolute;
            top: 0;
            left: 0;
            background: red;
            width: 500px;
            height: 200px;
            overflow: hidden;
            display: table;
        }
        div.outer > div.inner{
            position: absolute;
            background: #0000f6;
            width: 50%;
            height: 50%;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            margin: auto;
        }
</pre> 
 在仿十年后的网站时，看到每张全屏轮播的时候，里面的居中页就是采用这样的方法，当然他的局限性太小了，只能 absolute + absolute. 或者 absolute 全页居中，大家在写页面的时候，可以自己取舍，毕竟这个没有ie6 ie8 的坎。
 
 
 
##flex 布局

2009 年 w3c 提出来的，现在已经得到了所有浏览器的支持，我们看一下flex的 API.

>转一篇阮一峰老师的 flex 使用很详细 http://www.ruanyifeng.com/blog/2015/07/flex-examples.html

设置在 主轴(横轴) 的对其方式  作用于父类容器上
justify-content: flex-start | flex-end | center | space-between | space-around

设置在 侧轴(纵轴)的 对其方式  作用于父类容器上
align-items: flex-start | flex-end | center | baseline | stretch

flex-direction: row | column
设置flex 布局的主轴

flex-wrap: nowrap | wrap | wrap-reverse
设置 flex 单行 或 多行


一个水平 垂直居中的例子就很好实现了
<pre>
 div.box{
        width: 200px;
        height: 200px;
        background: #0000f6;
        display: flex;
        justify-content: center;              
        align-items: center;              
    }
    div.box > div.item{
        width: 100px;
        height: 100px;
        background: red;
    }
</pre>

多个子div的实现也很简单
这里 提一下 flex-direction 默认为 row 也就是横轴为主轴，改成 column 后，align-item 与justify-content 就交换了。

<pre>
 div.box{
        width: 200px;
        height: 200px;
        background: #0000f6;
        display: flex;
        flex-direction: column;                 /*设置主轴*/
        justify-content: space-around;         /* 设置在 主轴(横轴) 的对其方式 */
        align-items: center;            /*  设置在 侧轴(纵轴)的 对其方式 */
    }
    div.box > div.item{
        width: 50px;
        height: 50px;
        background: red;

    }
</pre>

##inline-block 在 block的居中
1. table-cell 和 inline-block 相仿，我们看到td 并不存在换行的现象
2. 我们以一般的角度来看看如何实现

首先需要一个basic 高100% 来作为基准，然后设置vertical-aligin: middle 来对齐basic的中部

<pre>
div.outer{
            position: relative;
            top: 0;
            left: 0;
            background: red;
            width: 500px;
            height: 500px;
            overflow: hidden;
            /*text-align: center;*/
        }
        div.outer > div.inner{
            width: 100px;
            height: 100px;
            background: #0000f6;
            display: inline-block;
            vertical-align: middle;
        }
        div.outer > div.basic{
            top:0;
            left: 0;
            position: relative;
            width: 0px;
            height: 100%;
            background: green;
            vertical-align: middle;
            display: inline-block;
        }
</pre>


最后一个inline 居中了 主要应用 line-height 上下间距加起来等于父类的高度 就能实现居中了

<pre>
  div.outer{
            position: relative;
            top: 0;
            left: 0;
            background: red;
            width: 500px;
            height: 500px;
            overflow: hidden;
            text-align: center;
        }
        span{
            line-height: 500px;
        }
</pre>
当然把inline 变成 inline-block 居中自然也是可以的，也比较推崇这种，因为往往父类的高度是不固定的，需要做出自适应，第一种方案就能完美解决了。


居中的方案大致就这些了，大家晚安。