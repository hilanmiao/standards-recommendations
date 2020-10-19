---
sidebarDepth: 3
---

# MySql规范

<style>
table {
    font-size: 12px;    
}
</style>

## 数据库环境介绍
通常来讲，各个互联网公司的数据库分为5个数据库环境：

1. dev : 开发环境, 开发可读写,可修改表结构; 常用的163的数据库表; 开发人员可以修改表结构, 可以随意修改其中的数据; 但是需要保证不影响其他开发同事; 

2. qa : 测试环境, 开发可读写, 开发人员可以通过工具修改表结构; 

3. sim: 模拟环境, 开发可读写, 通过web平台;发起上线请求时，会先在这个环境上进行预执行， 这个环境也可供部署上线演练或压力测试使用 可以读写;

4. real: 生产数据库从库（准实时同步）,只读环境,不允许修改数据,不允许修改表结构; 供线上问题查找,数据查询等使用;

5. online: 线上环境;开发人员不允许直接在线上环境进行数据库操作,如果需要操作必须找DBA进行操作并进行相应记录;

这些环境的机器，一定要做到权限划分明确，读写帐号分离，并且有辨识度，能区分具体业务。例如用户名w_wap, r_wap 能看出来，读写帐号是wap应用的。

## 数据库命名规范

1. 尽量简洁明义，能够一眼看出来这个数据库是用来做什么的；

2. 使用名词作为数据库名称，并且只用英文，不用中文拼音；

3. 使用英文字母，全部小写，控制在3-7个字母以内；

4. 如果有多个单词，则使用下划线隔开，不建义驼峰命名；

例如，每个公司都有crm业务，那就叫做xx_crm, 字符集统一utf8。字符集踩过的坑很多，为了通用性统一utf8。

```sql
create database xx_crm default character set=utf8;
```

## 表命名规范

1. 具备统一前缀，对相关功能的表应当使用相同前缀，如acl_xxx，house_xxx,ppc_xxx；其中前缀通常为这个表的模块或依赖主实体对象的名字，通常来讲表名为：业务_动作_类型，或是业务_类型；

2. 表名使用英文小写单词，如果有多个单词则使用下划线隔开；

3.表名简介，使用常见单词，避免使用长单词和生僻词；

4. 表引擎取决于实际应用场景及当前数据库中的已经存在的存储引擎；日志及报表类表建议用myisam，与交易，审核，金额相关的表建议用innodb引擎。总体来讲数据库默认innodb；

5. 数据表必须有主键，且建议均使用auto_increment的id作为主键（与业务无关）,和业务相关的要做为唯一索引；

6. 默认使用utf8字符集（由于数据库定义使用了默认，数据表可以不再定义，但为保险起见，建议都写上）；

7. 所有的表都必须有备注，写明白这个表中存放的数据内容；

8. 预估表数据量，如果数据量较大（超过500w）则需要考虑分表策略。可以等量均衡分表或根据业务规则分表均可。要分表的数据表必须与DBA商量分表策略；

9. 职责相近的表，命名规则应该相同；如合同申请，账户信息，交友相关等；

举个例子，一张在线冲值记录表：user_bank_deposit 这个就非常符合标准，如果叫做userBankDeposit或是user_chongzhi，就非常不友好。

```sql
CREATE TABLE `house_refresh_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '自增ID',
  `fangid` int(11) NOT NULL COMMENT '房贴子ID',
  `refresh_time` int(11) NOT NULL COMMENT '刷新时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `fangid` (`fangid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='房刷新记录表'
```

## 字段命名规范

1. 数据库字段命名与表名命名类似：

2. 使用小写英文单词，如果有多个单词使用下划线隔开；

3. 使用简单单词，避免生僻词；

4. 字段应当有注释，描述该字段的用途及可能存储的内容，如枚举值则建议将该字段中使用的内容都定义出来；

5. 是别的表的外键均使用xxx_id的方式来表明；

6. 表的主键一般都约定成为id，自增类型；

7. 时间字段，除特殊情况一律采用int来记录unix_timestamp；

8. 网络IP字段，除特殊情况一律用bigint来记录inet_aton值；

9. 所有字段，均为非空，最好显示指定默认值；

10. 有些驱动对tinyint支持不够好，通常建义按容量来选择字段；

11. text字段尽量少用，或是拆到冗余表中；

```sql
CREATE TABLE `wanted_post` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `puid` int(10) unsigned NOT NULL,
  `user_id` int(10) NOT NULL COMMENT '发贴用户的id',
  `username` varchar(50) NOT NULL COMMENT '发贴用户的用户名',
  `city` smallint(4) NOT NULL COMMENT '所在城市',
  `ip` bigint(14) NOT NULL COMMENT '发帖人的ip',
  `district_id` tinyint(2) NOT NULL COMMENT '所在区域的id',
  `district_name` varchar(20) NOT NULL COMMENT '行政区名字',
  `street_id` tinyint(2) NOT NULL COMMENT '所在街道(地标)的id',
  `street_name` varchar(20) NOT NULL COMMENT '小区名字',
  `title` varchar(255) NOT NULL COMMENT '帖子的标题',
  `description` text NOT NULL COMMENT '帖子详情描述',
  `post_at` int(11) NOT NULL COMMENT '用户发帖时间,数据创建的时间,使用整型存储',
  `refresh_at` int(11) NOT NULL COMMENT '帖子被修改的时间,整型存储',
  `show_time` int(11) NOT NULL COMMENT '帖子显示时间',
  `age_max` int(11) NOT NULL DEFAULT '0' COMMENT '招聘最小年龄',
  `age_min` int(11) NOT NULL DEFAULT '0' COMMENT '招聘最大年龄',
  `post_refresh_at` int(11) NOT NULL COMMENT '刷新时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `idx_puid` (`puid`),
  KEY `user_id_index` (`user_id`),
  KEY `post_at_index` (`post_at`),
  KEY `refresh_at_index` (`refresh_at`),
  KEY `show_time_index` (`show_time`)
) ENGINE=InnoDB AUTO_INCREMENT=55295 DEFAULT CHARSET=utf8 COMMENT='招聘帖子表'
```

## 表设计原则

### 职责分离原则

职责分离原则是指在设计的时候应当考虑到数据的产生，聚合使用等原则，每个系统干自己能干的事情，每个系统只干自己的事情。一个数据表应该放在哪个系统中，通常取决于几点：

1. 谁产生这个信息：通常情况下谁产生了这个数据应当对此数据负责；也就是考虑该数据的创建，发展，销毁等全生命周期的定义，并将这个定义维护起来提供给消费者作为消费原则；

2. 谁最经常使用这个信息：如果某个系统最经常使用这个数据，最经常去修改某个数据，也应该由该系统来负责保存维护该数据；

3. 遵守高内聚，低耦合的考虑：在存放数据的时候如果考虑到数据使用原则导致了相关度非常高的数据存放在多个地方，需要多个系统来维护这个数据就有可能导致系统间的耦合性增强，应当尽量避免。

在我们设计数据库表间的关系的时候也应当遵守相同原则，职责分离降低耦合，但同时要考虑到性能情况，做到适当冗余而不导致修改逻辑复杂。

举个最常见贴子与评论的例子：

```sql
CREATE TABLE `wanted_post` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `puid` int(10) unsigned NOT NULL,
  `user_id` int(10) NOT NULL COMMENT '发贴用户的id',
  `username` varchar(50) NOT NULL COMMENT '发贴用户的用户名',
  `city` smallint(4) NOT NULL COMMENT '所在城市',
  `ip` bigint(14) NOT NULL COMMENT '发帖人的ip',
  `district_id` tinyint(2) NOT NULL COMMENT '所在区域的id',
  `district_name` varchar(20) NOT NULL COMMENT '行政区名字',
  `street_id` tinyint(2) NOT NULL COMMENT '所在街道(地标)的id',
  `street_name` varchar(20) NOT NULL COMMENT '小区名字',
  `title` varchar(255) NOT NULL COMMENT '帖子的标题',
  `description` text NOT NULL COMMENT '帖子详情描述',
  `post_at` int(11) NOT NULL COMMENT '用户发帖时间,数据创建的时间,使用整型存储',
  `refresh_at` int(11) NOT NULL COMMENT '帖子被修改的时间,整型存储',
  `show_time` int(11) NOT NULL COMMENT '帖子显示时间',
  `age_max` int(11) NOT NULL DEFAULT '0' COMMENT '招聘最小年龄',
  `age_min` int(11) NOT NULL DEFAULT '0' COMMENT '招聘最大年龄',
  `post_refresh_at` int(11) NOT NULL COMMENT '刷新时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `idx_puid` (`puid`),
  KEY `user_id_index` (`user_id`),
  KEY `post_at_index` (`post_at`),
  KEY `refresh_at_index` (`refresh_at`),
  KEY `show_time_index` (`show_time`)
) ENGINE=InnoDB AUTO_INCREMENT=55295 DEFAULT CHARSET=utf8 COMMENT='招聘帖子表'


CREATE TABLE `wanted_post_comment_99` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `puid` int(10) unsigned NOT NULL,
  `user_id` int(10) NOT NULL COMMENT '评论用户ID',
  `post_at` int(11) NOT NULL COMMENT '评论时间',
  `detail` text NOT NULL COMMENT '评论详情',
  PRIMARY KEY (`id`),
  KEY `user_id_index` (`user_id`),
  KEY `puidid_index` (`puid`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8 COMMENT='招聘评论分表99'
```

由于评论表数据量很大，在预先做好分表，按贴子puid分成100张子表，那么当前详情页涉及sql如下：

```sql
select * from wanted_post where puid=xxxx;
select * from wanted_post_comment_99 where puid=xxxx;
```

这是一个简化的模型，评论多了，还要涉及分页，不可能一次性全取出来。对于上面的场景，严格尊守高内聚，低耦合的原则，不会存储冗余数据。相比较还有一种文档型数据库，例如mongo，就可以将评论与贴子存放在一起，访问的时候只需一次顺序IO操作。整体来讲表设计，要按照职责划分原则。

### 在线处理与分析分离

1. 为了保障线上数据处理的性能，将一些分析相关的数据及分析结果，应当使用单独的库来进行存储，避免在数据分析的时候导致业务数据吞吐量下降，引起系统问题。

2. 专门用于存放离线报表数据，并提供线上数据查询方法，建议将统计结果，汇总的数据都从在线处理数据库中移走。

对于上面的wanted_post求职贴子表，在线处理只能是用户在操作：浏览，修改，删除，分别对应如下sql：

```sql
select * from wanted_post where puid=xxxxx;
update wanted_post set xxx=xxx where puid=xxxx;
delete from wanted_post where puid=xxxx;
```

同样，对于后台统计来讲，都是些聚合操作，非常消耗性能，例如查看某一用户发贴量：

```sql
select count(*) from wanted_post where user_id=xxxx;
```

上面举个通用的例子，原则上要将在线用户请求和后台统计请求分开。简单来讲，对于这种需求处理如下：

1. 将请求指向不同slave ，这种方法简单高效，缺点是数据量增大就玩不转。

2. 建立离线报表库，专门存放统计结果，这样将计算与展示异步处理，缺点是对于实时业务响应不好。

3. 实时拉取mysql row binlog，做数据的异构处理(tungsten, canal)，将增量结果处理后(storm)，保存在数据库中，基本实时。

### 事务与日志分离

用户生成内容和用户行为日志要分开，这一点很好理解，举两个例子：

1. 游戏DB里存放玩家的基础信息，装备，属性，好友列表等等，这些放到数据库里面。但是玩家的行为日志，比如消耗金币，今天下过哪些副本，买过什么顶级装备，这些属于行为日志，应该单独存放并分析处理。 

2. 对于web用记，有好多用户置顶，刷新，竞价，展示等行为，要求实时并且量很大，一定要和贴子分开。

行为日志，需要做分析处理，并且由于时效性不宜存储在mysql中，后期维护就是地雷。

### 历史可追溯

在数据库设计的时候为了保障数据是可追溯的，应当遵循一些简单的约定，事后方便数据的查询和统计：

1. 对于状态数据，应当设计相应状态的字段来保存该数据的最后状态，同时记录下来该数据的初始创建人，时间以及该数据的最后修改人和修改时间；所以在交易数据（如订单合同），广告数据，账户表等都应该默认有状态（status），创建人（creator/creator_name），创建时间（created_at），最后修改人（modifier/modifier_name），最后修改时间（modified_at）等字段用来表明数据的当前状态，创建信息及修改信息。

2. 针对需要跟踪每次修改的数据，需要在数据发生变化的时候记录一张日志表，用于记录该数据发生变化的全生命周期。针对只需要关注关键字段变化的情况，则日志表中只需要记录关键字段变化即可，但操作人，操作类型，时间应当准确记录，日志表数据一旦生成不允许进行修改。如用户账户的充值流水，消费流水都是一些业务紧相关的日志。而审核日志，操作记录等日志则属于与业务关联较小的日志。

3. 针对所有历史需要保留的数据则需要每次变化都生成一个新的版本，比如类目信息等，对原始数据永远只做insert操作，不做delete及update操作。但这种情况仅限于极端数据历史要求极高的情况下使用。

## 常用约定

### 常用表名约定
0. 说明：表前缀用项目名称首字母缩写；所以表名都小写，单词之间用下划线分开，单词都用单数形式
1. user – 用户
2. category – 分类
3. goods – 商品、产品等一切可交易网站的物品都用此命名
4. good_gallery – 物品的相册
5. good_cate – 物品的分类，除了单独作为表名，其他地方分类单词一律用缩写cate
4. attr – 属性
5. article – 文章、新闻、帮助中心等以文章形式出现的，一般都用此命名
6. cart – 购物车
7. feedback – 用户反馈
8. order – 订单
9. site_nav – 包括页头和页尾导航
10. site_config – 系统配置表
11. admin – 后台用户 【RBAC标准表】
12. role – 后台用户角色【RBAC标准表】
13. access – 后台操作权限，相当于action【RBAC标准表】
14. role_admin – 后台用户对应的角色【RBAC标准表】
15. access_role – 后台角色对应的权限【RBAC标准表】

### 常用列名规定

1. 表名_id – 通常用作外键命名
2. cid – 特殊的编号，带有元数据，方便关联查询，你可以把它理解成类别(层次)编号。举个例子，产品在分类时，往往需要将其归类到子分类下，相应的字段中也一般只记录子分类的id，这时若需要知道该产品属于哪个主分类，就需要通过子分类信息再查询到主分类信息，这是比较麻烦的，cid字段就是要解决这个问题。一般的站点几十个分类肯定是够用了，所以这里假设某一主分类的cid为11，则子分类的cid从1101开始编号，处理时只需截取前两位数值便可知道该产品属于哪一个主分类了。
3. add_time – 添加时间、上架时间等
4. last_time – 最后操作时间，如登录、修改记录
5. expire_time – 过期时间
6. name – 商品名称、商家名称等，不要跟title混用，title只用于文章标题、职称等
7. price – 价格
8. thumb – 只要是列表页面中的窗口图，一律用此命名
9. image_src – 相册中的图片地址一律用此命名，不要出现各种img,image,img_url,thumb_url等
10. head_thumb – 用户头像， 虽然有点长，一定要遵守。不要出现上述情况
11. image_alt – 相册中图片的alt属性
12. desc – 描述、简介，比如goods_desc，不要出现goods_txt这种
13. details – 详情、文章内容等
14. order_id – 排序
15. telephone – 座机号码
16. mobile – 手机号码
17. phone – 当不区分手机和座机时，请用phone命名
18. address – 地址，单独出现不要用addr缩写，组合出现时需用缩写，比如mac地址，mac_addr
19. zipcode – 邮编
20. region – 地区，大的区域，比如记录杭州市、温州市等
21. area – 区域，小的，比如上城区，江干区等
22. avg_cost – 人均消费
