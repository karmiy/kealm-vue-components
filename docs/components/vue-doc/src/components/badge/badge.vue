<template>
    <div class="page-box">
        <div class="detail-box">
            <h1>Badge 徽标数</h1>
            <p>图标右上角的圆形徽标数字。</p>
        </div>

        <!--基础徽标数-->
        <div class="detail-box">
            <h2>基础徽标数</h2>
            <p class="code-left-line">Demo</p>
            <sl-badge count="5">
                <a href="javascript;" class="head-example"></a>
            </sl-badge>
            <search-code :code="CodeBasic"></search-code>
        </div>
        <!--基础徽标数结束-->

        <!--单独使用-->
        <div class="detail-box">
            <h2>单独使用</h2>
            <p class="code-left-line">Demo</p>
            <sl-badge count="25" />
            <sl-badge count="4" :numberStyle="{backgroundColor: '#fff', color: '#999', boxShadow: '0 0 0 1px #d9d9d9 inset'}" />
            <sl-badge count="109" :numberStyle= "{backgroundColor: '#52c41a'}" />
            <search-code :code="CodeNoWrapper"></search-code>
        </div>
        <!--单独使用结束-->

        <!--封顶数字-->
        <div class="detail-box">
            <h2>封顶数字</h2>
            <p class="code-left-line">Demo</p>
            <sl-badge :count="99">
                <a href="#" class="head-example"></a>
            </sl-badge>
            <sl-badge :count="100">
                <a href="#" class="head-example"></a>
            </sl-badge>
            <sl-badge :count="99" :overflowCount="10">
                <a href="#" class="head-example"></a>
            </sl-badge>
            <sl-badge :count="1000" :overflowCount="999">
                <a href="#" class="head-example"></a>
            </sl-badge>
            <search-code :code="CodeOverflow"></search-code>
        </div>
        <!--封顶数字结束-->

        <!--动态改变-->
        <div class="detail-box">
            <h2>动态改变</h2>
            <p class="code-left-line">Demo</p>
            <sl-badge :count="count">
                <a href="#" class="head-example" />
            </sl-badge>
            <sl-button-group>
                <sl-button @click="decline" icon>
                    <i class="salus-icon-minus-o"></i>
                </sl-button>
                <sl-button @click="increase" icon>
                    <i class="salus-icon-plus-o"></i>
                </sl-button>
            </sl-button-group>
            <search-code :code="CodeChange"></search-code>
        </div>
        <!--动态改变结束-->

        <!--是否显示零-->
        <div class="detail-box">
            <h2>是否显示零</h2>
            <p class="code-left-line">Demo</p>
            <sl-badge :count="0" :showZero="showZero">
                <a href="#" class="head-example" />
            </sl-badge>
            <sl-switch defaultChecked @change='showZero = $event'/>
            <search-code :code="CodeShowZero"></search-code>
        </div>
        <!--是否显示零结束-->

        <!--圆点提示-->
        <div class="detail-box">
            <h2>圆点提示</h2>
            <p class="code-left-line">Demo</p>
            <sl-badge :dot="true">
                <a href="#" class="head-example" />
            </sl-badge>
            <search-code :code="CodeDot"></search-code>
        </div>
        <!--圆点提示结束-->

        <!--状态点-->
        <div class="detail-box">
            <h2>状态点</h2>
            <p class="code-left-line">Demo</p>
            <sl-badge status="success" />
            <sl-badge status="error" />
            <sl-badge status="default" />
            <sl-badge status="processing" />
            <sl-badge status="warning" />
            <br />
            <sl-badge status="success" text="成功" />
            <br />
            <sl-badge status="error" text="失败" />
            <br />
            <sl-badge status="default" text="默认" />
            <br />
            <sl-badge status="processing" text="进行中" />
            <br />
            <sl-badge status="warning" text="警告" />
            <br />
            <sl-badge status="default" text="自定义颜色" :numberStyle="{backgroundColor: '#2f54eb'}" />
            <search-code :code="CodeStatus"></search-code>
        </div>
        <!--状态点结束-->


        <!--参数说明开始-->
        <div class="detail-box">
            <h2>API</h2>
            <p class="row-in-round">sl-badge</p>
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
                    <td>count</td>
                    <td>展示的数字，大于 overflowCount 时显示为 ${overflowCount}+，为 0 时隐藏</td>
                    <td>number | string | slot</td>
                    <td></td>
                </tr>
                <tr>
                    <td>dot</td>
                    <td>不展示数字，只有一个小红点</td>
                    <td>boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>offset</td>
                    <td>设置状态点的位置偏移，格式为 [x, y]</td>
                    <td>[number|string, number|string]</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>overflowCount</td>
                    <td>展示封顶的数字值</td>
                    <td>number</td>
                    <td>99</td>
                </tr>
                <tr>
                    <td>showZero</td>
                    <td>当数值为 0 时，是否展示 Badge</td>
                    <td>boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>status</td>
                    <td>设置 Badge 为状态点</td>
                    <td>Enum{ 'success', 'processing, 'default', 'error', 'warning' }</td>
                    <td>''</td>
                </tr>
                <tr>
                    <td>text</td>
                    <td>在设置了 status 的前提下有效，设置状态点的文本</td>
                    <td>string</td>
                    <td>''</td>
                </tr>
                <tr>
                    <td>numberStyle</td>
                    <td>设置状态点的样式，要设置整个容器样式可直接用style</td>
                    <td>object</td>
                    <td>''</td>
                </tr>
                <tr>
                    <td>title</td>
                    <td>设置鼠标放在状态点上时显示的文字</td>
                    <td>string</td>
                    <td>count</td>
                </tr>
                </tbody>
            </table>
        </div>
        <!--参数说明结束-->
    </div>
</template>
<script>
    import { CodeBasic, CodeNoWrapper, CodeOverflow, CodeDot, CodeStatus, CodeShowZero, CodeChange } from "./badge.code";

    export default {
        data() {
            return {
                CodeBasic,
                CodeNoWrapper,
                CodeOverflow,
                CodeDot,
                CodeStatus,
                CodeShowZero,
                CodeChange,
                count: 5,
                showZero: true,
            }
        },
        components: {
            SearchCode: () => import('../../common/searchCode/searchCode')
        },
        methods: {
            decline () {
                let count = this.count - 1
                if (count < 0) {
                    count = 0
                }
                this.count = count
            },
            increase () {
                this.count++
            },
        }
    }
</script>
<style scoped>
</style>