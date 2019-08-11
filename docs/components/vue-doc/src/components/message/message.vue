<template>
    <div class="page-box">
        <div class="detail-box">
            <h1>Message 全局提示</h1>
            <p>全局消息提示，消息出现在右上角</p>
        </div>

        <!--基础样式-->
        <div class="detail-box">
            <h2>基础样式</h2>
            <p class="code-left-line">Demo</p>
            <sl-button type="primary" @click="createMessage('info')" style="margin-right: 10px">显示普通提示信息</sl-button>
            <sl-button type="primary" @click="createMessage('success')" style="margin-right: 10px">显示成功提示信息</sl-button>
            <sl-button type="primary" @click="createMessage('error')" style="margin-right: 10px">显示错误提示信息</sl-button>
            <sl-button type="primary" @click="createMessage('warning')" style="margin-right: 10px">显示警告提示信息</sl-button>
            <sl-button type="primary" @click="createMessage('loading')" style="margin-right: 10px">显示加载提示信息</sl-button>
            <search-code :code="CodeType"></search-code>
        </div>
        <!--基础样式结束-->

        <!--位置-->
        <div class="detail-box">
            <h2>位置</h2>
            <p class="code-left-line">Demo</p>
            <sl-button type="primary" @click="createMessage('info', 'topLeft')" style="margin-right: 10px">显示左上角提示信息</sl-button>
            <sl-button type="primary" @click="createMessage('info', 'topCenter')" style="margin-right: 10px">显示中上角提示信息</sl-button>
            <sl-button type="primary" @click="createMessage('info', 'topRight')" style="margin-right: 10px">显示右上角提示信息</sl-button>
            <sl-button type="primary" @click="createMessage('info', 'bottomLeft')" style="margin-right: 10px">显示左下角提示信息</sl-button>
            <sl-button type="primary" @click="createMessage('info', 'bottomCenter')" style="margin-right: 10px">显示中下角提示信息</sl-button>
            <sl-button type="primary" @click="createMessage('info', 'bottomRight')" style="margin-right: 10px">显示右下角提示信息</sl-button>
            <search-code :code="CodePos"></search-code>
        </div>
        <!--位置结束-->

        <!--带有标题-->
        <div class="detail-box">
            <h2>带有标题</h2>
            <p class="code-left-line">Demo</p>
            <sl-button type="primary" @click="createMessageTitle('success')" style="margin-right: 10px">显示成功提示信息</sl-button>
            <sl-button type="primary" @click="createCenterTitleMessage('success', 'topCenter')" style="margin-right: 10px">显示成功提示信息</sl-button>
            <search-code :code="CodeTitle"></search-code>
        </div>
        <!--带有标题结束-->

        <!--参数说明开始-->
        <div class="detail-box">
            <h2>API</h2>
            <p class="row-in-round">组件提供了一些静态方法，使用方式和参数如下</p>
            <search-code :code="CodeService" :expand="true" :visibleTitle="false"></search-code>
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
                    <td>content</td>
                    <td>提示内容</td>
                    <td>string| VNode |(h) => VNode</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>options</td>
                    <td>配置项</td>
                    <td>object</td>
                    <td>{}</td>
                </tr>
                <tr>
                    <td>onClose</td>
                    <td>关闭时触发的回调函数</td>
                    <td>Function</td>
                    <td>-</td>
                </tr>
                </tbody>
            </table>

            <p class="row-in-round">options参数</p>
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
                    <td>duration</td>
                    <td>自动关闭的延时，单位秒。设为 0 时不自动关闭</td>
                    <td>number</td>
                    <td>3000</td>
                </tr>
                <tr>
                    <td>pauseOnHover</td>
                    <td>鼠标移上时禁止自动移除</td>
                    <td>boolean</td>
                    <td>true</td>
                </tr>
                <tr>
                    <td>animate</td>
                    <td>开关动画效果</td>
                    <td>boolean</td>
                    <td>true</td>
                </tr>
                <tr>
                    <td>title</td>
                    <td>标题内容</td>
                    <td>string</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>centerContent</td>
                    <td>在带有标题的情况下，是否居中并且显示图标</td>
                    <td>boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>closable</td>
                    <td>是否可关闭</td>
                    <td>boolean</td>
                    <td>true</td>
                </tr>
                </tbody>
            </table>

            <p class="row-in-round">组件同时提供 promise 接口</p>
            <search-code :code="CodePromise" :expand="true" :visibleTitle="false"></search-code>

            <p class="row-in-round">message.open(config)</p>
            <p>除了5种静态方法，还可以使用open方法</p>
            <search-code :code="CodeOpen" :expand="true" :visibleTitle="false"></search-code>

            <p class="row-in-round">全局配置</p>
            <p>提供了全局配置和全局销毁方法:</p>
            <search-code :code="CodeConfig" :expand="true" :visibleTitle="false"></search-code>
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
                    <td>duration</td>
                    <td>默认自动关闭延时，单位秒</td>
                    <td>number</td>
                    <td>3000</td>
                </tr>
                <tr>
                    <td>pauseOnHover</td>
                    <td>鼠标移上时禁止自动移除</td>
                    <td>boolean</td>
                    <td>true</td>
                </tr>
                <tr>
                    <td>animate</td>
                    <td>开关动画效果</td>
                    <td>boolean</td>
                    <td>true</td>
                </tr>
                <tr>
                    <td>maxCount</td>
                    <td>最大显示数, 超过限制时，最早的消息会被自动关闭</td>
                    <td>number</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>closable</td>
                    <td>是否可关闭</td>
                    <td>boolean</td>
                    <td>true</td>
                </tr>
                </tbody>
            </table>
        </div>
        <!--参数说明结束-->
    </div>
</template>
<script>
    import { CodeType , CodeTitle, CodePos, CodeService, CodePromise, CodeOpen, CodeConfig } from "./message.code";

    export default {
        data() {
            return {
              CodeType,
              CodeTitle,
              CodePos,
              CodeService,
              CodePromise,
              CodeOpen,
              CodeConfig,
            }
        },
        components: {
            SearchCode: () => import('../../common/searchCode/searchCode')
        },
        methods: {
            close() {
              console.log('close');
            },
            createMessage(type, pos) {
                this.$message[type](`This is a message of ${type}`, {
                  pos,
                });
            },
            createMessageTitle(type, pos) {
                this.$message[type](`请重新登陆`, {
                    title: '修改密码成功!',
                    pos,
                });
            },
            createCenterTitleMessage(type, pos) {
                this.$message[type](`请重新登陆`, {
                    title: '修改密码成功!',
                    centerContent:true,
                    pos,
                });
            },
        }
    }
</script>
<style scoped>
</style>