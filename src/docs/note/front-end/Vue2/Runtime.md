---
title: Vue 程序运行过程
date: 2021-07-17
---

`runtime-compiler` 与 `runtime-only` 区别，`runtime-only` 的性能更好，代码量更少（使用两种方式创建项目的时候，compiler 比 only 要大）。

> 1. runtime-compiler 的处理过程
>
>    vm.options.template —[parse]—> AST(抽象语法树) —[compile]—> vm.options.render(functions) —[render]—> virtual dom(虚拟 DOM) —[update]—> UI
>
> 2. runtime-only 的处理过程
>
>    render -> vdom -> UI

使用 runtime-only 的写法

```js
// main.js
new Vue({
  el: '#app',
  render: (h) => h(App),
});
```

使用 runtime-compiler 的写法

```js
// main.js
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
});
```

runtime-only 中的函数 h，实际上是 createElement 函数。所以上面这种写法可以改成如下

```js
// createElement 的一种用法: createElement('标签',{标签的属性},[内容])
new Vue({
  el: '#app',
  render: (createElement) => {
    // 创建一个 <h1 class="box">Hello World</h1> 替换掉app挂载的元素
    return createElement('h1', { class: 'box' }, ['Hello World']);
    /*
     * 因为内容是个数组，所以可以这么写来实现嵌套
     * return createElement('h1', {class: 'box'}, ['Hello World', createElement('button',['按钮'])])
     */
  },
});

// createElement 还能接受一个组件作为参数
import cpn from './cpn';
new Vue({
  el: '#app',
  render: (createElement) => {
    // createElement的用法: createElement(组件)。如果将组件 cpn 换成 App，其实就跟 runtime-only 的写法是一样的了
    return createElement(cpn);
  },
});
```

更多关于 createElement 的内容，请见[官方文档](https://cn.vuejs.org/v2/guide/render-function.html#createElement-%E5%8F%82%E6%95%B0)

在`runtime-only`中是没有`runtime-compiler`前面从`template —> AST`的处理过程，那`*.vue`文件中的 template 是由谁处理的呢？  
—— 由 package.json 中`devDependencies`引入的`vue-template-compiler`插件完成的
