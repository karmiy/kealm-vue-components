/* 基础徽标数Code */
export const CodeBasic = 
`    <template>
        <div>
            <sl-badge count="5">
                <a href="javascript;" class="head-example"></a>
            </sl-badge>
        </div>
    </template>`;

/* 单独使用Code */
export const CodeNoWrapper = 
`    <template>
        <div>
            <sl-badge count="25" />
            <sl-badge count="4" :numberStyle="{backgroundColor: '#fff', color: '#999', boxShadow: '0 0 0 1px #d9d9d9 inset'}" />
            <sl-badge count="109" :numberStyle= "{backgroundColor: '#52c41a'} " />
        </div>
    </template>`;

/* 封顶数字Code */
export const CodeOverflow = 
`    <template>
        <div>
            <sl-badge :count="99">
                <a href="#" class="head-example"></a>
            </sl-badge>
            <sl-badge :count="100">
                <a href="#" class="head-example"></a>
            </sl-badge>
            <sl-badge :count="99" :overflowCount="10">
                <a href="#" class="head-example"></a>
            </sl-badge>
            <sl-badge :count="1000" :overflowCount="999">
                <a href="#" class="head-example"></a>
            </sl-badge>
        </div>
    </template>`;

/* 是否显示零Code */
export const CodeShowZero =
`    <template>
        <div>
            <sl-badge :count="0" :showZero="showZero">
                <a href="#" class="head-example" />
            </sl-badge>
            <sl-switch defaultChecked @change='showZero = $event'/>
        </div>
    </template>
    <script>
        export default {
            data() {
              return {
                showZero: true,
              }
            },
        }
    </script>`;

/* 动态改变Code */
export const CodeChange =
`    <template>
        <div>
            <sl-badge :count="count">
                <a href="#" class="head-example" />
            </sl-badge>
            <sl-button-group>
                <sl-button @click="decline" icon>
                    <i class="salus-icon-minus-o"></i>
                </sl-button>
                <sl-button @click="increase" icon>
                    <i class="salus-icon-plus-o"></i>
                </sl-button>
            </sl-button-group>
        </div>
    </template>
    <script>
        export default {
            data() {
              return {
                count: 5,
              }
            },
            methods: {
                decline () {
                    let count = this.count - 1
                    if (count < 0) {
                        count = 0
                    }
                    this.count = count
                },
                increase () {
                    this.count++
                },
            }
        }
    </script>`;

/* 圆点提示Code */
export const CodeDot = 
`    <template>
        <div>
            <sl-badge :dot="true">
                <a href="#" class="head-example" />
            </sl-badge>
        </div>
    </template>`;

/* 状态点Code */
export const CodeStatus = 
`    <template>
        <div>
            <sl-badge status="success" />
            <sl-badge status="error" />
            <sl-badge status="default" />
            <sl-badge status="processing" />
            <sl-badge status="warning" />
            <br />
            <sl-badge status="success" text="成功" />
            <br />
            <sl-badge status="error" text="失败" />
            <br />
            <sl-badge status="default" text="默认" />
            <br />
            <sl-badge status="processing" text="进行中" />
            <br />
            <sl-badge status="warning" text="警告" />
            <br />
            <sl-badge status="default" text="自定义颜色" :numberStyle="{backgroundColor: '#2f54eb'}" />
        </div>
    </template>`


