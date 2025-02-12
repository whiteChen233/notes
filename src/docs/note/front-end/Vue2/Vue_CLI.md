---
title: Vue 脚手架
date: 2021-07-20
---

## 什么是 Vue CLI

如果只是简单的写几个 Vue 的 Demo 程序，那么基本不需要使用 Vue CLI

如果是开发大型项目，那么必然需要使用 Vue CLI。因为需要考虑代码目录结构、项目结构和部署、热加载、代码单元测试等事情，而这些就可以通过脚手架来帮助解决。

CLI(Commmand-Line Interface)，翻译为命令行界面，俗称脚手架。

Vue CLI 是一个官方发布的 Vue.js 项目脚手架。使用它可以快速搭建 Vue 爱发环境以及对应的 webpack 配置。

## Vue CLI 的使用

### 使用前提

- node：使用脚手架需要 node 环境，node 也会安装 npm(node package manager)
- webpack：脚手架工具就使用了 webpack 模板，对所有的资源会压缩等优化操作，并在开发中提供了一套完整的功能，能够使得开发变得更高效。

### 安装

1. 安装:使用`npm install -g @vue/cli`安装的是新版本(>2.x)的 Vue CLI，新版本如果想按照 Vue CLI2 的方式初始化项目是不可以的。

2. 更新：使用`npm update -g @vue/cli`升级全局的 Vue CLI

3. 初始化项目：
   - Vue CLI2: `vue init webpack my-project`
   - Vue CLI3: `vue create my-project`

::: tip

#### 关于旧版本

Vue CLI 的包名称由`vue-cli`改成了`@vue/cli`。如果已经全局安装了旧版本的 vue-cli (1.x 或 2.x)，需要先通过`npm uninstall vue-cli -g`或`yarn global > remove vue-cli`卸载它。

#### 拉取 2.X 的模板(旧版本)

Vue CLI >= 3 和旧版使用了相同的 vue 命令，所以 Vue CLI 2 (vue-cli) 被覆盖了。如果你仍然需要使用旧版本的 vue init 功能，你可以全局安装一个桥接工具：

```shell
npm install -g @vue/cli-init
# `vue init` 的运行效果将会跟 `vue-cli@2.x` 相同
vue init webpack my-project
```

:::

### Vue CLI2 初始化项目

执行`vue init webpack my-project`后的一些选项：

```text
- Project name                                                            —— 项目名称
- Project description                                                     —— 项目描述
- Author                                                                  —— 作者
- Vue build                                                               —— 项目构建方式
  - Runtime + Compiler
  - Runtime only
- Install vue-router?                                                     —— 是否安装路由
- Use ESLint to lint your code?                                           —— 是否使用 eslint 代码规范
  - yes -> Pick an ESLint preset
    - Standard
    - Airbnb
    - none(configure it yourself)
- Set up unit tests                                                       —— 单元测试
- Setup e2e tests whit Nightwatch?                                        —— 端到端单元测试
- Should we run `npm install` for you after the project has been created? —— 使用哪一个包管理器
```

生成的项目文件目录：

```text
- build
- config
- src
  - assets
  - components
  - App.vue
  - main.js
- static          —— 静态资源，原封不动的复制到 dist 中
- .babelrc        —— babel 的配置
- .editorconfig   —— 保证团队代码编辑风格的统一
- .eslintignore   —— 忽略 eslint 规则的文件/文件夹
- .eslintrc.js    —— eslint 的配置
- .gitignore      —— git 版本控制忽略的文件/文件夹
- .postcsssrc.js  —— css 转化的配置
- index.html      —— index 的模板
- package.json
- README.md
```

### Vue CLI 3

与 vue-cli 2 的区别

1. vue-cli 3 是基于 webpack 4 打造，vu-cli 2 还是 webpack 3
2. vue-cli 3 的设计原则是"0 配置"，移除了跟文件目录下的 build、config 等配置文件的目录
3. vue-cli 3 增加了 vue ui 命令，提供了可视化配置，更加人性化
4. 移除了 static 文件夹，新增了 public 问加纳及，并且 index.html 移动到 public 中
