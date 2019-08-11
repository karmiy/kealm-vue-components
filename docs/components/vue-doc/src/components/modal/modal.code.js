/* 基础对话框 */
export const CodeBasic =
    `    <template>
        <div>
            <sl-button type="primary" @click="showModal">
                <span>显示对话框</span>
            </sl-button>
            <sl-modal v-model="isVisible" title="提示" @cancel="handleCancel" @ok="handleOk">
                <p>对话框内容</p>
                <p>①基础对话框</p>
                <p>①是否双按钮，有重要性强弱引导</p>
            </sl-modal>
        </div>
    </template>
    <script>
        export default {
            data() {
                return {
                    isVisible: false
                }
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
                }
            }
        }
    </script>`;

/* 信息配置 */
export const CodeConfiguration =
    `    <template>
        <div>
            <sl-button type="primary" @click="showConfigurationModal">
                <span>信息配置对话框</span>
            </sl-button>
            <sl-modal v-model="isVisibleConfiguration" title="提示"
                        showConfiguration description="请注意：带有配置信息的对话框带有配置信息的对话框带有配置信息的对话框带有配置信息的对话框"
                        @cancel="handleCancelConfiguration" @ok="handleOkConfiguration">
                <p>对话框内容</p>
                <p>①信息配置对话框</p>
                <p>①带有配置信息的对话框</p>
            </sl-modal>
            <sl-button type="primary" @click="showWarningConfigurationModal">
                <span>信息配置对话框-waring</span>
            </sl-button>
            <sl-modal v-model="isVisibleWarningConfiguration" title="提示"
                        showConfiguration configurationType="warning"
                        description="请注意：带有配置信息的对话框带有配置信息的对话框带有配置信息的对话框带有配置信息的对话框"
                        @cancel="handleWarningCancelConfiguration"
                        @ok="handleOkWarningConfiguration">
                <p>对话框内容</p>
                <p>①信息配置对话框</p>
                <p>①带有配置信息的对话框</p>
            </sl-modal>
        </div>
    </template>
    <script>
        export default {
            data() {
                return {
                    isVisibleConfiguration: false,
                    isVisibleWarningConfiguration: false
                }
            },
            methods: {
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
                }
            }
        }
    </script>`;

/* 自定义位置 */
export const CodePos =
    `    <template>
        <div>
            <sl-button type="primary" @click="() => setModal1Visible(true)">弹出框在距离顶部20px</sl-button>
            <sl-modal title="距离顶部20px" style="top: 20px;" :visible="modal1Visible"
                    @ok="() => setModal1Visible(false)" @cancel="() => setModal1Visible(false)">
                <p>对话框内容</p>
                <p>①信息配置对话框</p>
                <p>①带有配置信息的对话框</p>
            </sl-modal>
            <sl-button type="primary" @click="() => modal2Visible = true">弹出框在中间展示</sl-button>
            <sl-modal title="弹出框在中间"
                    centered v-model="modal2Visible" @ok="() => modal2Visible = false">
                <p>对话框内容</p>
                <p>①信息配置对话框</p>
                <p>①带有配置信息的对话框</p>
            </sl-modal>
        </div>
    </template>
    <script>
        export default {
            data() {
                return {
                    modal1Visible: false,
                    modal2Visible: false
                }
            },
            methods: {
                setModal1Visible(modal1Visible) {
                    this.modal1Visible = modal1Visible;
                }
            }
        }
    </script>`;

/* 确认按钮 */
export const CodeConfirm =
    `    <template>
        <div>
            <sl-button @click="showConfirm">Confirm</sl-button>
        </div>
    </template>
    <script>
        export default {
            methods:{
                showConfirm() {
                    this.$confirm({
                        title: '确定删除选中项?',
                        content: '点击确认后关闭',
                        onOk() {},
                        okText: '确认',
                        cancelText: '取消',
                        onCancel() {},
                    });
                }
            }
        }
    </script>`;

/* 信息提示 */
export const CodeInfo =
    `    <template>
        <div>
            <sl-button @click="info">Info</sl-button>
            <sl-button @click="success">Success</sl-button>
            <sl-button @click="error">Error</sl-button>
            <sl-button @click="warning">Warning</sl-button>
        </div>
    </template>
    <script>
        export default {
            methods: {
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
                }
            }
        }
    </script>`;

/* 手动移除 */
export const CodeRemove =
    `    <template>
        <div>
            <sl-button @click="countDown">Success</sl-button>
        </div>
    </template>
    <script>
        export default {
            methods: {
                countDown() {
                    let secondsToGo = 5;
                    const modal = this.$success({
                        title: 'This is a notification message',
                        content: 'This modal will be destroyed after \${secondsToGo} second.',
                    });
                    const interval = setInterval(() => {
                        secondsToGo -= 1;
                        modal.update({
                            content: 'This modal will be destroyed after \${secondsToGo} second.',
                        });
                    }, 1000);
                    setTimeout(() => {
                        clearInterval(interval)
                        modal.destroy()
                    }, secondsToGo * 1000);
                }
            }
        }
    </script>`;

/* 自定义页脚按钮属性对话框 */
export const CodeFooter =
    `    <template>
        <div>
            <sl-button type="primary" @click="showModal">自定义页脚按钮属性</sl-button>
            <sl-modal title="Basic Modal" v-model="isVisible"
                    @ok="handleOk" :okButtonProps="{ props: {disabled: true} }"
                    :cancelButtonProps="{ props: {disabled: true} }">
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </sl-modal>
        </div>
    </template>
    <script>
        export default {
            data() {
                return {
                    isVisible: false
                }
            },
            methods: {
                showModal() {
                    this.isVisible = true;
                },
                handleOk() {
                    this.isVisible = false;
                }
            }
        }
    </script>`;
export const CodeCallback =
    `
        const modal = Modal.info();

        modal.update({
            title: '修改的标题',
            content: '修改的内容',
        });

        modal.destroy();
    `

