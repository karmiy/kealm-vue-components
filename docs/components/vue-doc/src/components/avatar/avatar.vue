<template>
    <div class="page-box">
        <div class="detail-box">
            <h1>Avatar 头像</h1>
            <p>用来代表用户或事物，支持图片、图标或字符展示。</p>
        </div>

        <!--基础头像-->
        <div class="detail-box">
            <h2>基础头像</h2>
            <p class="code-left-line">Demo</p>
            <div>
                <sl-avatar size="large" icon="salus-icon-account-o"/>
                <sl-avatar icon="salus-icon-account-o"/>
                <sl-avatar size="small" icon="salus-icon-account-o"/>
            </div>
            <div>
                <sl-avatar shape="square" size="large" icon="salus-icon-account-o"/>
                <sl-avatar shape="square" icon="salus-icon-account-o"/>
                <sl-avatar shape="square" size="small" icon="salus-icon-account-o"/>
            </div>
            <search-code :code="CodeBasic"></search-code>
        </div>
        <!--基础头像结束-->

        <!--头像类型-->
        <div class="detail-box">
            <h2>头像类型</h2>
            <p class="code-left-line">Demo</p>
            <div>
                <sl-avatar icon="salus-icon-account-o"/>
                <sl-avatar>U</sl-avatar>
                <sl-avatar>USER</sl-avatar>
                <sl-avatar :src="require('../../assets/imgs/card-example.png')"/>
                <sl-avatar style="color:#f56a00; background-color:#fde3cf;">U</sl-avatar>
                <sl-avatar icon="salus-icon-account-o" style="background-color:#37BC70;" />
            </div>
            <search-code :code="CodeType"></search-code>
        </div>
        <!--头像类型结束-->

        <!--调整头像-->
        <div class="detail-box">
            <h2>调整头像</h2>
            <p class="code-left-line">Demo</p>
            <div>
                <sl-avatar
                    style="vertical-align: middle;"
                    :style="{backgroundColor: colorList[index]}"
                    size="large"
                >{{userList[index]}}</sl-avatar>
                <sl-button type="dashed" @click="change" style="margin-left: 16px; vertical-align: bottom;">Change</sl-button>
            </div>
            <search-code :code="CodeChange"></search-code>
        </div>
        <!--调整头像结束-->

        <!--带有徽标数的头像-->
        <div class="detail-box">
            <h2>带有徽标数的头像</h2>
            <p class="code-left-line">Demo</p>
            <div>
                <sl-badge :count="5"><sl-avatar style="margin: 0" icon="salus-icon-account-o" /></sl-badge>
                <sl-badge dot><sl-avatar style="margin: 0" icon="salus-icon-account-o" shape="square" /></sl-badge>
            </div>
            <search-code :code="CodeBadge"></search-code>
        </div>
        <!--带有徽标数的头像结束-->


        <!--参数说明开始-->
        <div class="detail-box">
            <h2>API</h2>
            <p class="row-in-round">sl-avatar</p>
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
                    <td>icon</td>
                    <td>设置头像的图标类型</td>
                    <td>string</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>shape</td>
                    <td>指定头像的形状</td>
                    <td>Enum{ 'circle', 'square' }</td>
                    <td>'circle'</td>
                </tr>
                <tr>
                    <td>size</td>
                    <td>设置头像的大小</td>
                    <td>number | Enum{ 'large', 'small', 'default' }</td>
                    <td>'default'</td>
                </tr>
                <tr>
                    <td>src</td>
                    <td>图片类头像的资源地址</td>
                    <td>string | require('...')</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>srcSet</td>
                    <td>设置图片类头像响应式资源地址</td>
                    <td>string</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>alt</td>
                    <td>图像无法显示时的替代文本</td>
                    <td>string</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>loadError</td>
                    <td>图片加载失败的事件，返回 false 会关闭组件默认的 fallback 行为</td>
                    <td>() => boolean</td>
                    <td>-</td>
                </tr>
                </tbody>
            </table>

        </div>
        <!--参数说明结束-->
    </div>
</template>
<script>
    import { CodeBasic, CodeType, CodeChange, CodeBadge } from "./avatar.code";

    export default {
        data() {
            return {
                CodeBasic,
                CodeType,
                CodeChange,
                CodeBadge,
                userList: [ 'U', 'Lucy', 'Tom', 'Edward' ],
                colorList: [ '#f56a00', '#7265e6', '#ffbf00', '#00a2ae' ],
                index: 0,
            }
        },
        components: {
            SearchCode: () => import('../../common/searchCode/searchCode')
        },
        methods: {
            change() {
              this.index = (this.index + 1) % 4;
            },
        }
    }
</script>
<style scoped>
    @import './avatar.scss';
</style>