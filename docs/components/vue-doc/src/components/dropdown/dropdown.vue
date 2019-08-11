<template>
    <div class="page-box">
        <div class="detail-box">
            <h1>Dropdown 下拉菜单</h1>
            <p>弹出的菜单列表</p>
        </div>

        <!--基础下拉菜单-->
        <div class="detail-box">
            <h2>基础下拉菜单</h2>
            <p class="code-left-line">Demo</p>
            <sl-row>
                <sl-col :span="4">
                    <sl-dropdown>
                        <a class="salus-dropdown-link" href="javascript:;">
                            下拉菜单-hover <i class="salus-icon-triangle-down"></i>
                        </a>
                        <sl-menu slot="overlay">
                            <sl-menu-item>
                                <a href="javascript:;">1st menu item</a>
                            </sl-menu-item>
                            <sl-menu-item>
                                <a href="javascript:;">2nd menu item</a>
                            </sl-menu-item>
                            <sl-menu-item>
                                <a href="javascript:;">3rd menu item</a>
                            </sl-menu-item>
                        </sl-menu>
                    </sl-dropdown>
                </sl-col>
                <sl-col :span="4">
                    <sl-dropdown>
                        <sl-menu slot="overlay">
                            <sl-menu-item>
                                <a href="javascript:;">1st menu item</a>
                            </sl-menu-item>
                            <sl-menu-item>
                                <a href="javascript:;">2nd menu item</a>
                            </sl-menu-item>
                            <sl-menu-item>
                                <a href="javascript:;">3rd menu item</a>
                            </sl-menu-item>
                        </sl-menu>
                        <sl-button class="salus-dropdown-button" icon>
                            下拉菜单-button<i class="salus-icon-triangle-down"></i>
                        </sl-button>
                    </sl-dropdown>
                </sl-col>
                <sl-col :span="4">
                    <sl-dropdown :trigger="['click']">
                        <sl-menu slot="overlay">
                            <sl-menu-item>
                                <a href="javascript:;">1st menu item</a>
                            </sl-menu-item>
                            <sl-menu-item>
                                <a href="javascript:;">2nd menu item</a>
                            </sl-menu-item>
                            <sl-menu-item>
                                <a href="javascript:;">3rd menu item</a>
                            </sl-menu-item>
                        </sl-menu>
                        <sl-button class="salus-dropdown-button" icon>
                            下拉菜单-click<i class="salus-icon-triangle-down"></i>
                        </sl-button>
                    </sl-dropdown>
                </sl-col>
            </sl-row>
            <search-code :code="CodeBasic"></search-code>
        </div>
        <!--基础下拉菜单结束-->

        <!--自定义图标-->
        <div class="detail-box">
            <h2>自定义图标</h2>
            <p>可以修改i标签或者直接去除右侧图标</p>
            <p class="code-left-line">Demo</p>
            <sl-row>
                <sl-col :span="4">
                    <sl-dropdown>
                        <sl-menu slot="overlay">
                            <sl-menu-item>
                                <a href="javascript:;">1st menu item</a>
                            </sl-menu-item>
                            <sl-menu-item>
                                <a href="javascript:;">2nd menu item</a>
                            </sl-menu-item>
                            <sl-menu-item>
                                <a href="javascript:;">3rd menu item</a>
                            </sl-menu-item>
                        </sl-menu>
                        <sl-button class="salus-dropdown-button" icon>
                            下拉菜单-button<i class="salus-icon-arrow-down-o"></i>
                        </sl-button>
                    </sl-dropdown>
                </sl-col>
                <sl-col :span="4">
                    <sl-dropdown>
                        <sl-menu slot="overlay">
                            <sl-menu-item>
                                <a href="javascript:;">1st menu item</a>
                            </sl-menu-item>
                            <sl-menu-item>
                                <a href="javascript:;">2nd menu item</a>
                            </sl-menu-item>
                            <sl-menu-item>
                                <a href="javascript:;">3rd menu item</a>
                            </sl-menu-item>
                        </sl-menu>
                        <sl-button class="salus-dropdown-button">
                            下拉菜单-button
                        </sl-button>
                    </sl-dropdown>
                </sl-col>
                <sl-col :span="4">
                    <sl-dropdown>
                        <a class="salus-dropdown-link" href="javascript:;">
                            下拉菜单-hover <i class="salus-icon-arrow-down-o"></i>
                        </a>
                        <sl-menu slot="overlay">
                            <sl-menu-item>
                                <a href="javascript:;">1st menu item</a>
                            </sl-menu-item>
                            <sl-menu-item>
                                <a href="javascript:;">2nd menu item</a>
                            </sl-menu-item>
                            <sl-menu-item>
                                <a href="javascript:;">3rd menu item</a>
                            </sl-menu-item>
                        </sl-menu>
                    </sl-dropdown>
                </sl-col>
                <sl-col :span="4">
                    <sl-dropdown>
                        <a class="salus-dropdown-link" href="javascript:;">
                            下拉菜单-hover
                        </a>
                        <sl-menu slot="overlay">
                            <sl-menu-item>
                                <a href="javascript:;">1st menu item</a>
                            </sl-menu-item>
                            <sl-menu-item>
                                <a href="javascript:;">2nd menu item</a>
                            </sl-menu-item>
                            <sl-menu-item>
                                <a href="javascript:;">3rd menu item</a>
                            </sl-menu-item>
                        </sl-menu>
                    </sl-dropdown>
                </sl-col>
            </sl-row>
            <search-code :code="CodeBasic"></search-code>
        </div>
        <!--自定义图标结束-->

        <!--菜单项选中-->
        <div class="detail-box">
            <h2>菜单项选中</h2>
            <p>菜单项默认不可选中。如需选中，可以为sl-menu添加selectable属性</p>
            <p class="code-left-line">Demo</p>
            <sl-dropdown>
                <sl-menu slot="overlay" selectable>
                    <sl-menu-item>
                        <a href="javascript:;">1st menu item</a>
                    </sl-menu-item>
                    <sl-menu-item>
                        <a href="javascript:;">2nd menu item</a>
                    </sl-menu-item>
                    <sl-menu-item>
                        <a href="javascript:;">3rd menu item</a>
                    </sl-menu-item>
                </sl-menu>
                <sl-button class="salus-dropdown-button" icon>
                    下拉菜单-button<i class="salus-icon-arrow-down-o"></i>
                </sl-button>
            </sl-dropdown>
            <search-code :code="CodeSelectable"></search-code>
        </div>
        <!--菜单项选中结束-->

        <!--菜单分割线与禁用菜单-->
        <div class="detail-box">
            <h2>菜单分割线与禁用菜单</h2>
            <p class="code-left-line">Demo</p>
            <sl-row>
                <sl-col :span="4">
                    <sl-dropdown>
                        <sl-menu slot="overlay">
                            <sl-menu-item>
                                <a href="javascript:;">1st menu item</a>
                            </sl-menu-item>
                            <sl-menu-item>
                                <a href="javascript:;">2nd menu item</a>
                            </sl-menu-item>
                            <sl-menu-divider />
                            <sl-menu-item disabled>
                                <a href="javascript:;">3rd menu item</a>
                            </sl-menu-item>
                        </sl-menu>
                        <sl-button class="salus-dropdown-button" icon>
                            分割线与菜单项禁用 <i class="salus-icon-arrow-down-o"></i>
                        </sl-button>
                    </sl-dropdown>
                </sl-col>
                <sl-col :span="4">
                    <sl-dropdown disabled>
                        <sl-menu slot="overlay">
                            <sl-menu-item>
                                <a href="javascript:;">1st menu item</a>
                            </sl-menu-item>
                            <sl-menu-item>
                                <a href="javascript:;">2nd menu item</a>
                            </sl-menu-item>
                            <sl-menu-item>
                                <a href="javascript:;">3rd menu item</a>
                            </sl-menu-item>
                        </sl-menu>
                        <sl-button class="salus-dropdown-button" disabled>
                            禁用菜单
                        </sl-button>
                    </sl-dropdown>
                </sl-col>
            </sl-row>
            <search-code :code="CodeItem"></search-code>
        </div>
        <!--菜单分割线与禁用菜单结束-->

        <!--带有滚动条的下拉菜单-->
        <div class="detail-box">
            <h2>带有滚动条的下拉菜单</h2>
            <p class="code-left-line">Demo</p>
            <sl-dropdown>
                <sl-menu slot="overlay" scrollbar>
                    <sl-menu-item v-for="index in 10" :key="index">
                        <a href="javascript:;">{{index}}st menu item</a>
                    </sl-menu-item>
                </sl-menu>
                <sl-button class="salus-dropdown-button" icon>
                    带有滚动条的菜单 <i class="salus-icon-arrow-down-o"></i>
                </sl-button>
            </sl-dropdown>
            <search-code :code="CodeScrollbar"></search-code>
        </div>
        <!--带有滚动条的下拉菜单结束-->

        <!--多级菜单-->
        <div class="detail-box">
            <h2>多级菜单</h2>
            <p class="code-left-line">Demo</p>
            <sl-row>
                <sl-col :span="4">
                    <sl-dropdown>
                        <sl-button class="salus-dropdown-button">
                            多级菜单
                        </sl-button>
                        <sl-menu slot="overlay">
                            <sl-menu-item>1st menu item</sl-menu-item>
                            <sl-menu-item>2nd menu item</sl-menu-item>
                            <sl-sub-menu title="sub menu" key="sub1">
                                <sl-menu-item>3rd menu item</sl-menu-item>
                                <sl-menu-item>4th menu item</sl-menu-item>
                                <sl-sub-menu title="sub menu" key="sub1-1">
                                    <sl-menu-item>5rd menu item</sl-menu-item>
                                    <sl-menu-item>6th menu item</sl-menu-item>
                                </sl-sub-menu>
                            </sl-sub-menu>
                            <sl-sub-menu title="disabled menu" key="sub2" disabled>
                                <sl-menu-item>7d menu item</sl-menu-item>
                                <sl-menu-item>8th menu item</sl-menu-item>
                            </sl-sub-menu>
                        </sl-menu>
                    </sl-dropdown>
                </sl-col>
                <sl-col :span="4">
                    <sl-dropdown>
                        <sl-button class="salus-dropdown-button">
                            多级菜单
                        </sl-button>
                        <sl-menu slot="overlay" scrollbar>
                            <sl-menu-item v-for="index in 9" :key="index">No{{index}} menu item</sl-menu-item>
                            <sl-sub-menu title="sub menu" key="sub1">
                                <sl-menu-item v-for="index in 6" :key="index">No{{index}} menu item</sl-menu-item>
                                <sl-menu-divider />
                                <sl-sub-menu title="sub menu" key="sub1-1">
                                    <sl-menu-item v-for="index in 2" :key="index">No{{index}} menu item</sl-menu-item>
                                </sl-sub-menu>
                            </sl-sub-menu>
                            <sl-sub-menu title="disabled menu" key="sub2" disabled>
                                <sl-menu-item>7d menu item</sl-menu-item>
                                <sl-menu-item>8th menu item</sl-menu-item>
                            </sl-sub-menu>
                        </sl-menu>
                    </sl-dropdown>
                </sl-col>
            </sl-row>
            <search-code :code="CodeSubmenu"></search-code>
        </div>
        <!--多级菜单结束-->

        <!--下拉菜单的弹出方向-->
        <div class="detail-box">
            <h2>下拉菜单的弹出方向</h2>
            <p class="code-left-line">Demo</p>
            <sl-row>
                <sl-col :span="4" v-for="(value, placement) in placements" :key="placement">
                    <sl-dropdown :placement="placement">
                        <a class="salus-dropdown-link" href="javascript:;">
                            {{value}} <i class="salus-icon-triangle-down"></i>
                        </a>
                        <sl-menu slot="overlay">
                            <sl-menu-item>
                                <a href="javascript:;">1st menu item</a>
                            </sl-menu-item>
                            <sl-menu-item>
                                <a href="javascript:;">2nd menu item</a>
                            </sl-menu-item>
                            <sl-menu-item>
                                <a href="javascript:;">3rd menu item</a>
                            </sl-menu-item>
                        </sl-menu>
                    </sl-dropdown>
                </sl-col>
            </sl-row>
            <sl-row>
                <sl-col :span="4" v-for="(value, placement) in placements" :key="placement">
                    <sl-dropdown :placement="placement" :overlayStyle="{width: '160px'}">
                        <sl-button class="salus-dropdown-button">
                            {{value}}
                        </sl-button>
                        <sl-menu slot="overlay">
                            <sl-menu-item>
                                <a href="javascript:;">1st menu item</a>
                            </sl-menu-item>
                            <sl-menu-item>
                                <a href="javascript:;">2nd menu item</a>
                            </sl-menu-item>
                            <sl-menu-item>
                                <a href="javascript:;">3rd menu item</a>
                            </sl-menu-item>
                        </sl-menu>
                    </sl-dropdown>
                </sl-col>
            </sl-row>
            <search-code :code="CodePlacement"></search-code>
        </div>
        <!--下拉菜单的弹出方向结束-->

        <!--带下拉框的按钮菜单-->
        <div class="detail-box">
            <h2>带下拉框的按钮菜单</h2>
            <p class="code-left-line">Demo</p>
            <sl-dropdown-button @click="handleMenuClick">
                带下拉框的按钮
                <sl-menu slot="overlay" @click="handleMenuClick">
                    <sl-menu-item key="1">1st menu item</sl-menu-item>
                    <sl-menu-item key="2">2nd menu item</sl-menu-item>
                    <sl-sub-menu title="sub menu" key="sub1">
                        <sl-menu-item >3rd menu item</sl-menu-item>
                        <sl-menu-item >4th menu item</sl-menu-item>
                    </sl-sub-menu>
                </sl-menu>
            </sl-dropdown-button>
            <search-code :code="CodeDropdownButton"></search-code>
        </div>
        <!--带下拉框的按钮菜单结束-->

        <!--右键菜单-->
        <div class="detail-box">
            <h2>右键菜单</h2>
            <p class="code-left-line">Demo</p>
            <div style="background:#F3F6FB; padding: 32px;text-align: center;border-radius: 4px">
                <sl-dropdown :trigger="['contextmenu']">
                    <span style="font-size: 14px;">鼠标右键触发</span>
                    <sl-menu slot="overlay">
                        <sl-menu-item key="1">1st menu item</sl-menu-item>
                        <sl-menu-item key="2">2nd menu item</sl-menu-item>
                        <sl-menu-item key="3" disabled>disabled menu item</sl-menu-item>
                        <sl-sub-menu title="sub menu" key="sub1">
                            <sl-menu-item >3rd menu item</sl-menu-item>
                            <sl-menu-item >4th menu item</sl-menu-item>
                        </sl-sub-menu>
                        <sl-sub-menu title="disabled sub menu" key="sub2" disabled>
                            <sl-menu-item >5rd menu item</sl-menu-item>
                            <sl-menu-item >6th menu item</sl-menu-item>
                        </sl-sub-menu>
                    </sl-menu>
                </sl-dropdown>
            </div>
            <search-code :code="CodeContextMenu"></search-code>
        </div>
        <!--右键菜单结束-->

        <!--触发事件-->
        <div class="detail-box">
            <h2>触发事件</h2>
            <p class="code-left-line">Demo</p>
            <sl-dropdown>
                <sl-button class="salus-dropdown-button">
                    {{selectMenus[selectedMenu]}}
                </sl-button>
                <sl-menu slot="overlay" @click="onClick">
                    <sl-menu-item key="1">
                        <a href="https://www.wangsucloud.com" target="_blank">页面调整</a>
                    </sl-menu-item>
                    <sl-menu-item key="2">事件触发</sl-menu-item>
                    <sl-menu-item key="3">菜单选中</sl-menu-item>
                </sl-menu>
            </sl-dropdown>
            <search-code :code="CodeEvent"></search-code>
        </div>
        <!--触发事件结束-->

        <!--参数说明开始-->
        <div class="detail-box">
            <h2>API</h2>
            <p class="row-in-round">sl-dropdown</p>
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
                    <td>菜单是否禁用</td>
                    <td>boolean</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>getPopupContainer</td>
                    <td>菜单渲染父节点,默认渲染到父级里最近的拥有滚动条的元素</td>
                    <td>Function(triggerNode)</td>
                    <td>最近的拥有滚动条的父元素</td>
                </tr>
                <tr>
                    <td>overlay(slot)</td>
                    <td>菜单</td>
                    <td>Menu，还包括菜单项 Menu Item，分割线 Menu Divider，MenuItem必须设置唯一的key</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>overlayClassName</td>
                    <td>下拉根元素的类名称</td>
                    <td>string</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>overlayStyle</td>
                    <td>下拉根元素的样式</td>
                    <td>object</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>placement</td>
                    <td>菜单弹出位置：bottomLeft bottomCenter bottomRight topLeft topCenter topRight</td>
                    <td>string</td>
                    <td>'bottomLeft'</td>
                </tr>
                <tr>
                    <td>trigger</td>
                    <td>触发下拉的行为</td>
                    <td>Array&lt;click|hover|contextmenu&gt;</td>
                    <td>['hover']</td>
                </tr>
                <tr>
                    <td>visible(v-model)</td>
                    <td>菜单是否显示</td>
                    <td>boolean</td>
                    <td>-</td>
                </tr>
                </tbody>
            </table>

            <p class="row-in-round">sl-dropdown 事件</p>
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
                    <td>visibleChange</td>
                    <td>菜单显示状态改变时调用，参数为 visible</td>
                    <td>function(visible)</td>
                </tr>
                </tbody>
            </table>

            <p class="row-in-round">sl-dropdown-button</p>
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
                    <td>菜单是否禁用</td>
                    <td>boolean</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>overlay(slot)</td>
                    <td>菜单</td>
                    <td>Menu</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>placement</td>
                    <td>菜单弹出位置：bottomLeft bottomCenter bottomRight topLeft topCenter topRight</td>
                    <td>string</td>
                    <td>'bottomLeft'</td>
                </tr>
                <tr>
                    <td>trigger</td>
                    <td>触发下拉的行为</td>
                    <td>Array&lt;click|hover|contextmenu&gt;</td>
                    <td>['hover']</td>
                </tr>
                <tr>
                    <td>visible(v-model)</td>
                    <td>菜单是否显示</td>
                    <td>boolean</td>
                    <td>-</td>
                </tr>
                </tbody>
            </table>

            <p class="row-in-round">sl-dropdown-button 事件</p>
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
                    <td>点击左侧按钮的回调，和 Button 一致</td>
                    <td>Function</td>
                </tr>
                <tr>
                    <td>visibleChange</td>
                    <td>菜单显示状态改变时调用，参数为 visible</td>
                    <td>function(visible)</td>
                </tr>
                </tbody>
            </table>
        </div>
        <!--参数说明结束-->
    </div>
</template>
<script>
    import { CodeBasic, CodeIcon, CodeSelectable, CodeItem, CodeScrollbar, CodeSubmenu, CodePlacement, CodeDropdownButton, CodeContextMenu, CodeEvent } from "./dropdown.code";

    export default {
        data() {
            return {
                CodeBasic,
                CodeIcon,
                CodeSelectable,
                CodeItem,
                CodeScrollbar,
                CodeSubmenu,
                CodePlacement,
                CodeDropdownButton,
                CodeContextMenu,
                CodeEvent,
                placements: {
                  bottomLeft: '底部居左',
                  bottomCenter: '底部居中',
                  bottomRight: '底部居右',
                  topLeft: '顶部居左',
                  topCenter: '顶部居中',
                  topRight: '顶部居右',
                },
                selectMenus: {
                  1: '页面跳转',
                  2: '事件触发',
                  3: '菜单选中',
                },
                selectedMenu: 2,
            }
        },
        components: {
            SearchCode: () => import('../../common/searchCode/searchCode')
        },
        methods: {
          handleMenuClick(e) {
            console.log('click', e);
          },
          onClick({ key }) {
            key === '2' && console.log('事件触发');
            key === '3' && (this.selectedMenu = key);
          },
        }
    }
</script>
<style scoped>
</style>