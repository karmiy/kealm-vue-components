(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{623:function(e,t,n){"use strict";n.r(t);var l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page-box"},[e._m(0),e._v(" "),n("div",{staticClass:"detail-box"},[n("h2",[e._v("基础复选框")]),e._v(" "),n("p",{staticClass:"code-left-line"},[e._v("Demo")]),e._v(" "),n("sl-checkbox",[e._v("普通复选框")]),e._v(" "),n("search-code",{attrs:{code:e.CodeBasic}})],1),e._v(" "),n("div",{staticClass:"detail-box"},[n("h2",[e._v("复选框禁用")]),e._v(" "),n("p",{staticClass:"code-left-line"},[e._v("Demo")]),e._v(" "),n("sl-checkbox",{attrs:{disabled:""}},[e._v("禁用复选框(未选中)")]),e._v(" "),n("sl-checkbox",{attrs:{disabled:"",defaultChecked:""}},[e._v("禁用复选框(选中)")]),e._v(" "),n("search-code",{attrs:{code:e.CodeDisable}})],1),e._v(" "),n("div",{staticClass:"detail-box"},[n("h2",[e._v("复选框全选")]),e._v(" "),n("p",{staticClass:"code-left-line"},[e._v("Demo")]),e._v(" "),n("div",{staticClass:"checkall-divider"},[n("sl-checkbox",{attrs:{indeterminate:e.indeterminate,checked:e.checkAll},on:{change:e.onCheckAllChange}},[e._v("\n                Check all\n            ")])],1),e._v(" "),n("br"),e._v(" "),n("sl-checkbox-group",{attrs:{options:e.plainOptions},on:{change:e.updateSingleChecked},model:{value:e.checkedList,callback:function(t){e.checkedList=t},expression:"checkedList"}}),e._v(" "),n("search-code",{attrs:{code:e.CodeMultiple}})],1),e._v(" "),n("div",{staticClass:"detail-box"},[n("h2",[e._v("Checkbox组")]),e._v(" "),n("p",{staticClass:"code-left-line"},[e._v("Demo")]),e._v(" "),n("div",{staticClass:"detail-block"},[n("sl-checkbox-group",{attrs:{options:e.plainOptions},on:{change:e.onChange},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1),e._v(" "),n("div",{staticClass:"detail-block"},[n("sl-checkbox-group",{attrs:{options:e.plainOptions,defaultValue:["Apple"]},on:{change:e.onChange}})],1),e._v(" "),n("div",{staticClass:"detail-block"},[n("sl-checkbox-group",{attrs:{options:e.options,value:["Pear"]},on:{change:e.onChange}})],1),e._v(" "),n("div",{staticClass:"detail-block"},[n("sl-checkbox-group",{attrs:{options:e.optionsWithDisabled,disabled:"",defaultValue:["Apple"]},on:{change:e.onChange},scopedSlots:e._u([{key:"label",fn:function(t){var l=t.value;return n("span",{staticStyle:{color:"red"}},[e._v(e._s(l))])}}])})],1),e._v(" "),n("search-code",{attrs:{code:e.CodeGroup}})],1),e._v(" "),n("div",{staticClass:"detail-box"},[n("h2",[e._v("多选框布局")]),e._v(" "),n("p",{staticClass:"code-left-line"},[e._v("Demo")]),e._v(" "),n("sl-checkbox-group",[n("sl-row",[n("sl-col",{attrs:{span:8}},[n("sl-checkbox",{attrs:{value:"A"}},[e._v("A")])],1),e._v(" "),n("sl-col",{attrs:{span:8}},[n("sl-checkbox",{attrs:{value:"B"}},[e._v("B")])],1),e._v(" "),n("sl-col",{attrs:{span:8}},[n("sl-checkbox",{attrs:{value:"C"}},[e._v("C")])],1),e._v(" "),n("sl-col",{attrs:{span:8}},[n("sl-checkbox",{attrs:{value:"D"}},[e._v("D")])],1),e._v(" "),n("sl-col",{attrs:{span:8}},[n("sl-checkbox",{attrs:{value:"E"}},[e._v("E")])],1)],1)],1),e._v(" "),n("search-code",{attrs:{code:e.CodeGrid}})],1),e._v(" "),n("div",{staticClass:"detail-box"},[n("h2",[e._v("Button类复选框")]),e._v(" "),n("p",{staticClass:"code-left-line"},[e._v("Demo")]),e._v(" "),n("sl-checkbox",{attrs:{displayButton:""}},[e._v("普通复选框")]),e._v(" "),n("sl-checkbox",{attrs:{displayButton:"",disabled:""}},[e._v("禁用复选框(未选中)")]),e._v(" "),n("sl-checkbox",{attrs:{displayButton:"",disabled:"",defaultChecked:""}},[e._v("禁用复选框(选中)")]),e._v(" "),n("search-code",{attrs:{code:e.CodeButton}})],1),e._v(" "),n("div",{staticClass:"detail-box"},[n("h2",[e._v("Button类复选框全选")]),e._v(" "),n("p",{staticClass:"code-left-line"},[e._v("Demo")]),e._v(" "),n("div",{staticClass:"checkall-divider"},[n("sl-checkbox",{attrs:{displayButton:"",indeterminate:e.indeterminateBtn,checked:e.checkAllBtn},on:{change:e.onCheckAllBtnChange}},[e._v("\n                Check all\n            ")])],1),e._v(" "),n("br"),e._v(" "),n("sl-checkbox-group",{attrs:{options:e.options1},on:{change:e.updateBtnSingleChecked},model:{value:e.checkedListBtn,callback:function(t){e.checkedListBtn=t},expression:"checkedListBtn"}}),e._v(" "),n("search-code",{attrs:{code:e.CodeButtonMultiple}})],1),e._v(" "),e._m(1)])};l._withStripped=!0;var a=["Apple","Orange"],s=["Apple","Pear","Orange"],c=[{label:"Apple",value:"Apple"},{label:"Pear",value:"Pear"},{label:"Orange",value:"Orange"}],o=[{label:"Apple",value:"Apple",displayButton:!0},{label:"Pear",value:"Pear",displayButton:!0},{label:"Orange",value:"Orange",displayButton:!0}],i=[{value:"Apple"},{label:"Pear",value:"Pear"},{label:"Orange",value:"Orange",disabled:!1}],d={name:"Checkbox",data:function(){return{trueVal:!0,indeterminate:!0,checkAll:!1,checkedList:a,checkedListBtn:a,indeterminateBtn:!0,checkAllBtn:!1,plainOptions:s,options:c,options1:o,optionsWithDisabled:i,value:[],CodeBasic:"    <template>\n        <div>\n            <sl-checkbox>普通复选框</sl-checkbox>\n        </div>\n    </template>",CodeDisable:"    <template>\n        <div>\n            <sl-checkbox disabled>禁用复选框(未选中)</sl-checkbox>\n            <sl-checkbox disabled defaultChecked>禁用复选框(选中)</sl-checkbox>\n        </div>\n    </template>",CodeMultiple:'    <template>\n        <div>\n            <div class="checkall-divider">\n                <sl-checkbox\n                        :indeterminate="indeterminate"\n                        @change="onCheckAllChange"\n                        :checked="checkAll"\n                >\n                    Check all\n                </sl-checkbox>\n            </div>\n            <br>\n            <sl-checkbox-group :options="plainOptions" v-model="checkedList" @change="updateSingleChecked" />\n        </div>\n    </template>\n    <script>\n        export default {\n            data() {\n                return {\n                    indeterminate: true,\n                    checkAll: false,\n                    plainOptions: [\'Apple\', \'Pear\', \'Orange\'],\n                    checkedList:[\'Apple\', \'Orange\']\n                }\n            },\n            methods: {\n                updateSingleChecked (checkedList) {\n                this.indeterminate = !!checkedList.length && (checkedList.length < plainOptions.length)\n                this.checkAll = checkedList.length === plainOptions.length\n                },\n                onCheckAllChange (e) {\n                    Object.assign(this, {\n                        checkedList: e.target.checked ? plainOptions : [],\n                        indeterminate: false,\n                        checkAll: e.target.checked,\n                    })\n                }\n            }\n        }\n    <\/script>',CodeGroup:"    <template>\n        <div>\n            <sl-checkbox-group :options=\"plainOptions\" v-model=\"value\" @change=\"onChange\"/>\n            <sl-checkbox-group :options=\"plainOptions\" :defaultValue=\"['Apple']\" @change=\"onChange\" />\n            <sl-checkbox-group :options=\"options\" :value=\"['Pear']\" @change=\"onChange\" />\n            <sl-checkbox-group :options=\"optionsWithDisabled\" disabled :defaultValue=\"['Apple']\" @change=\"onChange\">\n                <span style=\"color: red\" slot=\"label\" slot-scope=\"{value}\">{{value}}</span>\n            </sl-checkbox-group>\n        </div>\n    </template>\n    <script>\n        const plainOptions = ['Apple', 'Pear', 'Orange']\n        const options = [\n            {label: 'Apple', value: 'Apple'},\n            {label: 'Pear', value: 'Pear'},\n            {label: 'Orange', value: 'Orange'},\n        ]\n        const optionsWithDisabled = [\n            {value: 'Apple'},\n            {label: 'Pear', value: 'Pear'},\n            {label: 'Orange', value: 'Orange', disabled: false},\n        ]\n        export default {\n            data() {\n                return {\n                    plainOptions,\n                    options,\n                    optionsWithDisabled,\n                    value: [],\n                }\n            },\n            methods: {\n                onChange(checkedValues) {\n                    console.log('checked = ', checkedValues)\n                    console.log('value = ', this.value)\n                }\n            }\n        }\n    <\/script>",CodeGrid:'    <template>\n        <div>\n            <sl-checkbox-group>\n                <sl-row>\n                    <sl-col :span="8"><sl-checkbox value="A">A</sl-checkbox></sl-col>\n                    <sl-col :span="8"><sl-checkbox value="B">B</sl-checkbox></sl-col>\n                    <sl-col :span="8"><sl-checkbox value="C">C</sl-checkbox></sl-col>\n                    <sl-col :span="8"><sl-checkbox value="D">D</sl-checkbox></sl-col>\n                    <sl-col :span="8"><sl-checkbox value="E">E</sl-checkbox></sl-col>\n                </sl-row>\n            </sl-checkbox-group>\n        </div>\n    </template>\n    <script>\n        export default {\n            data() {\n                return {\n                    trueVal: true\n                }\n            }\n        }\n    <\/script>',CodeButton:"    <template>\n        <div>\n            <sl-checkbox displayButton>普通复选框</sl-checkbox>\n            <sl-checkbox displayButton disabled>禁用复选框(未选中)</sl-checkbox>\n            <sl-checkbox displayButton disabled defaultChecked>禁用复选框(选中)</sl-checkbox>\n        </div>\n    </template>",CodeButtonMultiple:"    <template>\n        <div>\n            <div class=\"checkall-divider\">\n                <sl-checkbox displayButton\n                        :indeterminate=\"indeterminateBtn\"\n                        @change=\"onCheckAllBtnChange\"\n                        :checked=\"checkAllBtn\"\n                >\n                    Check all\n                </sl-checkbox>\n            </div>\n            <br>\n            <sl-checkbox-group :options=\"options\" v-model=\"checkedListBtn\n        </div>\n    </template>\n    <script>\n        const options = [\n            {label: 'Apple', value: 'Apple', displayButton: true},\n            {label: 'Pear', value: 'Pear', displayButton: true},\n            {label: 'Orange', value: 'Orange', displayButton: true},\n        ]\n        export default {\n            data() {\n                return {\n                    options,\n                    checkedListBtn: ['Apple', 'Orange'],\n                    indeterminateBtn: true,\n                    checkAllBtn: false\n                }\n            },\n            methods: {\n                updateBtnSingleChecked (checkedListBtn) {\n                    this.indeterminateBtn = !!checkedListBtn.length && (checkedListBtn.length < options.length)\n                    this.checkAllBtn = checkedListBtn.length === options.length\n                },\n                onCheckAllBtnChange (e) {\n                    const checked = options.map(item => item.value);\n                    Object.assign(this, {\n                        checkedListBtn: e.target.checked ? checked : [],\n                        indeterminateBtn: false,\n                        checkAllBtn: e.target.checked,\n                    })\n                }\n            }\n        }\n    <\/script>"}},components:{SearchCode:function(){return new Promise(function(e){n.e(0).then(function(t){e(n(637))}.bind(null,n)).catch(n.oe)})}},methods:{onChange:function(e){console.log("checked = ",e),console.log("value = ",this.value)},updateSingleChecked:function(e){this.indeterminate=!!e.length&&e.length<s.length,this.checkAll=e.length===s.length},onCheckAllChange:function(e){Object.assign(this,{checkedList:e.target.checked?s:[],indeterminate:!1,checkAll:e.target.checked})},updateBtnSingleChecked:function(e){this.indeterminateBtn=!!e.length&&e.length<o.length,this.checkAllBtn=e.length===o.length},onCheckAllBtnChange:function(e){var t=o.map(function(e){return e.value});Object.assign(this,{checkedListBtn:e.target.checked?t:[],indeterminateBtn:!1,checkAllBtn:e.target.checked})}}},v=n(53),h=Object(v.a)(d,l,[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"detail-box"},[t("h1",[this._v("Checkbox 复选框")]),this._v(" "),t("p",[this._v("多选框。")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"detail-box"},[n("h2",[e._v("API")]),e._v(" "),n("p",{staticClass:"row-in-round"},[e._v("sl-checkbox")]),e._v(" "),n("table",{staticClass:"salus-table salus-table-striped salus-table-hover"},[n("thead",[n("tr",[n("th",{attrs:{width:"15%"}},[e._v("参数")]),e._v(" "),n("th",{attrs:{width:"35%"}},[e._v("描述")]),e._v(" "),n("th",{attrs:{width:"35%"}},[e._v("类型")]),e._v(" "),n("th",{attrs:{width:"15%"}},[e._v("默认值")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("autoFocus")]),e._v(" "),n("td",[e._v("自动获取焦点")]),e._v(" "),n("td",[e._v("boolean")]),e._v(" "),n("td",[e._v("false")])]),e._v(" "),n("tr",[n("td",[e._v("checked")]),e._v(" "),n("td",[e._v("指定当前是否选中")]),e._v(" "),n("td",[e._v("boolean")]),e._v(" "),n("td",[e._v("false")])]),e._v(" "),n("tr",[n("td",[e._v("defaultChecked")]),e._v(" "),n("td",[e._v("初始是否选中")]),e._v(" "),n("td",[e._v("boolean")]),e._v(" "),n("td",[e._v("false")])]),e._v(" "),n("tr",[n("td",[e._v("disabled")]),e._v(" "),n("td",[e._v("设定失效状态")]),e._v(" "),n("td",[e._v("boolean")]),e._v(" "),n("td",[e._v("false")])]),e._v(" "),n("tr",[n("td",[e._v("displayButton")]),e._v(" "),n("td",[e._v("是否显示为按钮样式")]),e._v(" "),n("td",[e._v("boolean")]),e._v(" "),n("td",[e._v("false")])]),e._v(" "),n("tr",[n("td",[e._v("indeterminate")]),e._v(" "),n("td",[e._v("设置 indeterminate 状态，只负责样式控制")]),e._v(" "),n("td",[e._v("boolean")]),e._v(" "),n("td",[e._v("false")])])])]),e._v(" "),n("p",{staticClass:"row-in-round"},[e._v("事件")]),e._v(" "),n("div",{staticClass:"detail-block"},[n("table",{staticClass:"salus-table salus-table-hover salus-table-striped"},[n("thead",[n("tr",[n("th",{attrs:{width:"15%"}},[e._v("事件名称")]),e._v(" "),n("th",{attrs:{width:"70%"}},[e._v("说明")]),e._v(" "),n("th",{attrs:{width:"15%"}},[e._v("回调参数")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("change")]),e._v(" "),n("td",[e._v("变化时回调函数")]),e._v(" "),n("td",[e._v("Function(checkedValue)")])])])])]),e._v(" "),n("p",{staticClass:"row-in-round"},[e._v("sl-checkbox-group")]),e._v(" "),n("table",{staticClass:"salus-table salus-table-striped salus-table-hover"},[n("thead",[n("tr",[n("th",{attrs:{width:"15%"}},[e._v("参数")]),e._v(" "),n("th",{attrs:{width:"35%"}},[e._v("描述")]),e._v(" "),n("th",{attrs:{width:"35%"}},[e._v("类型")]),e._v(" "),n("th",{attrs:{width:"15%"}},[e._v("默认值")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("defaultValue")]),e._v(" "),n("td",[e._v("默认选中的选项")]),e._v(" "),n("td",[e._v("string[]")]),e._v(" "),n("td",[e._v("[]")])]),e._v(" "),n("tr",[n("td",[e._v("disabled")]),e._v(" "),n("td",[e._v("设定全部 checkbox disable 状态")]),e._v(" "),n("td",[e._v("boolean")]),e._v(" "),n("td",[e._v("false")])]),e._v(" "),n("tr",[n("td",[e._v("options")]),e._v(" "),n("td",[e._v('指定可选项，可以通过 slot="label" slot-scope="option" 定制label')]),e._v(" "),n("td",[e._v("string[] | Array<{ label: string value: string disabled?: boolean, onChange?: function }>")]),e._v(" "),n("td",[e._v("[]")])]),e._v(" "),n("tr",[n("td",[e._v("value")]),e._v(" "),n("td",[e._v("指定选中项")]),e._v(" "),n("td",[e._v("string[]")]),e._v(" "),n("td",[e._v("[]")])])])])])}],!1,null,null,null);h.options.__file="src/components/checkbox/checkbox.vue";t.default=h.exports}}]);