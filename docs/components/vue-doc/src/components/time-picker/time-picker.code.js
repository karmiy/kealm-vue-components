/* 基础时间选择器 */
export const CodeBasic =
`    <template>
        <div>
            <sl-time-picker @change="onChange" :defaultOpenValue="defaultValue" />
        </div>
    </template>
    <script>
        export default {
            data() {
              return {
                defaultValue: new Date(),
              }
            },
            methods: {
                onChange(time, timeString){
                    console.log(time, timeString);
                }
            }
        }
    </script>`;
export const CodeAddon =
`    <template>
        <div>
            <sl-time-picker :open.sync="open">
                <sl-button slot="addon" size="small" @click="handleClose">取消</sl-button>
                <sl-button slot="addon" size="small" type="primary" @click="handleClose">确定</sl-button>
            </sl-time-picker>
        </div>
    </template>
    <script>
        export default {
            data() {
                return {
                    open: false,
                }
            },
            methods: {
                handleClose(){
                    this.open = false;
                }
            }
        }
    </script>`;
export const CodeDisabledPart =
`    <template>
        <div>
            <sl-time-picker
                :defaultOpenValue="defaultValue"
                :disabledHours="() => [ 1, 2, 3 ]" :disabledMinutes="() => [ 20, 21, 22, 23, 24, 25 ]"
                :disabledSeconds="() => [ 20, 21, 22, 23, 24, 25 ]"
            />
        </div>
    </template>
    <script>
        export default {
            data() {
                return {
                  defaultValue: new Date(),
                }
            },
        }
    </script>`;
