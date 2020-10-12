---
sidebar: auto
---

# 指南

[https://github.com/hilanmiao/standards-recommendations]: https://github.com/hilanmiao/standards-recommendations

[PR]: https://github.com/hilanmiao/standards-recommendations/pulls

[issue]: https://github.com/hilanmiao/standards-recommendations/issues

[标准代码库]: https://github.com/hilanmiao

[VuePress]: https://vuepress.vuejs.org/zh/

## 介绍
::: tip 提示
本项目的初衷是约束本人开发行为和方便创建标准代码仓库，也可以作为小团队的基本开发手册。本项目使用[VuePress]搭建，Github地址[https://github.com/hilanmiao/standards-recommendations]，欢迎Star~，如果你有好的意见或建议，欢迎给我们提 [issue] 或 [PR]。
:::
开发人员务必按照手册上的要求进行学习和编码，提高工作效率，减少bug，避免在「浪费时间」和「无价值」的小事上投入太多精力。

规则就是用来执行的，争取大家的代码风格都一样，大家的工作环境都一样，而这需要所有人一起不断的完善规则。

编码可以参考[标准代码库]上提供的案例。

## 开发工具 <Badge text="强制" type="error"/>
::: warning 重要！
由公司统一指定，强制所有人使用相同的工具。如果有更合适的工具可以建议给公司，
由公司验证后添加或替换。
:::
- `Webstorm` JavaScript 开发工具
- `Git` 版本控制工具
- `SourceTree` Git图形界面工具
- `Gitee` 企业代码托管和协作平台
- `TAPD` 敏捷产品研发平台
- `FileZilla` 开源FTP解决方案  
- `Terminus` 开源、高度可配置、高颜值、支持多种操作系统的终端
- `ESLint` 语法正确、风格统一的代码检测插件

## 技术栈 <Badge text="强制" type="error"/>
::: warning 重要！
几乎所有的核心技术都会体现在公司的[标准代码库]里，照着标准案例编写即可。
如果有更合适的代码可以提交到[标准代码库]，由公司验证后发布。
:::
### 前端
- `Vue全家桶` 即 Vue+Vuex+Vue Router+axios+UI 库。具体来说包括：Vue 作为整体框架，通过 Vue CLI 构建项目；Vuex 即 Vue 的中心化管理方案来集中存储、管理应用的所有组件状态；Vue Router 即 Vue 的路由管理器来管理组件路由；axios 作为基于 Promise 的 HTTP 库负责浏览器端即服务器端的数据传输；ElementUI、Bootstrap 等 UI 组件库作为 UI 框架库。
- `ElementUI` 一套为开发者、设计师和产品经理准备的基于Vue 2.0 的桌面端组件库。
- `VantUI` 开源的移动端组件库，官方提供了 Vue 版本和微信小程序版本，并由社区团队维护 React 版本。
- `Nginx` （发音同“engine X”）是异步框架的网页服务器，也可以用作反向代理、负载平衡器和HTTP缓存。
### 后端
- `Egg.js` 基于Koa2的Node.js框架，为企业级框架和应用而生。奉行『约定优于配置』，按照一套统一的约定进行应用开发，团队内部采用这种方式可以减少开发人员的学习成本。
### 桌面端
- `Electron` （原名为Atom Shell）是GitHub开发的一个开源框架。它允许使用Node.js（作为后端）和Chromium（作为前端）完成桌面GUI应用程序的开发。
- `Electron-Vue(过时)` 基于 vue (基本上是它听起来的样子) 来构造 electron 应用程序的样板代码。
### 小程序
- `Uni-app` 使用 Vue.js 开发所有前端应用的框架，开发者编写一套代码，可发布到iOS、Android、H5、以及各种小程序（微信/支付宝/百度/头条/QQ/钉钉/淘宝）、快应用等多个平台。
### 网站
- `Bulma` 基于 Flexbox 构建的免费、开源的 CSS 框架
- `Nuxt.js` 基于Vue.js 的轻量级应用框架，可用来创建服务端渲染(SSR) 应用，也可充当静态站点引擎生成静态站点应用

