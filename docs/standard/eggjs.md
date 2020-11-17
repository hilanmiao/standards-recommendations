# EggJs规范

<style>
table {
    font-size: 12px;    
}
</style>

::: warning 注意
Linux 大小写敏感
Linux _下划线是主流
:::

## 部署运行
拷贝以下文件或目录到服务器相应位置
- app (代码)
- config (配置)
- app.js (启动文件)
- package.json (依赖)

```
npm install
npm run start
```

## 命名规则

- 项目 `kebab-case`
- 目录/文件夹 `kebab-case`
- 文件 `snake_case`
- 数据库 库名、表名、字段名均使用 `snake_case`

## 目录

```
egg-project
├── app
│   ├── controller
│   ├── extend
│   ├── middleware
│   ├── model
│   ├── public
│   ├── router
│   ├── schedule
│   ├── service
│   ├── view
|   ├── router.js
├── config
├── logs
├── node_modules
├── run
├── typings
├── .eslintrc
├── .gitingore
├── .sequelizerc
├── app.js
├── agent.js
└── package.json
```

以上目录约定如下：
- app/controller/ 用于解析用户输入，处理后返回响应结果。
- app/extend/ 用于框架内部对象的拓展(request,response,context,application)和工具类(helper)的编写。
- app/middleware/ 用于编写中间件。
- app/model/ 用于放置数据模型。
- app/public/ 用于放置静态文件。
- app/router/ 用户放置分离的路由。
- app/schedule/ 用于放置定时任务。
- app/service/ 用于编写业务逻辑。
- app/view/ 用于放置模板文件。
- app/router.js 用于配置URL路由规则。
- config/ 用于放置整个项目的配置。
- logs/ 日志存放目录。
- node_modules/ 项目所需要的模块文件。
- run/ 项目运行时，生成的配置文件(可忽略)。
- typings/ 运行时自动生成的 typeScript 文件(暂不使用typeScript开发)。
- .eslintrc 插件 eslint 的配置文件。
- .gitingore git 忽略跟踪文件或目录的规则。
- .sequelizerc 插件 egg-sequelize 的数据迁移配置文件（暂时不用）。
- app.js 用于自定义启动时的初始化工作。
- agent.js 用于自定义启动时的初始化工作。
- package.json 定义项目的模块及配置信息等。

## RESTFul Api
### 状态码
http 状态码 统一使用200， 使用自定义状态码进行业务处理
```json
{
  "code": 200,
  "data": {
    "code": 99999,
    "data": {},
    "message": ""
  } 
}
```

### 版本
通过版本号可以区分api的版本。

- 通过/api/v1/*代表v1版本
- 通过/api/v2/*代表v2版本

### URL
- 只能是名词不能是动词
- 小写字符
- 不可使用下划线'_'，可以使用连字符'-'
- CRUD不可出现在URL中
- 参数列表要用encode
- 避免层级过深的URI，尽量使用查询参数代替路径中的实体导航，如GET /user?sex=female&age=30

具体形式如下：
1. /api/{资源名}/{描述名}
2. /api/{资源名}/{对象id}/{描述名}
例子：

 - GET http://www.demo.com/api/v1/user/my/login-log 获取我的登录日志
 - GET http://www.demo.com/api/v1/user/1 获取用户1的信息
 - POST http://www.demo.com/api/v1/user/login 登录
 - PUT http://www.demo.com/api/v1/user/1 更新用户1的全部信息
 - DELETE http://www.demo.com/api/v1/user/1 删除用户1
 - PATCH http://www.demo.com/api/v1/user/1 更新用户1部分信息
 - GET http://www.demo.com/api/v1/user/1/role 获取用户1的权限信息、
