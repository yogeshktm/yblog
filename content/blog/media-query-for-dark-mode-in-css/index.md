---
title: Media query for dark mode in css
tags: css,dark mode,dark mode media query
date: "2021-01-20"
---

Its 2021 almost every android,ios and windows devices have the option to choose light/dark mode as their preferable mode. its nice to have dark/light mode in your websites. Fancy isn't it ?

### Media query for Dark mode

```css
@media (prefers-color-scheme: dark) {
}
```

if your website theme is already have dark backrounds and light text. you can do it in reverse by adding light mode media query.

### Media query for Light mode

```css
@media (prefers-color-scheme: light) {
}
```

If you are not using css variables or any preprocessors in your website. you need to overwrite most of the color for having it in dark/light mode.

### CSS Variables are handy

Using css variables it is easy to setup colors for dark/light mode in a simple way by replacing color variables in media query

```css
:root {
  --background: #fff;
  --text-color: #323232;
}

// Dark mode
@media (prefers-color-scheme: dark) {
  :root {
    --background: #323232;
    --text-color: #fff;
  }
}
```

### Live example

Try switching dark and light mode in your device and see how the below page renders

<iframe height="361" style="width: 100%;" scrolling="no" title="Media query for dark mode" src="https://codepen.io/yoyo/embed/wvzOXzN?height=361&theme-id=35149&default-tab=html,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/yoyo/pen/wvzOXzN'>Media query for dark mode</a> by yogeshwaran
  (<a href='https://codepen.io/yoyo'>@yoyo</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Feel free to ask me in case of doubts. i am very much happy to help you.
