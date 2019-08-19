# 组件库 - Vue

## 说明

基于antd调整与开发的Vue组件库

## 目录

- <a href="#1">支持环境</a>
- <a href="#2">文档</a>
- <a href="#3">安装</a>
- <a href="#4">使用</a>
- <a href="#5">按需引入</a>
- <a href="#6">更新日志</a>

## <span id="1">支持环境</span>

- Vue ^2.6.6
- 支持浏览器：Chrome、Firefox、Safari、Opera、IE10及以上

## <span id="2">文档</span>

暂无

## <span id="3">安装</span>

> 常规安装方式

### 方法

```javascript
npm install --save @kealm/vue-components
```

## <span id="4">使用</span>

全局引入。

```javascript
import KealmUI from '@kealm/vue-components'
import '@kealm/vue-components/style/salus.min.css'

Vue.use(KealmUI)
```

## <span id="5">按需引入</span>

当然如果你的项目中仅仅只使用到组件库的部分组件，我们不建议你导入整个组件库，而是导入你需要的组件，每个组件模块都会直接以[组件名]命名，具体的组件名你可以在项目文档中看到。

```javascript
// 引入按钮组件模块
import { Button } from '@kealm/vue-components'; 

Vue.use(Button)
```

## <span id="6">更新日志</span>

### 2019-08-13

#### v1.1.4

- 兼容IE10

### 2019-07-01

#### v1.1.2

- 模态框统一居中弹出，修复异步显示模态框无效BUG

### 2019-07-01

#### v1.1.1

- Menu新增hasArrow API

### 2019-06-28

#### v1.0.9

- 调整样式错误问题，添加[homepage](https://karmiy.github.io/kealm-vue-components/docs/index.html#/component/quickstart)文档页

### 2019-06-27

#### v1.0.6

- 新增table组件，目前共34个组件

### 2019-04-29

#### v1.0.5

- 修复Button图标问题

### 2019-04-11

#### v1.0.0

- 发布1.0.0版本，拥有21个组建
- 样式引入时fonts字体报错问题修复
- 选项卡、固钉出现指令报错问题修复
- 模态框、时间选择器、日期选择器、颜色选择器弹框无效问题修复

### 2019-04-10

#### v0.3.0

- 新增数字输入框、开关、评分、滑动块、时间选择器、日期选择器、颜色选择器7个组件

### 2019-03-08

#### v0.2.0

- 新增选项卡、固钉、分页、面包屑、步骤条5个组件

### 2019-02-29

#### v0.1.0

- 发布第一个版本（包含组件：栅格、模态框、卡片/面板、选项卡、按钮、单选框、输入框、复选框）;
