<template>
    <div class="page-box page-select ng-scope">
        <div class="detail-box">
            <h1>Radio 单选框</h1>
            <p>用于在多个备选项中选中单个状态。</p>
            <p>和 Select 的区别是，Radio 所有选项默认可见，方便用户在比较中选择，因此选项不宜过多。</p>
        </div>

        <!--基础单选框-->
        <div class="detail-box">
            <h2>基础单选框</h2>
            <p class="code-left-line">Demo</p>
            <sl-radio>普通单选框</sl-radio>
            <search-code :code="CodeBasic"></search-code>
        </div>
        <!--基础单选框结束-->

        <!--禁用单选框-->
        <div class="detail-box">
            <h2>禁用</h2>
            <p class="code-left-line">Demo</p>
            <sl-radio disabled>禁用单选框-未选中</sl-radio>
            <sl-radio disabled v-model="trueVal">禁用单选框-选中</sl-radio>
            <search-code :code="CodeDisable"></search-code>
        </div>
        <!--禁用单选框结束-->

        <!--单选组合-水平-->
        <div class="detail-box">
            <h2>单选组合-水平</h2>
            <p>一组互斥的 sl-radio 配合使用。</p>
            <p class="code-left-line">Demo</p>
            <sl-radio-group v-model="radioValue">
                <sl-radio value="A">A</sl-radio>
                <sl-radio value="B">B</sl-radio>
                <sl-radio value="C">C</sl-radio>
                <sl-radio value="D">D</sl-radio>
            </sl-radio-group>
            <search-code :code="CodeGroup"></search-code>
        </div>
        <!--单选组合-水平结束-->

        <!--单选组合-垂直-->
        <div class="detail-box">
            <h2>单选组合-垂直</h2>
            <p>垂直的 sl-radio-group，配合更多输入框选项。</p>
            <p class="code-left-line">Demo</p>
            <sl-radio-group v-model="radioValue" vertical>
                <sl-radio value="A">A</sl-radio>
                <sl-radio value="B">B</sl-radio>
                <sl-radio value="C">C</sl-radio>
                <sl-radio value="M">More...
                    <sl-input type="text" v-if="radioValue === 'M'" style="width: 100px; margin-left: 10px;"/>
                </sl-radio>
            </sl-radio-group>
            <search-code :code="CodeGroupVertical"></search-code>
        </div>
        <!--单选组合-垂直结束-->

        <!--单选组合带name-->
        <div class="detail-box">
            <h2>单选组合-配合name使用</h2>
            <p>可以为 sl-radio-group 配置 name 参数，为组合内的 input 元素赋予相同的 name 属性，使浏览器把 sl-radio-group 下的 sl-radio
                真正看作是一组（例如可以通过方向键始终在同一组内更改选项）。</p>
            <p class="code-left-line">Demo</p>
            <sl-radio-group v-model="radioValue" name="radiogroup">
                <sl-radio value="A">A</sl-radio>
                <sl-radio value="B">B</sl-radio>
                <sl-radio value="C">C</sl-radio>
                <sl-radio value="D">D</sl-radio>
            </sl-radio-group>
            <search-code :code="CodeGroupName"></search-code>
        </div>
        <!--单选组合带name结束-->

        <!--按钮样式的单选组合-->
        <div class="detail-box">
            <h2>按钮样式的单选组合</h2>
            <p class="code-left-line">Demo</p>
            <p class="row-in-round">水平排列</p>
            <sl-radio-group v-model="radioValue">
                <sl-radio-button value="A">单选按钮</sl-radio-button>
                <sl-radio-button value="B">单选按钮</sl-radio-button>
                <sl-radio-button value="C">单选按钮</sl-radio-button>
                <sl-radio-button value="D">单选按钮</sl-radio-button>
                <sl-radio-button value="E" disabled>单选按钮-禁用</sl-radio-button>
            </sl-radio-group>
            <div class="detail-block">
                <sl-radio-group v-model="radioValue" size="large">
                    <sl-radio-button value="A">单选按钮</sl-radio-button>
                    <sl-radio-button value="B">单选按钮</sl-radio-button>
                    <sl-radio-button value="C">单选按钮</sl-radio-button>
                    <sl-radio-button value="D">单选按钮</sl-radio-button>
                    <sl-radio-button value="E" disabled>单选按钮-禁用</sl-radio-button>
                </sl-radio-group>
            </div>
            <div class="detail-block">
                <sl-radio-group v-model="radioValue" size="small">
                    <sl-radio-button value="A">单选按钮</sl-radio-button>
                    <sl-radio-button value="B">单选按钮</sl-radio-button>
                    <sl-radio-button value="C">单选按钮</sl-radio-button>
                    <sl-radio-button value="D">单选按钮</sl-radio-button>
                    <sl-radio-button value="E" disabled>单选按钮-禁用</sl-radio-button>
                </sl-radio-group>
            </div>
            <p class="row-in-round">竖直排列</p>
            <sl-radio-group v-model="radioValue" vertical>
                <sl-radio-button value="A">单选按钮</sl-radio-button>
                <sl-radio-button value="B">单选按钮</sl-radio-button>
                <sl-radio-button value="C">单选按钮</sl-radio-button>
                <sl-radio-button value="D">单选按钮</sl-radio-button>
                <sl-radio-button value="E" disabled>单选按钮-禁用</sl-radio-button>
            </sl-radio-group>
            <search-code :code="CodeButton"></search-code>
        </div>
        <!--按钮样式的单选组合结束-->

        <!--API-->
        <div class="detail-box">
            <h2>API</h2>
            <p class="row-in-round">sl-radio</p>
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
                    <td>value</td>
                    <td>根据 value 进行比较，判断是否选中，与 sl-radio-group 配合使用</td>
                    <td>any</td>
                    <td>-</td>
                </tr>
                </tbody>
            </table>
            <p class="row-in-round">sl-radio-group</p>
            <p>单选框组合，用于包裹一组 sl-radio。</p>
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
                    <td>默认选中的值</td>
                    <td>any</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>name</td>
                    <td>sl-radio-group 下所有 input[type="radio"] 的 name 属性</td>
                    <td>string</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>disabled</td>
                    <td>禁选所有子单选器</td>
                    <td>boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>options</td>
                    <td>以配置形式设置子元素</td>
                    <td>string[] | Array<{ label: string value: string disabled?: boolean }></td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>vertical</td>
                    <td>Radio的是否垂直排列</td>
                    <td>boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>buttonStyle</td>
                    <td>RadioButton 的风格样式，目前有描边和填色两种风格</td>
                    <td>outline 丨 solid</td>
                    <td>outline</td>
                </tr>
                <tr>
                    <td>value(v-model)</td>
                    <td>用于设置当前选中的值</td>
                    <td>any</td>
                    <td>-</td>
                </tr>
                </tbody>
            </table>
            <p class="row-in-round">sl-radio-group 事件</p>
            <table class="salus-table salus-table-striped salus-table-hover">
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
                    <td>选项变化时的回调函数</td>
                    <td>Function(e:Event)</td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
    import {CodeBasic, CodeDisable, CodeGroup, CodeGroupVertical, CodeGroupName, CodeButton} from "./radio.code";

    export default {
        name: 'Radio',
        data() {
            return {
                radioValue: 'A',
                trueVal: true,
                CodeBasic,
                CodeDisable,
                CodeGroup,
                CodeGroupVertical,
                CodeGroupName,
                CodeButton
            }
        },
        components: {
            SearchCode: () => import('../../common/searchCode/searchCode')
        },
    }
</script>