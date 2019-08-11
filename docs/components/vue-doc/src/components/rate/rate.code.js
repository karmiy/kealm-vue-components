/* 基础评分 */
export const CodeBasic = 
`    <template>
        <div>
            <sl-rate v-model='value'/>
        </div>
    </template>
    <script>
        export default {
            data() {
              return {
                value: 2,
              }
            },
        }
    </script>`

/* 半星 */
export const CodeHalf = 
`    <template>
        <div>
            <sl-rate :defaultValue="2.5" allowHalf />
        </div>
    </template>`

/* 文案提示 */
export const CodeTextTip = 
`    <template>
        <div>
            <sl-rate v-model='value'/>
            <span>{{value}} stars</span>
        </div>
    </template>
    <script>
        export default {
            data() {
              return {
                value: 2,
              }
            },
        }
    </script>`

/* 只读 */
export const CodeDisabled = 
`    <template>
        <div>
            <sl-rate :defaultValue="2" disabled />
        </div>
    </template>`

/* 是否允许清除 */
export const CodeClear = 
`    <template>
        <div>
            <sl-rate :defaultValue="3" /> allowClear: true
            <br />
            <sl-rate :allowClear="false" :defaultValue="3" /> allowClear: false
        </div>
    </template>`

/* 自定义 */
export const CodeCustom = 
`    <template>
        <div>
            <sl-rate character="A" allowHalf style="fontSize: 36px" />
            <br>
            <sl-rate allowHalf >
                <i class="salus-icon-frequent-attack" slot="character" style="fontSize: 20px" />
            </sl-rate>
        </div>
    </template>`