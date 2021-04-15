[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

# 全栈小白开发手册

在线预览地址：https://hilanmiao.github.io/standards-recommendations/

[https://github.com/hilanmiao/standards-recommendations]: https://github.com/hilanmiao/standards-recommendations

[PR]: https://github.com/hilanmiao/standards-recommendations/pulls

[issue]: https://github.com/hilanmiao/standards-recommendations/issues

[智能个人助理全栈开源项目]: https://github.com/hilanmiao

[VuePress]: https://vuepress.vuejs.org/zh/
[VuePress部署]: https://vuepress.vuejs.org/zh/guide/deploy.html#github-pages

## 介绍

本项目的初衷是约束本人开发行为和方便创建标准代码仓库，也可以作为小团队的基本开发手册。

本项目使用[VuePress]搭建，Github地址[https://github.com/hilanmiao/standards-recommendations]，欢迎Star~，如果你有好的意见或建议，欢迎给我们提 [issue] 或 [PR]。

开发人员务必按照手册上的要求进行学习和编码，提高工作效率，减少bug，避免在「浪费时间」和「无价值」的小事上投入太多精力。

规则就是用来执行的，争取大家的代码风格都一样，大家的工作环境都一样，而这需要所有人一起不断的完善规则。

编码可以参考[智能个人助理全栈开源项目]上提供的案例，提供一个完整的全栈代码样板，包含：
- 后端(backend)
- 前端(frontend)
- 桌面端(desktopApp)
- 网站(web)
- 小程序(miniProgram)
- App(mobileApp)


## 快速开始

```bash
# 工程包管理工具依赖`yarn`,请先执行 `yarn install`，没有按照`yarn`的请下全局安装一下。
yarn install

# vuepress 本地快速预览
yarn run docs:dev

# vuepress 本地构建，打包
yarn run docs:build

```

## 部署到Github page

项目根目录下已经创建了deploy.sh文件，修改仓库地址并运行即可，具体内容参考[VuePress部署]。
