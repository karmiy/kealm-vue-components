<template>
    <div class="page-box">
        <div class="detail-box">
            <h1>Tabs&nbsp;标签页</h1>
            <p>选项卡切换组件。</p>
        </div>

        <!--基础标签页-->
        <div class="detail-box">
            <h2>基础标签页</h2>
            <p><span class="code-left-line">Demo</span></p>
            <sl-tabset defaultActiveKey="1">
                <sl-tab title="Tab 1" key="1">Content of Tab Pane 1</sl-tab>
                <sl-tab title="Tab 2" key="2" forceRender>Content of Tab Pane 2</sl-tab>
                <sl-tab title="Tab 3" key="3">Content of Tab Pane 3</sl-tab>
            </sl-tabset>
            <search-code :code="CodeBasic"></search-code>
        </div>
        <!--基础标签页结束-->

        <!--带有图标的标签页-->
        <div class="detail-box">
            <h2>带有图标的标签页</h2>
            <p><span class="code-left-line">Demo</span></p>
            <sl-tabset defaultActiveKey="2">
                <sl-tab key="1">
                    <span slot="title">
                        <i class="salus-icon-global-resource"/>Tab 1
                    </span>
                    Tab 1
                </sl-tab>
                <sl-tab key="2">
                    <span slot="title">
                        <i class="salus-icon-container-service"/>Tab 2
                    </span>
                    Tab 2
                </sl-tab>
            </sl-tabset>
            <search-code :code="CodeIcon"></search-code>
        </div>
        <!--带有图标的标签页结束-->

        <!--标签页的位置-->
        <div class="detail-box">
            <h2>标签页的位置</h2>
            <p>有四个位置，tabPosition=top|bottom|right|left</p>
            <p><span class="code-left-line">Demo</span></p>
            <div class="detail-block">
                <sl-radio-group v-model="tabPosition">
                    <sl-radio-button v-for="(pos, index) in posArr" :value="pos" :key="index">{{pos}}</sl-radio-button>
                </sl-radio-group>
            </div>
            <sl-tabset defaultActiveKey="1" :tabPosition="tabPosition">
                <sl-tab title="Tab 1" key="1">Content of Tab 1</sl-tab>
                <sl-tab title="Tab 2" key="2">Content of Tab 2</sl-tab>
                <sl-tab title="Tab 3" key="3">Content of Tab 3</sl-tab>
            </sl-tabset>
            <search-code :code="CodePos"></search-code>
        </div>
        <!--标签页的位置结束-->

        <!--带有禁用项的标签页-->
        <div class="detail-box">
            <h2>带禁用项标签页</h2>
            <p class="code-left-line">Demo</p>
            <sl-tabset defaultActiveKey="1">
                <sl-tab title="Tab 1" key="1">Tab 1</sl-tab>
                <sl-tab title="Tab 2" disabled key="2">Tab 2</sl-tab>
                <sl-tab title="Tab 3" key="3">Tab 3</sl-tab>
            </sl-tabset>
            <search-code :code="CodeDisable"></search-code>
        </div>
        <!--带有禁用项的标签页结束-->

        <!--标签页滚动-->
        <div class="detail-box">
            <h2>标签页滚动</h2>
            <p>可以左右、上下滚动，容纳更多标签。</p>
            <p><span class="code-left-line">Demo</span></p>
            <div class="detail-block">
                <sl-radio-group v-model="mode">
                    <sl-radio-button value="top">Horizontal</sl-radio-button>
                    <sl-radio-button value="left">Vertical</sl-radio-button>
                </sl-radio-group>
            </div>
            <sl-tabset defaultActiveKey="1" :tabPosition="mode" @prevClick="slide" @nextClick="slide">
                <sl-tab v-for="(tab, index) in tabs" :title="tab" :key="index">Content of {{tab}}</sl-tab>
            </sl-tabset>
            <search-code :code="CodeSlide"></search-code>
        </div>
        <!--标签页滚动结束-->

        <!--卡片式标签页-->
        <div class="detail-box">
            <h2>卡片式标签页</h2>
            <p class="code-left-line">Demo</p>
            <div class="detail-block">
                <sl-radio-group v-model="tabPosition">
                    <sl-radio-button v-for="(pos, index) in posArr" :value="pos" :key="index">{{pos}}</sl-radio-button>
                </sl-radio-group>
            </div>
            <sl-tabset :tabPosition="tabPosition" type="card">
                <sl-tab v-for="(tab, index) in cardTabs" :title="'Tab '+ tab" :key="index">
                    Content of {{tabPosition}}-Tab {{ tab }}
                </sl-tab>
            </sl-tabset>
            <search-code :code="CodeCard"></search-code>
        </div>
        <!--卡片式标签页结束-->

        <!--容器式标签页-->
        <div class="detail-box">
            <h2>容器式标签页</h2>
            <p>用于容器顶部，需要一点额外的样式覆盖。</p>
            <p class="code-left-line">Demo</p>
            <div class="card-container">
                <sl-tabset type="card">
                    <sl-tab title="Tab Title 1" key="1">
                        <p>Content of Tab Pane 1</p>
                        <p>Content of Tab Pane 1</p>
                        <p>Content of Tab Pane 1</p>
                    </sl-tab>
                    <sl-tab title="Tab Title 2" key="2">
                        <p>Content of Tab Pane 2</p>
                        <p>Content of Tab Pane 2</p>
                        <p>Content of Tab Pane 2</p>
                    </sl-tab>
                    <sl-tab title="Tab Title 3" key="3">
                        <p>Content of Tab Pane 3</p>
                        <p>Content of Tab Pane 3</p>
                        <p>Content of Tab Pane 3</p>
                    </sl-tab>
                </sl-tabset>
            </div>
            <search-code :code="CodeContainer"></search-code>
        </div>
        <!--容器式标签页结束-->

        <div class="detail-box">
            <h2>API</h2>
            <p class="row-in-round">sl-tabset</p>
            <table class="salus-table salus-table-striped salus-table-hover">
                <thead>
                <tr>
                    <th width="15%">参数</th>
                    <th width="35%">描述</th>
                    <th width="35%">类型</th>
                    <th width="15%">默认值</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>activeKey(v-model)</td>
                    <td>当前激活 tab 面板的 key</td>
                    <td>string</td>
                    <td>无</td>
                </tr>
                <tr>
                    <td>animated</td>
                    <td>是否使用动画切换 Tabs，在 salusTabPosition=top丨bottom 时有效</td>
                    <td>boolean丨&#123;inkBar:boolean, tabPane:boolean&#125;</td>
                    <td>true, 当 type="card" 时为 false</td>
                </tr>
                <tr>
                    <td>size</td>
                    <td>大小，提供 large default 和 small 三种大小</td>
                    <td>string</td>
                    <td>'default'</td>
                </tr>
                <tr>
                    <td>tabBarExtraContent</td>
                    <td>tab bar 上额外的元素</td>
                    <td>slot</td>
                    <td>无</td>
                </tr>
                <tr>
                    <td>tabBarStyle</td>
                    <td>tab bar 的样式对象</td>
                    <td>object</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>defaultActiveKey</td>
                    <td>初始化选中面板的 key，如果没有设置 activeKey</td>
                    <td>string</td>
                    <td>第一个面板</td>
                </tr>
                <tr>
                    <td>hideAdd</td>
                    <td>是否隐藏加号图标，在 type="editable-card" 时有效</td>
                    <td>boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>tabPosition</td>
                    <td>页签位置，可选值有 top right bottom left</td>
                    <td>string</td>
                    <td>'top'</td>
                </tr>
                <tr>
                    <td>type</td>
                    <td>页签的基本样式，可选 line、card editable-card 类型</td>
                    <td>string</td>
                    <td>'line'</td>
                </tr>
                <tr>
                    <td>tabBarGutter</td>
                    <td>tabs 之间的间隙</td>
                    <td>number</td>
                    <td>无</td>
                </tr>
                </tbody>
            </table>
            <p class="row-in-round">sl-tabset 事件</p>
            <table class="salus-table salus-table-striped salus-table-hover">
                <thead>
                <tr>
                    <th width="15%">事件名称</th>
                    <th width="70%">说明</th>
                    <th width="15%">回调参数</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>change</td>
                    <td>切换面板的回调</td>
                    <td>Function(activeKey) {}</td>
                </tr>
                <tr>
                    <td>edit</td>
                    <td>新增和删除页签的回调，在 type="editable-card" 时有效</td>
                    <td>(targetKey, action): void</td>
                </tr>
                <tr>
                    <td>nextClick</td>
                    <td>next 按钮被点击的回调</td>
                    <td>Function</td>
                </tr>
                <tr>
                    <td>prevClick</td>
                    <td>prev 按钮被点击的回调</td>
                    <td>Function</td>
                </tr>
                <tr>
                    <td>tabClick</td>
                    <td>tab 被点击的回调</td>
                    <td>Function</td>
                </tr>
                </tbody>
            </table>
            <p class="row-in-round">sl-tab</p>
            <table class="salus-table salus-table-striped salus-table-hover">
                <thead>
                <tr>
                    <th width="15%">参数</th>
                    <th width="35%">描述</th>
                    <th width="35%">类型</th>
                    <th width="15%">默认值</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>title</td>
                    <td>选项卡头显示文字</td>
                    <td>string 丨 slot</td>
                    <td>无</td>
                </tr>
                <tr>
                    <td>disabled</td>
                    <td>是否禁用</td>
                    <td>boolean</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>key</td>
                    <td>对应 activeKey</td>
                    <td>string</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>forceRender</td>
                    <td>被隐藏时是否渲染 DOM 结构</td>
                    <td>boolean</td>
                    <td>false</td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
    import {CodeBasic, CodeIcon, CodePos, CodeDisable, CodeSlide, CodeCard, CodeContainer} from "./tabs.code";

    const tabs = ['Tab 1', 'Tab 2', 'Tab 3', 'Tab 4', 'Tab 5', 'Tab 6', 'Tab 7', 'Tab 8', 'Tab 9', 'Tab 10',
        'Tab 11', 'Tab 12', 'Tab 13', 'Tab 14', 'Tab 15', 'Tab 16', 'Tab 17', 'Tab 18', 'Tab 19', 'Tab 20'];
    export default {
        name: 'Tabs',
        data() {
            return {
                CodeBasic,
                CodeIcon,
                CodePos,
                tabPosition: 'top',
                posArr: ['top', 'bottom', 'right', 'left'],
                CodeDisable,
                CodeSlide,
                mode: 'top',
                tabs,
                CodeCard,
                cardTabs: [1, 2, 3],
                CodeContainer
            }
        },
        components: {
            SearchCode: () => import('../../common/searchCode/searchCode')
        },
        methods: {
            slide(val) {
                console.log(val)
            }
        }
    }
</script>
<style>
    @import "./tabs.doc.css";
</style>