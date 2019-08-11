/* 基础数字输入框 */
export const CodeBasic =
`    <template>
        <div>
            <sl-input-number :min="1" :max="10" v-model="value" @change="onChange" />
        </div>
    </template>
    <script>
        export default {
            data() {
                return {
                    value: 3,
                }
            },
            methods: {
                onChange(value) {
                    console.log('changed', value);
                },
            }
        }
    </script>`

/* 加减符号输入框 */
export const CodeSymbols =
`    <template>
        <div>
            <sl-input-number :min="1" :max="10" :defaultValue="3" handleType="symbols" />
        </div>
    </template>`

/* 输入框大小 */
export const CodeSize =
`    <template>
        <div>
            <sl-input-number size="large" :min="1" :max="10" :defaultValue="3" />
            <sl-input-number :min="1" :max="10" :defaultValue="3" />
            <sl-input-number size="small" :min="1" :max="10" :defaultValue="3" />
        </div>
    </template>`

/* 小数输入框 */
export const CodeDigital =
`     <template>
        <div>
            <sl-input-number :min="0" :max="10" :step="0.1" :defaultValue="3" />
        </div>
    </template>`

/* 格式化展示 */
export const CodeFormat =
`    <template>
        <div>
            <sl-input-number
                :defaultValue="3"
                :formatter="value => \`$ \${value}\`.replace(/\\B(?=(\\d{3})+(?!\\d))/g, ',')"
                :parser="value => value.replace(/\\$\\s?|(,*)/g, '')"
            />
            <sl-input-number
                :defaultValue="3"
                :min="0"
                :max="100"
                :formatter="value => \`\${value}%\`"
                :parser="value => value.replace('%', '')"
            />
        </div>
    </template>`

/* 禁用 */
export const CodeDisable =
`    <template>
        <div>
            <sl-input-number :min="1" :max="10" :disabled="true" :defaultValue="3" />
        </div>
    </template>`
