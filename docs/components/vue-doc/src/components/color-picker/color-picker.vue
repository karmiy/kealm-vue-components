<template>
    <div class="page-box">
        <div class="detail-box">
            <h1>ColorPicker 颜色选择器</h1>
            <p>用于颜色选择，支持多种格式。</p>
        </div>

        <!--基础用法-->
        <div class="detail-box">
            <h2>基础用法</h2>
            <p class="code-left-line">Demo</p>
            <sl-color-picker v-model="color" />
            <search-code :code="CodeBasic"></search-code>
        </div>
        <!--基础用法结束-->

        <!--初始化默认值-->
        <div class="detail-box">
            <h2>初始化默认值</h2>
            <p class="code-left-line">Demo</p>
            <sl-color-picker defaultColor="#0FB1F7" />
            <search-code :code="CodeDefault"></search-code>
        </div>
        <!--初始化默认值结束-->

        <!--自定义按钮样式-->
        <div class="detail-box">
            <h2>自定义按钮样式</h2>
            <p class="code-left-line">Demo</p>
            <sl-color-picker :buttonStyle="{width: '30px', height: '30px'}" />
            <search-code :code="CodeButtonStyle"></search-code>
        </div>
        <!--自定义按钮样式结束-->


        <!--参数说明开始-->
        <div class="detail-box">
            <h2>API</h2>
            <p class="row-in-round">sl-color-picker</p>
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
                    <td>color(v-model)</td>
                    <td>颜色值</td>
                    <td>string</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>defaultColor</td>
                    <td>默认颜色值</td>
                    <td>string</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>buttonStyle</td>
                    <td>按钮样式</td>
                    <td>object</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>zIndex</td>
                    <td>弹出层z-index</td>
                    <td>number</td>
                    <td>100</td>
                </tr>
                </tbody>
            </table>

            <p class="row-in-round">sl-color-picker 事件</p>
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
                    <td>颜色值发生改变时触发change事件</td>
                    <td>Function(value)</td>
                </tr>
                </tbody>
            </table>
        </div>
        <!--参数说明结束-->
    </div>
</template>
<script>
    import { CodeBasic, CodeDefault, CodeButtonStyle } from "./color-picker.code";

    export default {
        data() {
            return {
                CodeBasic,
                CodeDefault,
                CodeButtonStyle,
                color: '',
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