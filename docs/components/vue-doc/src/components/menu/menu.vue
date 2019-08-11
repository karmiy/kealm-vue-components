<template>
    <div class="page-box">
        <div class="detail-box">
            <h1>Menu 导航菜单</h1>
            <p>为页面和功能提供导航的菜单列表。</p>
        </div>

        <!--基础菜单-->
        <div class="detail-box">
            <h2>基础菜单</h2>
            <p class="code-left-line">Demo</p>
            <sl-menu v-model="current" mode="horizontal">
                <sl-menu-item key="mail">
                    <i class="salus-icon-child-account"></i> Navigation One
                </sl-menu-item>
                <sl-menu-item key="app" disabled>
                    <i class="salus-icon-child-account"></i> Navigation Two
                </sl-menu-item>
                <sl-sub-menu key="sub1">
                    <span slot="title" class="submenu-title-wrapper">Navigation Three - Submenu</span>
                    <sl-menu-item-group title="Item 1">
                        <sl-menu-item key="setting:1">Option 1</sl-menu-item>
                        <sl-menu-item key="setting:2">Option 2</sl-menu-item>
                    </sl-menu-item-group>
                    <sl-menu-item-group title="Item 2">
                        <sl-menu-item key="setting:3">Option 3</sl-menu-item>
                        <sl-menu-item key="setting:4">Option 4</sl-menu-item>
                        <sl-sub-menu key="sub1-1">
                            <span slot="title" class="submenu-title-wrapper">Sub Menu</span>
                            <sl-menu-item key="setting:5" disabled>Option 5</sl-menu-item>
                            <sl-menu-item key="setting:6">Option 6</sl-menu-item>
                        </sl-sub-menu>
                        <sl-sub-menu key="sub1-2" disabled>
                            <span slot="title" class="submenu-title-wrapper">Disabled Sub Menu</span>
                            <sl-menu-item key="setting:7">Option 7</sl-menu-item>
                            <sl-menu-item key="setting:8">Option 8</sl-menu-item>
                        </sl-sub-menu>
                    </sl-menu-item-group>
                </sl-sub-menu>
                <sl-menu-item key="alipay">
                    <a href="https://172.16.13.210:9009/vue-salus" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a>
                </sl-menu-item>
            </sl-menu>
            <search-code :code="CodeBasic"></search-code>
        </div>
        <!--基础菜单结束-->

        <!--内嵌菜单-->
        <div class="detail-box">
            <h2>内嵌菜单</h2>
            <p class="code-left-line">Demo</p>
            <sl-menu
                @click="handleClick"
                style="width: 240px"
                :defaultSelectedKeys="['1']"
                :openKeys.sync="openKeys"
                mode="inline"
            >
                <sl-sub-menu key="sub1" @titleClick="titleClick" iconRight>
                    <span slot="title"><i class="salus-icon-child-account"></i><span>Navigation One</span></span>
                    <sl-menu-item-group key="g1">
                        <template slot="title"><span>Item 1</span></template>
                        <sl-menu-item key="1">Option 1</sl-menu-item>
                        <sl-menu-item key="2">Option 2</sl-menu-item>
                    </sl-menu-item-group>
                    <sl-menu-item-group key="g2" title="Item 2">
                        <sl-menu-item key="3">Option 3</sl-menu-item>
                        <sl-menu-item key="4">Option 4</sl-menu-item>
                    </sl-menu-item-group>
                </sl-sub-menu>
                <sl-sub-menu key="sub2" @titleClick="titleClick" iconRight>
                    <span slot="title"><i class="salus-icon-child-account"></i><span>Navigation Two</span></span>
                    <sl-menu-item key="5">Option 5</sl-menu-item>
                    <sl-menu-item key="6">Option 6</sl-menu-item>
                    <sl-sub-menu key="sub2-1">
                        <span slot="title"><span>Submenu</span></span>
                        <sl-menu-item key="7">Option 7</sl-menu-item>
                        <sl-menu-item key="8">Option 8</sl-menu-item>
                    </sl-sub-menu>
                </sl-sub-menu>
                <sl-sub-menu key="sub3" iconRight>
                    <span slot="title"><i class="salus-icon-setting-o"></i><span>Navigation Three</span></span>
                    <sl-menu-item key="9">Option 9</sl-menu-item>
                    <sl-menu-item key="10">Option 10</sl-menu-item>
                    <sl-menu-item key="11">Option 11</sl-menu-item>
                    <sl-menu-item key="12">Option 12</sl-menu-item>
                </sl-sub-menu>
            </sl-menu>
            <search-code :code="CodeInline"></search-code>
        </div>
        <!--内嵌菜单结束-->

        <!--只展开当前父级菜单-->
        <!--<div class="detail-box">
            <h2>只展开当前父级菜单</h2>
            <p>类似手风琴效果。</p>
            <p class="code-left-line">Demo</p>
            <sl-menu
                style="width: 240px"
                mode="inline"
                :openKeys.sync="accordionKeys"
            >
                <sl-sub-menu key="sub1">
                    <span slot="title"><i class="salus-icon-child-account"></i><span>Navigation One</span></span>
                    <sl-menu-item key="1">Option 1</sl-menu-item>
                    <sl-menu-item key="2">Option 2</sl-menu-item>
                    <sl-sub-menu key="sub11" title="Submenu">
                        <sl-menu-item key="3">Option 3</sl-menu-item>
                        <sl-menu-item key="4">Option 4</sl-menu-item>
                    </sl-sub-menu>
                </sl-sub-menu>
                <sl-sub-menu key="sub2">
                    <span slot="title"><i class="salus-icon-child-account"></i><span>Navigation Two</span></span>
                    <sl-menu-item key="5">Option 5</sl-menu-item>
                    <sl-menu-item key="6">Option 6</sl-menu-item>
                    <sl-sub-menu key="sub21" title="Submenu">
                        <sl-menu-item key="7">Option 7</sl-menu-item>
                        <sl-menu-item key="8">Option 8</sl-menu-item>
                    </sl-sub-menu>
                </sl-sub-menu>
                <sl-sub-menu key="sub3">
                    <span slot="title"><i class="salus-icon-setting-o"></i><span>Navigation Three</span></span>
                    <sl-menu-item key="9">Option 9</sl-menu-item>
                    <sl-menu-item key="10">Option 10</sl-menu-item>
                    <sl-menu-item key="11">Option 11</sl-menu-item>
                    <sl-menu-item key="12">Option 12</sl-menu-item>
                </sl-sub-menu>
            </sl-menu>
            <button @click="accordionKeys=['sub2']">改变</button>
            <search-code :code="CodeBasic"></search-code>
        </div>-->
        <!--只展开当前父级菜单结束-->

        <!--主题菜单-->
        <div class="detail-box">
            <h2>主题菜单</h2>
            <p class="code-left-line">Demo</p>
            <sl-switch
                defaultChecked
                @change="changeTheme"
            />
            <sl-menu
                @click="handleClick"
                style="width: 240px;margin-top: 20px;"
                :defaultSelectedKeys="['1']"
                :openKeys.sync="openKeys"
                :theme="theme"
                mode="inline"
            >
                <sl-sub-menu key="sub1" @titleClick="titleClick" iconRight>
                    <span slot="title"><i class="salus-icon-child-account"></i><span>Navigation One</span></span>
                    <sl-menu-item-group key="g1">
                        <template slot="title"><span>Item 1</span></template>
                        <sl-menu-item key="1">Option 1</sl-menu-item>
                        <sl-menu-item key="2">Option 2</sl-menu-item>
                    </sl-menu-item-group>
                    <sl-menu-item-group key="g2" title="Item 2">
                        <sl-menu-item key="3">Option 3</sl-menu-item>
                        <sl-menu-item key="4">Option 4</sl-menu-item>
                    </sl-menu-item-group>
                </sl-sub-menu>
                <sl-sub-menu key="sub2" @titleClick="titleClick" iconRight>
                    <span slot="title"><i class="salus-icon-child-account"></i><span>Navigation Two</span></span>
                    <sl-menu-item key="5">Option 5</sl-menu-item>
                    <sl-menu-item key="6">Option 6</sl-menu-item>
                    <sl-sub-menu key="sub2-1">
                        <span slot="title"><span>Submenu</span></span>
                        <sl-menu-item key="7">Option 7</sl-menu-item>
                        <sl-menu-item key="8">Option 8</sl-menu-item>
                    </sl-sub-menu>
                </sl-sub-menu>
                <sl-sub-menu key="sub3" iconRight>
                    <span slot="title"><i class="salus-icon-setting-o"></i><span>Navigation Three</span></span>
                    <sl-menu-item key="9">Option 9</sl-menu-item>
                    <sl-menu-item key="10">Option 10</sl-menu-item>
                    <sl-menu-item key="11">Option 11</sl-menu-item>
                    <sl-menu-item key="12">Option 12</sl-menu-item>
                </sl-sub-menu>
            </sl-menu>
            <search-code :code="CodeBasic"></search-code>
        </div>
        <!--主题菜单结束-->

        <!--垂直菜单-->
        <div class="detail-box">
            <h2>垂直菜单</h2>
            <p class="code-left-line">Demo</p>
            <div class="vertical-menu-demo">
                <sl-menu
                    style="width: 240px"
                    mode="vertical"
                    :inDropDown="true"
                >
                    <sl-sub-menu key="sub1">
                        <span slot="title"><i class="salus-icon-edit-o"></i><span>Navigation One</span></span>
                        <sl-menu-item key="1">Option 1</sl-menu-item>
                        <sl-menu-item key="2">Option 2</sl-menu-item>
                        <sl-sub-menu key="sub1-1" title="Submenu">
                            <sl-menu-item key="3">Option 3</sl-menu-item>
                            <sl-menu-item key="4">Option 4</sl-menu-item>
                        </sl-sub-menu>
                    </sl-sub-menu>
                    <sl-sub-menu key="sub2">
                        <span slot="title"><i class="salus-icon-edit-o"></i><span>Navigation Two</span></span>
                        <sl-menu-item key="5">Option 5</sl-menu-item>
                        <sl-menu-item key="6">Option 6</sl-menu-item>
                        <sl-sub-menu key="sub2-1" title="Submenu">
                            <sl-menu-item key="7">Option 7</sl-menu-item>
                            <sl-menu-item key="8">Option 8</sl-menu-item>
                        </sl-sub-menu>
                    </sl-sub-menu>
                    <sl-sub-menu key="sub3">
                        <span slot="title"><i class="salus-icon-setting-o"></i><span>Navigation Three</span></span>
                        <sl-menu-item key="9">Option 9</sl-menu-item>
                        <sl-menu-item key="10">Option 10</sl-menu-item>
                        <sl-menu-item key="11">Option 11</sl-menu-item>
                    </sl-sub-menu>
                </sl-menu>
            </div>
            <search-code :code="CodeVertical"></search-code>
        </div>
        <!--垂直菜单结束-->


        <!--参数说明开始-->
        <div class="detail-box">
            <h2>API</h2>
            <p class="row-in-round">sl-menu</p>
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
                    <td>defaultOpenKeys</td>
                    <td>初始展开的 SubMenu 菜单项 key 数组</td>
                    <td>string[]</td>
                    <td></td>
                </tr>
                <tr>
                    <td>defaultSelectedKeys</td>
                    <td>初始选中的 MenuItem 菜单项 key 数组</td>
                    <td>string[]</td>
                    <td></td>
                </tr>
                <tr>
                    <td>inlineIndent</td>
                    <td>inline 模式的菜单缩进宽度</td>
                    <td>number</td>
                    <td>10</td>
                </tr>
                <tr>
                    <td>mode</td>
                    <td>菜单类型，现在支持垂直、水平、和内嵌模式三种</td>
                    <td>'vertical' | 'horizontal' | 'inline'</td>
                    <td>vertical</td>
                </tr>
                <tr>
                    <td>multiple</td>
                    <td>是否允许多选</td>
                    <td>boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>openKeys(.sync)</td>
                    <td>当前展开的 SubMenu 菜单项 key 数组</td>
                    <td>string[]</td>
                    <td></td>
                </tr>
                <tr>
                    <td>selectable</td>
                    <td>是否允许选中</td>
                    <td>boolean</td>
                    <td>true</td>
                </tr>
                <tr>
                    <td>selectedKeys(v-model)</td>
                    <td>当前选中的菜单项 key 数组</td>
                    <td>string[]</td>
                    <td></td>
                </tr>
                <tr>
                    <td>theme</td>
                    <td>主题颜色</td>
                    <td>'light' | 'dark'</td>
                    <td></td>
                </tr>
                <tr>
                    <td>inDropDown</td>
                    <td>是否开启dropdown模式，菜单拥有边框、箭头右排列</td>
                    <td>boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>scrollbar</td>
                    <td>是否带有滚动条</td>
                    <td>boolean</td>
                    <td>false</td>
                </tr>
                </tbody>
            </table>

            <p class="row-in-round">sl-menu 事件</p>
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
                    <td>click</td>
                    <td>点击 MenuItem 调用此函数</td>
                    <td>function({ item, key, keyPath })</td>
                </tr>
                <tr>
                    <td>deselect</td>
                    <td>取消选中时调用，仅在 multiple 生效</td>
                    <td>function({ item, key, selectedKeys })</td>
                </tr>
                <tr>
                    <td>openChange</td>
                    <td>SubMenu 展开/关闭的回调</td>
                    <td>function(openKeys: string[])</td>
                </tr>
                <tr>
                    <td>select</td>
                    <td>被选中时调用</td>
                    <td>function({ item, key, selectedKeys })</td>
                </tr>
                </tbody>
            </table>

            <p class="row-in-round">sl-menu-item</p>
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
                    <td>disabled</td>
                    <td>是否禁用</td>
                    <td>boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>key</td>
                    <td>item唯一标志</td>
                    <td>string</td>
                    <td></td>
                </tr>
                <tr>
                    <td>title</td>
                    <td>设置收缩时展示的悬浮标题</td>
                    <td>string</td>
                    <td></td>
                </tr>
                </tbody>
            </table>

            <p class="row-in-round">sl-sub-menu</p>
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
                    <td>disabled</td>
                    <td>是否禁用</td>
                    <td>boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>hasArrow</td>
                    <td>是否显示默认下拉箭头图标</td>
                    <td>boolean</td>
                    <td>true</td>
                </tr>
                <tr>
                    <td>iconRight</td>
                    <td>箭头图标靠右排列</td>
                    <td>boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>key</td>
                    <td>唯一标志</td>
                    <td>string</td>
                    <td></td>
                </tr>
                <tr>
                    <td>title</td>
                    <td>子菜单项值</td>
                    <td>string|slot</td>
                    <td></td>
                </tr>
                </tbody>
            </table>

            <p class="row-in-round">sl-sub-menu 事件</p>
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
                    <td>titleClick</td>
                    <td>点击子菜单标题</td>
                    <td>function({ key, domEvent })</td>
                </tr>
                </tbody>
            </table>

            <p class="row-in-round">sl-menu-item-group</p>
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
                    <td>分组标题</td>
                    <td>string||function|slot</td>
                    <td></td>
                </tr>
                </tbody>
            </table>

            <p class="row-in-round">sl-sub-menu</p>
            <p>sl-sub-menu的子元素必须是sl-menu-item或sl-sub-menu</p>

            <p class="row-in-round">sl-sub-menu</p>
            <p>sl-menu-item-group的子元素必须是sl-menu-item</p>

            <p class="row-in-round">sl-menu-divider</p>
            <p>菜单项分割线，只用在弹出菜单内</p>
        </div>
        <!--参数说明结束-->
    </div>
</template>
<script>
  import { CodeBasic, CodeInline, CodeTheme, CodeAccordion, CodeVertical } from "./menu.code";

  export default {
    data() {
      return {
        CodeBasic,
        CodeInline,
        CodeTheme,
        CodeAccordion,
        CodeVertical,
        current: ['mail'],
        openKeys: ['sub1'],
        accordionKeys: ['sub1'],
        theme: 'dark',
      }
    },
    components: {
      SearchCode: () => import('../../common/searchCode/searchCode')
    },
    methods: {
      handleClick (e) {
        console.log('click', e)
      },
      titleClick (e) {
        console.log('titleClick', e)
      },
      changeTheme (checked) {
        this.theme = checked ? 'dark' : 'light'
      },
      deselect(...rest) {
        console.log(rest);
      }
    },
    watch: {
      openKeys (val) {
        console.log('openKeys', val)
      },
    },
  }
</script>
<style scoped>
    @import './menu.scss';
</style>