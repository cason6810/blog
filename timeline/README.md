前端：
- webpack@3.10.0
- webpack-dev-server@2.11.1
- vue@2.5.13
- vue-router@2.7.0
- vuedraggable@2.16.0
- vuex@3.0.1
- 基于 iview@2.13.0 修改的组合 yvue

## 线上BUG，点完合同，左侧有一条白，是ueditor 造成的
```css
.layout {
    background-color: #383d44;
    position: relative;
    overflow: hidden;
    width: 100%;
    z-index: 10; /*合同中 ueditor 展示的bug*/
}
```


### postcss-loader 替换 autoprefixer 部分iview 样式补全 -ms-
文件大小略增加

### dev 启动修改 devtool
devtool: 'cheap-module-eval-source-map', 提高启动速度，2000+ vue文件 00:02:30左右，内存占用2.3GB左右


二叉树：
数组需要反复排序？
第一遍循环生成树（左/右，id或标记），用树去寻找？

#### package 配置执行脚本前置执行
```javascript
"scripts": {
    "preinstall": "npm set registry http://100.100.0.96:4873",
    "prebuildTest": "npm install",
    "buildTest": "webpack --progress --hide-modules --config webpack.prod.config.js"
}
```

#### sinopia 不支持 @组件下载
```javascript
"dependencies": {
    "@sindresorhus/is": "https://github.com/sindresorhus/is/archive/v0.7.0.tar.gz"
}
``` 

#### dev模式内存溢出， out of memony.
package.json 中 script 设置node 内存大小
 ```javascript
 "scripts": {
    "dev" : "node --max-old-space-size=4096 ./node_modules/webpack-dev-server/bin/webpack-dev-server.js --content-base ./ --inline --hot --compress --history-api-fallback --disableHostCheck --config webpack.dev.config.js"
 }
```

#### iview 为什么没用 Class类？
> 项目中用 Class类的话会不会提高维护成本？
> element 中用了一部分 TableLayout 定义表格