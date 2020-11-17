# VueJs规范

<style>
table {
    font-size: 12px;    
}
</style>

## 风格指南
主要是参照 [vue 官方风格指南](https://cn.vuejs.org/v2/style-guide/) 。页面内代码规范参考html，css，js规范，其中规则大部分已经配置在`eslint`中了, 
使用 `eslint` 校验并格式化代码 。

### 命名规则

驼峰一般只是针对代码的规约。

#### 项目名、目录、文件
主要：短横线连接 kebab-case

#### Component
所有的 `Component` 文件都是以大写开头 (PascalCase)，这也是官方所[推荐的](https://cn.vuejs.org/v2/style-guide/index.html#%E5%8D%95%E6%96%87%E4%BB%B6%E7%BB%84%E4%BB%B6%E6%96%87%E4%BB%B6%E7%9A%84%E5%A4%A7%E5%B0%8F%E5%86%99%E5%BC%BA%E7%83%88%E6%8E%A8%E8%8D%90) 。

但除了 `index.vue` 。

例子：

- `@/components/BackToTop/index.vue`
- `@/components/Charts/Line.vue`
- `@/views/example/components/Button.vue`

#### JS 文件
所有的 `.js` 文件都遵循横线连接 (kebab-case)。

例子：

- `@/utils/open-window.js`
- `@/views/svg-icons/require-icons.js`
- `@/components/MarkdownEditor/default-options.js`

#### Views

在`views`文件下，代表路由的`.vue`文件都使用横线连接 (kebab-case)，代表路由的文件夹也是使用同样的规则。

例子：

- `@/views/svg-icons/index.vue`
- `@/views/svg-icons/require-icons.js`

使用横线连接 (kebab-case)来命名`views`主要是出于以下几个考虑。

- 横线连接 (kebab-case) 也是官方推荐的命名规范之一 [文档](https://cn.vuejs.org/v2/style-guide/index.html#%E5%8D%95%E6%96%87%E4%BB%B6%E7%BB%84%E4%BB%B6%E6%96%87%E4%BB%B6%E7%9A%84%E5%A4%A7%E5%B0%8F%E5%86%99-%E5%BC%BA%E7%83%88%E6%8E%A8%E8%8D%90)
- `views`下的`.vue`文件代表的是一个路由，所以它需要和`component`进行区分(component 都是大写开头)
- 页面的 `url` 也都是横线连接的，比如`https://www.xxx.admin/export-excel`，所以路由对应的view应该要保持统一
- 没有大小写敏感问题

## 代码模板

```

```
