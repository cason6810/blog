## 结构：


#### 按身份拆分，例：采购商+采购商所配置应用


#### 私有部署时不频繁修改打包配置（或不增加打包命令）
使用同一个webpack.prodLocalization.config.js文件，在打包前请求回来对应配置文件，在main.js 中把配置合并覆盖到原有配置上，再执行webpack 打包。
由于url没最终确定方案，暂时使用 www.longdaoyun.com的service进行保存，也就是说增加/修改 .json后一定要部署正式环境的 service 任务。

##### 动态配置执行顺序
> 1.打包前 `http://www.longdaoyun.com/service/json/context/${process.env.localization}.json` 得到基础配置（webpack.contentText.js中内容），主要标记 PLATFORM_FLAG、PLATFORM_TITLE；
>
> 2.打包中 根据 PLATFORM_FLAG === ‘3’ 去请求“圣牧”的logo 等信息；
> 
> 3.按正常的业务逻辑进行处理；

#### 项目拆分： 
- buyer-portal  对应分支 master-buyer-all/dev-buyer-all
- supplier-portal  对应分支 master-supplier-all/dev-supplier-all
- 机构-portal  对应分支 master-机构all/dev-机构all

#### 部署：
- 生产环境：master-buyer-portal master-supplier-portal master-机构-portal
- 测试环境：dev-buyer-portal dev-supplier-portal dev-机构-portal
- 开发环境：各应用独立部署，访问各应用后端项目为入口

#### 编译配置：
- 生产环境配置：使用标记为 production 的环境配置及上下文配置
- 测试环境配置：使用标记为 development 的环境配置及上下文配置
- 开发环境配置：使用标记为 development 的环境配置及上下文配置

#### 项目目录结构：
```
src
+---assets //静态资源
|   +---css // 第三方样式组
|   |   \---imagecloud
|   +---images // 图片引用，下级按各应用建立目录存储，公用部分提出单存
|       +---buyer-approve
|       ...
|       \---feedback
+---config // 配置基础引用，包括环境配置、常量、模板对应ID
|   \---omsTemplateId
+---libs // 基础方法，异步统一拦截、公用
|   +---fetch
|   \---util
+---router // 路由和面包屑配置汇总
|   \---breadcrumb
+---store // store 方法汇总
|   +---buyer-approve
|   ...
|   \---unconfirmed
+---styles // 样式汇总，遵循 less 语法
|   +---buyer-approve
|   |   ...
|   +---expert-evaluation
|   |   +---modular
|   |   |   \---announce
|   |   \---view
|   \---theme
+---template // index 模板
\---views // vue 视图文件，按各应用建立目录存储
    +---buyer-approve
    |   ...
    +---buyer-tender // 招标项目
    |   +---archiving
    |   +---bid
    |   +---common
    |   +---confirm
    |   +---evaluate
    |   +---modular // 各应用自己的公用模块
    |   |   +---announce
    |   |   +---announce-dialog
    |   |   +---bid-result-quote-list
    |   |   +---btn-group
    |   |   +---check-purchase-modal
    |   |   +---clarify-response
    |   |   +---evaluate-bid-setting
    |   |   +---get-project-status
    |   |   +---invite-suppliers
    |   |   +---list
    |   |   +---main_components
    |   |   +---meeting-view
    |   |   +---project-base-info
    |   |   +---purchase-add
    |   |   +---purchase-add-form
    |   |   +---purchase-allot-check
    |   |   |   +---check-purchase-modal
    |   |   |   \---update-purchase
    |   |   +---purchase-history-price
    |   |   +---purchase-import
    |   |   +---purchase-info
    |   |   +---purchase-info-tab
    |   |   +---purchase-library
    |   |   +---purchase-result
    |   |   +---purchase-result-done
    |   |   |   \---purchase-result-done-expand
    |   |   +---purchase-result-todo-purchase
    |   |   |   \---purchase-result-todo-expand
    |   |   +---purchase-result-todo-supplier
    |   |   |   \---purchase-result-todo-expand
    |   |   +---purchase-view
    |   |   +---quote-item
    |   |   +---quote-item2
    |   |   +---tender-plan-list
    |   |   \---todo-list
    |   +---open
    |   +---setting
    |   +---tender
    |   \---view
    +---organization-entrust
        \---modular
            +---entrust-detail
            +---project-dialog
            \---project-view
```