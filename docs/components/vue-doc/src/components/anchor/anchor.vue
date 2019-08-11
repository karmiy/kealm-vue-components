<template>
    <div class="page-box salus-scrollbar layout" ref="page">
        <div class="detail-box">
            <h1>Anchor 锚点</h1>
            <p>用于跳转到页面指定位置。</p>
        </div>
        <div class="detail-box">
            <h2>何时使用</h2>
            <p style="line-height: 28px;">需要展现当前页面上可供跳转的锚点链接，以及快速在锚点之间跳转。</p>
        </div>

        <!--基础用法-->
        <div class="detail-box" id="components-anchor-demo-basic">
            <h2>基础用法</h2>
            <p>最简单的用法</p>
            <p class="code-left-line">Demo</p>
            <sl-anchor style="width: 260px" :getContainer="() => this.$refs.page">
                <sl-anchor-link href="#components-anchor-demo-basic" title="Basic demo" />
                <sl-anchor-link href="#components-anchor-demo-static-anchor" title="Static demo" />
                <sl-anchor-link href="#components-anchor-demo-horizontal" title="Horizontal demo" />
                <sl-anchor-link href="#API" title="API">
                    <sl-anchor-link href="#Anchor-Props" title="Anchor Props" />
                    <sl-anchor-link href="#Link-Props" title="Link Props" />
                </sl-anchor-link>
            </sl-anchor>
            <search-code :code="CodeBasic"></search-code>
        </div>
        <!--基础用法结束-->

        <!--静态位置-->
        <div class="detail-box" id="components-anchor-demo-static-anchor">
            <h2>静态位置</h2>
            <p>不浮动，状态不随页面滚动变化。</p>
            <p class="code-left-line">Demo</p>
            <sl-anchor style="width: 260px; margin-left: 300px" :getContainer="() => this.$refs.page" :affix="false">
                <sl-anchor-link href="#components-anchor-demo-basic" title="Basic demo" />
                <sl-anchor-link href="#components-anchor-demo-static-anchor" title="Static demo" />
                <sl-anchor-link href="#components-anchor-demo-horizontal" title="Horizontal demo" />
                <sl-anchor-link href="#API" title="API">
                    <sl-anchor-link href="#Anchor-Props" title="Anchor Props" />
                    <sl-anchor-link href="#Link-Props" title="Link Props" />
                </sl-anchor-link>
            </sl-anchor>
            <search-code :code="CodeBasic"></search-code>
        </div>
        <!--静态位置结束-->

        <!--横向位置-->
        <div class="detail-box" id="components-anchor-demo-horizontal">
            <h2>横向位置</h2>
            <p>横向排列。</p>
            <p class="code-left-line">Demo</p>
            <sl-anchor :getContainer="() => this.$refs.page" :affix="false" horizontal>
                <sl-anchor-link href="#components-anchor-demo-basic" title="Basic demo" />
                <sl-anchor-link href="#components-anchor-demo-static-anchor" title="Static demo" />
                <sl-anchor-link href="#components-anchor-demo-horizontal" title="Horizontal demo" />
                <sl-anchor-link href="#API" title="API"/>
            </sl-anchor>
            <search-code :code="CodeBasic"></search-code>
        </div>
        <!--横向位置结束-->


        <!--参数说明开始-->
        <div class="detail-box" id="API">
            <h2>API</h2>
            <p class="row-in-round" id="Anchor-Props">sl-anchor</p>
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
                    <td>affix</td>
                    <td>固定模式</td>
                    <td>boolean</td>
                    <td>true</td>
                </tr>
                <tr>
                    <td>horizontal</td>
                    <td>水平排列</td>
                    <td>boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>bounds</td>
                    <td>锚点区域边界</td>
                    <td>number</td>
                    <td>5(px)</td>
                </tr>
                <tr>
                    <td>getContainer</td>
                    <td>指定滚动的容器</td>
                    <td>() => HTMLElement</td>
                    <td>() => window</td>
                </tr>
                <tr>
                    <td>offsetBottom</td>
                    <td>距离窗口底部达到指定偏移量后触发</td>
                    <td>number</td>
                    <td></td>
                </tr>
                <tr>
                    <td>offsetTop</td>
                    <td>距离窗口顶部达到指定偏移量后触发</td>
                    <td>number</td>
                    <td></td>
                </tr>
                <tr>
                    <td>showInkInFixed</td>
                    <td>固定模式是否显示小圆点</td>
                    <td>boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>wrapperClass</td>
                    <td>容器的类名</td>
                    <td>string</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>wrapperStyle</td>
                    <td>容器样式</td>
                    <td>object</td>
                    <td>-</td>
                </tr>
                </tbody>
            </table>

            <p class="row-in-round">sl-anchor 事件</p>
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
                    <td>click</td>
                    <td>click 事件的 handler</td>
                    <td>Function(e: Event, link: Object)</td>
                </tr>
                </tbody>
            </table>

            <p class="row-in-round" id="Link-Props">sl-anchor-link</p>
            <table class="salus-table salus-table-striped salus-table-hover" style="margin-bottom: 400px">
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
                    <td>href</td>
                    <td>锚点链接</td>
                    <td>string</td>
                    <td></td>
                </tr>
                <tr>
                    <td>title</td>
                    <td>文字内容</td>
                    <td>string|slot</td>
                    <td></td>
                </tr>
                </tbody>
            </table>
        </div>
        <!--参数说明结束-->
    </div>
</template>
<script>
    import { CodeBasic, CodeStatic, CodeHorizontal } from "./anchor.code";

    export default {
        data() {
            return {
              CodeBasic,
              CodeStatic,
              CodeHorizontal,
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