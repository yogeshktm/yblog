---
title: Position:sticky
tags: css position,css
date: "2021-01-07"
---

Hello everyone, Welcome to my first post of 2021.

##What is position:sticky ?

Sticky is simply the combination of fixed and relative positions. Sticky Elements remain relative untill it touches the declared threshold level.

```css
.sticky {
  position: sticky;
  //Related Elements become fixed at their top:0
  top: 0;
}
```

###Simple example of sticky - Article with sub titles

<iframe height="400" style="width: 100%;" scrolling="no" title="position:sticky " src="https://codepen.io/yoyo/embed/aeWYpO?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/yoyo/pen/aeWYpO'>position:sticky </a> by yogeshwaran
  (<a href='https://codepen.io/yoyo'>@yoyo</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

###Can i use sticky in my project ?

All latest browser supports sticky except in HTML table's th or tr.If you are not considering IE11. you should definetly give a try on this.

See Browser support table <a href="https://caniuse.com/css-sticky" target="_blank">here</a>
