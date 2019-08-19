# 组件库样式

基于Sass开发， 编译工具基于Gulp。

## 目录设计

``` javascript
|- src // 开发目录
    |- core // 核心样式，框架公共部分
    |- angular // Angular组件库样式
    |- react // react组件库样式
    |- vue // vue组件库样式
|- copy-file.js // 文件copy
|- gulp.config.js // gulp打包库
|- package.json
|- README.md
```

## script命令解释

```javascript
|- copy // copy需要发布的文件到dist中
|- build // 编译样式
|- release // 发布到npm
```