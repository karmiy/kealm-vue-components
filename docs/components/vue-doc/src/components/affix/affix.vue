<template>
    <div class="page-box salus-scrollbar layout" ref="page">
        <div class="detail-box">
            <h1>Affix&nbsp;固钉</h1>
            <p>将页面元素钉在可视范围。</p>
        </div>

        <div class="detail-box">
            <h2>何时使用</h2>
            <p style="line-height: 28px;">
                当内容区域比较长，需要滚动页面时，这部分内容对应的操作或者导航需要在滚动范围内始终展现。常用于侧边菜单和按钮组合。页面可视范围过小时，慎用此功能以免遮挡页面内容。</p>
        </div>

        <!-- 基础用法 -->
        <div class="detail-box">
            <h2>基础用法</h2>
            <p>最简单的用法</p>
            <p class="code-left-line">Demo</p>
            <div class="detail-block">
                <sl-affix :target="() => {return this.$refs.page}">
                    <sl-button type="primary"><span>Affix top</span></sl-button>
                </sl-affix>
            </div>
            <sl-affix :offset-bottom="0" :target="() => {return this.$refs.page}">
                <sl-button type="primary"><span>Affix bottom</span></sl-button>
            </sl-affix>

            <search-code :code="CodeBasic"></search-code>
        </div>

        <!-- 固定状态改变的回调 -->
        <div class="detail-box">
            <h2>固定状态改变的回调</h2>
            <p>可以获得是否固定的状态</p>
            <p class="code-left-line">Demo</p>
            <sl-affix :target="() => {return this.$refs.page}" :offset-top="120" @change="onAffixStatusChange">
                <sl-button><span>120px to affix top</span></sl-button>
            </sl-affix>

            <search-code :code="CodeChange"></search-code>
        </div>

        <!-- 滚动容器 -->
        <div class="detail-box">
            <h2>滚动容器</h2>
            <p>用 target 设置 sl-affix 需要监听其滚动事件的元素，默认为 window。</p>
            <p class="code-left-line">Demo</p>
            <div class="scrollable-container" ref="container">
                <div class="background">
                    <sl-affix :target="() => {return this.$refs.container}">
                        <sl-button type="primary">
                            <span>Fixed at the top of container</span>
                        </sl-button>
                    </sl-affix>
                </div>
            </div>
            <search-code :code="CodeTarget"></search-code>
        </div>

        <!-- API -->
        <div class="detail-box">
            <h2>API</h2>
            <p class="row-in-round">sl-affix</p>
            <div class="detail-block">
                <table class="salus-table salus-table-hover salus-table-striped">
                    <thead>
                    <tr>
                        <th width="15%">参数</th>
                        <th width="35%">说明</th>
                        <th width="35%">类型</th>
                        <th width="15%">默认值</th>
                    </tr>
                    </thead>
                    <tbody>
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
                        <td>target</td>
                        <td>设置 sl-affix 需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数</td>
                        <td>() => HTMLElement</td>
                        <td>() => window</td>
                    </tr>
                    </tbody>
                </table>
            </div>
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
                        <td>固定状态改变时触发的回调函数</td>
                        <td>Function(affixed)</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <p style="margin-bottom: 12px;">注意：sl-affix 内的元素不要使用绝对定位，如需要绝对定位的效果，可以直接设置 sl-affix 为绝对定位：</p>
        <search-code :code="CodeNote" :expand="true" :visibleTitle="false"></search-code>
        <div style="height: 800px;"></div>
    </div>
</template>
<script>
    import {CodeBasic, CodeChange, CodeTarget, CodeNote} from "./affix.code";

    export default {
        data() {
            return {
                CodeBasic,
                CodeChange,
                CodeTarget,
                CodeNote
            }
        },
        methods: {
            onAffixStatusChange(status) {
                console.log(status);
            }
        },
        components: {
            SearchCode: () => import('../../common/searchCode/searchCode')
        }
    }
</script>
<style>
    .scrollable-container {
        height: 100px;
        width: 300px;
        overflow-y: scroll;
    }

    .background {
        padding-top: 60px;
        height: 300px;
        background-image: url(https://zos.alipayobjects.com/rmsportal/RmjwQiJorKyobvI.jpg);
    }
</style>