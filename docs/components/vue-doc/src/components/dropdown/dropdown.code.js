/* 基础下拉菜单 */
export const CodeBasic = 
`    <template>
        <div>
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
        </div>
    </template>`;

/* 自定义Icon */
export const CodeIcon = 
`    import { Component } from '@angular/core';
    
    @Component({
        selector:'dropdown-basic-icon',
        template: \`
        <div class="salus-row">
            <div class="salus-col-4">
                <salus-dropdown>
                    <button salus-button salus-dropdown>下拉菜单-button
                        <i class="salus-icon-arrow-down-o"></i></button>
                    <ul salus-menu>
                        <li salus-menu-item>
                            <a>1st menu item</a>
                        </li>
                        <li salus-menu-item>
                            <a>2nd menu item</a>
                        </li>
                        <li salus-menu-item>
                            <a>3rd menu item</a>
                        </li>
                    </ul>
                </salus-dropdown>
            </div>
            <div class="salus-col-4">
                <salus-dropdown>
                    <button salus-button salus-dropdown>button</button>
                    <ul salus-menu>
                        <li salus-menu-item>
                            <a>1st menu item</a>
                        </li>
                        <li salus-menu-item>
                            <a>2nd menu item</a>
                        </li>
                        <li salus-menu-item>
                            <a>3rd menu item</a>
                        </li>
                    </ul>
                </salus-dropdown>
            </div>
            <div class="salus-col-4">
                <salus-dropdown>
                    <a salus-dropdown>
                        下拉菜单-hover <i class="salus-icon-arrow-down-o"></i>
                    </a>
                    <ul salus-menu>
                        <li salus-menu-item>
                            <a>1st menu item</a>
                        </li>
                        <li salus-menu-item>
                            <a>2nd menu item</a>
                        </li>
                        <li salus-menu-item>
                            <a>3rd menu item</a>
                        </li>
                    </ul>
                </salus-dropdown>
            </div>
            <div class="salus-col-4">
                <salus-dropdown>
                    <a salus-dropdown>
                        下拉菜单-hover
                    </a>
                    <ul salus-menu>
                        <li salus-menu-item>
                            <a>1st menu item</a>
                        </li>
                        <li salus-menu-item>
                            <a>2nd menu item</a>
                        </li>
                        <li salus-menu-item>
                            <a>3rd menu item</a>
                        </li>
                    </ul>
                </salus-dropdown>
            </div>
        </div>
        \`,
        styles : []
    })
    export class PageDropdown {
    }`

/* 菜单项选中 */
export const CodeSelectable = 
`    <template>
        <div>
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
        </div>
    </template>`

/* 分割线与禁用菜单 */
export const CodeItem = 
`    <template>
        <div>
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
        </div>
    </template>`

/* 带有滚动条 */
export const CodeScrollbar = 
`    <template>
        <div>
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
        </div>
    </template>`;

/* 多级菜单 */
export const CodeSubmenu = 
`    <template>
        <div>
            <sl-row>
                <sl-col :span="4">
                    <sl-dropdown>
                        <sl-button class="salus-dropdown-button">
                            多级菜单
                        </sl-button>
                        <sl-menu slot="overlay" inDropDown>
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
                        <sl-menu slot="overlay" inDropDown scrollbar>
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
        </div>
    </template>`

/* 菜单弹出方向 */
export const CodePlacement = 
`    <template>
        <div>
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
        </div>
    </template>
    <script>
        export default {
            data() {
                return {
                    placements: {
                      bottomLeft: '底部居左',
                      bottomCenter: '底部居中',
                      bottomRight: '底部居右',
                      topLeft: '顶部居左',
                      topCenter: '顶部居中',
                      topRight: '顶部居右',
                    },
                }
            },
        }
    </script>`;

/* 带下拉框的按钮菜单 */
export const CodeDropdownButton = 
`    <template>
        <div>
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
        </div>
    </template>`

/* 右键菜单 */
export const CodeContextMenu = 
`    <template>
        <div>
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
        </div>
    </template>`

/* 触发事件 */
export const CodeEvent = 
`    <template>
        <div>
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
        </div>
    </template>
    <script>
        export default {
            data() {
                return {
                    selectMenus: {
                      1: '页面跳转',
                      2: '事件触发',
                      3: '菜单选中',
                    },
                    selectedMenu: 2,
                }
            },
            methods: {
              onClick({ key }) {
                key === '2' && console.log('事件触发');
                key === '3' && (this.selectedMenu = key);
              }
            }
        }
    </script>`


