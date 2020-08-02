---
title: SCSS Mixins and snippets you must use in all projects
tags: css,scss
date: "2020-08-02"
---

We all should accept css preprocessors like scss/less makes our(developer) life easier. Variables and nestings helps us to maintain a quality code and we are not yet using the most powerful feature of all MIXINS. 

Mixins are really helpful in lot of ways. But when to use mixin is the key and if you are creating a mixin. you must follow the golden rule.

> Mixins without arguments are bad

Here are the few mixins that can be used in all projects.

1.Ellipsis
-------------

Adding a ellipis to your website text is not simple. but when you have this handy mixin you just need to include the mixin with the number of lines as a argument.

`@include text-shorten(2);`

For single line ellipsis you have to pass null. 

`@include text-shorten(null);`

Note : Line clamp is not supported in internet explorer.Don't use if you are supporting IE 11 or below.

<iframe height="265" style="width: 100%;" scrolling="no" title="@mixin ellipsis" src="https://codepen.io/yoyo/embed/OJVXKze?height=265&theme-id=dark&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/yoyo/pen/OJVXKze'>@mixin ellipsis</a> by yogeshwaran
  (<a href='https://codepen.io/yoyo'>@yoyo</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

2.Linear gradients
--------------------

Linear gradients are fancy and adding all those syntax with fallback is little tricky. 

<iframe height="265" style="width: 100%;" scrolling="no" title="wvazwjd" src="https://codepen.io/yoyo/embed/wvazwjd?height=265&theme-id=dark&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/yoyo/pen/wvazwjd'>wvazwjd</a> by yogeshwaran
  (<a href='https://codepen.io/yoyo'>@yoyo</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

3.Generate dynamic classes for icon fonts
------------

If you are using custom iconfont like icomoon you may require to use the classes generated from the iconfont generator. instead you can add all icons in a key value pair and use @each function in scss to create icon classes and add the respective unicode to them.

Click view compiled to see the compiled css results.

<iframe height="300" style="width: 100%;" scrolling="no" title="Dynamically generate icon font classes in scss" src="https://codepen.io/yoyo/embed/preview/LYGKPob?height=300&theme-id=35149&default-tab=css" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/yoyo/pen/LYGKPob'>Dynamically generate icon font classes in scss</a> by yogeshwaran
  (<a href='https://codepen.io/yoyo'>@yoyo</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>