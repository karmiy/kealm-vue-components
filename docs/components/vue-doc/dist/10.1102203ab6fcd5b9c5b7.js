(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{555:function(t,a,s){var e=s(574);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);(0,s(71).default)("4e96ff6e",e,!1,{})},573:function(t,a,s){"use strict";var e=s(555);s.n(e).a},574:function(t,a,s){(t.exports=s(54)(!1)).push([t.i,"\n.scrollable-container {\n    height: 100px;\n    width: 300px;\n    overflow-y: scroll;\n}\n.background {\n    padding-top: 60px;\n    height: 300px;\n    background-image: url(https://zos.alipayobjects.com/rmsportal/RmjwQiJorKyobvI.jpg);\n}\n",""])},631:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=this,s=a.$createElement,e=a._self._c||s;return e("div",{ref:"page",staticClass:"page-box salus-scrollbar layout"},[a._m(0),a._v(" "),a._m(1),a._v(" "),e("div",{staticClass:"detail-box"},[e("h2",[a._v("基础用法")]),a._v(" "),e("p",[a._v("最简单的用法")]),a._v(" "),e("p",{staticClass:"code-left-line"},[a._v("Demo")]),a._v(" "),e("div",{staticClass:"detail-block"},[e("sl-affix",{attrs:{target:function(){return t.$refs.page}}},[e("sl-button",{attrs:{type:"primary"}},[e("span",[a._v("Affix top")])])],1)],1),a._v(" "),e("sl-affix",{attrs:{"offset-bottom":0,target:function(){return t.$refs.page}}},[e("sl-button",{attrs:{type:"primary"}},[e("span",[a._v("Affix bottom")])])],1),a._v(" "),e("search-code",{attrs:{code:a.CodeBasic}})],1),a._v(" "),e("div",{staticClass:"detail-box"},[e("h2",[a._v("固定状态改变的回调")]),a._v(" "),e("p",[a._v("可以获得是否固定的状态")]),a._v(" "),e("p",{staticClass:"code-left-line"},[a._v("Demo")]),a._v(" "),e("sl-affix",{attrs:{target:function(){return t.$refs.page},"offset-top":120},on:{change:a.onAffixStatusChange}},[e("sl-button",[e("span",[a._v("120px to affix top")])])],1),a._v(" "),e("search-code",{attrs:{code:a.CodeChange}})],1),a._v(" "),e("div",{staticClass:"detail-box"},[e("h2",[a._v("滚动容器")]),a._v(" "),e("p",[a._v("用 target 设置 sl-affix 需要监听其滚动事件的元素，默认为 window。")]),a._v(" "),e("p",{staticClass:"code-left-line"},[a._v("Demo")]),a._v(" "),e("div",{ref:"container",staticClass:"scrollable-container"},[e("div",{staticClass:"background"},[e("sl-affix",{attrs:{target:function(){return t.$refs.container}}},[e("sl-button",{attrs:{type:"primary"}},[e("span",[a._v("Fixed at the top of container")])])],1)],1)]),a._v(" "),e("search-code",{attrs:{code:a.CodeTarget}})],1),a._v(" "),a._m(2),a._v(" "),e("p",{staticStyle:{"margin-bottom":"12px"}},[a._v("注意：sl-affix 内的元素不要使用绝对定位，如需要绝对定位的效果，可以直接设置 sl-affix 为绝对定位：")]),a._v(" "),e("search-code",{attrs:{code:a.CodeNote,expand:!0,visibleTitle:!1}}),a._v(" "),e("div",{staticStyle:{height:"800px"}})],1)};e._withStripped=!0;var n={data:function(){return{CodeBasic:'    <template>\n        <div>\n            <sl-affix :offset-top="10">\n                <sl-button type="primary"><span>Affix top</span></sl-button>\n            </sl-affix>\n            <sl-affix :offset-bottom="0">\n                <sl-button type="primary"><span>Affix bottom</span></sl-button>\n            </sl-affix>\n        </div>\n    </template>',CodeChange:'    <template>\n        <div>\n            <sl-affix :offset-top="120" @change="onAffixStatusChange">\n                <sl-button><span>120px to affix top</span></sl-button>\n            </sl-affix>\n        </div>\n    </template>\n    <script>\n        export default {\n            methods: {\n                onAffixStatusChange(status) {\n                    console.log(status);\n                }\n            }\n        }\n    <\/script>',CodeTarget:'    <template>\n        <div class="scrollable-container" ref="target">\n            <div class="background">\n                <sl-affix :target="() => {return this.$refs.page}">\n                    <sl-button type="primary">\n                        <span>Fixed at the top of container</span>\n                    </sl-button>\n                </sl-affix>\n            </div>\n        </div>\n    </template>\n    <style>\n        .scrollable-container {\n            height: 100px;\n            width: 300px;\n            overflow-y: scroll;\n        }\n\n        .background {\n            padding-top: 60px;\n            height: 300px;\n            background-image: url(https://zos.alipayobjects.com/rmsportal/RmjwQiJorKyobvI.jpg);\n        }\n    </style>',CodeNote:"    <sl-affix :style=\"{ position: 'absolute', top: y, left: x}\">\n      ...\n    </sl-affix>"}},methods:{onAffixStatusChange:function(t){console.log(t)}},components:{SearchCode:function(){return new Promise(function(t){s.e(0).then(function(a){t(s(637))}.bind(null,s)).catch(s.oe)})}}},i=(s(573),s(53)),o=Object(i.a)(n,e,[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"detail-box"},[a("h1",[this._v("Affix 固钉")]),this._v(" "),a("p",[this._v("将页面元素钉在可视范围。")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"detail-box"},[a("h2",[this._v("何时使用")]),this._v(" "),a("p",{staticStyle:{"line-height":"28px"}},[this._v("\n            当内容区域比较长，需要滚动页面时，这部分内容对应的操作或者导航需要在滚动范围内始终展现。常用于侧边菜单和按钮组合。页面可视范围过小时，慎用此功能以免遮挡页面内容。")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"detail-box"},[s("h2",[t._v("API")]),t._v(" "),s("p",{staticClass:"row-in-round"},[t._v("sl-affix")]),t._v(" "),s("div",{staticClass:"detail-block"},[s("table",{staticClass:"salus-table salus-table-hover salus-table-striped"},[s("thead",[s("tr",[s("th",{attrs:{width:"15%"}},[t._v("参数")]),t._v(" "),s("th",{attrs:{width:"35%"}},[t._v("说明")]),t._v(" "),s("th",{attrs:{width:"35%"}},[t._v("类型")]),t._v(" "),s("th",{attrs:{width:"15%"}},[t._v("默认值")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("offsetBottom")]),t._v(" "),s("td",[t._v("距离窗口底部达到指定偏移量后触发")]),t._v(" "),s("td",[t._v("number")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("offsetTop")]),t._v(" "),s("td",[t._v("距离窗口顶部达到指定偏移量后触发")]),t._v(" "),s("td",[t._v("number")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("target")]),t._v(" "),s("td",[t._v("设置 sl-affix 需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数")]),t._v(" "),s("td",[t._v("() => HTMLElement")]),t._v(" "),s("td",[t._v("() => window")])])])])]),t._v(" "),s("p",{staticClass:"row-in-round"},[t._v("事件")]),t._v(" "),s("div",{staticClass:"detail-block"},[s("table",{staticClass:"salus-table salus-table-hover salus-table-striped"},[s("thead",[s("tr",[s("th",{attrs:{width:"15%"}},[t._v("事件名称")]),t._v(" "),s("th",{attrs:{width:"70%"}},[t._v("说明")]),t._v(" "),s("th",{attrs:{width:"15%"}},[t._v("回调参数")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("change")]),t._v(" "),s("td",[t._v("固定状态改变时触发的回调函数")]),t._v(" "),s("td",[t._v("Function(affixed)")])])])])])])}],!1,null,null,null);o.options.__file="src/components/affix/affix.vue";a.default=o.exports}}]);