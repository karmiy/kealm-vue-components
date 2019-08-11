/* 基础标签页 */
export const CodeBasic =
    `    <template>
        <div>    
            <sl-tabset defaultActiveKey="1">
                <sl-tab tab="Tab 1" key="1">Content of Tab Pane 1</sl-tab>
                <sl-tab tab="Tab 2" key="2" forceRender>Content of Tab Pane 2</sl-tab>
                <sl-tab tab="Tab 3" key="3">Content of Tab Pane 3</sl-tab>
            </sl-tabset>
        </div>
    </template>`

/* 带有图表的标签页 */
export const CodeIcon =
    `    <template>
        <div>    
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
        </div>
    </template>`

/* 标签页的位置 */
export const CodePos =
    `    <template>
        <div>    
            <sl-radio-group v-model="tabPosition">
                <sl-radio-button v-for="pos in posArr" :value="pos">{{pos}}</sl-radio-button>
            </sl-radio-group>
            <sl-tabset defaultActiveKey="1" :tabPosition="tabPosition">
                <sl-tab title="Tab 1" key="1">Content of Tab 1</sl-tab>
                <sl-tab title="Tab 2" key="2">Content of Tab 2</sl-tab>
                <sl-tab title="Tab 3" key="3">Content of Tab 3</sl-tab>
            </sl-tabset>
        </div>
    </template>
    <script>
        export default {
            data() {
                return {
                    tabPosition: 'top',
                    posArr: ['top', 'bottom', 'right', 'left']
                }
            }
        }
    </script>`

/* 带禁用项标签页 */
export const CodeDisable =
    `    <template>
        <div>    
            <sl-tabset defaultActiveKey="1">
                <sl-tab tab="Tab 1" key="1">Tab 1</sl-tab>
                <sl-tab tab="Tab 2" disabled key="2">Tab 2</sl-tab>
                <sl-tab tab="Tab 3" key="3">Tab 3</sl-tab>
            </sl-tabset>
        </div>
    </template>`

/* 可滚动标签页 */
export const CodeSlide =
    `    <template>
        <div>    
            <sl-radio-group v-model="mode">
                <sl-radio-button value="top">Horizontal</sl-radio-button>
                <sl-radio-button value="left">Vertical</sl-radio-button>
            </sl-radio-group>
            <sl-tabset defaultActiveKey="1" :tabPosition="mode" @prevClick="slide" @nextClick="slide">
                <sl-tab v-for="(tab, index) in tabs" :title="tab" :key="index">Content of {{tab}}</sl-tab>
            </sl-tabset>
        </div>
    </template>
    <script>
        const tabs = ['Tab 1', 'Tab 2', 'Tab 3', 'Tab 4', 'Tab 5', 'Tab 6', 'Tab 7', 'Tab 8', 'Tab 9', 'Tab 10',
              'Tab 11', 'Tab 12', 'Tab 13', 'Tab 14', 'Tab 15', 'Tab 16', 'Tab 17', 'Tab 18', 'Tab 19', 'Tab 20'];
        export default {
            data() {
                return {
                    mode: 'top',
                    tabs
                }
            },
            methods: {
                slide (val) {
                    console.log(val)
                }
            }
        }
    </script>`
/* 卡片式标签页 */
export const CodeCard =
    `    <template>
        <div>    
            <sl-radio-group v-model="tabPosition">
                <sl-radio-button v-for="pos in posArr" :value="pos">{{pos}}</sl-radio-button>
            </sl-radio-group>
            <sl-tabset :tabPosition="tabPosition" type="card">
                <sl-tab v-for="(tab, index) in cardTabs" :title="'Tab '+ tab" :key="index">
                    Content of {{tabPosition}}-Tab {{ tab }}
                </sl-tab>
            </sl-tabset>
        </div>
    </template>
    <script>
        export default {
            data() {
                return {
                    tabPosition: 'top',
                    posArr: ['top', 'bottom', 'right', 'left'],
                    cardTabs: [1,2,3]
                }
            },
            methods: {
                slide (val) {
                    console.log(val)
                }
            }
        }
    </script>`

/* 容器式标签页 */
export const CodeContainer =
`    <template>
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
    </template>
    <style>
        .card-container {
            padding: 20px;
            background-color: #f5f5f5;
        }
        .card-container > .salus-tabs-card > .salus-tabs-content {
            height: 120px;
            margin-top: -16px;
        }
        
        .card-container > .salus-tabs-card > .salus-tabs-content > .salus-tabs-tabpane {
            background: #fff;
            padding: 16px;
        }
        
        .card-container > .salus-tabs-card > .salus-tabs-bar {
            border-color: #fff;
        }
        
        .card-container > .salus-tabs-card > .salus-tabs-bar .salus-tabs-tab {
            border-color: transparent;
            background: transparent;
        }
        
        .card-container > .salus-tabs-card > .salus-tabs-bar .salus-tabs-tab-active {
            border-color: #fff;
            box-shadow: none;
            background: #fff;
        }
    </style>
`