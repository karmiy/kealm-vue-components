(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{811:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page-box"},[t._m(0),t._v(" "),s("div",{staticClass:"detail-box"},[s("h2",[t._v("基础样式")]),t._v(" "),s("p",{staticClass:"code-left-line"},[t._v("Demo")]),t._v(" "),s("sl-button",{staticStyle:{"margin-right":"10px"},attrs:{type:"primary"},on:{click:function(e){return t.createMessage("info")}}},[t._v("显示普通提示信息")]),t._v(" "),s("sl-button",{staticStyle:{"margin-right":"10px"},attrs:{type:"primary"},on:{click:function(e){return t.createMessage("success")}}},[t._v("显示成功提示信息")]),t._v(" "),s("sl-button",{staticStyle:{"margin-right":"10px"},attrs:{type:"primary"},on:{click:function(e){return t.createMessage("error")}}},[t._v("显示错误提示信息")]),t._v(" "),s("sl-button",{staticStyle:{"margin-right":"10px"},attrs:{type:"primary"},on:{click:function(e){return t.createMessage("warning")}}},[t._v("显示警告提示信息")]),t._v(" "),s("sl-button",{staticStyle:{"margin-right":"10px"},attrs:{type:"primary"},on:{click:function(e){return t.createMessage("loading")}}},[t._v("显示加载提示信息")]),t._v(" "),s("search-code",{attrs:{code:t.CodeType}})],1),t._v(" "),s("div",{staticClass:"detail-box"},[s("h2",[t._v("位置")]),t._v(" "),s("p",{staticClass:"code-left-line"},[t._v("Demo")]),t._v(" "),s("sl-button",{staticStyle:{"margin-right":"10px"},attrs:{type:"primary"},on:{click:function(e){return t.createMessage("info","topLeft")}}},[t._v("显示左上角提示信息")]),t._v(" "),s("sl-button",{staticStyle:{"margin-right":"10px"},attrs:{type:"primary"},on:{click:function(e){return t.createMessage("info","topCenter")}}},[t._v("显示中上角提示信息")]),t._v(" "),s("sl-button",{staticStyle:{"margin-right":"10px"},attrs:{type:"primary"},on:{click:function(e){return t.createMessage("info","topRight")}}},[t._v("显示右上角提示信息")]),t._v(" "),s("sl-button",{staticStyle:{"margin-right":"10px"},attrs:{type:"primary"},on:{click:function(e){return t.createMessage("info","bottomLeft")}}},[t._v("显示左下角提示信息")]),t._v(" "),s("sl-button",{staticStyle:{"margin-right":"10px"},attrs:{type:"primary"},on:{click:function(e){return t.createMessage("info","bottomCenter")}}},[t._v("显示中下角提示信息")]),t._v(" "),s("sl-button",{staticStyle:{"margin-right":"10px"},attrs:{type:"primary"},on:{click:function(e){return t.createMessage("info","bottomRight")}}},[t._v("显示右下角提示信息")]),t._v(" "),s("search-code",{attrs:{code:t.CodePos}})],1),t._v(" "),s("div",{staticClass:"detail-box"},[s("h2",[t._v("带有标题")]),t._v(" "),s("p",{staticClass:"code-left-line"},[t._v("Demo")]),t._v(" "),s("sl-button",{staticStyle:{"margin-right":"10px"},attrs:{type:"primary"},on:{click:function(e){return t.createMessageTitle("success")}}},[t._v("显示成功提示信息")]),t._v(" "),s("sl-button",{staticStyle:{"margin-right":"10px"},attrs:{type:"primary"},on:{click:function(e){return t.createCenterTitleMessage("success","topCenter")}}},[t._v("显示成功提示信息")]),t._v(" "),s("search-code",{attrs:{code:t.CodeTitle}})],1),t._v(" "),s("div",{staticClass:"detail-box"},[s("h2",[t._v("API")]),t._v(" "),s("p",{staticClass:"row-in-round"},[t._v("组件提供了一些静态方法，使用方式和参数如下")]),t._v(" "),s("search-code",{attrs:{code:t.CodeService,expand:!0,visibleTitle:!1}}),t._v(" "),t._m(1),t._v(" "),s("p",{staticClass:"row-in-round"},[t._v("options参数")]),t._v(" "),t._m(2),t._v(" "),s("p",{staticClass:"row-in-round"},[t._v("组件同时提供 promise 接口")]),t._v(" "),s("search-code",{attrs:{code:t.CodePromise,expand:!0,visibleTitle:!1}}),t._v(" "),s("p",{staticClass:"row-in-round"},[t._v("message.open(config)")]),t._v(" "),s("p",[t._v("除了5种静态方法，还可以使用open方法")]),t._v(" "),s("search-code",{attrs:{code:t.CodeOpen,expand:!0,visibleTitle:!1}}),t._v(" "),s("p",{staticClass:"row-in-round"},[t._v("全局配置")]),t._v(" "),s("p",[t._v("提供了全局配置和全局销毁方法:")]),t._v(" "),s("search-code",{attrs:{code:t.CodeConfig,expand:!0,visibleTitle:!1}}),t._v(" "),t._m(3)],1)])};n._withStripped=!0;var a={data:function(){return{CodeType:'    <template>\n        <div>\n            <sl-button type="primary" @click="createMessage(\'info\')" style="margin-right: 10px">显示普通提示信息</sl-button>\n            <sl-button type="primary" @click="createMessage(\'success\')" style="margin-right: 10px">显示成功提示信息</sl-button>\n            <sl-button type="primary" @click="createMessage(\'error\')" style="margin-right: 10px">显示错误提示信息</sl-button>\n            <sl-button type="primary" @click="createMessage(\'warning\')" style="margin-right: 10px">显示警告提示信息</sl-button>\n            <sl-button type="primary" @click="createMessage(\'loading\')" style="margin-right: 10px">显示加载提示信息</sl-button>\n        </div>\n    </template>\n    <script>\n        export default {\n            methods: {\n                createMessage(type) {\n                    this.$message[type](`This is a message of ${type}`);\n                },\n            }\n        }\n    <\/script>',CodeTitle:'    <template>\n        <div>\n            <sl-button type="primary" @click="createMessageTitle(\'success\')" style="margin-right: 10px">显示成功提示信息</sl-button>\n            <sl-button type="primary" @click="createCenterTitleMessage(\'success\', \'topCenter\')" style="margin-right: 10px">显示成功提示信息</sl-button>\n        </div>\n    </template>\n    <script>\n        export default {\n            methods: {\n                createMessageTitle(type, pos) {\n                    this.$message[type](`请重新登陆`, {\n                        title: \'修改密码成功!\',\n                        pos,\n                    });\n                },\n                createCenterTitleMessage(type, pos) {\n                    this.$message[type](`请重新登陆`, {\n                        title: \'修改密码成功!\',\n                        centerContent:true,\n                        pos,\n                    });\n                },\n            }\n        }\n    <\/script>',CodePos:'   <template>\n        <div>\n            <sl-button type="primary" @click="createMessage(\'info\', \'topLeft\')" style="margin-right: 10px">显示左上角提示信息</sl-button>\n            <sl-button type="primary" @click="createMessage(\'info\', \'topCenter\')" style="margin-right: 10px">显示中上角提示信息</sl-button>\n            <sl-button type="primary" @click="createMessage(\'info\', \'topRight\')" style="margin-right: 10px">显示右上角提示信息</sl-button>\n            <sl-button type="primary" @click="createMessage(\'info\', \'bottomLeft\')" style="margin-right: 10px">显示左下角提示信息</sl-button>\n            <sl-button type="primary" @click="createMessage(\'info\', \'bottomCenter\')" style="margin-right: 10px">显示中下角提示信息</sl-button>\n            <sl-button type="primary" @click="createMessage(\'info\', \'bottomRight\')" style="margin-right: 10px">显示右下角提示信息</sl-button>\n        </div>\n    </template>\n    <script>\n        export default {\n            methods: {\n                createMessage(type, pos) {\n                    this.$message[type](`This is a message of ${type}`, {\n                      pos,\n                    });\n                },\n            }\n        }\n    <\/script>',CodeService:"    message.success(content, options, onClose)\n    message.error(content, options, onClose)\n    message.info(content, options, onClose)\n    message.warning(content, options, onClose)\n    message.loading(content, options, onClose)",CodePromise:"    message.success(content, options, onClose).then(afterClose)\n    message.error(content, options, onClose).then(afterClose)\n    message.info(content, options, onClose).then(afterClose)\n    message.warning(content, options, onClose).then(afterClose)\n    message.loading(content, options, onClose).then(afterClose)",CodeOpen:"    message.open({\n        content: `This is a message of success`,\n        options: {\n            pos: 'topLeft',\n            pauseOnHover: false,\n        },\n        type: 'success'\n    })",CodeConfig:"    message.config({\n        duration: 10000,\n        pauseOnHover: false,\n        animate: false,\n        maxCount: 3,\n    })\n    message.destroy()"}},components:{SearchCode:function(){return new Promise(function(t){s.e(0).then(function(e){t(s(831))}.bind(null,s)).catch(s.oe)})}},methods:{close:function(){console.log("close")},createMessage:function(t,e){this.$message[t]("This is a message of ".concat(t),{pos:e})},createMessageTitle:function(t,e){this.$message[t]("请重新登陆",{title:"修改密码成功!",pos:e})},createCenterTitleMessage:function(t,e){this.$message[t]("请重新登陆",{title:"修改密码成功!",centerContent:!0,pos:e})}}},r=s(55),o=Object(r.a)(a,n,[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"detail-box"},[e("h1",[this._v("Message 全局提示")]),this._v(" "),e("p",[this._v("全局消息提示，消息出现在右上角")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",{staticClass:"salus-table salus-table-striped salus-table-hover"},[s("thead",[s("tr",[s("th",{attrs:{width:"15%"}},[t._v("参数")]),t._v(" "),s("th",{attrs:{width:"35%"}},[t._v("描述")]),t._v(" "),s("th",{attrs:{width:"35%"}},[t._v("类型")]),t._v(" "),s("th",{attrs:{width:"15%"}},[t._v("默认值")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("content")]),t._v(" "),s("td",[t._v("提示内容")]),t._v(" "),s("td",[t._v("string| VNode |(h) => VNode")]),t._v(" "),s("td",[t._v("-")])]),t._v(" "),s("tr",[s("td",[t._v("options")]),t._v(" "),s("td",[t._v("配置项")]),t._v(" "),s("td",[t._v("object")]),t._v(" "),s("td",[t._v("{}")])]),t._v(" "),s("tr",[s("td",[t._v("onClose")]),t._v(" "),s("td",[t._v("关闭时触发的回调函数")]),t._v(" "),s("td",[t._v("Function")]),t._v(" "),s("td",[t._v("-")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",{staticClass:"salus-table salus-table-striped salus-table-hover"},[s("thead",[s("tr",[s("th",{attrs:{width:"15%"}},[t._v("参数")]),t._v(" "),s("th",{attrs:{width:"35%"}},[t._v("描述")]),t._v(" "),s("th",{attrs:{width:"35%"}},[t._v("类型")]),t._v(" "),s("th",{attrs:{width:"15%"}},[t._v("默认值")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("duration")]),t._v(" "),s("td",[t._v("自动关闭的延时，单位秒。设为 0 时不自动关闭")]),t._v(" "),s("td",[t._v("number")]),t._v(" "),s("td",[t._v("3000")])]),t._v(" "),s("tr",[s("td",[t._v("pauseOnHover")]),t._v(" "),s("td",[t._v("鼠标移上时禁止自动移除")]),t._v(" "),s("td",[t._v("boolean")]),t._v(" "),s("td",[t._v("true")])]),t._v(" "),s("tr",[s("td",[t._v("animate")]),t._v(" "),s("td",[t._v("开关动画效果")]),t._v(" "),s("td",[t._v("boolean")]),t._v(" "),s("td",[t._v("true")])]),t._v(" "),s("tr",[s("td",[t._v("title")]),t._v(" "),s("td",[t._v("标题内容")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("-")])]),t._v(" "),s("tr",[s("td",[t._v("centerContent")]),t._v(" "),s("td",[t._v("在带有标题的情况下，是否居中并且显示图标")]),t._v(" "),s("td",[t._v("boolean")]),t._v(" "),s("td",[t._v("false")])]),t._v(" "),s("tr",[s("td",[t._v("closable")]),t._v(" "),s("td",[t._v("是否可关闭")]),t._v(" "),s("td",[t._v("boolean")]),t._v(" "),s("td",[t._v("true")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",{staticClass:"salus-table salus-table-striped salus-table-hover"},[s("thead",[s("tr",[s("th",{attrs:{width:"15%"}},[t._v("参数")]),t._v(" "),s("th",{attrs:{width:"35%"}},[t._v("描述")]),t._v(" "),s("th",{attrs:{width:"35%"}},[t._v("类型")]),t._v(" "),s("th",{attrs:{width:"15%"}},[t._v("默认值")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("duration")]),t._v(" "),s("td",[t._v("默认自动关闭延时，单位秒")]),t._v(" "),s("td",[t._v("number")]),t._v(" "),s("td",[t._v("3000")])]),t._v(" "),s("tr",[s("td",[t._v("pauseOnHover")]),t._v(" "),s("td",[t._v("鼠标移上时禁止自动移除")]),t._v(" "),s("td",[t._v("boolean")]),t._v(" "),s("td",[t._v("true")])]),t._v(" "),s("tr",[s("td",[t._v("animate")]),t._v(" "),s("td",[t._v("开关动画效果")]),t._v(" "),s("td",[t._v("boolean")]),t._v(" "),s("td",[t._v("true")])]),t._v(" "),s("tr",[s("td",[t._v("maxCount")]),t._v(" "),s("td",[t._v("最大显示数, 超过限制时，最早的消息会被自动关闭")]),t._v(" "),s("td",[t._v("number")]),t._v(" "),s("td",[t._v("-")])]),t._v(" "),s("tr",[s("td",[t._v("closable")]),t._v(" "),s("td",[t._v("是否可关闭")]),t._v(" "),s("td",[t._v("boolean")]),t._v(" "),s("td",[t._v("true")])])])])}],!1,null,"d0ca9ec2",null);o.options.__file="src/components/message/message.vue";e.default=o.exports}}]);