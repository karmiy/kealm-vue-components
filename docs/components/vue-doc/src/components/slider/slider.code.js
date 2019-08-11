/* 基础滑动输入条 */
export const CodeBasic = 
`    <template>
        <div>
            <sl-row>
                <sl-col :span="12">
                    <sl-slider :min="1" :max="20" v-model="inputValue" />
                </sl-col>
                <sl-col :span="4">
                    <sl-input-number
                        :min="1"
                        :max="20"
                        style="marginLeft: 16px"
                        v-model="inputValue"
                    />
                </sl-col>
            </sl-row>
        </div>
    </template>
    <script>
        export default {
            data() {
              return {
                inputValue: 1,
              }
            },
        }
    </script>`

/* 基础滑动输入条 */
export const CodeStep =
  `    <template>
        <div>
            <sl-row>
                <sl-col :span="12">
                    <sl-slider :step="10" />
                </sl-col>
            </sl-row>
        </div>
    </template>
    <script>
        export default {
            data() {
              return {
                inputValue: 1,
              }
            },
        }
    </script>`

/* 禁用 */
export const CodeDisable = 
`    <template>
        <div>
            <sl-row>
                <sl-col :span="12">
                    <sl-slider :min="1" :max="20" v-model="inputValue" :disabled="disabled" />
                </sl-col>
                <sl-col :span="4">
                    <sl-input-number
                        :min="1"
                        :max="20"
                        style="marginLeft: 16px"
                        v-model="inputValue"
                        :disabled="disabled"
                    />
                </sl-col>
            </sl-row>
            Disabled: <sl-switch size="small" :checked="disabled" @change="disabled = $event" />
        </div>
    </template>
    <script>
        export default {
            data() {
              return {
                inputValue: 1,
                disabled: false,
              }
            },
        }
    </script>`

/* 自定义提示 */
export const CodeCustomize = 
`    <template>
        <div>
            <sl-row>
                <sl-col :span="12">
                    <sl-slider :max="20" :defaultValue="5" :tipFormatter="null" />
                </sl-col>
            </sl-row>
            <sl-row>
                <sl-col :span="12">
                    <sl-slider :max="20" :defaultValue="10" :tipFormatter="value => \`\${value}M\`" />
                </sl-col>
            </sl-row>
        </div>
    </template>`

/* 双滑块 */
export const CodeDouble = 
`    <template>
        <div>
            <sl-row>
                <sl-col :span="12">
                    <sl-slider range :defaultValue="[20, 50]" />
                </sl-col>
            </sl-row>
        </div>
    </template>`

/* 竖直方向 */
export const CodeVertical = 
`    <template>
        <div>
            <sl-row>
                <sl-col :span="8">
                    <div style="height: 300px">
                        <div style="float:left;height: 300px;marginLeft: 70px">
                            <sl-slider vertical :defaultValue="30" />
                        </div>
                        <div style="float:left;height: 300px;marginLeft: 70px">
                            <sl-slider vertical range :defaultValue="[20, 50]" />
                        </div>
                        <div style="float:left;height: 300px;marginLeft: 70px">
                            <sl-slider vertical range :marks="marks" :defaultValue="[25, 73]" />
                        </div>
                    </div>
                </sl-col>
            </sl-row>
        </div>
    </template>
    <script>
        export default {
            data() {
              return {
                marks: {
                    0: '0°C',
                    25: '25°C',
                    73: '73°C',
                    100: {
                        style: {
                            color: '#f50',
                        },
                        label: \`100°C\`,
                    },
                },
              }
            },
        }
    </script>`