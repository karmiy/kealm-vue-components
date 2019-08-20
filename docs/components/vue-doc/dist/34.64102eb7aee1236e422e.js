(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{821:function(t,e,l){"use strict";l.r(e);var a=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"page-box"},[t._m(0),t._v(" "),l("div",{staticClass:"detail-box"},[l("h2",[t._v("基础滑动输入条")]),t._v(" "),l("p",{staticClass:"code-left-line"},[t._v("Demo")]),t._v(" "),l("sl-row",[l("sl-col",{attrs:{span:12}},[l("sl-slider",{attrs:{min:1,max:20},model:{value:t.inputValue,callback:function(e){t.inputValue=e},expression:"inputValue"}})],1),t._v(" "),l("sl-col",{attrs:{span:4}},[l("sl-input-number",{staticStyle:{marginLeft:"16px"},attrs:{min:1,max:20},model:{value:t.inputValue,callback:function(e){t.inputValue=e},expression:"inputValue"}})],1)],1),t._v(" "),l("search-code",{attrs:{code:t.CodeBasic}})],1),t._v(" "),l("div",{staticClass:"detail-box"},[l("h2",[t._v("步长")]),t._v(" "),l("p",{staticClass:"code-left-line"},[t._v("Demo")]),t._v(" "),l("sl-row",[l("sl-col",{attrs:{span:12}},[l("sl-slider",{attrs:{step:10}})],1)],1),t._v(" "),l("search-code",{attrs:{code:t.CodeStep}})],1),t._v(" "),l("div",{staticClass:"detail-box"},[l("h2",[t._v("禁用滑动输入条")]),t._v(" "),l("p",{staticClass:"code-left-line"},[t._v("Demo")]),t._v(" "),l("sl-row",[l("sl-col",{attrs:{span:12}},[l("sl-slider",{attrs:{min:1,max:20,disabled:t.disabled},model:{value:t.inputValue,callback:function(e){t.inputValue=e},expression:"inputValue"}})],1),t._v(" "),l("sl-col",{attrs:{span:4}},[l("sl-input-number",{staticStyle:{marginLeft:"16px"},attrs:{min:1,max:20,disabled:t.disabled},model:{value:t.inputValue,callback:function(e){t.inputValue=e},expression:"inputValue"}})],1)],1),t._v("\n        Disabled: "),l("sl-switch",{attrs:{size:"small",checked:t.disabled},on:{change:function(e){t.disabled=e}}}),t._v(" "),l("search-code",{attrs:{code:t.CodeDisable}})],1),t._v(" "),l("div",{staticClass:"detail-box"},[l("h2",[t._v("滑动输入条提示自定义")]),t._v(" "),l("p",{staticClass:"code-left-line"},[t._v("Demo")]),t._v(" "),l("sl-row",[l("sl-col",{attrs:{span:12}},[l("sl-slider",{attrs:{max:20,defaultValue:5,tipFormatter:null}})],1)],1),t._v(" "),l("sl-row",[l("sl-col",{attrs:{span:12}},[l("sl-slider",{attrs:{max:20,defaultValue:10,tipFormatter:function(t){return t+"M"}}})],1)],1),t._v(" "),l("search-code",{attrs:{code:t.CodeCustomize}})],1),t._v(" "),l("div",{staticClass:"detail-box"},[l("h2",[t._v("双滑块滑动输入条")]),t._v(" "),l("p",{staticClass:"code-left-line"},[t._v("Demo")]),t._v(" "),l("sl-row",[l("sl-col",{attrs:{span:12}},[l("sl-slider",{attrs:{range:"",defaultValue:[20,50]}})],1)],1),t._v(" "),l("search-code",{attrs:{code:t.CodeDouble}})],1),t._v(" "),l("div",{staticClass:"detail-box"},[l("h2",[t._v("竖直方向滑动输入条")]),t._v(" "),l("p",{staticClass:"code-left-line"},[t._v("Demo")]),t._v(" "),l("sl-row",[l("sl-col",{attrs:{span:8}},[l("div",{staticStyle:{height:"300px"}},[l("div",{staticStyle:{float:"left",height:"300px",marginLeft:"70px"}},[l("sl-slider",{attrs:{vertical:"",defaultValue:30}})],1),t._v(" "),l("div",{staticStyle:{float:"left",height:"300px",marginLeft:"70px"}},[l("sl-slider",{attrs:{vertical:"",range:"",defaultValue:[20,50]}})],1),t._v(" "),l("div",{staticStyle:{float:"left",height:"300px",marginLeft:"70px"}},[l("sl-slider",{attrs:{vertical:"",range:"",marks:t.marks,defaultValue:[25,73]}})],1),t._v(" "),l("div",{staticStyle:{float:"left",height:"300px",marginLeft:"70px"}},[l("sl-slider",{attrs:{vertical:"",range:"",marks:t.marks,defaultValue:[15,65],included:!1}})],1)])])],1),t._v(" "),l("search-code",{attrs:{code:t.CodeVertical}})],1),t._v(" "),t._m(1)])};a._withStripped=!0;var s={data:function(){return{CodeBasic:'    <template>\n        <div>\n            <sl-row>\n                <sl-col :span="12">\n                    <sl-slider :min="1" :max="20" v-model="inputValue" />\n                </sl-col>\n                <sl-col :span="4">\n                    <sl-input-number\n                        :min="1"\n                        :max="20"\n                        style="marginLeft: 16px"\n                        v-model="inputValue"\n                    />\n                </sl-col>\n            </sl-row>\n        </div>\n    </template>\n    <script>\n        export default {\n            data() {\n              return {\n                inputValue: 1,\n              }\n            },\n        }\n    <\/script>',CodeStep:'    <template>\n        <div>\n            <sl-row>\n                <sl-col :span="12">\n                    <sl-slider :step="10" />\n                </sl-col>\n            </sl-row>\n        </div>\n    </template>\n    <script>\n        export default {\n            data() {\n              return {\n                inputValue: 1,\n              }\n            },\n        }\n    <\/script>',CodeDisable:'    <template>\n        <div>\n            <sl-row>\n                <sl-col :span="12">\n                    <sl-slider :min="1" :max="20" v-model="inputValue" :disabled="disabled" />\n                </sl-col>\n                <sl-col :span="4">\n                    <sl-input-number\n                        :min="1"\n                        :max="20"\n                        style="marginLeft: 16px"\n                        v-model="inputValue"\n                        :disabled="disabled"\n                    />\n                </sl-col>\n            </sl-row>\n            Disabled: <sl-switch size="small" :checked="disabled" @change="disabled = $event" />\n        </div>\n    </template>\n    <script>\n        export default {\n            data() {\n              return {\n                inputValue: 1,\n                disabled: false,\n              }\n            },\n        }\n    <\/script>',CodeCustomize:'    <template>\n        <div>\n            <sl-row>\n                <sl-col :span="12">\n                    <sl-slider :max="20" :defaultValue="5" :tipFormatter="null" />\n                </sl-col>\n            </sl-row>\n            <sl-row>\n                <sl-col :span="12">\n                    <sl-slider :max="20" :defaultValue="10" :tipFormatter="value => `${value}M`" />\n                </sl-col>\n            </sl-row>\n        </div>\n    </template>',CodeDouble:'    <template>\n        <div>\n            <sl-row>\n                <sl-col :span="12">\n                    <sl-slider range :defaultValue="[20, 50]" />\n                </sl-col>\n            </sl-row>\n        </div>\n    </template>',CodeVertical:'    <template>\n        <div>\n            <sl-row>\n                <sl-col :span="8">\n                    <div style="height: 300px">\n                        <div style="float:left;height: 300px;marginLeft: 70px">\n                            <sl-slider vertical :defaultValue="30" />\n                        </div>\n                        <div style="float:left;height: 300px;marginLeft: 70px">\n                            <sl-slider vertical range :defaultValue="[20, 50]" />\n                        </div>\n                        <div style="float:left;height: 300px;marginLeft: 70px">\n                            <sl-slider vertical range :marks="marks" :defaultValue="[25, 73]" />\n                        </div>\n                    </div>\n                </sl-col>\n            </sl-row>\n        </div>\n    </template>\n    <script>\n        export default {\n            data() {\n              return {\n                marks: {\n                    0: \'0°C\',\n                    25: \'25°C\',\n                    73: \'73°C\',\n                    100: {\n                        style: {\n                            color: \'#f50\',\n                        },\n                        label: `100°C`,\n                    },\n                },\n              }\n            },\n        }\n    <\/script>',inputValue:1,disabled:!1,marks:{0:"0°C",25:"25°C",73:"73°C",100:{style:{color:"#f50"},label:"100°C"}}}},components:{SearchCode:function(){return new Promise(function(t){l.e(0).then(function(e){t(l(831))}.bind(null,l)).catch(l.oe)})}},methods:{}},n=l(55),i=Object(n.a)(s,a,[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"detail-box"},[e("h1",[this._v("Slider 滑动输入条")]),this._v(" "),e("p",[this._v("滑动型输入器，展示当前值和可选范围。")])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"detail-box"},[l("h2",[t._v("API")]),t._v(" "),l("p",{staticClass:"row-in-round"},[t._v("sl-slider")]),t._v(" "),l("table",{staticClass:"salus-table salus-table-striped salus-table-hover"},[l("thead",[l("tr",[l("th",{attrs:{width:"15%"}},[t._v("参数")]),t._v(" "),l("th",{attrs:{width:"35%"}},[t._v("描述")]),t._v(" "),l("th",{attrs:{width:"35%"}},[t._v("类型")]),t._v(" "),l("th",{attrs:{width:"15%"}},[t._v("默认值")])])]),t._v(" "),l("tbody",[l("tr",[l("td",[t._v("autoFocus")]),t._v(" "),l("td",[t._v("自动获取焦点")]),t._v(" "),l("td",[t._v("boolean")]),t._v(" "),l("td",[t._v("false")])]),t._v(" "),l("tr",[l("td",[t._v("defaultValue")]),t._v(" "),l("td",[t._v("设置初始取值。当 range 为 false 时，使用 number，否则用 [number, number]")]),t._v(" "),l("td",[t._v("number|number[]")]),t._v(" "),l("td",[t._v("0 or [0, 0]")])]),t._v(" "),l("tr",[l("td",[t._v("disabled")]),t._v(" "),l("td",[t._v("值为 true 时，滑块为禁用状态")]),t._v(" "),l("td",[t._v("boolean")]),t._v(" "),l("td",[t._v("false")])]),t._v(" "),l("tr",[l("td",[t._v("included")]),t._v(" "),l("td",[t._v("marks 不为空对象时有效，值为 true 时表示值为包含关系，false 表示并列")]),t._v(" "),l("td",[t._v("boolean")]),t._v(" "),l("td",[t._v("true")])]),t._v(" "),l("tr",[l("td",[t._v("marks")]),t._v(" "),l("td",[t._v("刻度标记，key 的类型必须为 number 且取值在闭区间 [min, max] 内，每个标签可以单独设置样式")]),t._v(" "),l("td",[t._v("object")]),t._v(" "),l("td",[t._v("{ number: string|VNode } or { number: { style: object, label: string|VNode } } or { number: () => VNode }")])]),t._v(" "),l("tr",[l("td",[t._v("max")]),t._v(" "),l("td",[t._v("最大值")]),t._v(" "),l("td",[t._v("number")]),t._v(" "),l("td",[t._v("100")])]),t._v(" "),l("tr",[l("td",[t._v("min")]),t._v(" "),l("td",[t._v("最小值")]),t._v(" "),l("td",[t._v("number")]),t._v(" "),l("td",[t._v("0")])]),t._v(" "),l("tr",[l("td",[t._v("range")]),t._v(" "),l("td",[t._v("双滑块模式")]),t._v(" "),l("td",[t._v("boolean")]),t._v(" "),l("td",[t._v("false")])]),t._v(" "),l("tr",[l("td",[t._v("step")]),t._v(" "),l("td",[t._v("步长，取值必须大于 0，并且可被 (max - min) 整除。当 marks 不为空对象时，可以设置 step 为 null，此时 Slider 的可选值仅有 marks 标出来的部分。")]),t._v(" "),l("td",[t._v("number|null")]),t._v(" "),l("td",[t._v("1")])]),t._v(" "),l("tr",[l("td",[t._v("tipFormatter")]),t._v(" "),l("td",[t._v("Slider 会把当前值传给 tipFormatter，并在 Tooltip 中显示 tipFormatter 的返回值，若为 null，则隐藏 Tooltip。")]),t._v(" "),l("td",[t._v("Function|null")]),t._v(" "),l("td",[t._v("IDENTITY")])]),t._v(" "),l("tr",[l("td",[t._v("value(v-model)")]),t._v(" "),l("td",[t._v("设置当前取值。当 range 为 false 时，使用 number，否则用 [number, number]")]),t._v(" "),l("td",[t._v("number|number[]")]),t._v(" "),l("td",[t._v("-")])]),t._v(" "),l("tr",[l("td",[t._v("vertical")]),t._v(" "),l("td",[t._v("值为 true 时，Slider 为垂直方向")]),t._v(" "),l("td",[t._v("boolean")]),t._v(" "),l("td",[t._v("false")])])])]),t._v(" "),l("p",{staticClass:"row-in-round"},[t._v("sl-slider 事件")]),t._v(" "),l("table",{staticClass:"salus-table salus-table-striped salus-table-hover"},[l("thead",[l("tr",[l("th",{attrs:{width:"15%"}},[t._v("事件名称")]),t._v(" "),l("th",{attrs:{width:"70%"}},[t._v("说明")]),t._v(" "),l("th",{attrs:{width:"15%"}},[t._v("回调参数")])])]),t._v(" "),l("tbody",[l("tr",[l("td",[t._v("afterChange")]),t._v(" "),l("td",[t._v("与 mouseup 触发时机一致，把当前值作为参数传入。")]),t._v(" "),l("td",[t._v("Function(value)")])]),t._v(" "),l("tr",[l("td",[t._v("change")]),t._v(" "),l("td",[t._v("当 Slider 的值发生改变时，会触发 change 事件，并把改变后的值作为参数传入。")]),t._v(" "),l("td",[t._v("Function(value)")])])])]),t._v(" "),l("p",{staticClass:"row-in-round"},[t._v("sl-slider 方法")]),t._v(" "),l("table",{staticClass:"salus-table salus-table-striped salus-table-hover"},[l("thead",[l("tr",[l("th",{attrs:{width:"50%"}},[t._v("名称")]),t._v(" "),l("th",{attrs:{width:"50%"}},[t._v("描述")])])]),t._v(" "),l("tbody",[l("tr",[l("td",[t._v("blur()")]),t._v(" "),l("td",[t._v("移除焦点")])]),t._v(" "),l("tr",[l("td",[t._v("focus()")]),t._v(" "),l("td",[t._v("获取焦点")])])])])])}],!1,null,"4fb8966f",null);i.options.__file="src/components/slider/slider.vue";e.default=i.exports}}]);