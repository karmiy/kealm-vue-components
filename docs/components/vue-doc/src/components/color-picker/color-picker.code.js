export const CodeBasic = 
`    <template>
        <div>
            <sl-color-picker v-model="color" />
        </div>
    </template>
    <script>
        export default {
            data() {
              return {
                color; '',
              }
            }
        }
    </script>`;


/* 默认值 */
export const CodeDefault = 
`    <template>
        <div>
            <sl-color-picker defaultColor="#0FB1F7" />
        </div>
    </template>`;


/* 自定义按钮大小 */
export const CodeButtonStyle = 
`    <template>
        <div>
            <sl-color-picker :buttonStyle="{width: '30px', height: '30px'}" />
        </div>
    </template>`;