<template>
    <div class="page-box">
        <div class="detail-box">
            <h1>Checkbox 复选框</h1>
            <p>多选框。</p>
        </div>

        <!--基础多选框开始-->
        <div class="detail-box">
            <h2>基础复选框</h2>
            <p class="code-left-line">Demo</p>
            <sl-checkbox>普通复选框</sl-checkbox>
            <search-code :code="CodeBasic"></search-code>
        </div>
        <!--基础多选框结束-->

        <!--多选框禁用开始-->
        <div class="detail-box">
            <h2>复选框禁用</h2>
            <p class="code-left-line">Demo</p>
            <sl-checkbox disabled>禁用复选框(未选中)</sl-checkbox>
            <sl-checkbox disabled defaultChecked>禁用复选框(选中)</sl-checkbox>
            <search-code :code="CodeDisable"></search-code>
        </div>
        <!--多选框禁用结束-->

        <!--多选框全选开始-->
        <div class="detail-box">
            <h2>复选框全选</h2>
            <p class="code-left-line">Demo</p>
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
            <search-code :code="CodeMultiple"></search-code>
        </div>
        <!--多选框全选结束-->

        <!--Checkbox组开始-->
        <div class="detail-box">
            <h2>Checkbox组</h2>
            <p class="code-left-line">Demo</p>
            <div class="detail-block">
                <sl-checkbox-group :options="plainOptions" v-model="value" @change="onChange"/>
            </div>
            <div class="detail-block">
                <sl-checkbox-group :options="plainOptions" :defaultValue="['Apple']" @change="onChange" />
            </div>
            <div class="detail-block">
                <sl-checkbox-group :options="options" :value="['Pear']" @change="onChange" />
            </div>
            <div class="detail-block">
                <sl-checkbox-group :options="optionsWithDisabled" disabled :defaultValue="['Apple']" @change="onChange">
                    <span style="color: red" slot="label" slot-scope="{value}">{{value}}</span>
                </sl-checkbox-group>
            </div>
            <search-code :code="CodeGroup"></search-code>
        </div>
        <!--Checkbox组结束-->

        <!--多选框布局开始-->
        <div class="detail-box">
            <h2>多选框布局</h2>
            <p class="code-left-line">Demo</p>
            <sl-checkbox-group>
                <sl-row>
                    <sl-col :span="8"><sl-checkbox value="A">A</sl-checkbox></sl-col>
                    <sl-col :span="8"><sl-checkbox value="B">B</sl-checkbox></sl-col>
                    <sl-col :span="8"><sl-checkbox value="C">C</sl-checkbox></sl-col>
                    <sl-col :span="8"><sl-checkbox value="D">D</sl-checkbox></sl-col>
                    <sl-col :span="8"><sl-checkbox value="E">E</sl-checkbox></sl-col>
                </sl-row>
            </sl-checkbox-group>
            <search-code :code="CodeGrid"></search-code>
        </div>
        <!--多选框布局结束-->

        <!--按钮样式的复选框开始-->
        <div class="detail-box">
            <h2>Button类复选框</h2>
            <p class="code-left-line">Demo</p>
            <sl-checkbox displayButton>普通复选框</sl-checkbox>
            <sl-checkbox displayButton disabled>禁用复选框(未选中)</sl-checkbox>
            <sl-checkbox displayButton disabled defaultChecked>禁用复选框(选中)</sl-checkbox>
            <search-code :code="CodeButton"></search-code>
        </div>
        <!--按钮样式的复选框结束-->

        <!--按钮样式的复选框开始-->
        <div class="detail-box">
            <h2>Button类复选框全选</h2>
            <p class="code-left-line">Demo</p>
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
            <sl-checkbox-group :options="options1" v-model="checkedListBtn" @change="updateBtnSingleChecked" />
            <search-code :code="CodeButtonMultiple"></search-code>
        </div>
        <!--按钮样式的复选框结束-->

        <!--参数说明开始-->
        <div class="detail-box">
            <h2>API</h2>
            <p class="row-in-round">sl-checkbox</p>
            <table class="salus-table salus-table-striped salus-table-hover">
                <thead>
                <tr>
                    <th width="15%">参数</th>
                    <th width="35%">描述</th>
                    <th width="35%">类型</th>
                    <th width="15%">默认值</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>autoFocus</td>
                    <td>自动获取焦点</td>
                    <td>boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>checked</td>
                    <td>指定当前是否选中</td>
                    <td>boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>defaultChecked</td>
                    <td>初始是否选中</td>
                    <td>boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>disabled</td>
                    <td>设定失效状态</td>
                    <td>boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>displayButton</td>
                    <td>是否显示为按钮样式</td>
                    <td>boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>indeterminate</td>
                    <td>设置 indeterminate 状态，只负责样式控制</td>
                    <td>boolean</td>
                    <td>false</td>
                </tr>
                </tbody>
            </table>
            <p class="row-in-round">事件</p>
            <div class="detail-block">
                <table class="salus-table salus-table-hover salus-table-striped">
                    <thead>
                    <tr>
                        <th width="15%">事件名称</th>
                        <th width="70%">说明</th>
                        <th width="15%">回调参数</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>change</td>
                        <td>变化时回调函数</td>
                        <td>Function(checkedValue)</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <p class="row-in-round">sl-checkbox-group</p>
            <table class="salus-table salus-table-striped salus-table-hover">
                <thead>
                <tr>
                    <th width="15%">参数</th>
                    <th width="35%">描述</th>
                    <th width="35%">类型</th>
                    <th width="15%">默认值</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>defaultValue</td>
                    <td>默认选中的选项</td>
                    <td>string[]</td>
                    <td>[]</td>
                </tr>
                <tr>
                    <td>disabled</td>
                    <td>设定全部 checkbox disable 状态</td>
                    <td>boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>options</td>
                    <td>指定可选项，可以通过 slot="label" slot-scope="option" 定制label</td>
                    <td>string[] | Array<{ label: string value: string disabled?: boolean, onChange?: function }></td>
                    <td>[]</td>
                </tr>
                <tr>
                    <td>value</td>
                    <td>指定选中项</td>
                    <td>string[]</td>
                    <td>[]</td>
                </tr>
                </tbody>
            </table>
        </div>
        <!--参数说明结束-->
    </div>
</template>
<script>
    import {CodeBasic, CodeDisable, CodeMultiple, CodeGroup, CodeGrid, CodeButton, CodeButtonMultiple} from "./checkbox.code";

    const defaultCheckedList = ['Apple', 'Orange']
    const plainOptions = ['Apple', 'Pear', 'Orange']
    const options = [
        {label: 'Apple', value: 'Apple'},
        {label: 'Pear', value: 'Pear'},
        {label: 'Orange', value: 'Orange'},
    ]
    const options1 = [
        {label: 'Apple', value: 'Apple', displayButton: true},
        {label: 'Pear', value: 'Pear', displayButton: true},
        {label: 'Orange', value: 'Orange', displayButton: true},
    ]
    const optionsWithDisabled = [
        {value: 'Apple'},
        {label: 'Pear', value: 'Pear'},
        {label: 'Orange', value: 'Orange', disabled: false},
    ]
    export default {
        name: 'Checkbox',
        data() {
            return {
                trueVal: true,
                indeterminate: true,
                checkAll: false,
                checkedList: defaultCheckedList,
                checkedListBtn: defaultCheckedList,
                indeterminateBtn: true,
                checkAllBtn: false,
                plainOptions,
                options,
                options1,
                optionsWithDisabled,
                value: [],
                CodeBasic,
                CodeDisable,
                CodeMultiple,
                CodeGroup,
                CodeGrid,
                CodeButton,
                CodeButtonMultiple
            }
        },
        components: {
            SearchCode: () => import('../../common/searchCode/searchCode')
        },
        methods: {
            onChange(checkedValues) {
                console.log('checked = ', checkedValues)
                console.log('value = ', this.value)
            },
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
            },
            updateBtnSingleChecked (checkedListBtn) {
                this.indeterminateBtn = !!checkedListBtn.length && (checkedListBtn.length < options1.length)
                this.checkAllBtn = checkedListBtn.length === options1.length
            },
            onCheckAllBtnChange (e) {
                const checked = options1.map(item => item.value);
                Object.assign(this, {
                    checkedListBtn: e.target.checked ? checked : [],
                    indeterminateBtn: false,
                    checkAllBtn: e.target.checked,
                })
            }
        }
    }
</script>