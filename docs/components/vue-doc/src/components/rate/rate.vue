<template>
    <div class="page-box">
        <div class="detail-box">
            <h1>Rate 评分</h1>
            <p>评分组件。</p>
        </div>

        <!--基础样式-->
        <div class="detail-box">
            <h2>基础样式</h2>
            <p class="code-left-line">Demo</p>
            <sl-rate v-model='value'/>
            <search-code :code="CodeBasic"></search-code>
        </div>
        <!--基础样式结束-->

        <!--半星-->
        <div class="detail-box">
            <h2>半星</h2>
            <p class="code-left-line">Demo</p>
            <sl-rate :defaultValue="2.5" allowHalf />
            <search-code :code="CodeHalf"></search-code>
        </div>
        <!--半星结束-->

        <!--文案提示-->
        <div class="detail-box">
            <h2>文案提示</h2>
            <p class="code-left-line">Demo</p>
            <sl-rate v-model='value'/>
            <span>{{value}} stars</span>
            <search-code :code="CodeTextTip"></search-code>
        </div>
        <!--文案提示结束-->

        <!--只读-->
        <div class="detail-box">
            <h2>只读</h2>
            <p class="code-left-line">Demo</p>
            <sl-rate :defaultValue="2" disabled />
            <search-code :code="CodeDisabled"></search-code>
        </div>
        <!--只读结束-->

        <!--是否允许清除-->
        <div class="detail-box">
            <h2>是否允许清除</h2>
            <p class="code-left-line">Demo</p>
            <sl-rate :defaultValue="3" /> 允许清除（点击当前选中的位置后评分清空）
            <br />
            <sl-rate :allowClear="false" :defaultValue="3" /> 无法清除
            <search-code :code="CodeClear"></search-code>
        </div>
        <!--是否允许清除结束-->

        <!--自定义-->
        <div class="detail-box">
            <h2>自定义</h2>
            <p class="code-left-line">Demo</p>
            <sl-rate :defaultValue="2.5" character="A" allowHalf style="fontSize: 36px" />
            <br>
            <sl-rate :defaultValue="2.5" allowHalf >
                <i class="salus-icon-frequent-attack" slot="character" style="fontSize: 20px" />
            </sl-rate>
            <search-code :code="CodeCustom"></search-code>
        </div>
        <!--自定义结束-->


        <!--参数说明开始-->
        <div class="detail-box">
            <h2>API</h2>
            <p class="row-in-round">sl-rate</p>
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
                    <td>allowClear</td>
                    <td>是否允许再次点击后清除</td>
                    <td>boolean</td>
                    <td>true</td>
                </tr>
                <tr>
                    <td>allowHalf</td>
                    <td>是否允许半选</td>
                    <td>boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>autoFocus</td>
                    <td>自动获取焦点</td>
                    <td>boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>character</td>
                    <td>自定义字符</td>
                    <td>String or slot="character"</td>
                    <td><i class='salus-icon-star' /></td>
                </tr>
                <tr>
                    <td>count</td>
                    <td>star 总数</td>
                    <td>number</td>
                    <td>5</td>
                </tr>
                <tr>
                    <td>defaultValue</td>
                    <td>默认值</td>
                    <td>number</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>disabled</td>
                    <td>只读，无法进行交互</td>
                    <td>boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>value(v-model)</td>
                    <td>当前数，受控值</td>
                    <td>number</td>
                    <td>-</td>
                </tr>
                </tbody>
            </table>

            <p class="row-in-round">sl-rate 事件</p>
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
                    <td>blur</td>
                    <td>失去焦点时的回调</td>
                    <td>Function()</td>
                </tr>
                <tr>
                    <td>change</td>
                    <td>选择时的回调</td>
                    <td>Function(value: number)</td>
                </tr>
                <tr>
                    <td>focus</td>
                    <td>获取焦点时的回调</td>
                    <td>Function()</td>
                </tr>
                <tr>
                    <td>hoverChange</td>
                    <td>鼠标经过时数值变化的回调</td>
                    <td>Function(value: number)</td>
                </tr>
                <tr>
                    <td>keydown</td>
                    <td>按键回调</td>
                    <td>Function(event)</td>
                </tr>
                </tbody>
            </table>
            <p class="row-in-round">sl-rate 方法</p>
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
    import { CodeBasic, CodeHalf, CodeTextTip, CodeDisabled, CodeClear, CodeCustom } from "./rate.code";

    export default {
        data() {
            return {
                CodeBasic,
                CodeHalf,
                CodeTextTip,
                CodeDisabled,
                CodeClear,
                CodeCustom,
                value: 2,
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