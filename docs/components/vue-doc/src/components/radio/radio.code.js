/* 基础单选框 */
export const CodeBasic =
    `    <template>
        <div>    
            <sl-radio>普通单选框</sl-radio>
        </div>
    </template>`

/* 禁用 */
export const CodeDisable =
    `    <template>
        <div>    
            <sl-radio disabled>禁用单选框-未选中</sl-radio>
            <sl-radio disabled v-model="trueVal">禁用单选框-选中</sl-radio>
        </div>
    </template>
    <script>
        export default {
            data() {
                return {
                    trueVal: true
                }
            }
        }
    </script>`;

/* 单选组合-水平 */
export const CodeGroup =
    `    <template>
        <div>    
            <sl-radio-group v-model="radioValue">
                <sl-radio value="A">A</sl-radio>
                <sl-radio value="B">B</sl-radio>
                <sl-radio value="C">C</sl-radio>
                <sl-radio value="D">D</sl-radio>
            </sl-radio-group>
        </div>
    </template>
    <script>
        export default {
            data() {
                return {
                    radioValue: 'A'
                }
            }
        }
    </script>`;

/* 单选组合-垂直 */
export const CodeGroupVertical =
    `    <template>
        <div>    
            <sl-radio-group v-model="radioValue" vertical>
                <sl-radio value="A">A</sl-radio>
                <sl-radio value="B">B</sl-radio>
                <sl-radio value="C">C</sl-radio>
                <sl-radio value="M">More...<sl-input type="text" v-if="radioValue === 'M'" style="width: 100px; margin-left: 10px;"/></sl-radio>
            </sl-radio-group>
        </div>
    </template>`;

/* 单选组合-配合name使用 */
export const CodeGroupName =
    `    <template>
        <div>    
            <sl-radio-group v-model="radioValue" name="radiogroup">
                <sl-radio value="A">A</sl-radio>
                <sl-radio value="B">B</sl-radio>
                <sl-radio value="C">C</sl-radio>
                <sl-radio value="D">D</sl-radio>
            </sl-radio-group>
        </div>
    </template>
    <script>
        export default {
            data() {
                return {
                    radioValue: 'A'
                }
            }
        }
    </script>`;

/* 按钮样式的单选组合 */
export const CodeButton =
    `    <template>
        <div>    
            <sl-radio-group v-model="radioValue">
                <sl-radio-button value="A">单选按钮</sl-radio-button>
                <sl-radio-button value="B">单选按钮</sl-radio-button>
                <sl-radio-button value="C">单选按钮</sl-radio-button>
                <sl-radio-button value="D">单选按钮</sl-radio-button>
                <sl-radio-button value="E" disabled>单选按钮-禁用</sl-radio-button>
            </sl-radio-group>
            <sl-radio-group v-model="radioValue" vertical>
                <sl-radio-button value="A" >单选按钮</sl-radio-button>
                <sl-radio-button value="B" >单选按钮</sl-radio-button>
                <sl-radio-button value="C" >单选按钮</sl-radio-button>
                <sl-radio-button value="D" >单选按钮</sl-radio-button>
                <sl-radio-button value="E" disabled>单选按钮-禁用</sl-radio-button>
            </sl-radio-group>
        </div>
    </template>
    <script>
        export default {
            data() {
                return {
                    radioValue: 'A'
                }
            }
        }
    </script>`;
