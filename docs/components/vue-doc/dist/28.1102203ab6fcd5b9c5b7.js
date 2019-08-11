(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{599:function(t,n,s){"use strict";s.r(n);var i=function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"page-box"},[t._m(0),t._v(" "),s("div",{staticClass:"detail-box"},[s("h2",[t._v("基础对话框")]),t._v(" "),s("p",{staticClass:"code-left-line"},[t._v("Demo")]),t._v(" "),s("sl-button",{attrs:{type:"primary"},on:{click:t.showModal}},[s("span",[t._v("显示对话框")])]),t._v(" "),s("sl-modal",{attrs:{title:"提示"},on:{cancel:t.handleCancel,ok:t.handleOk},model:{value:t.isVisible,callback:function(n){t.isVisible=n},expression:"isVisible"}},[s("p",[t._v("对话框内容")]),t._v(" "),s("p",[t._v("①基础对话框")]),t._v(" "),s("p",[t._v("①是否双按钮，有重要性强弱引导")])]),t._v(" "),s("search-code",{attrs:{code:t.CodeBasic}})],1),t._v(" "),s("div",{staticClass:"detail-box"},[s("h2",[t._v("信息配置对话框")]),t._v(" "),s("p",{staticClass:"code-left-line"},[t._v("Demo")]),t._v(" "),s("div",{staticClass:"detail-modal-demo"},[s("sl-button",{attrs:{type:"primary"},on:{click:t.showConfigurationModal}},[s("span",[t._v("信息配置对话框")])]),t._v(" "),s("sl-modal",{attrs:{title:"提示",showConfiguration:"",description:"请注意：带有配置信息的对话框带有配置信息的对话框带有配置信息的对话框带有配置信息的对话框"},on:{cancel:t.handleCancelConfiguration,ok:t.handleOkConfiguration},model:{value:t.isVisibleConfiguration,callback:function(n){t.isVisibleConfiguration=n},expression:"isVisibleConfiguration"}},[s("p",[t._v("对话框内容")]),t._v(" "),s("p",[t._v("①信息配置对话框")]),t._v(" "),s("p",[t._v("①带有配置信息的对话框")])]),t._v(" "),s("sl-button",{attrs:{type:"primary"},on:{click:t.showWarningConfigurationModal}},[s("span",[t._v("信息配置对话框-waring")])]),t._v(" "),s("sl-modal",{attrs:{title:"提示",showConfiguration:"",configurationType:"warning",description:"请注意：带有配置信息的对话框带有配置信息的对话框带有配置信息的对话框带有配置信息的对话框"},on:{cancel:t.handleWarningCancelConfiguration,ok:t.handleOkWarningConfiguration},model:{value:t.isVisibleWarningConfiguration,callback:function(n){t.isVisibleWarningConfiguration=n},expression:"isVisibleWarningConfiguration"}},[s("p",[t._v("对话框内容")]),t._v(" "),s("p",[t._v("①信息配置对话框")]),t._v(" "),s("p",[t._v("①带有配置信息的对话框")])])],1),t._v(" "),s("search-code",{attrs:{code:t.CodeConfiguration}})],1),t._v(" "),s("div",{staticClass:"detail-box"},[s("h2",[t._v("自定义位置")]),t._v(" "),s("p",[t._v("使用 centered 或类似 style.top 的样式来设置对话框位置")]),t._v(" "),s("p",{staticClass:"code-left-line"},[t._v("Demo")]),t._v(" "),s("div",{staticClass:"detail-modal-demo"},[s("sl-button",{on:{click:function(){return t.setModal1Visible(!0)}}},[t._v("弹出框在距离顶部20px")]),t._v(" "),s("sl-modal",{staticStyle:{top:"20px"},attrs:{title:"距离顶部20px",visible:t.modal1Visible},on:{ok:function(){return t.setModal1Visible(!1)},cancel:function(){return t.setModal1Visible(!1)}}},[s("p",[t._v("对话框内容")]),t._v(" "),s("p",[t._v("①信息配置对话框")]),t._v(" "),s("p",[t._v("①带有配置信息的对话框")])]),t._v(" "),s("sl-button",{on:{click:function(){return t.modal2Visible=!0}}},[t._v("弹出框在中间展示")]),t._v(" "),s("sl-modal",{attrs:{title:"弹出框在中间",centered:""},on:{ok:function(){return t.modal2Visible=!1}},model:{value:t.modal2Visible,callback:function(n){t.modal2Visible=n},expression:"modal2Visible"}},[s("p",[t._v("对话框内容")]),t._v(" "),s("p",[t._v("①信息配置对话框")]),t._v(" "),s("p",[t._v("①带有配置信息的对话框")])])],1),t._v(" "),s("search-code",{attrs:{code:t.CodePos}})],1),t._v(" "),s("div",{staticClass:"detail-box"},[s("h2",[t._v("确认对话框")]),t._v(" "),s("p",[t._v("使用 confirm() 可以快捷地弹出确认框。onCancel/onOk 返回 promise 可以延迟关闭")]),t._v(" "),s("p",{staticClass:"code-left-line"},[t._v("Demo")]),t._v(" "),s("div",{staticClass:"detail-modal-demo"},[s("sl-button",{on:{click:t.showConfirm}},[t._v("Confirm")])],1),t._v(" "),s("search-code",{attrs:{code:t.CodeConfirm}})],1),t._v(" "),s("div",{staticClass:"detail-box"},[s("h2",[t._v("信息提示")]),t._v(" "),s("p",[t._v("各种类型的信息提示，只提供一个按钮用于关闭")]),t._v(" "),s("p",{staticClass:"code-left-line"},[t._v("Demo")]),t._v(" "),s("div",{staticClass:"detail-modal-demo"},[s("sl-button",{on:{click:t.info}},[t._v("Info")]),t._v(" "),s("sl-button",{on:{click:t.success}},[t._v("Success")]),t._v(" "),s("sl-button",{on:{click:t.error}},[t._v("Error")]),t._v(" "),s("sl-button",{on:{click:t.warning}},[t._v("Warning")])],1),t._v(" "),s("search-code",{attrs:{code:t.CodeInfo}})],1),t._v(" "),s("div",{staticClass:"detail-box"},[s("h2",[t._v("手动移除")]),t._v(" "),s("p",[t._v("手动关闭modal")]),t._v(" "),s("div",{staticClass:"detail-modal-demo"},[s("sl-button",{on:{click:t.countDown}},[t._v("Success")])],1),t._v(" "),s("search-code",{attrs:{code:t.CodeRemove}})],1),t._v(" "),s("div",{staticClass:"detail-box"},[s("h2",[t._v("自定义页脚按钮属性")]),t._v(" "),s("p",[t._v("传入 okButtonProps 和 cancelButtonProps 可分别自定义确定按钮和取消按钮的 props")]),t._v(" "),s("div",{staticClass:"detail-modal-demo"},[s("sl-button",{attrs:{type:"primary"},on:{click:t.showModal1}},[t._v("自定义页脚按钮属性")]),t._v(" "),s("sl-modal",{attrs:{title:"Basic Modal",okButtonProps:{props:{disabled:!0}},cancelButtonProps:{props:{disabled:!0}}},on:{ok:t.handleOk1},model:{value:t.isVisible1,callback:function(n){t.isVisible1=n},expression:"isVisible1"}},[s("p",[t._v("Some contents...")]),t._v(" "),s("p",[t._v("Some contents...")]),t._v(" "),s("p",[t._v("Some contents...")])])],1),t._v(" "),s("search-code",{attrs:{code:t.CodeFooter}})],1),t._v(" "),s("div",{staticClass:"detail-box"},[s("h2",[t._v("API")]),t._v(" "),s("p",{staticClass:"row-in-round"},[t._v("sl-modal")]),t._v(" "),s("p",[t._v("对话框当前分为2种模式，普通模式 和 确认框模式（即Confirm对话框，通过调用confirm/info/success/error/warning弹出），\n            两种模式对API的支持程度稍有不同")]),t._v(" "),t._m(1),t._v(" "),s("p",{staticClass:"row-in-round"},[t._v("事件")]),t._v(" "),t._m(2),t._v(" "),s("p",{staticClass:"row-in-round"},[t._v("Modal.method() - 确认框模式")]),t._v(" "),s("p",[t._v("包括：")]),t._v(" "),s("p",{staticClass:"row-in-hyphen"},[t._v("Modal.info")]),t._v(" "),s("p",{staticClass:"row-in-hyphen"},[t._v("Modal.success")]),t._v(" "),s("p",{staticClass:"row-in-hyphen"},[t._v("Modal.error")]),t._v(" "),s("p",{staticClass:"row-in-hyphen"},[t._v("Modal.warning")]),t._v(" "),s("p",{staticClass:"row-in-hyphen"},[t._v("Modal.confirm")]),t._v(" "),s("p",[t._v("\n            以上均为一个函数，参数为 object，与上方API一致。部分属性类型或初始值有所不同，已列在下方：\n        ")]),t._v(" "),t._m(3),t._v(" "),s("p",{staticStyle:{"margin-bottom":"12px"}},[t._v("\n            以上函数调用后，会返回一个引用，可以通过该引用更新和关闭弹窗。\n        ")]),t._v(" "),s("search-code",{attrs:{code:t.CodeCallback,expand:!0,visibleTitle:!1}})],1)])};i._withStripped=!0;var e={name:"Modal",data:function(){return{CodeBasic:'    <template>\n        <div>\n            <sl-button type="primary" @click="showModal">\n                <span>显示对话框</span>\n            </sl-button>\n            <sl-modal v-model="isVisible" title="提示" @cancel="handleCancel" @ok="handleOk">\n                <p>对话框内容</p>\n                <p>①基础对话框</p>\n                <p>①是否双按钮，有重要性强弱引导</p>\n            </sl-modal>\n        </div>\n    </template>\n    <script>\n        export default {\n            data() {\n                return {\n                    isVisible: false\n                }\n            },\n            methods: {\n                showModal() {\n                    this.isVisible = true;\n                },\n                handleCancel() {\n                    this.isVisible = false;\n                },\n                handleOk() {\n                    this.isVisible = false;\n                }\n            }\n        }\n    <\/script>',isVisible:!1,CodeConfiguration:'    <template>\n        <div>\n            <sl-button type="primary" @click="showConfigurationModal">\n                <span>信息配置对话框</span>\n            </sl-button>\n            <sl-modal v-model="isVisibleConfiguration" title="提示"\n                        showConfiguration description="请注意：带有配置信息的对话框带有配置信息的对话框带有配置信息的对话框带有配置信息的对话框"\n                        @cancel="handleCancelConfiguration" @ok="handleOkConfiguration">\n                <p>对话框内容</p>\n                <p>①信息配置对话框</p>\n                <p>①带有配置信息的对话框</p>\n            </sl-modal>\n            <sl-button type="primary" @click="showWarningConfigurationModal">\n                <span>信息配置对话框-waring</span>\n            </sl-button>\n            <sl-modal v-model="isVisibleWarningConfiguration" title="提示"\n                        showConfiguration configurationType="warning"\n                        description="请注意：带有配置信息的对话框带有配置信息的对话框带有配置信息的对话框带有配置信息的对话框"\n                        @cancel="handleWarningCancelConfiguration"\n                        @ok="handleOkWarningConfiguration">\n                <p>对话框内容</p>\n                <p>①信息配置对话框</p>\n                <p>①带有配置信息的对话框</p>\n            </sl-modal>\n        </div>\n    </template>\n    <script>\n        export default {\n            data() {\n                return {\n                    isVisibleConfiguration: false,\n                    isVisibleWarningConfiguration: false\n                }\n            },\n            methods: {\n                showConfigurationModal() {\n                    this.isVisibleConfiguration = true;\n                },\n                handleCancelConfiguration() {\n                    this.isVisibleConfiguration = false;\n                },\n                handleOkConfiguration() {\n                    this.isVisibleConfiguration = false;\n                },\n                showWarningConfigurationModal() {\n                    this.isVisibleWarningConfiguration = true;\n                },\n                handleWarningCancelConfiguration() {\n                    this.isVisibleWarningConfiguration = false;\n                },\n                handleOkWarningConfiguration() {\n                    this.isVisibleWarningConfiguration = false;\n                }\n            }\n        }\n    <\/script>',isVisibleConfiguration:!1,isVisibleWarningConfiguration:!1,CodePos:'    <template>\n        <div>\n            <sl-button type="primary" @click="() => setModal1Visible(true)">弹出框在距离顶部20px</sl-button>\n            <sl-modal title="距离顶部20px" style="top: 20px;" :visible="modal1Visible"\n                    @ok="() => setModal1Visible(false)" @cancel="() => setModal1Visible(false)">\n                <p>对话框内容</p>\n                <p>①信息配置对话框</p>\n                <p>①带有配置信息的对话框</p>\n            </sl-modal>\n            <sl-button type="primary" @click="() => modal2Visible = true">弹出框在中间展示</sl-button>\n            <sl-modal title="弹出框在中间"\n                    centered v-model="modal2Visible" @ok="() => modal2Visible = false">\n                <p>对话框内容</p>\n                <p>①信息配置对话框</p>\n                <p>①带有配置信息的对话框</p>\n            </sl-modal>\n        </div>\n    </template>\n    <script>\n        export default {\n            data() {\n                return {\n                    modal1Visible: false,\n                    modal2Visible: false\n                }\n            },\n            methods: {\n                setModal1Visible(modal1Visible) {\n                    this.modal1Visible = modal1Visible;\n                }\n            }\n        }\n    <\/script>',modal1Visible:!1,modal2Visible:!1,CodeConfirm:"    <template>\n        <div>\n            <sl-button @click=\"showConfirm\">Confirm</sl-button>\n        </div>\n    </template>\n    <script>\n        export default {\n            methods:{\n                showConfirm() {\n                    this.$confirm({\n                        title: '确定删除选中项?',\n                        content: '点击确认后关闭',\n                        onOk() {},\n                        okText: '确认',\n                        cancelText: '取消',\n                        onCancel() {},\n                    });\n                }\n            }\n        }\n    <\/script>",CodeInfo:"    <template>\n        <div>\n            <sl-button @click=\"info\">Info</sl-button>\n            <sl-button @click=\"success\">Success</sl-button>\n            <sl-button @click=\"error\">Error</sl-button>\n            <sl-button @click=\"warning\">Warning</sl-button>\n        </div>\n    </template>\n    <script>\n        export default {\n            methods: {\n                info() {\n                    const h = this.$createElement\n                    this.$info({\n                        title: 'This is a notification message',\n                        content: h('div', {}, [\n                            h('p', 'some messages...some messages...'),\n                            h('p', 'some messages...some messages...'),\n                        ]),\n                        onOk() {\n                        },\n                    });\n                },\n                success() {\n                    this.$success({\n                        title: 'This is a success message',\n                        content: 'some messages...some messages...'\n                    });\n                },\n                error() {\n                    this.$error({\n                        title: 'This is an error message',\n                        content: 'some messages...some messages...',\n                    });\n                },\n                warning() {\n                    this.$warning({\n                        title: 'This is a warning message',\n                        content: 'some messages...some messages...',\n                    });\n                }\n            }\n        }\n    <\/script>",CodeRemove:"    <template>\n        <div>\n            <sl-button @click=\"countDown\">Success</sl-button>\n        </div>\n    </template>\n    <script>\n        export default {\n            methods: {\n                countDown() {\n                    let secondsToGo = 5;\n                    const modal = this.$success({\n                        title: 'This is a notification message',\n                        content: 'This modal will be destroyed after ${secondsToGo} second.',\n                    });\n                    const interval = setInterval(() => {\n                        secondsToGo -= 1;\n                        modal.update({\n                            content: 'This modal will be destroyed after ${secondsToGo} second.',\n                        });\n                    }, 1000);\n                    setTimeout(() => {\n                        clearInterval(interval)\n                        modal.destroy()\n                    }, secondsToGo * 1000);\n                }\n            }\n        }\n    <\/script>",CodeFooter:'    <template>\n        <div>\n            <sl-button type="primary" @click="showModal">自定义页脚按钮属性</sl-button>\n            <sl-modal title="Basic Modal" v-model="isVisible"\n                    @ok="handleOk" :okButtonProps="{ props: {disabled: true} }"\n                    :cancelButtonProps="{ props: {disabled: true} }">\n                <p>Some contents...</p>\n                <p>Some contents...</p>\n                <p>Some contents...</p>\n            </sl-modal>\n        </div>\n    </template>\n    <script>\n        export default {\n            data() {\n                return {\n                    isVisible: false\n                }\n            },\n            methods: {\n                showModal() {\n                    this.isVisible = true;\n                },\n                handleOk() {\n                    this.isVisible = false;\n                }\n            }\n        }\n    <\/script>',isVisible1:!1,CodeCallback:"\n        const modal = Modal.info();\n\n        modal.update({\n            title: '修改的标题',\n            content: '修改的内容',\n        });\n\n        modal.destroy();\n    "}},components:{SearchCode:function(){return new Promise(function(t){s.e(0).then(function(n){t(s(637))}.bind(null,s)).catch(s.oe)})}},methods:{showModal:function(){this.isVisible=!0},handleCancel:function(){this.isVisible=!1},handleOk:function(){this.isVisible=!1},showConfigurationModal:function(){this.isVisibleConfiguration=!0},handleCancelConfiguration:function(){this.isVisibleConfiguration=!1},handleOkConfiguration:function(){this.isVisibleConfiguration=!1},showWarningConfigurationModal:function(){this.isVisibleWarningConfiguration=!0},handleWarningCancelConfiguration:function(){this.isVisibleWarningConfiguration=!1},handleOkWarningConfiguration:function(){this.isVisibleWarningConfiguration=!1},setModal1Visible:function(t){this.modal1Visible=t},showConfirm:function(){this.$confirm({title:"确定删除选中项?",content:"点击确认后关闭",onOk:function(){},okText:"确认",cancelText:"取消",onCancel:function(){}})},info:function(){var t=this.$createElement;this.$info({title:"This is a notification message",content:t("div",{},[t("p","some messages...some messages..."),t("p","some messages...some messages...")]),onOk:function(){}})},success:function(){this.$success({title:"This is a success message",content:"some messages...some messages..."})},error:function(){this.$error({title:"This is an error message",content:"some messages...some messages..."})},warning:function(){this.$warning({title:"This is a warning message",content:"some messages...some messages..."})},countDown:function(){var t=5,n=this.$success({title:"This is a notification message",content:"This modal will be destroyed after ".concat(t," second.")}),s=setInterval(function(){t-=1,n.update({content:"This modal will be destroyed after ".concat(t," second.")})},1e3);setTimeout(function(){clearInterval(s),n.destroy()},1e3*t)},showModal1:function(){this.isVisible1=!0},handleOk1:function(){this.isVisible1=!1}}},o=s(53),a=Object(o.a)(e,i,[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"detail-box"},[n("h1",[this._v("Modal 对话框")]),this._v(" "),n("p",{staticClass:"row-in-hyphen"},[this._v("需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal 在当前页面正中打开一个浮层，承载相应的操作。")]),this._v(" "),n("p",{staticClass:"row-in-hyphen"},[this._v("需要一个简洁的确认框询问用户时，可以使用精心封装好的 Modal.confirm() 等方法。")])])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("table",{staticClass:"salus-table  salus-table-hover salus-table-striped"},[s("thead",[s("tr",[s("th",{attrs:{width:"15%"}},[t._v("参数")]),t._v(" "),s("th",{attrs:{width:"35%"}},[t._v("描述")]),t._v(" "),s("th",{attrs:{width:"35%"}},[t._v("类型")]),t._v(" "),s("th",{attrs:{width:"15%"}},[t._v("默认值")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("afterClose")]),t._v(" "),s("td",[t._v("Modal 完全关闭后的回调，可监听close/destroy方法传入的参数")]),t._v(" "),s("td",[t._v("EventEmitter")]),t._v(" "),s("td",[t._v("无")])]),t._v(" "),s("tr",[s("td",[t._v("bodyStyle")]),t._v(" "),s("td",[t._v("Modal body 样式")]),t._v(" "),s("td",[t._v("object")]),t._v(" "),s("td",[t._v("{}")])]),t._v(" "),s("tr",[s("td",[t._v("cancelText")]),t._v(" "),s("td",[t._v("取消按钮文字")]),t._v(" "),s("td",[t._v("string 丨 slot")]),t._v(" "),s("td",[t._v("取消")])]),t._v(" "),s("tr",[s("td",[t._v("closable")]),t._v(" "),s("td",[t._v("是否显示右上角的关闭按钮")]),t._v(" "),s("td",[t._v("boolean")]),t._v(" "),s("td",[t._v("true")])]),t._v(" "),s("tr",[s("td",[t._v("confirmLoading")]),t._v(" "),s("td",[t._v("确定按钮 loading")]),t._v(" "),s("td",[t._v("boolean")]),t._v(" "),s("td",[t._v("无")])]),t._v(" "),s("tr",[s("td",[t._v("destroyOnClose")]),t._v(" "),s("td",[t._v("关闭时销毁 Modal 里的子元素")]),t._v(" "),s("td",[t._v("boolean")]),t._v(" "),s("td",[t._v("false")])]),t._v(" "),s("tr",[s("td",[t._v("footer")]),t._v(" "),s("td",[t._v('底部内容，当不需要默认底部按钮时，可以设为 :footer="null"')]),t._v(" "),s("td",[t._v("string 丨 slot")]),t._v(" "),s("td",[t._v("默认的确定取消按钮")])]),t._v(" "),s("tr",[s("td",[t._v("showConfiguration")]),t._v(" "),s("td",[t._v("modal窗体显示配置区")]),t._v(" "),s("td",[t._v("boolean")]),t._v(" "),s("td",[t._v("false")])]),t._v(" "),s("tr",[s("td",[t._v("message")]),t._v(" "),s("td",[t._v("配置提示内容")]),t._v(" "),s("td",[t._v("string 丨 slot")]),t._v(" "),s("td",[t._v("无")])]),t._v(" "),s("tr",[s("td",[t._v("description")]),t._v(" "),s("td",[t._v("配置提示的辅助性文字介绍")]),t._v(" "),s("td",[t._v("string｜slot")]),t._v(" "),s("td",[t._v("无")])]),t._v(" "),s("tr",[s("td",[t._v("showIcon")]),t._v(" "),s("td",[t._v("是否显示配置提示辅助图标")]),t._v(" "),s("td",[t._v("boolean")]),t._v(" "),s("td",[t._v("false")])]),t._v(" "),s("tr",[s("td",[t._v("configurationType")]),t._v(" "),s("td",[t._v("指定配置提示的样式，有四种选择 success、info、warning、error")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("无")])]),t._v(" "),s("tr",[s("td",[t._v("getContainer")]),t._v(" "),s("td",[t._v("指定 Modal 挂载的 HTML 节点")]),t._v(" "),s("td",[t._v("(instance): HTMLElement")]),t._v(" "),s("td",[t._v("() => document.body")])]),t._v(" "),s("tr",[s("td",[t._v("keyboard")]),t._v(" "),s("td",[t._v("是否支持键盘esc关闭")]),t._v(" "),s("td",[t._v("boolean")]),t._v(" "),s("td",[t._v("true")])]),t._v(" "),s("tr",[s("td",[t._v("mask")]),t._v(" "),s("td",[t._v("是否展示遮罩")]),t._v(" "),s("td",[t._v("boolean")]),t._v(" "),s("td",[t._v("true")])]),t._v(" "),s("tr",[s("td",[t._v("maskClosable")]),t._v(" "),s("td",[t._v("点击蒙层是否允许关闭")]),t._v(" "),s("td",[t._v("boolean")]),t._v(" "),s("td",[t._v("true")])]),t._v(" "),s("tr",[s("td",[t._v("maskStyle")]),t._v(" "),s("td",[t._v("遮罩样式")]),t._v(" "),s("td",[t._v("object")]),t._v(" "),s("td",[t._v("{}")])]),t._v(" "),s("tr",[s("td",[t._v("okText")]),t._v(" "),s("td",[t._v("确认按钮文字")]),t._v(" "),s("td",[t._v("string 丨 slot")]),t._v(" "),s("td",[t._v("确定")])]),t._v(" "),s("tr",[s("td",[t._v("okType")]),t._v(" "),s("td",[t._v("确认按钮类型。"),s("i",[t._v("与button的type类型值一致")])]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("primary")])]),t._v(" "),s("tr",[s("td",[t._v("okButtonProps")]),t._v(" "),s("td",[t._v("ok 按钮 props, 遵循jsx规范")]),t._v(" "),s("td",[t._v("{props: ButtonProps, on: {}}")]),t._v(" "),s("td",[t._v("-")])]),t._v(" "),s("tr",[s("td",[t._v("cancelButtonProps")]),t._v(" "),s("td",[t._v("cancel 按钮 props, 遵循jsx规范")]),t._v(" "),s("td",[t._v("{props: ButtonProps, on: {}}")]),t._v(" "),s("td",[t._v("-")])]),t._v(" "),s("tr",[s("td",[t._v("title")]),t._v(" "),s("td",[t._v("标题")]),t._v(" "),s("td",[t._v("string"),s("br"),t._v("TemplateRef")]),t._v(" "),s("td",[t._v("无")])]),t._v(" "),s("tr",[s("td",[t._v("visible(v-model)")]),t._v(" "),s("td",[t._v("对话框是否可见")]),t._v(" "),s("td",[t._v("boolean")]),t._v(" "),s("td",[t._v("false")])]),t._v(" "),s("tr",[s("td",[t._v("width")]),t._v(" "),s("td",[t._v("宽度。"),s("i",[t._v("使用数字时，默认单位为px")])]),t._v(" "),s("td",[t._v("string|number")]),t._v(" "),s("td",[t._v("470")])]),t._v(" "),s("tr",[s("td",[t._v("wrapClassName")]),t._v(" "),s("td",[t._v("对话框外层容器的类名")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("无")])]),t._v(" "),s("tr",[s("td",[t._v("zIndex")]),t._v(" "),s("td",[t._v("设置 Modal 的 "),s("code",[t._v("z-index")])]),t._v(" "),s("td",[t._v("number")]),t._v(" "),s("td",[t._v("1000")])])])])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"detail-block"},[s("table",{staticClass:"salus-table salus-table-hover salus-table-striped"},[s("thead",[s("tr",[s("th",{attrs:{width:"15%"}},[t._v("事件名称")]),t._v(" "),s("th",{attrs:{width:"70%"}},[t._v("说明")]),t._v(" "),s("th",{attrs:{width:"15%"}},[t._v("回调参数")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("cancel")]),t._v(" "),s("td",[t._v("点击遮罩层或右上角叉或取消按钮的回调")]),t._v(" "),s("td",[t._v("function(e)")])]),t._v(" "),s("tr",[s("td",[t._v("ok")]),t._v(" "),s("td",[t._v("点击确定回调")]),t._v(" "),s("td",[t._v("function(e)")])])])])])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("table",{staticClass:"salus-table  salus-table-hover salus-table-striped"},[s("thead",[s("tr",[s("th",{attrs:{width:"15%"}},[t._v("参数")]),t._v(" "),s("th",{attrs:{width:"35%"}},[t._v("描述")]),t._v(" "),s("th",{attrs:{width:"35%"}},[t._v("类型")]),t._v(" "),s("th",{attrs:{width:"15%"}},[t._v("默认值")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("onOk")]),t._v(" "),s("td",[t._v("点击确定回调，参数为关闭函数，返回 promise 时 resolve 后自动关闭")]),t._v(" "),s("td",[t._v("function")]),t._v(" "),s("td",[t._v("无")])]),t._v(" "),s("tr",[s("td",[t._v("onCancel")]),t._v(" "),s("td",[t._v("取消回调，参数为关闭函数，返回 promise 时 resolve 后自动关闭\n                ")]),t._v(" "),s("td",[t._v("function")]),t._v(" "),s("td",[t._v("无")])]),t._v(" "),s("tr",[s("td",[t._v("width")]),t._v(" "),s("td",[t._v("宽度")]),t._v(" "),s("td",[t._v("string"),s("br"),t._v("number")]),t._v(" "),s("td",[t._v("470")])]),t._v(" "),s("tr",[s("td",[t._v("maskClosable")]),t._v(" "),s("td",[t._v("点击蒙层是否允许关闭")]),t._v(" "),s("td",[t._v("boolean")]),t._v(" "),s("td",[t._v("false")])]),t._v(" "),s("tr",[s("td",[t._v("iconType")]),t._v(" "),s("td",[t._v("图标 Icon 类型")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("salus-icon-sign-mark")])]),t._v(" "),s("tr",[s("td",[t._v("content")]),t._v(" "),s("td",[t._v("内容")]),t._v(" "),s("td",[t._v("string|vNode")]),t._v(" "),s("td",[t._v("无")])]),t._v(" "),s("tr",[s("td",[t._v("class")]),t._v(" "),s("td",[t._v("容器类名")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("-")])])])])}],!1,null,null,null);a.options.__file="src/components/modal/modal.vue";n.default=a.exports}}]);