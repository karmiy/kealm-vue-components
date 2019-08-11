/* 基础菜单 */
export const CodeBasic = 
`   <template>
        <div>
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
        </div>
    </template>
    <script>
        export default {
            data() {
              return {
                current: ['mail'],
              }
            },
        }
    </script>`;

/* 内嵌菜单 */
export const CodeInline =
`   <template>
        <div>
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
        </div>
    </template>
    <script>
        export default {
            data() {
              return {
                openKeys: ['sub1'],
              }
            },
            methods: {
              handleClick (e) {
                console.log('click', e)
              },
              titleClick (e) {
                console.log('titleClick', e)
              },
            },
            watch: {
              openKeys (val) {
                console.log('openKeys', val)
              },
            }
        }
    </script>`;

/* 主题菜单 */
export const CodeTheme =
`   <template>
        <div>
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
        </div>
    </template>
    <script>
        export default {
            data() {
              return {
                openKeys: ['sub1'],
                theme: 'dark',
              }
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
            },
            watch: {
              openKeys (val) {
                console.log('openKeys', val)
              },
            }
        }
    </script>`;

/* 主题菜单 */
export const CodeAccordion =
`   import { Component, OnInit } from "@angular/core";
    
    @Component({
        selector:'ns-demo-menu-accordion',
        template: \`
            <ul ns-menu [mode]="'inline'">
                <li ns-submenu [(open)]="openMap['sub1']" (openChange)="openHandler('sub1')">
                  <span title>
                    <i class="salus-icon-edit-o"></i>
                    <span>Navigation One</span>
                  </span>
                  <ul>
                    <li ns-menu-item>Option 1</li>
                    <li ns-menu-item>Option 2</li>
                    <li ns-submenu>
                      <span title>Submenu</span>
                      <ul>
                        <li ns-menu-item>Option 3</li>
                        <li ns-menu-item>Option 4</li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li ns-submenu [(open)]="openMap['sub2']" (openChange)="openHandler('sub2')">
                  <span title>
                    <i class="salus-icon-edit-o"></i>
                    <span>Navigation Two</span>
                  </span>
                  <ul>
                    <li ns-menu-item>Option 5</li>
                    <li ns-menu-item>Option 6</li>
                    <li ns-submenu>
                      <span title>Submenu</span>
                      <ul>
                        <li ns-menu-item>Option 7</li>
                        <li ns-menu-item>Option 8</li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li ns-submenu [(open)]="openMap['sub3']" (openChange)="openHandler('sub3')">
                  <span title>
                    <i class="salus-icon-setting-o"></i>
                    <span>Navigation Three</span>
                  </span>
                  <ul>
                    <li ns-menu-item>Option 9</li>
                    <li ns-menu-item>Option 10</li>
                    <li ns-menu-item>Option 11</li>
                  </ul>
                </li>
              </ul>
        \`,
        styles : []
    })
    export class NsDemoMenuAccordion {
        openMap: { [name]: boolean } = {
            sub1: true,
            sub2: false,
            sub3: false
        };
    
        openHandler(value): void {
            for (const key in this.openMap) {
                if (key !== value) {
                    this.openMap[key] = false;
                }
            }
        }
    }`;

/* 垂直菜单 */
export const CodeVertical =
`   <template>
        <div>
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
    </template>`;