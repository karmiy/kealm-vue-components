<template>
    <div class="page-box">
        <div class="detail-box">
            <h1>Slider 滑动输入条</h1>
            <p>滑动型输入器，展示当前值和可选范围。</p>
        </div>

        <!--基础滑动输入条-->
        <div class="detail-box">
            <h2>基础滑动输入条</h2>
            <p class="code-left-line">Demo</p>
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
            <search-code :code="CodeBasic"></search-code>
        </div>
        <!--基础滑动输入条结束-->

        <!--步长-->
        <div class="detail-box">
            <h2>步长</h2>
            <p class="code-left-line">Demo</p>
            <sl-row>
                <sl-col :span="12">
                    <sl-slider :step="10" />
                </sl-col>
            </sl-row>
            <search-code :code="CodeStep"></search-code>
        </div>
        <!--步长结束-->

        <!--禁用滑动输入条-->
        <div class="detail-box">
            <h2>禁用滑动输入条</h2>
            <p class="code-left-line">Demo</p>
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
            <search-code :code="CodeDisable"></search-code>
        </div>
        <!--禁用滑动输入条结束-->

        <!--滑动输入条提示自定义-->
        <div class="detail-box">
            <h2>滑动输入条提示自定义</h2>
            <p class="code-left-line">Demo</p>
            <sl-row>
                <sl-col :span="12">
                    <sl-slider :max="20" :defaultValue="5" :tipFormatter="null" />
                </sl-col>
            </sl-row>
            <sl-row>
                <sl-col :span="12">
                    <sl-slider :max="20" :defaultValue="10" :tipFormatter="value => `${value}M`" />
                </sl-col>
            </sl-row>
            <search-code :code="CodeCustomize"></search-code>
        </div>
        <!--滑动输入条提示自定义结束-->

        <!--双滑块滑动输入条-->
        <div class="detail-box">
            <h2>双滑块滑动输入条</h2>
            <p class="code-left-line">Demo</p>
            <sl-row>
                <sl-col :span="12">
                    <sl-slider range :defaultValue="[20, 50]" />
                </sl-col>
            </sl-row>
            <search-code :code="CodeDouble"></search-code>
        </div>
        <!--双滑块滑动输入条结束-->

        <!--竖直方向滑动输入条-->
        <div class="detail-box">
            <h2>竖直方向滑动输入条</h2>
            <p class="code-left-line">Demo</p>
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
                        <div style="float:left;height: 300px;marginLeft: 70px">
                            <sl-slider vertical range :marks="marks" :defaultValue="[15, 65]" :included="false" />
                        </div>
                    </div>
                </sl-col>
            </sl-row>
            <search-code :code="CodeVertical"></search-code>
        </div>
        <!--竖直方向滑动输入条结束-->


        <!--参数说明开始-->
        <div class="detail-box">
            <h2>API</h2>
            <p class="row-in-round">sl-slider</p>
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
                    <td>defaultValue</td>
                    <td>设置初始取值。当 range 为 false 时，使用 number，否则用 [number, number]</td>
                    <td>number|number[]</td>
                    <td>0 or [0, 0]</td>
                </tr>
                <tr>
                    <td>disabled</td>
                    <td>值为 true 时，滑块为禁用状态</td>
                    <td>boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>included</td>
                    <td>marks 不为空对象时有效，值为 true 时表示值为包含关系，false 表示并列</td>
                    <td>boolean</td>
                    <td>true</td>
                </tr>
                <tr>
                    <td>marks</td>
                    <td>刻度标记，key 的类型必须为 number 且取值在闭区间 [min, max] 内，每个标签可以单独设置样式</td>
                    <td>object</td>
                    <td>{ number: string|VNode } or { number: { style: object, label: string|VNode } } or { number: () => VNode }</td>
                </tr>
                <tr>
                    <td>max</td>
                    <td>最大值</td>
                    <td>number</td>
                    <td>100</td>
                </tr>
                <tr>
                    <td>min</td>
                    <td>最小值</td>
                    <td>number</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>range</td>
                    <td>双滑块模式</td>
                    <td>boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>step</td>
                    <td>步长，取值必须大于 0，并且可被 (max - min) 整除。当 marks 不为空对象时，可以设置 step 为 null，此时 Slider 的可选值仅有 marks 标出来的部分。</td>
                    <td>number|null</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>tipFormatter</td>
                    <td>Slider 会把当前值传给 tipFormatter，并在 Tooltip 中显示 tipFormatter 的返回值，若为 null，则隐藏 Tooltip。</td>
                    <td>Function|null</td>
                    <td>IDENTITY</td>
                </tr>
                <tr>
                    <td>value(v-model)</td>
                    <td>设置当前取值。当 range 为 false 时，使用 number，否则用 [number, number]</td>
                    <td>number|number[]</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>vertical</td>
                    <td>值为 true 时，Slider 为垂直方向</td>
                    <td>boolean</td>
                    <td>false</td>
                </tr>
                </tbody>
            </table>

            <p class="row-in-round">sl-slider 事件</p>
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
                    <td>afterChange</td>
                    <td>与 mouseup 触发时机一致，把当前值作为参数传入。</td>
                    <td>Function(value)</td>
                </tr>
                <tr>
                    <td>change</td>
                    <td>当 Slider 的值发生改变时，会触发 change 事件，并把改变后的值作为参数传入。</td>
                    <td>Function(value)</td>
                </tr>
                </tbody>
            </table>
            <p class="row-in-round">sl-slider 方法</p>
            <table class="salus-table salus-table-striped salus-table-hover">
                <thead>
                <tr>
                    <th width="50%">名称</th>
                    <th width="50%">描述</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>blur()</td>
                    <td>移除焦点</td>
                </tr>
                <tr>
                    <td>focus()</td>
                    <td>获取焦点</td>
                </tr>
                </tbody>
            </table>
        </div>
        <!--参数说明结束-->
    </div>
</template>
<script>
    import { CodeBasic, CodeStep, CodeDisable, CodeCustomize, CodeDouble, CodeVertical } from "./slider.code";

    export default {
        data() {
            return {
                CodeBasic,
                CodeStep,
                CodeDisable,
                CodeCustomize,
                CodeDouble,
                CodeVertical,
                inputValue: 1,
                disabled: false,
                marks: {
                    0: '0°C',
                    25: '25°C',
                    73: '73°C',
                    100: {
                        style: {
                            color: '#f50',
                        },
                        label: `100°C`,
                    },
                },
            }
        },
        components: {
            SearchCode: () => import('../../common/searchCode/searchCode')
        },
        methods: {
        }
    }
</script>
<style scoped>
</style>