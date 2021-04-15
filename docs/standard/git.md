# Git规范

## Git 分支模型

### master分支

master分支表示一个稳定的发布版本.

- 场景: 所有应用会跟随版本迭代, 在dev分支测试稳定后, 会合并到master分支, 并使用tag标记应用版本
- tag规范: `v{version}`, 例如v0.1.0
- 人员: 由项目负责人进行审核合并, 普通开发者没有权限

### dev分支

开发者主要工作的分支, 最新的特性或bug修复都会提交到这个分支. 开发者如果在该分支进行了提交，在push到远程之前应该先pull一下， 并尽量使用rebase模式，保证分支的简洁

- 命名规范: dev
- tag规范: 在dev分支中也可能会经历发布过程, 例如bug修复版本. 这里同样使用tag来标记这些发布. 例如v0.1.1
- 提交规范：如果实在开发分支上进行开发，在推送到远程之前，应该使用`git rebase`形式更新本地分支。

### feature分支

涉及多人协作或者大功能的开发, 应该从dev分支checkout出独立的feature分支, 避免干扰dev分支

- 场景:
  - 涉及多人协作: 团队多个成员在同一个项目下负责开发不同的功能, 这时候每个成员在自己的feature分支独立开发
  - 大功能开发: 大功能开发跨越周期比较长, 需要多次迭代才会稳定. 这时候应该在独立的分支上开发. 方便跟踪历史记录, 也免于干扰dev分支的迭代和发布
- 命名规范
  - feature/name: name是功能名称
  - feature/version: 这也是团队常见的模式, 当无法使用一个功能名称来描述时, 可以使用版本号作为’功能’
- 合并时机
  1. 当feature分支迭代稳定, 并通过测试后, 合并到dev分支. 合并到dev后, **feature分支的生命周期就结束了**. 后续bug修复和功能优化直接在dev开发
  2. 当多个feature分支需要合并对外发布临时版本时. 合并到preview分支 . ⚠️这种情况不应该合并到dev分支, 因为feature分支可能还不稳定或未完成. 比如为了联调某些功能.
- 合并方式
  - 不要使用fast-forward. 这样可以在分支图上查看到分支历史

### preview分支

临时的预览分支, preview分支用于临时合并feature分支, 这其中可能会修复某些bug或者冲突. 可以选择性地将这些提交cherrypick回feature分支. 当预览结束后就可以销毁preview分支

### release分支

遵循gitflow规范

- 场景: 需要为某个正式版本修复bug(hotFix)时, 从master的对应tag中checkout release分支
- 命名规范: release/{version}
- 如何修复
  + 如果对应bug可以在dev分支直接被修复, 可以先提交到dev分支(或者已经修复了), 然后再cherrypick到release分支
  + 如果bug在新版本无法复现. 比如新版本升级了依赖. 那么在release分支直接修复即可


---

## 提交信息规范
一个好的提交信息, 会帮助你提高项目的整体质量.

- why
    - 格式统一的提交信息可以帮助自动化生成changelog
    - 版本库不只是存放代码的仓库, 也记录项目的开发记录. 这些记录应该可以帮助后来者快速地学习和回顾代码. 也应该方便其他协作者review你的代码
- 原则: 半年后, 你能看懂你的commit做了什么东西
- 方式: 使用git commit(打开编辑器)而不是git commit -m
- 必要信息
    - 为什么进行这次提交?
        - 提交改变了什么, 让其他reviewer更容易审核代码和忽略无关的改变
    - 如何解决的问题?
        - 问题是什么导致的？
        - 简短说明使用什么方式, 策略, 修复了问题.
    - 变化可能影响哪些地方
        - 说明变动功能的细节。 一个提交不应该做超过2个功能的变动

>[约定式提交 1.0.0 官方中文文档](https://www.conventionalcommits.org/zh-hans/v1.0.0/ "约定式提交 1.0.0 官方中文文档")
前半段直接引用官方文档的部分内容！

## 约定式提交 1.0.0

约定式提交规范是一种基于提交信息的轻量级约定。
它提供了一组简单规则来创建清晰的提交历史；
这更有利于编写自动化工具。
通过在提交信息中描述功能、修复和破坏性变更，
使这种惯例与 [SemVer](http://semver.org) 相互对应。

提交说明的结构如下所示：

---

原文：

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

译文：

```
<类型>[可选 范围]: <描述>

[可选 正文]

[可选 脚注]
```
---

<br />
提交说明包含了下面的结构化元素，以向类库使用者表明其意图：

1. **fix:** _类型_ 为 `fix` 的提交表示在代码库中修复了一个 bug（这和语义化版本中的 [`PATCH`](https://semver.org/lang/zh-CN/#%E6%91%98%E8%A6%81) 相对应）。
2. **feat:** _类型_ 为 `feat` 的提交表示在代码库中新增了一个功能（这和语义化版本中的 [`MINOR`](https://semver.org/lang/zh-CN/#%E6%91%98%E8%A6%81) 相对应）。
3. **BREAKING CHANGE:** 在脚注中包含 `BREAKING CHANGE:` 或 <类型>(范围) 后面有一个 `!` 的提交，表示引入了破坏性 API 变更（这和语义化版本中的 [`MAJOR`](https://semver.org/lang/zh-CN/#%E6%91%98%E8%A6%81) 相对应）。
   破坏性变更可以是任意 _类型_ 提交的一部分。
1. 除 `fix:` 和 `feat:` 之外，也可以使用其它提交 _类型_ ，例如 [@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional)（基于 [Angular 约定](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines)）中推荐的 `build:`、`chore:`、
   `ci:`、`docs:`、`style:`、`refactor:`、`perf:`、`test:`，等等。
1. 脚注中除了 `BREAKING CHANGE: <description>` ，其它条目应该采用类似
   [git trailer format](https://git-scm.com/docs/git-interpret-trailers) 这样的惯例。

其它提交类型在约定式提交规范中并没有强制限制，并且在语义化版本中没有隐式影响（除非它们包含 BREAKING CHANGE）。
<br /><br />
可以为提交类型添加一个围在圆括号内的范围，以为其提供额外的上下文信息。例如 `feat(parser): adds ability to parse arrays.`。

## 示例

### 包含了描述并且脚注中有破坏性变更的提交说明
```
feat: allow provided config object to extend other configs

BREAKING CHANGE: `extends` key in config file is now used for extending other config files
```

### 包含了 `!` 字符以提醒注意破坏性变更的提交说明
```
refactor!: drop support for Node 6
```

### 包含了 `!` 和 BREAKING CHANGE 脚注的提交说明
```
refactor!: drop support for Node 6

BREAKING CHANGE: refactor to use JavaScript features not available in Node 6.
```

### 不包含正文的提交说明
```
docs: correct spelling of CHANGELOG
```

### 包含范围的提交说明
```
feat(lang): add polish language
```

### 包含多行正文和多行脚注的提交说明
```
fix: correct minor typos in code

see the issue for details

on typos fixed.

Reviewed-by: Z
Refs #133
```

## 约定式提交规范

本文中的关键词 “必须（MUST）”、“禁止（MUST NOT）”、“必要（REQUIRED）”、“应当（SHALL）”、“不应当（SHALL NOT）”、“应该（SHOULD）”、“不应该（SHOULD NOT）”、“推荐（RECOMMENDED）”、“可以（MAY）” 和 “可选（OPTIONAL）” ，其相关解释参考 [RFC 2119](https://www.ietf.org/rfc/rfc2119.txt) 。

1. 每个提交都**必须**使用类型字段前缀，它由一个名词构成，诸如 `feat` 或 `fix` ，
   其后接**可选的**范围字段，**可选的** `!`，以及**必要的**冒号（英文半角）和空格。
1. 当一个提交为应用或类库实现了新功能时，**必须**使用 `feat` 类型。
1. 当一个提交为应用修复了 bug 时，**必须**使用 `fix` 类型。
1. 范围字段**可以**跟随在类型字段后面。范围**必须**是一个描述某部分代码的名词，并用圆括号包围，例如： `fix(parser):`
1. 描述字段**必须**直接跟在 <类型>(范围) 前缀的冒号和空格之后。
   描述指的是对代码变更的简短总结，例如： _fix: array parsing issue when multiple spaces were contained in string_ 。
1. 在简短描述之后，**可以**编写较长的提交正文，为代码变更提供额外的上下文信息。正文**必须**起始于描述字段结束的一个空行后。
1. 提交的正文内容自由编写，并**可以**使用空行分隔不同段落。
1. 在正文结束的一个空行之后，**可以**编写一行或多行脚注。每行脚注都**必须**包含
   一个令牌（token），后面紧跟 `:<space>` 或 `<space>#` 作为分隔符，后面再紧跟令牌的值（受
   [git trailer convention](https://git-scm.com/docs/git-interpret-trailers) 启发）。
1. 脚注的令牌**必须**使用 `-` 作为连字符，比如 `Acked-by` (这样有助于
   区分脚注和多行正文)。有一种例外情况就是 `BREAKING CHANGE`，它**可以**被认为是一个令牌。
1. 脚注的值**可以**包含空格和换行，值的解析过程**必须**直到下一个脚注的令牌/分隔符出现为止。
1. 破坏性变更**必须**在提交信息中标记出来，要么在 <类型>(范围) 前缀中标记，要么作为脚注的一项。
1. 包含在脚注中时，破坏性变更**必须**包含大写的文本 `BREAKING CHANGE`，后面紧跟着冒号、空格，然后是描述，例如：
   _BREAKING CHANGE: environment variables now take precedence over config files_ 。
1. 包含在 <类型>(范围) 前缀时，破坏性变更**必须**通过把 `!` 直接放在 `:` 前面标记出来。
   如果使用了 `!`，那么脚注中**可以**不写 `BREAKING CHANGE:`，
   同时提交信息的描述中**应该**用来描述破坏性变更。
1. 在提交说明中，**可以**使用 `feat` 和 `fix` 之外的类型，比如：_docs: updated ref docs._ 。
1. 工具的实现必须**不区分**大小写地解析构成约定式提交的信息单元，只有 `BREAKING CHANGE` **必须**是大写的。
1. BREAKING-CHANGE 作为脚注的令牌时**必须**是 BREAKING CHANGE 的同义词。

## 为什么使用约定式提交

* 自动化生成 CHANGELOG。
* 基于提交的类型，自动决定语义化的版本变更。
* 向同事、公众与其他利益关系者传达变化的性质。
* 触发构建和部署流程。
* 让人们探索一个更加结构化的提交历史，以便降低对你的项目做出贡献的难度。

## FAQ

### 在初始开发阶段我该如何处理提交说明？

我们建议你按照假设你已发布了产品那样来处理。因为通常总 *有人* 使用你的软件，即便那是你软件开发的同事们。他们会希望知道诸如修复了什么、哪里不兼容等信息。

### 提交标题中的类型是大写还是小写?

大小写都可以，但最好是一致的。

### 如果提交符合多种类型我该如何操作？

回退并尽可能创建多次提交。约定式提交的好处之一是能够促使我们做出更有组织的提交和 PR。

### 这不会阻碍快速开发和迭代吗？

它阻碍的是以杂乱无章的方式快速前进。它助你能在横跨多个项目以及和多个贡献者协作时长期地快速演进。

### 约定式提交会让开发者受限于提交的类型吗（因为他们会想着已提供的类型）？

约定式提交鼓励我们更多地使用某些类型的提交，比如 `fixes`。除此之外，约定式提交的灵活性也允许你的团队使用自己的类型，并随着时间的推移更改这些类型。

### 这和 SemVer 有什么关联呢？

`fix` 类型提交应当对应到 `PATCH` 版本。`feat` 类型提交应该对应到 `MINOR` 版本。带有 `BREAKING CHANGE` 的提交不管类型如何，都应该对应到 `MAJOR` 版本。

### 我对约定式提交做了形如 `@jameswomack/conventional-commit-spec` 的扩展，该如何版本化管理这些扩展呢？

我们推荐使用 SemVer 来发布你对于这个规范的扩展（并鼓励你创建这些扩展！）

### 如果我不小心使用了错误的提交类型，该怎么办呢？

#### 当你使用了在规范中但错误的类型时，例如将 `feat` 写成了 `fix`

在合并或发布这个错误之前，我们建议使用 `git rebase -i` 来编辑提交历史。而在发布之后，根据你使用的工具和流程不同，会有不同的清理方案。

#### 当使用了 *不在* 规范中的类型时，例如将 `feat` 写成了 `feet`

在最坏的场景下，即便提交没有满足约定式提交的规范，也不会是世界末日。这只意味着这个提交会被基于规范的工具错过而已。

### 所有的贡献者都需要使用约定式提交规范吗？

并不！如果你使用基于 squash 的 Git 工作流，主管维护者可以在合并时清理提交信息——这不会对普通提交者产生额外的负担。
有种常见的工作流是让 git 系统自动从 pull request 中 squash 出提交，并向主管维护者提供一份表单，用以在合并时输入合适的 git 提交信息。

### 约定式提交规范中如何处理还原（revert）提交?

还原提交（Reverting）会比较复杂：你还原的是多个提交吗？如果你还原了一个功能模块，下次发布的应该是补丁吗？

约定式提交不能明确的定义还原行为。所以我们把这个问题留给工具开发者，
基于 _类型_ 和 _脚注_ 的灵活性来开发他们自己的还原处理逻辑。

一种建议是使用 `revert` 类型，和一个指向被还原提交摘要的脚注：

```
revert: let us never again speak of the noodle incident

Refs: 676104e, a215868
```

## 关于

约定式提交规范受到了 [Angular 提交准则](https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md#commit)的启发，并在很大程度上以其为依据。

## 用工具实现规范提交

### commitizen
[commitizen/cz-cli](https://github.com/commitizen/cz-cli): Node.js 工具，用于创建遵循约定式提交规范的提交信息。
```
# 全局安装
$ npm install -g commitizen
```
`Commitizen`支持多种不同的提交规范，可以安装和配置不同的适配器实现。以`Conventional Commit:cz-conventional-changelog(一个符合 Angular团队规范的 preset)`规范为例
```
# 本地安装（不是所有项目都要符合规范，所以用本地配置更灵活）
commitizen init cz-conventional-changelog --save-dev --save-exact
```
安装完成后，查看是否在`package.json`中已加入`cz-conventional-changelog`信息：

```
...
...
  "devDependencies": {
    "cz-conventional-changelog": "^3.0.2"
  },
  "config": {
    "commitizen": {
      "path": "./node_modules/cz-conventional-changelog"
    }
  }
}
```
安装完成后，使用`git-cz`替代`git commit`测试提交操作，通过提示信息辅助你完成标准化的提交日志。
```
E:\workSpace\standards-recommendations>git-cz
cz-cli@4.2.3, cz-conventional-changelog@3.3.0

? Select the type of change that you're committing: (Use arrow keys)
> feat:     A new feature
  fix:      A bug fix
  docs:     Documentation only changes
  style:    Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
  refactor: A code change that neither fixes a bug nor adds a feature
  perf:     A code change that improves performance
  test:     Adding missing tests or correcting existing tests
(Move up and down to reveal more choices)

```


### commitlint
[commitlint](https://github.com/conventional-changelog/commitlint): 可以检查 commit messages 是否符合常规提交格式，也需要一份校验配置，推荐 `@commitlint/config-conventional`(符合 Angular团队规范)
```
npm i --save-dev @commitlint/config-conventional @commitlint/cli
```
在项目根目录创建 commitlint.config.js 文件并设置校验规则：

```js
module.exports = {
  extends: ["@commitlint/config-conventional"],
  // rules 里面可以设置一些自定义的校验规则
  rules: {},
};
```
也许 Angular 的那套规范我们不习惯, 那么可以通过指定 Adapter [cz-customizable](https://github.com/leoforfree/cz-customizable)指定一套符合自己团队的规范.你也可以使用自定义配置，如：把配置选项变成中文的。

### husky
[husky](https://github.com/typicode/husky)：可以让 `git hooks` 变得更简单，在特定的重要动作触发自定义脚本。比如：当我们在提交或者推送代码的时候，可以使用它验证提交信息、运行测试、格式化代码、触发 CI/CD 等。

官网文档：https://typicode.github.io/husky/#/?id=usage （写作时安装版本6.x，和4.x不兼容）

官方提供了一键安装和配置脚本，推荐使用。
```shell
npx husky-init && npm install       # npm
npx husky-init && yarn              # Yarn 1
yarn dlx husky-init --yarn2 && yarn # Yarn 2
```

它将会生成`.husky`目录，修改`package.json`并创建一个`pre-commit`示例钩子文件。默认情况下当你提交的时候它会执行`npm test`（以后这里可以配置eslint），如下图：

![](https://oscimg.oschina.net/oscnet/up-986025901160ffa73a69eef80aa374b0a5f.png)
![](https://oscimg.oschina.net/oscnet/up-593b69663bb3e1519747983574c48bd74f6.png)

我们`package.json scripts`中没有`test`脚本，所以运行`git commit...`会出错，如下图，所以我们暂时注释掉`npm test`或者先删掉`pre-commit`文件。
```
E:\workSpace\standards-recommendations>git commit -m "Keep calm and commit"

> standards-recommendations@1.0.0 test E:\workSpace\standards-recommendations
> echo 'Error: no test specified'

'Error: no test specified'
[master 2605312] Keep calm and commit
 1 file changed, 0 insertions(+), 0 deletions(-)
 delete mode 100644 husky.config.js

```
### 创建commit-msg钩子
使用`husky add`命令创建 ./husky/commit-msg 钩子：
```
# npm
npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'

# yarn
yarn husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'

```
> windows下不是很好使。... 'npx --no-...'，中间有空格不能正确识别？只能`npx husky add .husky/commit-msg`先创建文件再手动修改内容了。



附上目前git支持的hook名称：
![](https://oscimg.oschina.net/oscnet/up-bbaa51d611c7c4b12dfbb280682db36fcfe.png)



###  git commit 测试
```
E:\workSpace\standards-recommendations>git commit -m "测试comimit-msg钩子"
⧗   input: 测试comimit-msg钩子
✖   subject may not be empty [subject-empty]
✖   type may not be empty [type-empty]

✖   found 2 problems, 0 warnings
ⓘ   Get help: https://github.com/conventional-changelog/commitlint/#what-is-commitlint

husky - commit-msg hook exited with code 1 (error)

```
如果某一次提交想要禁用husky，可以添加参数--no-verify

```
$ git commit --no-verify -m "xxx"
```


## 徽章
在`README`中添加`commitizen`友好徽章
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

在`README`中添加规范提交徽章
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
