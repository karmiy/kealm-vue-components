<template>
    <div class="page-box">
        <div class="detail-box">
            <h1>Alert&nbsp;信息提示</h1>
            <p>页面内容的提示，包含功能描述、功能警示信息描述</p>
        </div>

        <!-- 基础提示开始 -->
        <div class="detail-box">
            <h2>基础提示</h2>
            <p class="code-left-line">Demo</p>
            <div style="width: 30%;">
                <sl-alert message="普通提示-默认"></sl-alert>
            </div>
            <div style="width: 30%;">
                <sl-alert type="info" message="普通提示-info"></sl-alert>
            </div>
            <div style="width: 30%;">
                <sl-alert type="success" message="成功提示-Success"></sl-alert>
            </div>
            <div style="width: 30%;">
                <sl-alert type="warning" message="警示提示-warning"></sl-alert>
            </div>
            <div style="width: 30%;">
                <sl-alert type="error" message="警告提示-error"></sl-alert>
            </div>
            <search-code :code="CodeBasic"></search-code>
        </div>
        <!--基础提示结束-->

        <!--可关闭的信息提示开始-->
        <div class="detail-box">
            <h2>可关闭的信息提示</h2>
            <p class="code-left-line">Demo</p>
            <div style="width: 30%;">
                <sl-alert type="error" closable message="Error Text" @close="onClose"></sl-alert>

                <sl-alert type="error" closable
                        message="Error Text"
                        description="Error Description Error Description Error Description Error Description Error Description Error Description"
                        @close="onClose">
                </sl-alert>
            </div>
            <search-code :code="CodeClosable"></search-code>
        </div>
        <!--可关闭的信息提示结束-->

        <!--含有辅助性文字介绍开始-->
        <div class="detail-box">
            <h2>含有辅助性文字介绍</h2>
            <p class="code-left-line">Demo</p>
            <div style="width: 30%;">
                <sl-alert message="Normal-default Text"
                        description="Error Description Error Description Error Description Error Description Error Description Error Description">
                </sl-alert>

                <sl-alert type="info"
                        message="Normal-info Text"
                        description="Error Description Error Description Error Description Error Description Error Description Error Description">
                </sl-alert>

                <sl-alert type="success"
                        message="Normal-info Text"
                        description="Error Description Error Description Error Description Error Description Error Description Error Description">
                </sl-alert>

                <sl-alert type="warning"
                        message="Normal-warning Text"
                        description="Error Description Error Description Error Description Error Description Error Description Error Description">
                </sl-alert>

                <sl-alert type="error"
                        message="Error Text"
                        description="Error Description Error Description Error Description Error Description Error Description Error Description">
                </sl-alert>
            </div>
            <search-code :code="CodeDescription"></search-code>
        </div>
        <!--含有辅助性文字介绍结束-->

        <!--带有图标开始-->
        <div class="detail-box">
            <h2>带有图标</h2>
            <p class="code-left-line">Demo</p>
            <div style="width: 30%;">
                <sl-alert type="info" showIcon message="Info Text">
                </sl-alert>

                <sl-alert type="success" showIcon message="Success Text">
                </sl-alert>

                <sl-alert type="warning" showIcon message="Warning Text">
                </sl-alert>

                <sl-alert type="error" showIcon message="Error Text">
                </sl-alert>

                <sl-alert type="info" showIcon message="Normal-info Text"
                        description="Error Description Error Description Error Description Error Description Error Description Error Description">
                </sl-alert>

                <sl-alert type="success" showIcon message="Normal-info Text"
                        description="Error Description Error Description Error Description Error Description Error Description Error Description">
                </sl-alert>

                <sl-alert type="warning" showIcon message="Warning Text"
                        description="Error Description Error Description Error Description Error Description Error Description Error Description">
                </sl-alert>

                <sl-alert type="error" showIcon message="Error Text"
                        description="Error Description Error Description Error Description Error Description Error Description Error Description">
                </sl-alert>
            </div>
            <search-code :code="CodeIcon"></search-code>
        </div>
        <!--带有图标结束-->

        <!--可自定义关闭的信息提示开始-->
        <div class="detail-box">
            <h2>可自定义关闭的信息提示</h2>
            <p class="code-left-line">Demo</p>
            <div style="width: 30%;">
                <sl-alert type="error" message="Error Text" closeText="Close Now">
                </sl-alert>
            </div>
            <search-code :code="CodeCloseText"></search-code>
        </div>
        <!--可自定义关闭的信息结束-->

        <!--顶部公告开始-->
        <div class="detail-box">
            <h2>顶部公告</h2>
            <p>页面顶部通告形式,type 为 'warning'。</p>
            <p class="code-left-line">Demo</p>
            <div style="width: 30%;">
                <sl-alert message="Warning Text" banner></sl-alert>
            </div>
            <search-code :code="CodeBanner"></search-code>
        </div>
        <!--顶部公告结束-->

        <!--参数说明开始-->
        <div class="detail-box">
            <h2>API</h2>
            <p class="row-in-round">sl-alert</p>
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
                        <td>banner</td>
                        <td>是否用作顶部公告</td>
                        <td>boolean</td>
                        <td>false</td>
                    </tr>
                    <tr>
                        <td>closable</td>
                        <td>默认不显示关闭按钮</td>
                        <td>boolean</td>
                        <td>无</td>
                    </tr>
                    <tr>
                        <td>closeText</td>
                        <td>自定义关闭按钮</td>
                        <td>string 丨 slot</td>
                        <td>无</td>
                    </tr>
                    <tr>
                        <td>description</td>
                        <td>警告提示的辅助性文字介绍</td>
                        <td>string 丨 slot</td>
                        <td>无</td>
                    </tr>
                    <tr>
                        <td>message</td>
                        <td>警告提示内容</td>
                        <td>string 丨 slot</td>
                        <td>无</td>
                    </tr>
                    <tr>
                        <td>showIcon</td>
                        <td>是否显示辅助图标</td>
                        <td>boolean</td>
                        <td>false，banner 模式下默认值为 true</td>
                    </tr>
                    <tr>
                        <td>icon</td>
                        <td>自定义图标类型，showIcon 为 true 时有效</td>
                        <td>vnode 丨 slot</td>
                        <td>false，salusBanner 模式下默认值为 true</td>
                    </tr>
                    <tr>
                        <td>type</td>
                        <td>指定警告提示的样式，有四种选择 success、info、warning、error</td>
                        <td>string</td>
                        <td>info，banner 模式下默认值为 warning</td>
                    </tr>
                    <tr>
                        <td>bodyStyle</td>
                        <td>内容区域自定义样式</td>
                        <td>object</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>afterClose</td>
                        <td>关闭时触发的回调函数</td>
                        <td>() => void</td>
                        <td>-</td>
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
                        <td>close</td>
                        <td>关闭时触发的回调函数</td>
                        <td>(e: MouseEvent) => void</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <!--参数说明结束-->
    </div>
</template>
<script>
    import {CodeBasic, CodeClosable, CodeDescription, CodeIcon, CodeCloseText, CodeBanner} from "./alert.code";

    export default {
        name: 'Alert',
        data() {
            return {
                CodeBasic,
                CodeClosable,
                CodeDescription,
                CodeIcon,
                CodeCloseText,
                CodeBanner,
                top: 10
            }
        },
        methods: {
            onClose(e) {
                console.log(e, 'I was closed.');
            }
        },
        components: {
            SearchCode: () => import('../../common/searchCode/searchCode')
        }
    }
</script>