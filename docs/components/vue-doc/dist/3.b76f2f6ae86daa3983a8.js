(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{745:function(t,v,a){t.exports=a.p+"static/card-example.632acf4.png"},747:function(t,v,a){var e=a(763);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);(0,a(73).default)("aacfcff0",e,!1,{})},762:function(t,v,a){"use strict";var e=a(747);a.n(e).a},763:function(t,v,a){(t.exports=a(56)(!1)).push([t.i,"\n.salus-card-no-border-demo[data-v-839cd962] {\n    background: #F3F6FB;\n    border: 1px solid rgba(194, 202, 216, 0.4);\n    padding: 15px;\n    border-radius: 4px;\n}\n",""])},810:function(t,v,a){"use strict";a.r(v);var e=function(){var t=this,v=t.$createElement,e=t._self._c||v;return e("div",{staticClass:"page-box page-select ng-scope"},[t._m(0),t._v(" "),e("div",{staticClass:"detail-box"},[e("h2",[t._v("基础卡片")]),t._v(" "),e("p",[t._v("包含标题、内容和操作区域。")]),t._v(" "),e("p",{staticClass:"code-left-line"},[t._v("Demo")]),t._v(" "),e("sl-card",{attrs:{title:"Card Title"}},[e("a",{attrs:{slot:"extra",href:"#"},slot:"extra"},[t._v("more")]),t._v(" "),e("p",[t._v("card content")]),t._v(" "),e("p",[t._v("card content")]),t._v(" "),e("p",[t._v("card content")])]),t._v(" "),e("search-code",{attrs:{code:t.CodeBasic}})],1),t._v(" "),e("div",{staticClass:"detail-box"},[e("h2",[t._v("卡片无边框")]),t._v(" "),e("p",[t._v("在灰色背景上使用无边框的卡片")]),t._v(" "),e("p",{staticClass:"code-left-line"},[t._v("Demo")]),t._v(" "),e("div",{staticClass:"salus-card-no-border-demo"},[e("sl-card",{staticStyle:{width:"300px"},attrs:{title:"Card Title",bordered:!1}},[e("a",{attrs:{slot:"extra",href:"#"},slot:"extra"},[t._v("more")]),t._v(" "),e("p",[t._v("card content")]),t._v(" "),e("p",[t._v("card content")]),t._v(" "),e("p",[t._v("card content")])])],1),t._v(" "),e("search-code",{attrs:{code:t.CodeBorder}})],1),t._v(" "),e("div",{staticClass:"detail-box"},[e("h2",[t._v("简洁卡片")]),t._v(" "),e("p",[t._v("只包含内容区域。")]),t._v(" "),e("p",{staticClass:"code-left-line"},[t._v("Demo")]),t._v(" "),e("sl-card",{staticStyle:{width:"300px"}},[e("p",[t._v("card content")]),t._v(" "),e("p",[t._v("card content")]),t._v(" "),e("p",[t._v("card content")])]),t._v(" "),e("search-code",{attrs:{code:t.CodeSimple}})],1),t._v(" "),e("div",{staticClass:"detail-box"},[e("h2",[t._v("带图片的卡片")]),t._v(" "),e("p",[t._v("可配置定义更丰富的内容展示。")]),t._v(" "),e("p",{staticClass:"code-left-line"},[t._v("Demo")]),t._v(" "),e("sl-card",{staticStyle:{width:"300px"}},[e("img",{attrs:{slot:"cover",alt:"example",src:a(745)},slot:"cover"}),t._v(" "),e("sl-card-meta",{attrs:{timeInfo:"2018-08-08 18:00:00"}},[e("template",{slot:"description"},[t._v("description")]),t._v(" "),e("a",{attrs:{slot:"metaExtra",href:"#"},slot:"metaExtra"},[t._v("more")])],2)],1),t._v(" "),e("search-code",{attrs:{code:t.CodeImg}})],1),t._v(" "),e("div",{staticClass:"detail-box"},[e("h2",[t._v("卡片阴影")]),t._v(" "),e("p",[t._v("分为默认阴影、鼠标悬浮时阴影。")]),t._v(" "),e("p",{staticClass:"code-left-line"},[t._v("Demo")]),t._v(" "),e("div",{staticClass:"detail-block"},[e("sl-card",{staticStyle:{width:"300px"},attrs:{defaultShadow:""}},[e("p",[t._v("card content")]),t._v(" "),e("p",[t._v("card content")]),t._v(" "),e("p",[t._v("card content")])])],1),t._v(" "),e("div",{staticClass:"detail-block"},[e("sl-card",{staticStyle:{width:"300px"},attrs:{hoverable:""}},[e("p",[t._v("card content")]),t._v(" "),e("p",[t._v("card content")]),t._v(" "),e("p",[t._v("card content")])])],1),t._v(" "),e("search-code",{attrs:{code:t.CodeShadow}})],1),t._v(" "),t._m(1)])};e._withStripped=!0;var d={name:"Card",data:function(){return{CodeBasic:'    <template>\n        <div>    \n            <sl-card title="Card Title">\n                <a href="#" slot="extra">more</a>\n                <p>card content</p>\n                <p>card content</p>\n                <p>card content</p>\n            </sl-card>\n        </div>\n    </template>',CodeBorder:'    <template>\n        <div>    \n            <sl-card style="width: 300px;" title="Card Title" :bordered="false">\n                <a href="#" slot="extra">more</a>\n                <p>card content</p>\n                <p>card content</p>\n                <p>card content</p>\n            </sl-card>\n        </div>\n    </template>',CodeSimple:'    <template>\n        <div>    \n            <sl-card style="width: 300px;">\n                <p>card content</p>\n                <p>card content</p>\n                <p>card content</p>\n            </sl-card>\n        </div>\n    </template>',CodeImg:'    <template>\n        <div>    \n            <sl-card style="width: 300px">\n                <img alt="example" src="../../assets/imgs/card-example.png" slot="cover"/>\n                <sl-card-meta timeInfo="2018-08-08 18:00:00">\n                    <template slot="description">description</template>\n                    <a href="#" slot="metaExtra">more</a>\n                </sl-card-meta>\n            </sl-card>\n        </div>\n    </template>',CodeShadow:'    <template>\n        <div>    \n            <sl-card style="width: 300px;" defaultShadow>\n                <p>card content</p>\n                <p>card content</p>\n                <p>card content</p>\n            </sl-card>\n            <sl-card style="width: 300px;" hoverable>\n                <p>card content</p>\n                <p>card content</p>\n                <p>card content</p>\n            </sl-card>\n        </div>\n    </template>'}},components:{SearchCode:function(){return new Promise(function(t){a.e(0).then(function(v){t(a(831))}.bind(null,a)).catch(a.oe)})}}},_=(a(762),a(55)),s=Object(_.a)(d,e,[function(){var t=this.$createElement,v=this._self._c||t;return v("div",{staticClass:"detail-box"},[v("h1",[this._v("Card 卡片/面板")]),this._v(" "),v("p",[this._v("卡片容器，可承载文字、列表、图片、段落，常用于后台概览页面。")])])},function(){var t=this,v=t.$createElement,a=t._self._c||v;return a("div",{staticClass:"detail-box"},[a("h2",[t._v("API")]),t._v(" "),a("p",{staticClass:"row-in-round"},[t._v("sl-card")]),t._v(" "),a("table",{staticClass:"salus-table salus-table-striped salus-table-hover"},[a("thead",[a("tr",[a("th",{attrs:{width:"15%"}},[t._v("参数")]),t._v(" "),a("th",{attrs:{width:"35%"}},[t._v("描述")]),t._v(" "),a("th",{attrs:{width:"35%"}},[t._v("类型")]),t._v(" "),a("th",{attrs:{width:"15%"}},[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("actions")]),t._v(" "),a("td",[t._v("卡片操作组，位置在卡片底部")]),t._v(" "),a("td",[t._v("slots")]),t._v(" "),a("td",[t._v("-")])]),t._v(" "),a("tr",[a("td",[t._v("activeTabKey")]),t._v(" "),a("td",[t._v("当前激活页签的 key")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("-")])]),t._v(" "),a("tr",[a("td",[t._v("defaultActiveTabKey")]),t._v(" "),a("td",[t._v("初始化选中页签的 key，如果没有设置 activeTabKey")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("第一个页签")])]),t._v(" "),a("tr",[a("td",[t._v("headStyle")]),t._v(" "),a("td",[t._v("自定义标题区域样式")]),t._v(" "),a("td",[t._v("object")]),t._v(" "),a("td",[t._v("-")])]),t._v(" "),a("tr",[a("td",[t._v("bodyStyle")]),t._v(" "),a("td",[t._v("内容区域自定义样式")]),t._v(" "),a("td",[t._v("object")]),t._v(" "),a("td",[t._v("-")])]),t._v(" "),a("tr",[a("td",[t._v("bordered")]),t._v(" "),a("td",[t._v("是否有边框")]),t._v(" "),a("td",[t._v("boolean")]),t._v(" "),a("td",[t._v("true")])]),t._v(" "),a("tr",[a("td",[t._v("cover")]),t._v(" "),a("td",[t._v("卡片封面")]),t._v(" "),a("td",[t._v("slot")]),t._v(" "),a("td",[t._v("-")])]),t._v(" "),a("tr",[a("td",[t._v("extra")]),t._v(" "),a("td",[t._v("卡片右上角的操作区域")]),t._v(" "),a("td",[t._v("string 丨 slot")]),t._v(" "),a("td",[t._v("-")])]),t._v(" "),a("tr",[a("td",[t._v("hoverable")]),t._v(" "),a("td",[t._v("鼠标移过时可浮起")]),t._v(" "),a("td",[t._v("boolean")]),t._v(" "),a("td",[t._v("false")])]),t._v(" "),a("tr",[a("td",[t._v("defaultShadow")]),t._v(" "),a("td",[t._v("默认阴影")]),t._v(" "),a("td",[t._v("boolean")]),t._v(" "),a("td",[t._v("false")])]),t._v(" "),a("tr",[a("td",[t._v("loading")]),t._v(" "),a("td",[t._v("当卡片内容还在加载中时，可以用 loading 展示一个占位")]),t._v(" "),a("td",[t._v("boolean")]),t._v(" "),a("td",[t._v("false")])]),t._v(" "),a("tr",[a("td",[t._v("title")]),t._v(" "),a("td",[t._v("卡片标题")]),t._v(" "),a("td",[t._v("string｜slot")]),t._v(" "),a("td",[t._v("-")])]),t._v(" "),a("tr",[a("td",[t._v("type")]),t._v(" "),a("td",[t._v("卡片类型，可设置为 inner 或 不设置")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("-")])]),t._v(" "),a("tr",[a("td",[t._v("tabList")]),t._v(" "),a("td",[t._v("页签标题列表, 可以通过scopedSlots属性自定义tab")]),t._v(" "),a("td",[t._v("Array<{key: string, tab: any, scopedSlots: {tab: 'XXX'}}>")]),t._v(" "),a("td",[t._v("-")])])])]),t._v(" "),a("p",{staticClass:"row-in-round"},[t._v("事件")]),t._v(" "),a("table",{staticClass:"salus-table salus-table-striped salus-table-hover"},[a("thead",[a("tr",[a("th",{attrs:{width:"15%"}},[t._v("事件名称")]),t._v(" "),a("th",{attrs:{width:"70%"}},[t._v("说明")]),t._v(" "),a("th",{attrs:{width:"15%"}},[t._v("回调参数")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("tabChange")]),t._v(" "),a("td",[t._v("页签切换的回调")]),t._v(" "),a("td",[t._v("(key) => void")])])])]),t._v(" "),a("p",{staticClass:"row-in-round"},[t._v("sl-card-meta")]),t._v(" "),a("table",{staticClass:"salus-table salus-table-striped salus-table-hover"},[a("thead",[a("tr",[a("th",{attrs:{width:"15%"}},[t._v("参数")]),t._v(" "),a("th",{attrs:{width:"35%"}},[t._v("描述")]),t._v(" "),a("th",{attrs:{width:"35%"}},[t._v("类型")]),t._v(" "),a("th",{attrs:{width:"15%"}},[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("avatar")]),t._v(" "),a("td",[t._v("头像/图标")]),t._v(" "),a("td",[t._v("slot")]),t._v(" "),a("td",[t._v("-")])]),t._v(" "),a("tr",[a("td",[t._v("description")]),t._v(" "),a("td",[t._v("描述内容")]),t._v(" "),a("td",[t._v("string 丨 slot")]),t._v(" "),a("td",[t._v("-")])]),t._v(" "),a("tr",[a("td",[t._v("title")]),t._v(" "),a("td",[t._v("标题内容")]),t._v(" "),a("td",[t._v("string 丨 slot")]),t._v(" "),a("td",[t._v("-")])]),t._v(" "),a("tr",[a("td",[t._v("timeInfo")]),t._v(" "),a("td",[t._v("时间信息")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("-")])]),t._v(" "),a("tr",[a("td",[t._v("metaExtra")]),t._v(" "),a("td",[t._v("元数据中的操作区域")]),t._v(" "),a("td",[t._v("string 丨 slot")]),t._v(" "),a("td",[t._v("-")])])])])])}],!1,null,"839cd962",null);s.options.__file="src/components/card/card.vue";v.default=s.exports}}]);