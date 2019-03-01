## 结构：


#### 按身份拆分，例：采购商+采购商所配置应用


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