(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{615:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-box"},[t._m(0),t._v(" "),a("div",{staticClass:"detail-box"},[a("h2",[t._v("基础日期选择框")]),t._v(" "),a("p",{staticClass:"code-left-line"},[t._v("Demo")]),t._v(" "),a("sl-date-picker",{on:{change:t.onChange}}),t._v(" "),a("search-code",{attrs:{code:t.CodeBasic}})],1),t._v(" "),a("div",{staticClass:"detail-box"},[a("h2",[t._v("日期时间选择框")]),t._v(" "),a("p",{staticClass:"code-left-line"},[t._v("Demo")]),t._v(" "),a("sl-date-picker",{attrs:{showTime:"",format:"YYYY-MM-DD HH:mm:ss"},on:{change:t.onChange,ok:t.onOk,cancel:t.onCancel}}),t._v(" "),a("search-code",{attrs:{code:t.CodeWithTime}})],1),t._v(" "),a("div",{staticClass:"detail-box"},[a("h2",[t._v("日期范围选择")]),t._v(" "),a("p",{staticClass:"code-left-line"},[t._v("Demo")]),t._v(" "),a("sl-range-picker",{on:{change:t.onChange}}),t._v(" "),a("p",{staticClass:"row-in-round"},[t._v("带有快速选择按钮-日期")]),t._v(" "),a("div",{staticClass:"detail-block"},[a("sl-range-picker",{attrs:{rangeBtnType:"days"},on:{change:t.onChange}})],1),t._v(" "),a("div",{staticClass:"detail-block"},[a("sl-range-picker",{attrs:{rangeBtnType:"lastDays"},on:{change:t.onChange}})],1),t._v(" "),a("div",{staticClass:"detail-block"},[a("sl-range-picker",{attrs:{rangeBtnType:"lastWeeksAndMonths"},on:{change:t.onChange}})],1),t._v(" "),a("p",{staticClass:"row-in-round"},[t._v("带有操作按钮-日期")]),t._v(" "),a("div",{staticClass:"detail-block"},[a("sl-range-picker",{attrs:{rangeBtnType:"days",showOperation:""},on:{change:t.onChange}})],1),t._v(" "),a("p",{staticClass:"row-in-round"},[t._v("带有快速选择按钮-时间与日期")]),t._v(" "),a("div",{staticClass:"detail-block"},[a("sl-range-picker",{attrs:{rangeBtnType:"hours",showTime:"",format:"YYYY-MM-DD HH:mm:ss"},on:{change:t.onChange}})],1),t._v(" "),a("div",{staticClass:"detail-block"},[a("sl-range-picker",{attrs:{rangeBtnType:"days",showTime:"",format:"YYYY-MM-DD HH:mm:ss"},on:{change:t.onChange}})],1),t._v(" "),a("div",{staticClass:"detail-block"},[a("sl-range-picker",{attrs:{rangeBtnType:"lastDays",showTime:"",format:"YYYY-MM-DD HH:mm:ss"},on:{change:t.onChange}})],1),t._v(" "),a("div",{staticClass:"detail-block"},[a("sl-range-picker",{attrs:{rangeBtnType:"lastWeeksAndMonths",showTime:"",format:"YYYY-MM-DD HH:mm:ss"},on:{change:t.onChange}})],1),t._v(" "),a("div",{staticClass:"detail-block"},[a("sl-range-picker",{attrs:{rangeBtnType:["last24Hours","today","lastThreeDays","lastWeek","lastMonth"],showTime:"",format:"YYYY-MM-DD HH:mm:ss"},on:{change:t.onChange}})],1),t._v(" "),a("search-code",{attrs:{code:t.CodeRange}})],1),t._v(" "),a("div",{staticClass:"detail-box"},[a("h2",[t._v("不可选择的日期和时间")]),t._v(" "),a("p",{staticClass:"code-left-line"},[t._v("Demo")]),t._v(" "),a("div",{staticClass:"detail-block"},[a("sl-date-picker",{attrs:{showTime:"",format:"YYYY-MM-DD HH:mm:ss",disabledDate:t.disabledDate,disabledTime:t.disabledTime},on:{change:t.onChange}})],1),t._v(" "),a("div",{staticClass:"detail-block"},[a("sl-month-picker",{attrs:{disabledDate:t.disabledDate,placeholder:"选择月份"},on:{change:t.onChange}})],1),t._v(" "),a("div",{staticClass:"detail-block"},[a("sl-range-picker",{attrs:{showTime:{hideDisabledOptions:!0},format:"YYYY-MM-DD HH:mm:ss",disabledDate:t.disabledDate,disabledTime:t.disabledRangeTime},on:{change:t.onChange}})],1),t._v(" "),a("search-code",{attrs:{code:t.CodeDisabledDate}})],1),t._v(" "),a("div",{staticClass:"detail-box"},[a("h2",[t._v("日期范围最大值最小值限制")]),t._v(" "),a("p",{staticClass:"code-left-line"},[t._v("Demo")]),t._v(" "),a("sl-date-picker",{attrs:{disabledDate:t.disabledStartDate,showTime:"",format:"YYYY-MM-DD HH:mm:ss"},on:{openChange:t.handleStartOpenChange},model:{value:t.startValue,callback:function(e){t.startValue=e},expression:"startValue"}}),t._v(" "),a("sl-date-picker",{attrs:{disabledDate:t.disabledEndDate,showTime:"",format:"YYYY-MM-DD HH:mm:ss",open:t.endOpen},on:{openChange:t.handleEndOpenChange},model:{value:t.endValue,callback:function(e){t.endValue=e},expression:"endValue"}}),t._v(" "),a("search-code",{attrs:{code:t.CodeLimit}})],1),t._v(" "),t._m(1)])};n._withStripped=!0;var s={data:function(){return{CodeBasic:'    <template>\n        <div>\n            <sl-date-picker @change="onChange" />\n        </div>\n    </template>\n    <script>\n        export default {\n            methods: {\n                onChange(date) {\n                    console.log(date);\n                }\n            }\n        }\n    <\/script>',CodeWithTime:'    <template>\n        <div>\n            <sl-date-picker showTime format="YYYY-MM-DD HH:mm:ss" @change="onChange" @ok="onOk" @cancel="onCancel" />\n        </div>\n    </template>\n    <script>\n        export default {\n            methods: {\n                onChange(date) {\n                    console.log(date);\n                },\n                onOk(date) {\n                  console.log(date);\n                },\n                onCancel() {\n                  console.log(\'cancel\');\n                },\n            }\n        }\n    <\/script>',CodeRange:'    <template>\n        <div>\n            // 日期范围选择\n            <sl-range-picker @change="onChange" />\n            // 带有快速选择按钮-日期\n            <sl-range-picker @change="onChange" rangeBtnType="days" />\n            <sl-range-picker @change="onChange" rangeBtnType="lastDays" />\n            <sl-range-picker @change="onChange" rangeBtnType="lastWeeksAndMonths" />\n            // 带有操作按钮-日期\n            <sl-range-picker @change="onChange" rangeBtnType="days" showOperation />\n            // 带有快速选择按钮-时间与日期\n            <sl-range-picker @change="onChange" rangeBtnType="hours" showTime format="YYYY-MM-DD HH:mm:ss" />\n            <sl-range-picker @change="onChange" rangeBtnType="days" showTime format="YYYY-MM-DD HH:mm:ss" />\n            <sl-range-picker @change="onChange" rangeBtnType="lastDays" showTime format="YYYY-MM-DD HH:mm:ss" />\n            <sl-range-picker @change="onChange" rangeBtnType="lastWeeksAndMonths" showTime format="YYYY-MM-DD HH:mm:ss" />\n            <sl-range-picker @change="onChange" :rangeBtnType="[\'last24Hours\', \'today\' , \'lastThreeDays\', \'lastWeek\', \'lastMonth\' ]" showTime format="YYYY-MM-DD HH:mm:ss" />\n        </div>\n    </template>\n    <script>\n        export default {\n            methods: {\n                onChange(date) {\n                    console.log(date);\n                },\n            }\n        }\n    <\/script>',CodeDisabledDate:'    \n    <template>\n        <div>\n            <sl-date-picker showTime format="YYYY-MM-DD HH:mm:ss" :disabledDate="disabledDate" :disabledTime="disabledTime" @change="onChange" />\n            <sl-month-picker :disabledDate="disabledDate" placeholder="选择月份" @change="onChange" />\n            <sl-range-picker @change="onChange" :showTime="{ hideDisabledOptions: true }" format="YYYY-MM-DD HH:mm:ss" :disabledDate="disabledDate" :disabledTime="disabledRangeTime" />\n        </div>\n    </template>\n    <script>\n        export default {\n            methods: {\n                onChange(date) {\n                    console.log(date);\n                },\n                range(start, end) {\n                    const result = [];\n                    for (let i = start; i < end; i++) {\n                        result.push(i);\n                    }\n                    return result;\n                },\n                disabledDate(current) {\n                  return current && current.valueOf() < Date.now();\n                },\n                disabledTime() {\n                    return {\n                        disabledHours: () => this.range(0, 24).splice(4, 20),\n                        disabledMinutes: () => this.range(30, 60),\n                        disabledSeconds: () => [55, 56],\n                    };\n                },\n                disabledRangeTime(_, type) {\n                    if (type === \'start\') {\n                        return {\n                            disabledHours: () => this.range(0, 60).splice(4, 20),\n                            disabledMinutes: () => this.range(30, 60),\n                            disabledSeconds: () => [55, 56],\n                        };\n                    }\n                    return {\n                        disabledHours: () => this.range(0, 60).splice(20, 4),\n                        disabledMinutes: () => this.range(0, 31),\n                        disabledSeconds: () => [55, 56],\n                    };\n                },\n            }\n        }\n    <\/script>',CodeLimit:'    <template>\n        <div>\n            <sl-date-picker\n                :disabledDate="disabledStartDate"\n                showTime\n                format="YYYY-MM-DD HH:mm:ss"\n                v-model="startValue"\n                @openChange="handleStartOpenChange"\n            />\n            <sl-date-picker\n                :disabledDate="disabledEndDate"\n                showTime\n                format="YYYY-MM-DD HH:mm:ss"\n                v-model="endValue"\n                :open="endOpen"\n                @openChange="handleEndOpenChange"\n            />\n        </div>\n    </template>\n    <script>\n        export default {\n            data() {\n              return {\n                startValue: null,\n                endValue: null,\n                endOpen: false,\n              }\n            },\n            methods: {\n                disabledStartDate (startValue) {\n                    const endValue = this.endValue;\n                    if (!startValue || !endValue) {\n                        return false;\n                    }\n                    return startValue.valueOf() > endValue.valueOf();\n                },\n                disabledEndDate (endValue) {\n                    const startValue = this.startValue;\n                    if (!endValue || !startValue) {\n                        return false;\n                    }\n                    return startValue.valueOf() >= endValue.valueOf();\n                },\n                handleStartOpenChange (open) {\n                  if (!open) {\n                        this.endOpen = true;\n                    }\n                },\n                handleEndOpenChange (open) {\n                    this.endOpen = open;\n                },\n            }\n        }\n    <\/script>',CodeLocale:'    import locale from "@salus/react-components/common/date-picker/locale/zh_CN";\n      <DatePicker locale={locale} />\n    ',CodeMoment:"    import moment from 'moment';\n      moment.locale('zh-cn');\n      <DatePicker defaultValue={moment('2015-01-01', 'YYYY-MM-DD')} />\n    ",startValue:null,endValue:null,endOpen:!1}},components:{SearchCode:function(){return new Promise(function(t){a.e(0).then(function(e){t(a(637))}.bind(null,a)).catch(a.oe)})}},watch:{startValue:function(t){console.log("startValue",t)},endValue:function(t){console.log("endValue",t)}},methods:{onChange:function(t,e){console.log(t,e)},onOk:function(t){console.log(t)},onCancel:function(){console.log("cancel")},range:function(t,e){for(var a=[],n=t;n<e;n++)a.push(n);return a},disabledDate:function(t){return t&&t.valueOf()<Date.now()},disabledTime:function(){var t=this;return{disabledHours:function(){return t.range(0,24).splice(4,20)},disabledMinutes:function(){return t.range(30,60)},disabledSeconds:function(){return[55,56]}}},disabledRangeTime:function(t,e){var a=this;return"start"===e?{disabledHours:function(){return a.range(0,60).splice(4,20)},disabledMinutes:function(){return a.range(30,60)},disabledSeconds:function(){return[55,56]}}:{disabledHours:function(){return a.range(0,60).splice(20,4)},disabledMinutes:function(){return a.range(0,31)},disabledSeconds:function(){return[55,56]}}},disabledStartDate:function(t){var e=this.endValue;return!(!t||!e)&&t.valueOf()>e.valueOf()},disabledEndDate:function(t){var e=this.startValue;return!(!t||!e)&&e.valueOf()>=t.valueOf()},handleStartOpenChange:function(t){t||(this.endOpen=!0)},handleEndOpenChange:function(t){this.endOpen=t}}},d=a(53),v=Object(d.a)(s,n,[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"detail-box"},[e("h1",[this._v("DatePicker 日期选择框")]),this._v(" "),e("p",[this._v("输入或选择日期的控件。")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"detail-box"},[a("h2",[t._v("API")]),t._v(" "),a("p",{staticClass:"row-in-round"},[t._v("DatePicker、MonthPicker、RangePicker、WeekPicker共享API")]),t._v(" "),a("table",{staticClass:"salus-table salus-table-striped salus-table-hover"},[a("thead",[a("tr",[a("th",{attrs:{width:"15%"}},[t._v("参数")]),t._v(" "),a("th",{attrs:{width:"35%"}},[t._v("描述")]),t._v(" "),a("th",{attrs:{width:"35%"}},[t._v("类型")]),t._v(" "),a("th",{attrs:{width:"15%"}},[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("autoFocus")]),t._v(" "),a("td",[t._v("自动获取焦点")]),t._v(" "),a("td",[t._v("boolean")]),t._v(" "),a("td",[t._v("false")])]),t._v(" "),a("tr",[a("td",[t._v("allowClear")]),t._v(" "),a("td",[t._v("是否显示清除按钮")]),t._v(" "),a("td",[t._v("boolean")]),t._v(" "),a("td",[t._v("true")])]),t._v(" "),a("tr",[a("td",[t._v("dateRender")]),t._v(" "),a("td",[t._v("作用域插槽，自定义日期单元格的内容")]),t._v(" "),a("td",[t._v('slot="dateRender" slot-scope="current, today"')]),t._v(" "),a("td",[t._v("-")])]),t._v(" "),a("tr",[a("td",[t._v("disabled")]),t._v(" "),a("td",[t._v("禁用")]),t._v(" "),a("td",[t._v("boolean")]),t._v(" "),a("td",[t._v("false")])]),t._v(" "),a("tr",[a("td",[t._v("disabledDate")]),t._v(" "),a("td",[t._v("不可选择的日期")]),t._v(" "),a("td",[t._v("(currentDate: Date) => boolean")]),t._v(" "),a("td",[t._v("-")])]),t._v(" "),a("tr",[a("td",[t._v("getCalendarContainer")]),t._v(" "),a("td",[t._v("定义浮层的容器，默认为 body 上新建 div")]),t._v(" "),a("td",[t._v("(trigger) => HTMLElement")]),t._v(" "),a("td",[t._v("无")])]),t._v(" "),a("tr",[a("td",[t._v("open")]),t._v(" "),a("td",[t._v("控制弹层是否展开")]),t._v(" "),a("td",[t._v("boolean")]),t._v(" "),a("td",[t._v("-")])]),t._v(" "),a("tr",[a("td",[t._v("placeholder")]),t._v(" "),a("td",[t._v("输入框提示文字")]),t._v(" "),a("td",[t._v("string|RangePicker[]")]),t._v(" "),a("td",[t._v("-")])]),t._v(" "),a("tr",[a("td",[t._v("popupStyle")]),t._v(" "),a("td",[t._v("额外的弹出日历样式")]),t._v(" "),a("td",[t._v("object")]),t._v(" "),a("td",[t._v("{}")])]),t._v(" "),a("tr",[a("td",[t._v("dropdownClassName")]),t._v(" "),a("td",[t._v("额外的弹出日历 className")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("-")])]),t._v(" "),a("tr",[a("td",[t._v("suffixIcon")]),t._v(" "),a("td",[t._v("自定义的选择框前缀图标")]),t._v(" "),a("td",[t._v("VNode | slot")]),t._v(" "),a("td",[t._v("-")])])])]),t._v(" "),a("p",{staticClass:"row-in-round"},[t._v("共有的事件")]),t._v(" "),a("table",{staticClass:"salus-table salus-table-striped salus-table-hover"},[a("thead",[a("tr",[a("th",{attrs:{width:"15%"}},[t._v("事件名称")]),t._v(" "),a("th",{attrs:{width:"70%"}},[t._v("说明")]),t._v(" "),a("th",{attrs:{width:"15%"}},[t._v("回调参数")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("openChange")]),t._v(" "),a("td",[t._v("弹出日历和关闭日历的回调")]),t._v(" "),a("td",[t._v("function(status)")])]),t._v(" "),a("tr",[a("td",[t._v("panelChange")]),t._v(" "),a("td",[t._v("日期面板变化时的回调")]),t._v(" "),a("td",[t._v("function(value, mode)")])])])]),t._v(" "),a("p",{staticClass:"row-in-round"},[t._v("共同的方法")]),t._v(" "),a("table",{staticClass:"salus-table salus-table-striped salus-table-hover"},[a("thead",[a("tr",[a("th",{attrs:{width:"50%"}},[t._v("名称")]),t._v(" "),a("th",{attrs:{width:"50%"}},[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("blur()")]),t._v(" "),a("td",[t._v("移除焦点")])]),t._v(" "),a("tr",[a("td",[t._v("focus()")]),t._v(" "),a("td",[t._v("获取焦点")])])])]),t._v(" "),a("p",{staticClass:"row-in-round"},[t._v("sl-date-picker")]),t._v(" "),a("table",{staticClass:"salus-table salus-table-striped salus-table-hover"},[a("thead",[a("tr",[a("th",{attrs:{width:"15%"}},[t._v("参数")]),t._v(" "),a("th",{attrs:{width:"35%"}},[t._v("描述")]),t._v(" "),a("th",{attrs:{width:"35%"}},[t._v("类型")]),t._v(" "),a("th",{attrs:{width:"15%"}},[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("defaultValue")]),t._v(" "),a("td",[t._v("默认日期")]),t._v(" "),a("td",[t._v("Date")]),t._v(" "),a("td",[t._v("-")])]),t._v(" "),a("tr",[a("td",[t._v("disabledTime")]),t._v(" "),a("td",[t._v("不可选择的时间")]),t._v(" "),a("td",[t._v("function(date)")]),t._v(" "),a("td",[t._v("-")])]),t._v(" "),a("tr",[a("td",[t._v("format")]),t._v(" "),a("td",[t._v("设置日期格式")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v('"YYYY-MM-DD"')])]),t._v(" "),a("tr",[a("td",[t._v("renderExtraFooter")]),t._v(" "),a("td",[t._v("在面板中添加额外的页脚")]),t._v(" "),a("td",[t._v('slot="renderExtraFooter"')]),t._v(" "),a("td",[t._v("-")])]),t._v(" "),a("tr",[a("td",[t._v("showTime")]),t._v(" "),a("td",[t._v("增加时间选择功能")]),t._v(" "),a("td",[t._v("Object|boolean")]),t._v(" "),a("td",[t._v("TimePicker Options")])]),t._v(" "),a("tr",[a("td",[t._v("showToday")]),t._v(" "),a("td",[t._v("是否展示“今天”按钮")]),t._v(" "),a("td",[t._v("boolean")]),t._v(" "),a("td",[t._v("true")])]),t._v(" "),a("tr",[a("td",[t._v("value(v-model)")]),t._v(" "),a("td",[t._v("日期")]),t._v(" "),a("td",[t._v("Date")]),t._v(" "),a("td",[t._v("-")])])])]),t._v(" "),a("p",{staticClass:"row-in-round"},[t._v("sl-date-picker事件")]),t._v(" "),a("table",{staticClass:"salus-table salus-table-striped salus-table-hover"},[a("thead",[a("tr",[a("th",{attrs:{width:"15%"}},[t._v("事件名称")]),t._v(" "),a("th",{attrs:{width:"70%"}},[t._v("说明")]),t._v(" "),a("th",{attrs:{width:"15%"}},[t._v("回调参数")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("change")]),t._v(" "),a("td",[t._v("时间发生变化的回调")]),t._v(" "),a("td",[t._v("function(date)")])]),t._v(" "),a("tr",[a("td",[t._v("ok")]),t._v(" "),a("td",[t._v("点击确定按钮的回调")]),t._v(" "),a("td",[t._v("function()")])]),t._v(" "),a("tr",[a("td",[t._v("cancel")]),t._v(" "),a("td",[t._v("点击取消按钮的回调")]),t._v(" "),a("td",[t._v("function()")])])])]),t._v(" "),a("p",{staticClass:"row-in-round"},[t._v("sl-month-picker")]),t._v(" "),a("table",{staticClass:"salus-table salus-table-striped salus-table-hover"},[a("thead",[a("tr",[a("th",{attrs:{width:"15%"}},[t._v("参数")]),t._v(" "),a("th",{attrs:{width:"35%"}},[t._v("描述")]),t._v(" "),a("th",{attrs:{width:"35%"}},[t._v("类型")]),t._v(" "),a("th",{attrs:{width:"15%"}},[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("defaultValue")]),t._v(" "),a("td",[t._v("默认日期")]),t._v(" "),a("td",[t._v("Date")]),t._v(" "),a("td",[t._v("-")])]),t._v(" "),a("tr",[a("td",[t._v("format")]),t._v(" "),a("td",[t._v("设置日期格式")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v('"YYYY-MM"')])]),t._v(" "),a("tr",[a("td",[t._v("monthCellContentRender")]),t._v(" "),a("td",[t._v("自定义的月份内容渲染方法")]),t._v(" "),a("td",[t._v('slot="monthCellContentRender" slot-scope="date, locale"')]),t._v(" "),a("td",[t._v("-")])]),t._v(" "),a("tr",[a("td",[t._v("renderExtraFooter")]),t._v(" "),a("td",[t._v("在面板中添加额外的页脚")]),t._v(" "),a("td",[t._v('slot="renderExtraFooter"')]),t._v(" "),a("td",[t._v("-")])]),t._v(" "),a("tr",[a("td",[t._v("value(v-model)")]),t._v(" "),a("td",[t._v("日期")]),t._v(" "),a("td",[t._v("Date")]),t._v(" "),a("td",[t._v("-")])])])]),t._v(" "),a("p",{staticClass:"row-in-round"},[t._v("sl-month-picker事件")]),t._v(" "),a("table",{staticClass:"salus-table salus-table-striped salus-table-hover"},[a("thead",[a("tr",[a("th",{attrs:{width:"15%"}},[t._v("事件名称")]),t._v(" "),a("th",{attrs:{width:"70%"}},[t._v("说明")]),t._v(" "),a("th",{attrs:{width:"15%"}},[t._v("回调参数")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("change")]),t._v(" "),a("td",[t._v("时间发生变化的回调")]),t._v(" "),a("td",[t._v("function(date)")])])])]),t._v(" "),a("p",{staticClass:"row-in-round"},[t._v("sl-week-picker")]),t._v(" "),a("table",{staticClass:"salus-table salus-table-striped salus-table-hover"},[a("thead",[a("tr",[a("th",{attrs:{width:"15%"}},[t._v("参数")]),t._v(" "),a("th",{attrs:{width:"35%"}},[t._v("描述")]),t._v(" "),a("th",{attrs:{width:"35%"}},[t._v("类型")]),t._v(" "),a("th",{attrs:{width:"15%"}},[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("defaultValue")]),t._v(" "),a("td",[t._v("默认日期")]),t._v(" "),a("td",[t._v("Date")]),t._v(" "),a("td",[t._v("-")])]),t._v(" "),a("tr",[a("td",[t._v("format")]),t._v(" "),a("td",[t._v("设置日期格式")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v('"YYYY-wo"')])]),t._v(" "),a("tr",[a("td",[t._v("value(v-model)")]),t._v(" "),a("td",[t._v("日期")]),t._v(" "),a("td",[t._v("Date")]),t._v(" "),a("td",[t._v("-")])])])]),t._v(" "),a("p",{staticClass:"row-in-round"},[t._v("sl-week-picker事件")]),t._v(" "),a("table",{staticClass:"salus-table salus-table-striped salus-table-hover"},[a("thead",[a("tr",[a("th",{attrs:{width:"15%"}},[t._v("事件名称")]),t._v(" "),a("th",{attrs:{width:"70%"}},[t._v("说明")]),t._v(" "),a("th",{attrs:{width:"15%"}},[t._v("回调参数")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("change")]),t._v(" "),a("td",[t._v("时间发生变化的回调")]),t._v(" "),a("td",[t._v("function(date)")])])])]),t._v(" "),a("p",{staticClass:"row-in-round"},[t._v("sl-range-picker")]),t._v(" "),a("table",{staticClass:"salus-table salus-table-striped salus-table-hover"},[a("thead",[a("tr",[a("th",{attrs:{width:"15%"}},[t._v("参数")]),t._v(" "),a("th",{attrs:{width:"35%"}},[t._v("描述")]),t._v(" "),a("th",{attrs:{width:"35%"}},[t._v("类型")]),t._v(" "),a("th",{attrs:{width:"15%"}},[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("defaultValue")]),t._v(" "),a("td",[t._v("默认日期")]),t._v(" "),a("td",[t._v("Date[]")]),t._v(" "),a("td",[t._v("-")])]),t._v(" "),a("tr",[a("td",[t._v("disabledTime")]),t._v(" "),a("td",[t._v("不可选择的时间")]),t._v(" "),a("td",[t._v("function(dates: [Date, Date], partial: 'start'|'end')")]),t._v(" "),a("td",[t._v("-")])]),t._v(" "),a("tr",[a("td",[t._v("format")]),t._v(" "),a("td",[t._v("设置日期格式")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v('"YYYY-MM-DD HH:mm:ss"')])]),t._v(" "),a("tr",[a("td",[t._v("showOperation")]),t._v(" "),a("td",[t._v("显示操作按钮，只有选择日期时有效")]),t._v(" "),a("td",[t._v("boolean")]),t._v(" "),a("td",[t._v("false")])]),t._v(" "),a("tr",[a("td",[t._v("rangeBtnType")]),t._v(" "),a("td",[t._v("配置快速选择模板")]),t._v(" "),a("td",[t._v("RangeBtnType (备注：快速选择的配置类) :'hours'(近24/48/72小时类) | 'days'(今天/昨天类) | 'lastDays'(近3/7天类) | 'lastWeeksAndMonths'(周、月混合类)\n                    CustomBtnType[ ] (备注：快速选择的配置项) : 'last24Hours'(近24小时) | 'last48Hours'(近48小时) | 'last72Hours'(近72小时) | 'today'(今天) | 'yesterday'(昨天) | 'lastThreeDays'(近三天) | 'lastSevenDays'(近七天) | 'lastWeek'(最近一周) |'lastTwoWeeks' (最近两周) | 'lastMonth'(最近一个月) | 'lastSixMonths' (最近六个月)")]),t._v(" "),a("td",[t._v("-")])]),t._v(" "),a("tr",[a("td",[t._v("showTime")]),t._v(" "),a("td",[t._v("增加时间选择功能")]),t._v(" "),a("td",[t._v("Object|boolean")]),t._v(" "),a("td",[t._v("TimePicker Options")])]),t._v(" "),a("tr",[a("td",[t._v("value(v-model)")]),t._v(" "),a("td",[t._v("日期")]),t._v(" "),a("td",[t._v("Date[]")]),t._v(" "),a("td",[t._v("-")])])])]),t._v(" "),a("p",{staticClass:"row-in-round"},[t._v("sl-range-picker事件")]),t._v(" "),a("table",{staticClass:"salus-table salus-table-striped salus-table-hover"},[a("thead",[a("tr",[a("th",{attrs:{width:"15%"}},[t._v("事件名称")]),t._v(" "),a("th",{attrs:{width:"70%"}},[t._v("说明")]),t._v(" "),a("th",{attrs:{width:"15%"}},[t._v("回调参数")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("calendarChange")]),t._v(" "),a("td",[t._v("待选日期发生变化的回调")]),t._v(" "),a("td",[t._v("function(dates: [Date, Date])")])]),t._v(" "),a("tr",[a("td",[t._v("change")]),t._v(" "),a("td",[t._v("时间发生变化的回调")]),t._v(" "),a("td",[t._v("function(dates: [Date, Date])")])]),t._v(" "),a("tr",[a("td",[t._v("ok")]),t._v(" "),a("td",[t._v("点击确定按钮的回调")]),t._v(" "),a("td",[t._v("function(dates: [Date, Date])")])])])])])}],!1,null,null,null);v.options.__file="src/components/date-picker/date-picker.vue";e.default=v.exports}}]);