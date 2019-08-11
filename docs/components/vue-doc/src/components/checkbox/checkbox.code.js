/* 基础复选框 */
export const CodeBasic =
    `    <template>
        <div>
            <sl-checkbox>普通复选框</sl-checkbox>
        </div>
    </template>`;

/* 复选框禁用 */
export const CodeDisable =
    `    <template>
        <div>
            <sl-checkbox disabled>禁用复选框(未选中)</sl-checkbox>
            <sl-checkbox disabled defaultChecked>禁用复选框(选中)</sl-checkbox>
        </div>
    </template>`;

/* 多选 */
export const CodeMultiple =
    `    <template>
        <div>
            <div class="checkall-divider">
                <sl-checkbox
                        :indeterminate="indeterminate"
                        @change="onCheckAllChange"
                        :checked="checkAll"
                >
                    Check all
                </sl-checkbox>
            </div>
            <br>
            <sl-checkbox-group :options="plainOptions" v-model="checkedList" @change="updateSingleChecked" />
        </div>
    </template>
    <script>
        export default {
            data() {
                return {
                    indeterminate: true,
                    checkAll: false,
                    plainOptions: ['Apple', 'Pear', 'Orange'],
                    checkedList:['Apple', 'Orange']
                }
            },
            methods: {
                updateSingleChecked (checkedList) {
                this.indeterminate = !!checkedList.length && (checkedList.length < plainOptions.length)
                this.checkAll = checkedList.length === plainOptions.length
                },
                onCheckAllChange (e) {
                    Object.assign(this, {
                        checkedList: e.target.checked ? plainOptions : [],
                        indeterminate: false,
                        checkAll: e.target.checked,
                    })
                }
            }
        }
    </script>`;
/* Checkbox组 */
export const CodeGroup =
    `    <template>
        <div>
            <sl-checkbox-group :options="plainOptions" v-model="value" @change="onChange"/>
            <sl-checkbox-group :options="plainOptions" :defaultValue="['Apple']" @change="onChange" />
            <sl-checkbox-group :options="options" :value="['Pear']" @change="onChange" />
            <sl-checkbox-group :options="optionsWithDisabled" disabled :defaultValue="['Apple']" @change="onChange">
                <span style="color: red" slot="label" slot-scope="{value}">{{value}}</span>
            </sl-checkbox-group>
        </div>
    </template>
    <script>
        const plainOptions = ['Apple', 'Pear', 'Orange']
        const options = [
            {label: 'Apple', value: 'Apple'},
            {label: 'Pear', value: 'Pear'},
            {label: 'Orange', value: 'Orange'},
        ]
        const optionsWithDisabled = [
            {value: 'Apple'},
            {label: 'Pear', value: 'Pear'},
            {label: 'Orange', value: 'Orange', disabled: false},
        ]
        export default {
            data() {
                return {
                    plainOptions,
                    options,
                    optionsWithDisabled,
                    value: [],
                }
            },
            methods: {
                onChange(checkedValues) {
                    console.log('checked = ', checkedValues)
                    console.log('value = ', this.value)
                }
            }
        }
    </script>`;
export const CodeGrid =
    `    <template>
        <div>
            <sl-checkbox-group>
                <sl-row>
                    <sl-col :span="8"><sl-checkbox value="A">A</sl-checkbox></sl-col>
                    <sl-col :span="8"><sl-checkbox value="B">B</sl-checkbox></sl-col>
                    <sl-col :span="8"><sl-checkbox value="C">C</sl-checkbox></sl-col>
                    <sl-col :span="8"><sl-checkbox value="D">D</sl-checkbox></sl-col>
                    <sl-col :span="8"><sl-checkbox value="E">E</sl-checkbox></sl-col>
                </sl-row>
            </sl-checkbox-group>
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

/* 按钮类型复选框 */
export const CodeButton =
    `    <template>
        <div>
            <sl-checkbox displayButton>普通复选框</sl-checkbox>
            <sl-checkbox displayButton disabled>禁用复选框(未选中)</sl-checkbox>
            <sl-checkbox displayButton disabled defaultChecked>禁用复选框(选中)</sl-checkbox>
        </div>
    </template>`;

/* 按钮类型复选框全选 */
export const CodeButtonMultiple =
    `    <template>
        <div>
            <div class="checkall-divider">
                <sl-checkbox displayButton
                        :indeterminate="indeterminateBtn"
                        @change="onCheckAllBtnChange"
                        :checked="checkAllBtn"
                >
                    Check all
                </sl-checkbox>
            </div>
            <br>
            <sl-checkbox-group :options="options" v-model="checkedListBtn
        </div>
    </template>
    <script>
        const options = [
            {label: 'Apple', value: 'Apple', displayButton: true},
            {label: 'Pear', value: 'Pear', displayButton: true},
            {label: 'Orange', value: 'Orange', displayButton: true},
        ]
        export default {
            data() {
                return {
                    options,
                    checkedListBtn: ['Apple', 'Orange'],
                    indeterminateBtn: true,
                    checkAllBtn: false
                }
            },
            methods: {
                updateBtnSingleChecked (checkedListBtn) {
                    this.indeterminateBtn = !!checkedListBtn.length && (checkedListBtn.length < options.length)
                    this.checkAllBtn = checkedListBtn.length === options.length
                },
                onCheckAllBtnChange (e) {
                    const checked = options.map(item => item.value);
                    Object.assign(this, {
                        checkedListBtn: e.target.checked ? checked : [],
                        indeterminateBtn: false,
                        checkAllBtn: e.target.checked,
                    })
                }
            }
        }
    </script>`;
