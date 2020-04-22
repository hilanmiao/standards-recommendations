# 标准建议

## 数据库
- 数据库表名统一使用下划线，如login_log
- 字段统一使用下划线，如dispaly_name
- 代码中统一使用驼峰，sequelize可以对应实际数据库的下划线表或字段，前提是开启了underscored配置项

### Egg.js 项目命名规范
- egg.js 代码文件使用下滑线。官方原话：框架在加载文件时会进行转换，因为文件命名风格和 API 风格存在差异。我们推荐文件使用下划线，而 API 使用驼峰。比如 app/service/user_info.js 会转换成 app.service.userInfo。
- 插件命名使用中划线，如：egg-redis

### Vue项目中的文件/文件夹命名规范

#### 1.vue 风格指南：https://cn.vuejs.org/v2/style-guide/

#### 2.文件夹命名规范

- 属于components文件夹下的子文件夹，使用大写字母开头的PascalBase风格

        1.全局通用的组件放在 /src/components下
        
        2.其他业务页面中的组件，放在各自页面下的 ./components文件夹下
        
        3.每个components文件夹下最多只有一层文件夹，且文件夹名称为组件的名称，文件夹下必须有index.vue或

- 其他文件夹统一使用kebab-case的风格

全局公共组件：/src/components示例
```
  - [components]
    - [Breadcrumb]
      - index.vue
```

业务页面内部封装的组件：以 /src/views/layout/components示例

```
-[src]
  - [views]
    - [layout]
      - [components]
        - [Sidebar]
          - index.vue
          - Item.vue
          - SidebarItem.vue
        - AppMain.vue
        - index.js
        - Navbar.vue`
```

#### 3.文件命名规范

##### 3.1 *.js文件命名规范

    1.属于类的.js文件，除index.js外，使用PascalBase风格
    
    2.其他类型的.js文件，使用kebab-case风格
    
    3.属于Api的，统一加上Api后缀

##### 3.2 *.vue文件命名规范

    除index.vue之外，其他.vue文件统一用PascalBase风格
    
##### 3.2 *.less等样式文件命名规范

    统一使用kebab-case命名风格

# 变量命名

- 常量使用全大写+下划线，如：SERVER_PORT
