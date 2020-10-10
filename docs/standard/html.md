# HTML规范
>参考自[网易NEC框架](http://nec.netease.com/standard/html-structure.html)

<style>
table {
    font-size: 12px;    
}
</style>

## 整体结构

### HTML基础设施

- 文件应以“<!DOCTYPE ......>”首行顶格开始，推荐使用“<!DOCTYPE html>”。
- 必须申明文档的编码charset，且与文件本身编码保持一致，推荐使用UTF-8编码<meta charset="utf-8"/>。
- 根据页面内容和需求填写适当的keywords和description。
- 页面title是极为重要的不可缺少的一项。

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8"/>
<title>NEC：更好的CSS方案</title>
<meta name="keywords" content=""/>
<meta name="description" content=""/>
<meta name="viewport" content="width=device-width"/>
<link rel="stylesheet" href="css/style.css"/>
<link rel="shortcut icon" href="img/favicon.ico"/>
<link rel="apple-touch-icon" href="img/touchicon.png"/>
</head>
<body>
</body>
</html>
```

### 结构顺序和视觉顺序基本保持一致

- 按照从上至下、从左到右的视觉顺序书写HTML结构。
- 有时候为了便于搜索引擎抓取，我们也会将重要内容在HTML结构顺序上提前。
- 用div代替table布局，可以使HTML更具灵活性，也方便利用CSS控制。
- table不建议用于布局，但表现具有明显表格形式的数据，table还是首选。

### 结构、表现、行为三者分离，避免内联

- 使用link将css文件引入，并置于head中。
- 使用script将js文件引入，并置于body底部。

### 保持良好的简洁的树形结构

- 每一个块级元素都另起一行，每一行都使用Tab缩进对齐（head和body的子元素不需要缩进）。删除冗余的行尾的空格。
- 使用4个空格代替1个Tab（大多数编辑器中可设置）。
- 对于内容较为简单的表格，建议将tr写成单行。
- 你也可以在大的模块之间用空行隔开，使模块更清晰。

```html
<body>
<!-- 侧栏内容区 -->
<div class="m-side">
    <div class="side">
        <div class="sidein">
            <!-- 热门标签 -->
            <div class="sideblk">
                <div class="m-hd3"><h3 class="tit">热门标签</h3> </div>
                ...
            </div>
            <!-- 最热TOP5 -->
            <div class="sideblk">
                <div class="m-hd3"><h3 class="tit">最热TOP5</h3> <a href="#" class="s-fc02 f-fr">更多»</a></div>
                ...
            </div>
        </div>
    </div>
</div>
<!-- /侧栏内容区 -->
</body>
```

### 另外，请做到以下几点

- 结构上如果可以并列书写，就不要嵌套。<br>
如果可以写成`<div></div><div></div>`那么就不要写成`<div><div></div></div>`

- 如果结构已经可以满足视觉和语义的要求，那么就不要有额外的冗余的结构。<br>
比如`<div><h2></h2></div>`已经能满足要求，那么就不要再写成`<div><div><h2></h2></div></div>`

- 一个标签上引用的className不要过多，越少越好。<br>
比如不要出现这种情况：`<div class="class1 class2 class3 class4"></div>`

- 对于一个语义化的内部标签，应尽量避免使用className。<br>
比如在这样一个列表中，li标签中的itm应去除：`<ul class="m-help"><li class="itm"></li><li class="itm"></li></ul>`

## 代码格式

### 说明文案的注释方法

采用类似标签闭合的写法，与HTML统一格式；注释文案两头空格，与CSS注释统一格式。

- 开始注释：<!-- 注释文案 -->（文案两头空格）。
- 结束注释：<!-- /注释文案 -->（文案前加“/”符号，类似标签的闭合）。
- 允许只有开始注释！

```html
<!-- 头部 -->
<div class="g-hd">
    <!-- LOGO -->
    <h1 class="m-logo"><a href="#">LOGO</a></h1>
    <!-- /LOGO -->
    <!-- 导航 -->
    <ul class="m-nav">
        <li><a href="#">NAV1</a></li>
        <li><a href="#">NAV2</a></li>
        <!-- 更多导航项 -->
    </ul>
    <!-- /导航 -->
</div>
<!-- /头部 -->
```

### 代码本身的注释方法

单行代码的注释也保持同行，两端空格；多行代码的注释起始和结尾都另起一行并左缩进对齐。

```html
<!--
<ul class="m-nav">
    <li><a href="#">NAV1</a></li>
    <li><a href="#">NAV2</a></li>
</ul>
-->
```

### HTML注释在IE6中的BUG

- 如果两个浮动元素之间存在注释，那么可能导致布局错位或文字的BUG。
- 所以，这种情况下，我们通常将注释去掉，或者索性采用模板语言（ftl、vm）的注释。

### 严格的嵌套

- 尽可能以最严格的xhtml strict标准来嵌套，比如内联元素不能包含块级元素等等。
- 正确闭合标签且必须闭合。

### 严格的属性

- 属性和值全部小写，每个属性都必须有一个值，每个值必须加双引号。
- 没有值的属性必须使用自己的名称做为值（checked、disabled、readonly、selected等等）。
- 可以省略style标签和script标签的type属性。

### 常用的标签

常用的标签表

<table>
    <tr>
        <td>标签</td>
        <td>语义</td>
        <td>嵌套常见错误</td>
        <td>常用属性（加粗的为不可缺少的或建议的）</td>
    </tr>
    <tr>
        <td>&lt;a&gt;&lt;/a&gt;</td>
        <td>超链接/锚</td>
        <td>a不可嵌套a</td>
        <td>href,name,title,rel,target</td>
    </tr>
    <tr>
        <td>&lt;br /&gt;</td>
        <td>换行</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
    </tr>
    <tr>
        <td>&lt;button&gt;&lt;/button&gt;</td>
        <td>按钮</td>
        <td>不可嵌套表单元素</td>
        <td>type,disabled</td>
    </tr>
    <tr>
        <td>&lt;dd&gt;&lt;/dd&gt;</td>
        <td>定义列表中的定义（描述内容）</td>
        <td>只能以dl为父容器，对应一个dt</td>
        <td>&nbsp;</td>
    </tr>
    <tr>
        <td>&lt;del&gt;&lt;/del&gt;</td>
        <td>文本删除</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
    </tr>
    <tr>
        <td>&lt;div&gt;&lt;/div&gt;</td>
        <td>块级容器</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
    </tr>
    <tr>
        <td>&lt;dl&gt;&lt;/dl&gt;</td>
        <td>定义列表</td>
        <td>只能嵌套dt和dd</td>
        <td>&nbsp;</td>
    </tr>
    <tr>
        <td>&lt;dt&gt;&lt;/dt&gt;</td>
        <td>定义列表中的定义术语</td>
        <td>只能以dl为父容器，对应多个dd</td>
        <td>&nbsp;</td>
    </tr>
    <tr>
        <td>&lt;em&gt;&lt;/em&gt;</td>
        <td>强调文本</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
    </tr>
    <tr>
        <td>&lt;form&gt;&lt;/form&gt;</td>
        <td>表单</td>
        <td>&nbsp;</td>
        <td>action,target,method,name</td>
    </tr>
    <tr>
        <td>&lt;h1&gt;&lt;/h1&gt;</td>
        <td>标题</td>
        <td>从h1到h6，不可嵌套块级元素</td>
        <td>&nbsp;</td>
    </tr>
    <tr>
        <td>&lt;iframe&gt;&lt;/iframe&gt;</td>
        <td>内嵌一个网页</td>
        <td>&nbsp;</td>
        <td>frameborder,width,height,src,scrolling,name</td>
    </tr>
    <tr>
        <td>&lt;img /&gt;</td>
        <td>图像</td>
        <td>&nbsp;</td>
        <td>alt,src,width,height</td>
    </tr>
    <tr>
        <td>&lt;input /&gt;</td>
        <td>各种表单控件</td>
        <td>&nbsp;</td>
        <td>type,name,value,checked,disabled,maxlength,readonly,accesskey</td>
    </tr>
    <tr>
        <td>&lt;label&gt;&lt;/label&gt;</td>
        <td>标签为input元素定义标注</td>
        <td>&nbsp;</td>
        <td>for</td>
    </tr>
    <tr>
        <td>&lt;li&gt;&lt;/li&gt;</td>
        <td>列表项</td>
        <td>只能以ul或ol为父容器</td>
        <td>&nbsp;</td>
    </tr>
    <tr>
        <td>&lt;link /&gt;</td>
        <td>引用样式或icon</td>
        <td>不可嵌套任何元素</td>
        <td>type,rel,href</td>
    </tr>
    <tr>
        <td>&lt;meta /&gt;</td>
        <td>文档信息</td>
        <td>只用于head</td>
        <td>content,http-equiv,name</td>
    </tr>
    <tr>
        <td>&lt;ol&gt;&lt;/ol&gt;</td>
        <td>有序列表</td>
        <td>只能嵌套li</td>
        <td>&nbsp;</td>
    </tr>
    <tr>
        <td>&lt;option&gt;&lt;/option&gt;</td>
        <td>select中的一个选项</td>
        <td>仅用于select</td>
        <td>value,selected,disabled</td>
    </tr>
    <tr>
        <td>&lt;p&gt;&lt;/p&gt;</td>
        <td>段落</td>
        <td>不能嵌套块级元素</td>
        <td>&nbsp;</td>
    </tr>
    <tr>
        <td>&lt;script&gt;&lt;/script&gt;</td>
        <td>引用脚本</td>
        <td>不可嵌套任何元素</td>
        <td>type,src</td>
    </tr>
    <tr>
        <td>&lt;select&gt;&lt;/select&gt;</td>
        <td>列表框或下拉框</td>
        <td>只能嵌套option或optgroup</td>
        <td>name,disabled,multiple</td>
    </tr>
    <tr>
        <td>&lt;span&gt;&lt;/span&gt;</td>
        <td>内联容器</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
    </tr>
    <tr>
        <td>&lt;strong&gt;&lt;/strong&gt;</td>
        <td>强调文本</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
    </tr>
    <tr>
        <td>&lt;style&gt;&lt;/style&gt;</td>
        <td>引用样式</td>
        <td>不可嵌套任何元素</td>
        <td>type,media</td>
    </tr>
    <tr>
        <td>&lt;sub&gt;&lt;/sub&gt;</td>
        <td>下标</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
    </tr>
    <tr>
        <td>&lt;sup&gt;&lt;/sup&gt;</td>
        <td>上标</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
    </tr>
    <tr>
        <td>&lt;table&gt;&lt;/table&gt;</td>
        <td>表格</td>
        <td>只可嵌套表格元素</td>
        <td>width,align,background,cellpadding,cellspacing,summary,border</td>
    </tr>
    <tr>
        <td>&lt;tbody&gt;&lt;/tbody&gt;</td>
        <td>表格主体</td>
        <td>只用于table</td>
        <td>&nbsp;</td>
    </tr>
    <tr>
        <td>&lt;td&gt;&lt;/td&gt;</td>
        <td>表格中的单元格</td>
        <td>只用于tr</td>
        <td>colspan,rowspan</td>
    </tr>
    <tr>
        <td>&lt;textarea&gt;&lt;/textarea&gt;</td>
        <td>多行文本输入控件</td>
        <td>&nbsp;</td>
        <td>name,accesskey,disabled,readonly,rows,cols</td>
    </tr>
    <tr>
        <td>&lt;tfoot&gt;&lt;/tfoot&gt;</td>
        <td>表格表尾</td>
        <td>只用于table</td>
        <td>&nbsp;</td>
    </tr>
    <tr>
        <td>&lt;th&gt;&lt;/th&gt;</td>
        <td>表格中的标题单元格</td>
        <td>只用于tr</td>
        <td>colspan,rowspan</td>
    </tr>
    <tr>
        <td>&lt;thead&gt;&lt;/thead&gt;</td>
        <td>表格表头</td>
        <td>只用于table</td>
        <td>&nbsp;</td>
    </tr>
    <tr>
        <td>&lt;title&gt;&lt;/title&gt;</td>
        <td>文档标题</td>
        <td>只用于head</td>
        <td>&nbsp;</td>
    </tr>
    <tr>
        <td>&lt;tr&gt;&lt;/tr&gt;</td>
        <td>表格行</td>
        <td>嵌套于table或thead、tbody、tfoot</td>
        <td>&nbsp;</td>
    </tr>
    <tr>
        <td>&lt;ul&gt;&lt;/ul&gt;</td>
        <td>无序列表</td>
        <td>只能嵌套li</td>
        <td>&nbsp;</td>
    </tr>
</table>

## 内容语义

### 内容类型决定使用的语义标签

在网页中某种类型的内容必定需要某种特定的HTML标签来承载，也就是我们常常提到的根据你的内容语义化HTML结构。

### 加强“资源型”内容的可访问性和可用性
在资源型的内容上加入描述文案，比如给img添加alt属性，在audio内加入文案和链接等等。

### 加强“不可见”内容的可访问性
背景图上的文字应该同时写在html中，并使用css使其不可见，有利于搜索引擎抓取你的内容，也可以在css失效的情况下看到内容。

### 适当使用实体
以实体代替与HTML语法相同的字符，避免浏览解析错误。

常用HTML字符实体（建议使用实体）：

<table>
    <tr>
        <td>字符</td>
        <td>名称</td>
        <td>实体名</td>
        <td>实体数</td>
    </tr>
    <tr>
        <td>"</td>
        <td>双引号</td>
        <td>&amp;quot;</td>
        <td>&amp;#34;</td>
    </tr>
    <tr>
        <td>&amp;</td>
        <td>&amp;符</td>
        <td>&amp;amp;</td>
        <td>&amp;#38;</td>
    </tr>
    <tr>
        <td>&lt;</td>
        <td>左尖括号（小于号）</td>
        <td>&amp;lt;</td>
        <td>&amp;#60;</td>
    </tr>
    <tr>
        <td>&gt;</td>
        <td>右尖括号（大于号）</td>
        <td>&amp;gt;</td>
        <td>&amp;#62;</td>
    </tr>
    <tr>
        <td>&nbsp;</td>
        <td>空格</td>
        <td>&amp;nbsp;</td>
        <td>&amp;#160;</td>
    </tr>
    <tr>
        <td>　</td>
        <td>中文全角空格</td>
        <td>&nbsp;</td>
        <td>&amp;#12288;</td>
    </tr>
</table>

常用特殊字符实体（不建议使用实体）：

<table>
    <tr>
        <td>字符</td>
        <td>名称</td>
        <td>实体名</td>
        <td>实体数</td>
    </tr>
    <tr>
        <td>¥</td>
        <td>元</td>
        <td>&amp;yen;</td>
        <td>&amp;#165;</td>
    </tr>
    <tr>
        <td>¦</td>
        <td>断竖线</td>
        <td>&amp;brvbar;</td>
        <td>&amp;#166;</td>
    </tr>
    <tr>
        <td>©</td>
        <td>版权</td>
        <td>&amp;copy;</td>
        <td>&amp;#169;</td>
    </tr>
    <tr>
        <td>®</td>
        <td>注册商标R</td>
        <td>&amp;reg;</td>
        <td>&amp;#174;</td>
    </tr>
    <tr>
        <td>™</td>
        <td>商标TM</td>
        <td>&amp;trade;</td>
        <td>&amp;#8482;</td>
    </tr>
    <tr>
        <td>·</td>
        <td>间隔符</td>
        <td>&amp;middot;</td>
        <td>&amp;#183;</td>
    </tr>
    <tr>
        <td>«</td>
        <td>左双尖括号</td>
        <td>&amp;laquo;</td>
        <td>&amp;#171;</td>
    </tr>
    <tr>
        <td>»</td>
        <td>右双尖括号</td>
        <td>&amp;raquo;</td>
        <td>&amp;#187;</td>
    </tr>
    <tr>
        <td>°</td>
        <td>度</td>
        <td>&amp;deg;</td>
        <td>&amp;#176;</td>
    </tr>
    <tr>
        <td>×</td>
        <td>乘</td>
        <td>&amp;times;</td>
        <td>&amp;#215;</td>
    </tr>
    <tr>
        <td>÷</td>
        <td>除</td>
        <td>&amp;divide;</td>
        <td>&amp;#247;</td>
    </tr>
    <tr>
        <td>‰</td>
        <td>千分比</td>
        <td>&amp;permil;</td>
        <td>&amp;#8240;</td>
    </tr>
</table>

## 邮件内容

### 邮件环境

邮件内容所在上下文或者说所在外部容器（以下简称环境）都是由邮箱服务商决定的，这就要求邮件内容需要在任何一种情况下都要正确显示。

这些环境可能是以下某几种情况：

- 可能是个iframe，你的内容是被放在body里面的；可能只是个div，你的内容就被放在这个div里面。
- 可能邮箱自身设置了些css，他可能对你产生未知的影响。
- 可能根本没有申明doctype，即使申明了，也不是你想要的doctype。

### 避免被嵌套在不正确的容器里

惑：因为容器可能是body或div，所以，我们邮件内容不应该是一个完整的html。

解：所以邮件内容应该是以div为根节点的html片段。

### 避免css冲突或被覆盖

惑：因为环境中可能已经设置了css，比如一些reset、一些.class。

解：所以我们只能使用行内style来确保我们的效果，并且在内容根节点上设置基础style，并且尽量使用div、span等无语义标签。

```html
<!-- 根节点 -->
<div style="width:600px;text-align:left;color:#000;font:normal 12px/15px arial,simsun;background:#fff;">
    内容区域
</div>
<!-- 根节点-邮件内容居中 -->
<div style="text-align:center;">
    <div style="width:600px;margin:0 auto;text-align:left;color:#000;font:normal 12px/15px arial,simsun;background:#fff;">
        内容区域
    </div>
</div>
<!-- 如果使用语义化标签，那么需要多写一些style，以避免被环境中的css覆盖 -->
<h2 style="width:100px;height:100px;margin:0;padding:0;fong-weight:normal;font-size:12px;"></h2>
<!-- 而使用无语义标签，就可以省下很多style -->
<div style="width:100px;height:100px;"></div>
```

### 避免盒模型错误

惑：因为doctype的不确定性，我们在写style的时候，应该考虑无论doctype是什么情况，都可以正常显示，doctype影响最大的就是盒模型的解析。

解：所以我们要将盒模型拆分开来写，比如我们将原本要定义在某个div上的height和padding分别写到这个div和他的父元素或子元素上。

```html
<div style="height:100px;padding:20px 0;">内容</div>
<!-- 上面的写法应该改成以下写法 -->
<div style="padding:20px 0;"><div style="height:100px;">内容</div></div>
```

### 其他注意事项
- 因为只能使用行内style，所以清除浮动需要使用额外标签。
- 避免使用绝对定位，可能会被过滤。
- 避免使用js，可能会被过滤。
- 避免使用table布局，不易于修改维护。
- 背景图片或内容图片上的文字信息，必须在代码中可见。
- 如果没有特殊要求，所有a链接都要从新窗口打开，即target="_blank"，且a标签内容不能为空。
- 所有链接必须设置使用颜色、是否下划线，即style="text-decoration:;color:;"。
- 重点检查ie！！！

```html
<div style="width:600px;text-align:left;color:#000;font:normal 12px/15px simsun;background:#d9d9d9;">
    <div style="height:268px;background:url(images/bg1.jpg) no-repeat;">
        <div style="height:228px;">
            <div style="padding:21px 0 0 21px;">
                <a href="http://yuedu.163.com/" target="_blank" style="display:block;width:111px;height:28px;overflow:hidden;text-indent:-2000px;text-decoration:none;" title="网易阅读-随时随地品质阅读">网易阅读-随时随地品质阅读</a>
            </div>
            <h2 style="margin:0;padding:0;width:0;height:0;overflow:hidden;text-indent:-2000px;">你的iPad够有料吗？iPad不等于愤怒的小鸟！不等于切水果！下载网易阅读，给你的iPad添点料，打造你独一无二的iPad！</h2>
        </div>
        <div style="padding:0 0 0 35px;"><a href="http://itunes.apple.com/cn/app/id421092396?mt=8" target="_blank" style="color:#f00;text-decoration:none;" title="下载网易阅读">下载网易阅读</a></div>
    </div>
</div>
```

### 发现的问题及解决方案

问题：部分智能手机的邮件客户端可能会有只显示部分的bug（宽度被截）。

解决：在外面套一个同宽的table即可。

