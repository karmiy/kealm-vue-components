(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{795:function(t,e,v){"use strict";v.r(e);var _=function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("div",{ref:"timePickerRef",staticClass:"page-box"},[t._m(0),t._v(" "),v("div",{staticClass:"detail-box"},[v("h2",[t._v("基础时间选择器")]),t._v(" "),v("p",{staticClass:"code-left-line"},[t._v("Demo")]),t._v(" "),v("sl-time-picker",{attrs:{defaultOpenValue:t.defaultDate},on:{change:t.onChange}}),t._v(" "),v("search-code",{attrs:{code:t.CodeBasic}})],1),t._v(" "),v("div",{staticClass:"detail-box"},[v("h2",[t._v("附加内容")]),t._v(" "),v("p",{staticClass:"code-left-line"},[t._v("Demo")]),t._v(" "),v("sl-time-picker",{attrs:{open:t.open},on:{"update:open":function(e){t.open=e}}},[v("sl-button",{attrs:{slot:"addon",size:"small"},on:{click:t.handleClose},slot:"addon"},[t._v("取消")]),t._v(" "),v("sl-button",{attrs:{slot:"addon",size:"small",type:"primary"},on:{click:t.handleClose},slot:"addon"},[t._v("确定")])],1),t._v(" "),v("search-code",{attrs:{code:t.CodeAddon}})],1),t._v(" "),v("div",{staticClass:"detail-box"},[v("h2",[t._v("禁用部分时间")]),t._v(" "),v("p",{staticClass:"code-left-line"},[t._v("Demo")]),t._v(" "),v("sl-time-picker",{attrs:{defaultOpenValue:t.defaultDate,disabledHours:function(){return[1,2,3]},disabledMinutes:function(){return[20,21,22,23,24,25]},disabledSeconds:function(){return[20,21,22,23,24,25]}}}),t._v(" "),v("search-code",{attrs:{code:t.CodeDisabledPart}})],1),t._v(" "),t._m(1)])};_._withStripped=!0;var d={data:function(){return{CodeBasic:'    <template>\n        <div>\n            <sl-time-picker @change="onChange" :defaultOpenValue="defaultValue" />\n        </div>\n    </template>\n    <script>\n        export default {\n            data() {\n              return {\n                defaultValue: new Date(),\n              }\n            },\n            methods: {\n                onChange(time, timeString){\n                    console.log(time, timeString);\n                }\n            }\n        }\n    <\/script>',CodeAddon:'    <template>\n        <div>\n            <sl-time-picker :open.sync="open">\n                <sl-button slot="addon" size="small" @click="handleClose">取消</sl-button>\n                <sl-button slot="addon" size="small" type="primary" @click="handleClose">确定</sl-button>\n            </sl-time-picker>\n        </div>\n    </template>\n    <script>\n        export default {\n            data() {\n                return {\n                    open: false,\n                }\n            },\n            methods: {\n                handleClose(){\n                    this.open = false;\n                }\n            }\n        }\n    <\/script>',CodeDisabledPart:'    <template>\n        <div>\n            <sl-time-picker\n                :defaultOpenValue="defaultValue"\n                :disabledHours="() => [ 1, 2, 3 ]" :disabledMinutes="() => [ 20, 21, 22, 23, 24, 25 ]"\n                :disabledSeconds="() => [ 20, 21, 22, 23, 24, 25 ]"\n            />\n        </div>\n    </template>\n    <script>\n        export default {\n            data() {\n                return {\n                  defaultValue: new Date(),\n                }\n            },\n        }\n    <\/script>',open:!1,defaultDate:new Date}},components:{SearchCode:function(){return new Promise(function(t){v.e(0).then(function(e){t(v(831))}.bind(null,v)).catch(v.oe)})}},methods:{onChange:function(t,e){console.log(t,e)},handleClose:function(){this.open=!1}}},n=v(55),a=Object(n.a)(d,_,[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"detail-box"},[e("h1",[this._v("Time Picker 时间选择器")]),this._v(" "),e("p",[this._v("当用户需要输入一个时间，可以点击标准输入框，弹出时间面板进行选择。")])])},function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("div",{staticClass:"detail-box"},[v("h2",[t._v("API")]),t._v(" "),v("p",{staticClass:"row-in-round"},[t._v("sl-time-picker")]),t._v(" "),v("table",{staticClass:"salus-table salus-table-striped salus-table-hover"},[v("thead",[v("tr",[v("th",{attrs:{width:"15%"}},[t._v("参数")]),t._v(" "),v("th",{attrs:{width:"35%"}},[t._v("描述")]),t._v(" "),v("th",{attrs:{width:"35%"}},[t._v("类型")]),t._v(" "),v("th",{attrs:{width:"15%"}},[t._v("默认值")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("addon")]),t._v(" "),v("td",[t._v("选择框底部显示自定义的内容")]),t._v(" "),v("td",[t._v("slot | slot-scope")]),t._v(" "),v("td",[t._v("无")])]),t._v(" "),v("tr",[v("td",[t._v("allowEmpty")]),t._v(" "),v("td",[t._v("是否展示清除按钮")]),t._v(" "),v("td",[t._v("boolean")]),t._v(" "),v("td",[t._v("true")])]),t._v(" "),v("tr",[v("td",[t._v("autoFocus")]),t._v(" "),v("td",[t._v("自动获取焦点")]),t._v(" "),v("td",[t._v("boolean")]),t._v(" "),v("td",[t._v("false")])]),t._v(" "),v("tr",[v("td",[t._v("clearText")]),t._v(" "),v("td",[t._v("清除按钮的提示文案")]),t._v(" "),v("td",[t._v("string")]),t._v(" "),v("td",[t._v("clear")])]),t._v(" "),v("tr",[v("td",[t._v("defaultOpenValue")]),t._v(" "),v("td",[t._v("当 defaultValue/value 不存在时，可以设置面板打开时默认选中的值")]),t._v(" "),v("td",[t._v("Date")]),t._v(" "),v("td",[t._v("new Date()")])]),t._v(" "),v("tr",[v("td",[t._v("defaultValue")]),t._v(" "),v("td",[t._v("默认时间")]),t._v(" "),v("td",[t._v("Date")]),t._v(" "),v("td",[t._v("无")])]),t._v(" "),v("tr",[v("td",[t._v("disabled")]),t._v(" "),v("td",[t._v("禁用全部操作")]),t._v(" "),v("td",[t._v("boolean")]),t._v(" "),v("td",[t._v("false")])]),t._v(" "),v("tr",[v("td",[t._v("disabledHours")]),t._v(" "),v("td",[t._v("禁止选择部分小时选项")]),t._v(" "),v("td",[t._v("function()")]),t._v(" "),v("td",[t._v("无")])]),t._v(" "),v("tr",[v("td",[t._v("disabledMinutes")]),t._v(" "),v("td",[t._v("禁止选择部分分钟选项")]),t._v(" "),v("td",[t._v("function(selectedHour)")]),t._v(" "),v("td",[t._v("无")])]),t._v(" "),v("tr",[v("td",[t._v("disabledSeconds")]),t._v(" "),v("td",[t._v("禁止选择部分秒选项")]),t._v(" "),v("td",[t._v("function(selectedHour, selectedMinute)")]),t._v(" "),v("td",[t._v("无")])]),t._v(" "),v("tr",[v("td",[t._v("format")]),t._v(" "),v("td",[t._v("展示的时间格式")]),t._v(" "),v("td",[t._v("string")]),t._v(" "),v("td",[t._v('"HH:mm:ss"')])]),t._v(" "),v("tr",[v("td",[t._v("getPopupContainer")]),t._v(" "),v("td",[t._v("定义浮层的容器，默认为 body 上新建 div")]),t._v(" "),v("td",[t._v("function(trigger)")]),t._v(" "),v("td",[t._v("无")])]),t._v(" "),v("tr",[v("td",[t._v("hideDisabledOptions")]),t._v(" "),v("td",[t._v("隐藏禁止选择的选项")]),t._v(" "),v("td",[t._v("boolean")]),t._v(" "),v("td",[t._v("false")])]),t._v(" "),v("tr",[v("td",[t._v("inputReadOnly")]),t._v(" "),v("td",[t._v("设置输入框为只读（避免在移动设备上打开虚拟键盘）")]),t._v(" "),v("td",[t._v("boolean")]),t._v(" "),v("td",[t._v("false")])]),t._v(" "),v("tr",[v("td",[t._v("hourStep")]),t._v(" "),v("td",[t._v("小时选项间隔")]),t._v(" "),v("td",[t._v("number")]),t._v(" "),v("td",[t._v("1")])]),t._v(" "),v("tr",[v("td",[t._v("minuteStep")]),t._v(" "),v("td",[t._v("分钟选项间隔")]),t._v(" "),v("td",[t._v("number")]),t._v(" "),v("td",[t._v("1")])]),t._v(" "),v("tr",[v("td",[t._v("secondStep")]),t._v(" "),v("td",[t._v("秒选项间隔")]),t._v(" "),v("td",[t._v("function()")]),t._v(" "),v("td",[t._v("无")])]),t._v(" "),v("tr",[v("td",[t._v("open(.sync)")]),t._v(" "),v("td",[t._v("面板是否打开")]),t._v(" "),v("td",[t._v("boolean")]),t._v(" "),v("td",[t._v("false")])]),t._v(" "),v("tr",[v("td",[t._v("placeholder")]),t._v(" "),v("td",[t._v("没有值的时候显示的内容")]),t._v(" "),v("td",[t._v("string")]),t._v(" "),v("td",[t._v('"请选择时间"')])]),t._v(" "),v("tr",[v("td",[t._v("popupClassName")]),t._v(" "),v("td",[t._v("弹出层类名")]),t._v(" "),v("td",[t._v("string")]),t._v(" "),v("td",[t._v("''")])]),t._v(" "),v("tr",[v("td",[t._v("suffixIcon")]),t._v(" "),v("td",[t._v("自定义的选择框后缀图标")]),t._v(" "),v("td",[t._v("string | VNode | slot")]),t._v(" "),v("td",[t._v("-")])]),t._v(" "),v("tr",[v("td",[t._v("use12Hours")]),t._v(" "),v("td",[t._v("使用 12 小时制，为 true 时 format 默认为 h:mm:ss a")]),t._v(" "),v("td",[t._v("boolean")]),t._v(" "),v("td",[t._v("false")])]),t._v(" "),v("tr",[v("td",[t._v("value(v-model)")]),t._v(" "),v("td",[t._v("当前时间")]),t._v(" "),v("td",[t._v("Date")]),t._v(" "),v("td",[t._v("无")])])])]),t._v(" "),v("p",{staticClass:"row-in-round"},[t._v("sl-time-picker 事件")]),t._v(" "),v("table",{staticClass:"salus-table salus-table-striped salus-table-hover"},[v("thead",[v("tr",[v("th",{attrs:{width:"15%"}},[t._v("事件名称")]),t._v(" "),v("th",{attrs:{width:"70%"}},[t._v("说明")]),t._v(" "),v("th",{attrs:{width:"15%"}},[t._v("回调参数")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("change")]),t._v(" "),v("td",[t._v("时间发生变化的回调")]),t._v(" "),v("td",[t._v("function(time: Date, timeString: string): void")])]),t._v(" "),v("tr",[v("td",[t._v("openChange")]),t._v(" "),v("td",[t._v("面板打开/关闭时的回调")]),t._v(" "),v("td",[t._v("function(open: boolean): void")])])])]),t._v(" "),v("p",{staticClass:"row-in-round"},[t._v("sl-time-picker 方法")]),t._v(" "),v("table",{staticClass:"salus-table salus-table-striped salus-table-hover"},[v("thead",[v("tr",[v("th",{attrs:{width:"50%"}},[t._v("名称")]),t._v(" "),v("th",{attrs:{width:"50%"}},[t._v("描述")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("blur()")]),t._v(" "),v("td",[t._v("移除焦点")])]),t._v(" "),v("tr",[v("td",[t._v("focus()")]),t._v(" "),v("td",[t._v("获取焦点")])])])])])}],!1,null,null,null);a.options.__file="src/components/time-picker/time-picker.vue";e.default=a.exports}}]);