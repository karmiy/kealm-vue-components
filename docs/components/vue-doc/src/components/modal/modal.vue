<template>
    <div class="page-box">
        <div class="detail-box">
            <h1>Modal 对话框</h1>
            <p class="row-in-hyphen">需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal 在当前页面正中打开一个浮层，承载相应的操作。</p>

            <p class="row-in-hyphen">需要一个简洁的确认框询问用户时，可以使用精心封装好的 Modal.confirm() 等方法。</p>

        </div>

        <!--基础对话框-->
        <div class="detail-box">
            <h2>基础对话框</h2>
            <p class="code-left-line">Demo</p>
            <sl-button type="primary" @click="showModal">
                <span>显示对话框</span>
            </sl-button>
            <sl-modal v-model="isVisible" title="提示" @cancel="handleCancel" @ok="handleOk">
                <p>对话框内容</p>
                <p>①基础对话框</p>
                <p>①是否双按钮，有重要性强弱引导</p>
            </sl-modal>
            <search-code :code="CodeBasic"></search-code>
        </div>
        <!--基础对话框结束-->

        <!--信息配置对话框开始-->
        <div class="detail-box">
            <h2>信息配置对话框</h2>
            <p class="code-left-line">Demo</p>
            <div class="detail-modal-demo">
                <sl-button type="primary" @click="showConfigurationModal">
                    <span>信息配置对话框</span>
                </sl-button>
                <sl-modal
                        v-model="isVisibleConfiguration"
                        title="提示"
                        showConfiguration
                        description="请注意：带有配置信息的对话框带有配置信息的对话框带有配置信息的对话框带有配置信息的对话框"
                        @cancel="handleCancelConfiguration"
                        @ok="handleOkConfiguration">
                    <p>对话框内容</p>
                    <p>①信息配置对话框</p>
                    <p>①带有配置信息的对话框</p>
                </sl-modal>
                <sl-button type="primary" @click="showWarningConfigurationModal">
                    <span>信息配置对话框-waring</span>
                </sl-button>
                <sl-modal
                        v-model="isVisibleWarningConfiguration"
                        title="提示"
                        showConfiguration
                        configurationType="warning"
                        description="请注意：带有配置信息的对话框带有配置信息的对话框带有配置信息的对话框带有配置信息的对话框"
                        @cancel="handleWarningCancelConfiguration"
                        @ok="handleOkWarningConfiguration">
                    <p>对话框内容</p>
                    <p>①信息配置对话框</p>
                    <p>①带有配置信息的对话框</p>
                </sl-modal>
            </div>
            <search-code :code="CodeConfiguration"></search-code>
        </div>
        <!--信息配置对话框开始-->

        <!--自定义位置-->
        <div class="detail-box">
            <h2>自定义位置</h2>
            <p>使用 centered 或类似 style.top 的样式来设置对话框位置</p>
            <p class="code-left-line">Demo</p>
            <div class="detail-modal-demo">
                <sl-button @click="() => setModal1Visible(true)">弹出框在距离顶部20px</sl-button>
                <sl-modal title="距离顶部20px" style="top: 20px;" :visible="modal1Visible"
                          @ok="() => setModal1Visible(false)" @cancel="() => setModal1Visible(false)">
                    <p>对话框内容</p>
                    <p>①信息配置对话框</p>
                    <p>①带有配置信息的对话框</p>
                </sl-modal>
                <sl-button @click="() => modal2Visible = true">弹出框在中间展示</sl-button>
                <sl-modal title="弹出框在中间"
                          centered v-model="modal2Visible" @ok="() => modal2Visible = false">
                    <p>对话框内容</p>
                    <p>①信息配置对话框</p>
                    <p>①带有配置信息的对话框</p>
                </sl-modal>
            </div>
            <search-code :code="CodePos"></search-code>
        </div>
        <!--自定义位置结束-->

        <!--确认对话框-->
        <div class="detail-box">
            <h2>确认对话框</h2>
            <p>使用 confirm() 可以快捷地弹出确认框。onCancel/onOk 返回 promise 可以延迟关闭</p>
            <p class="code-left-line">Demo</p>
            <div class="detail-modal-demo">
                <sl-button @click="showConfirm">Confirm</sl-button>
            </div>
            <search-code :code="CodeConfirm"></search-code>
        </div>
        <!--确认对话框结束-->

        <!--信息提示对话框-->
        <div class="detail-box">
            <h2>信息提示</h2>
            <p>各种类型的信息提示，只提供一个按钮用于关闭</p>
            <p class="code-left-line">Demo</p>
            <div class="detail-modal-demo">
                <sl-button @click="info">Info</sl-button>
                <sl-button @click="success">Success</sl-button>
                <sl-button @click="error">Error</sl-button>
                <sl-button @click="warning">Warning</sl-button>
            </div>
            <search-code :code="CodeInfo"></search-code>
        </div>
        <!--信息提示对话框结束-->

        <!--可手动移除对话框-->
        <div class="detail-box">
            <h2>手动移除</h2>
            <p>手动关闭modal</p>
            <div class="detail-modal-demo">
                <sl-button @click="countDown">Success</sl-button>
            </div>
            <search-code :code="CodeRemove"></search-code>
        </div>
        <!--可手动移除对话框结束-->

        <!--自定义页脚按钮属性对话框-->
        <div class="detail-box">
            <h2>自定义页脚按钮属性</h2>
            <p>传入 okButtonProps 和 cancelButtonProps 可分别自定义确定按钮和取消按钮的 props</p>
            <div class="detail-modal-demo">
                <sl-button type="primary" @click="showModal1">自定义页脚按钮属性</sl-button>
                <sl-modal title="Basic Modal" v-model="isVisible1"
                        @ok="handleOk1" :okButtonProps="{ props: {disabled: true} }"
                        :cancelButtonProps="{ props: {disabled: true} }"
                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </sl-modal>
            </div>
            <search-code :code="CodeFooter"></search-code>
        </div>
        <!--自定义页脚按钮属性对话框结束-->

        <div class="detail-box">
            <h2>API</h2>
            <p class="row-in-round">sl-modal</p>
            <p>对话框当前分为2种模式，普通模式 和 确认框模式（即Confirm对话框，通过调用confirm/info/success/error/warning弹出），
                两种模式对API的支持程度稍有不同</p>
            <table class="salus-table  salus-table-hover salus-table-striped">
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
                    <td>afterClose</td>
                    <td>Modal 完全关闭后的回调，可监听close/destroy方法传入的参数</td>
                    <td>EventEmitter</td>
                    <td>无</td>
                </tr>
                <tr>
                    <td>bodyStyle</td>
                    <td>Modal body 样式</td>
                    <td>object</td>
                    <td>{}</td>
                </tr>
                <tr>
                    <td>cancelText</td>
                    <td>取消按钮文字</td>
                    <td>string 丨 slot</td>
                    <td>取消</td>
                </tr>
                <tr>
                    <td>closable</td>
                    <td>是否显示右上角的关闭按钮</td>
                    <td>boolean</td>
                    <td>true</td>
                </tr>
                <tr>
                    <td>confirmLoading</td>
                    <td>确定按钮 loading</td>
                    <td>boolean</td>
                    <td>无</td>
                </tr>
                <tr>
                    <td>destroyOnClose</td>
                    <td>关闭时销毁 Modal 里的子元素</td>
                    <td>boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>footer</td>
                    <td>底部内容，当不需要默认底部按钮时，可以设为 :footer="null"</td>
                    <td>string 丨 slot</td>
                    <td>默认的确定取消按钮</td>
                </tr>
                <tr>
                    <td>showConfiguration</td>
                    <td>modal窗体显示配置区</td>
                    <td>boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>message</td>
                    <td>配置提示内容</td>
                    <td>string 丨 slot</td>
                    <td>无</td>
                </tr>
                <tr>
                    <td>description</td>
                    <td>配置提示的辅助性文字介绍</td>
                    <td>string｜slot</td>
                    <td>无</td>
                </tr>
                <tr>
                    <td>showIcon</td>
                    <td>是否显示配置提示辅助图标</td>
                    <td>boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>configurationType</td>
                    <td>指定配置提示的样式，有四种选择 success、info、warning、error</td>
                    <td>string</td>
                    <td>无</td>
                </tr>
                <tr>
                    <td>getContainer</td>
                    <td>指定 Modal 挂载的 HTML 节点</td>
                    <td>(instance): HTMLElement</td>
                    <td>() => document.body</td>
                </tr>
                <tr>
                    <td>keyboard</td>
                    <td>是否支持键盘esc关闭</td>
                    <td>boolean</td>
                    <td>true</td>
                </tr>
                <tr>
                    <td>mask</td>
                    <td>是否展示遮罩</td>
                    <td>boolean</td>
                    <td>true</td>
                </tr>
                <tr>
                    <td>maskClosable</td>
                    <td>点击蒙层是否允许关闭</td>
                    <td>boolean</td>
                    <td>true</td>
                </tr>
                <tr>
                    <td>maskStyle</td>
                    <td>遮罩样式</td>
                    <td>object</td>
                    <td>{}</td>
                </tr>
                <tr>
                    <td>okText</td>
                    <td>确认按钮文字</td>
                    <td>string 丨 slot</td>
                    <td>确定</td>
                </tr>
                <tr>
                    <td>okType</td>
                    <td>确认按钮类型。<i>与button的type类型值一致</i></td>
                    <td>string</td>
                    <td>primary</td>
                </tr>
                <tr>
                    <td>okButtonProps</td>
                    <td>ok 按钮 props, 遵循jsx规范</td>
                    <td>{props: ButtonProps, on: {}}</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>cancelButtonProps</td>
                    <td>cancel 按钮 props, 遵循jsx规范</td>
                    <td>{props: ButtonProps, on: {}}</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>title</td>
                    <td>标题</td>
                    <td>string<br>TemplateRef</td>
                    <td>无</td>
                </tr>
                <tr>
                    <td>visible(v-model)</td>
                    <td>对话框是否可见</td>
                    <td>boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>width</td>
                    <td>宽度。<i>使用数字时，默认单位为px</i></td>
                    <td>string|number</td>
                    <td>470</td>
                </tr>
                <tr>
                    <td>wrapClassName</td>
                    <td>对话框外层容器的类名</td>
                    <td>string</td>
                    <td>无</td>
                </tr>
                <tr>
                    <td>zIndex</td>
                    <td>设置 Modal 的 <code>z-index</code></td>
                    <td>number</td>
                    <td>1000</td>
                </tr>
                </tbody>
            </table>
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
                        <td>cancel</td>
                        <td>点击遮罩层或右上角叉或取消按钮的回调</td>
                        <td>function(e)</td>
                    </tr>
                    <tr>
                        <td>ok</td>
                        <td>点击确定回调</td>
                        <td>function(e)</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <p class="row-in-round">Modal.method() - 确认框模式</p>
            <p>包括：</p>
            <p class="row-in-hyphen">Modal.info</p>
            <p class="row-in-hyphen">Modal.success</p>
            <p class="row-in-hyphen">Modal.error</p>
            <p class="row-in-hyphen">Modal.warning</p>
            <p class="row-in-hyphen">Modal.confirm</p>
            <p>
                以上均为一个函数，参数为 object，与上方API一致。部分属性类型或初始值有所不同，已列在下方：
            </p>
            <table class="salus-table  salus-table-hover salus-table-striped">
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
                    <td>onOk</td>
                    <td>点击确定回调，参数为关闭函数，返回 promise 时 resolve 后自动关闭</td>
                    <td>function</td>
                    <td>无</td>
                </tr>
                <tr>
                    <td>onCancel</td>
                    <td>取消回调，参数为关闭函数，返回 promise 时 resolve 后自动关闭
                    </td>
                    <td>function</td>
                    <td>无</td>
                </tr>
                <tr>
                    <td>width</td>
                    <td>宽度</td>
                    <td>string<br>number</td>
                    <td>470</td>
                </tr>
                <tr>
                    <td>maskClosable</td>
                    <td>点击蒙层是否允许关闭</td>
                    <td>boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>iconType</td>
                    <td>图标 Icon 类型</td>
                    <td>string</td>
                    <td>salus-icon-sign-mark</td>
                </tr>
                <tr>
                    <td>content</td>
                    <td>内容</td>
                    <td>string|vNode</td>
                    <td>无</td>
                </tr>
                <tr>
                    <td>class</td>
                    <td>容器类名</td>
                    <td>string</td>
                    <td>-</td>
                </tr>
                </tbody>
            </table>
            <p style="margin-bottom: 12px;">
                以上函数调用后，会返回一个引用，可以通过该引用更新和关闭弹窗。
            </p>
                <search-code :code="CodeCallback" :expand="true" :visibleTitle="false"></search-code>
        </div>
    </div>
</template>
<script>
    import {CodeBasic, CodeConfiguration, CodePos, CodeConfirm, CodeInfo, CodeRemove, CodeFooter, CodeCallback} from "./modal.code";

    export default {
        name: 'Modal',
        data() {
            return {
                CodeBasic,
                isVisible: false,
                CodeConfiguration,
                isVisibleConfiguration: false,
                isVisibleWarningConfiguration: false,
                CodePos,
                modal1Visible: false,
                modal2Visible: false,
                CodeConfirm,
                CodeInfo,
                CodeRemove,
                CodeFooter,
                isVisible1: false,
                CodeCallback
            }
        },
        components: {
            SearchCode: () => import('../../common/searchCode/searchCode')
        },
        methods: {
            showModal() {
                this.isVisible = true;
            },
            handleCancel() {
                this.isVisible = false;
            },
            handleOk() {
                this.isVisible = false;
            },
            showConfigurationModal() {
                this.isVisibleConfiguration = true;
            },
            handleCancelConfiguration() {
                this.isVisibleConfiguration = false;
            },
            handleOkConfiguration() {
                this.isVisibleConfiguration = false;
            },
            showWarningConfigurationModal() {
                this.isVisibleWarningConfiguration = true;
            },
            handleWarningCancelConfiguration() {
                this.isVisibleWarningConfiguration = false;
            },
            handleOkWarningConfiguration() {
                this.isVisibleWarningConfiguration = false;
            },
            setModal1Visible(modal1Visible) {
                this.modal1Visible = modal1Visible;
            },
            showConfirm() {
                this.$confirm({
                    title: '确定删除选中项?',
                    content: '点击确认后关闭',
                    onOk() {
                    },
                    okText: '确认',
                    cancelText: '取消',
                    onCancel() {
                    },
                });
            },
            info() {
                const h = this.$createElement
                this.$info({
                    title: 'This is a notification message',
                    content: h('div', {}, [
                        h('p', 'some messages...some messages...'),
                        h('p', 'some messages...some messages...'),
                    ]),
                    onOk() {
                    },
                });
            },
            success() {
                this.$success({
                    title: 'This is a success message',
                    content: 'some messages...some messages...'
                });
            },
            error() {
                this.$error({
                    title: 'This is an error message',
                    content: 'some messages...some messages...',
                });
            },
            warning() {
                this.$warning({
                    title: 'This is a warning message',
                    content: 'some messages...some messages...',
                });
            },
            countDown() {
                let secondsToGo = 5;
                const modal = this.$success({
                    title: 'This is a notification message',
                    content: `This modal will be destroyed after ${secondsToGo} second.`,
                });
                const interval = setInterval(() => {
                    secondsToGo -= 1;
                    modal.update({
                        content: `This modal will be destroyed after ${secondsToGo} second.`,
                    });
                }, 1000);
                setTimeout(() => {
                    clearInterval(interval)
                    modal.destroy()
                }, secondsToGo * 1000);
            },
            showModal1() {
                this.isVisible1 = true;
            },
            handleOk1() {
                this.isVisible1 = false;
            }
        }
    }
</script>