/* 提示类型 */
export const CodeType = 
`    <template>
        <div>
            <sl-button type="primary" @click="createMessage('info')" style="margin-right: 10px">显示普通提示信息</sl-button>
            <sl-button type="primary" @click="createMessage('success')" style="margin-right: 10px">显示成功提示信息</sl-button>
            <sl-button type="primary" @click="createMessage('error')" style="margin-right: 10px">显示错误提示信息</sl-button>
            <sl-button type="primary" @click="createMessage('warning')" style="margin-right: 10px">显示警告提示信息</sl-button>
            <sl-button type="primary" @click="createMessage('loading')" style="margin-right: 10px">显示加载提示信息</sl-button>
        </div>
    </template>
    <script>
        export default {
            methods: {
                createMessage(type) {
                    this.$message[type](\`This is a message of \${type}\`);
                },
            }
        }
    </script>`

export const CodePos =
`   <template>
        <div>
            <sl-button type="primary" @click="createMessage('info', 'topLeft')" style="margin-right: 10px">显示左上角提示信息</sl-button>
            <sl-button type="primary" @click="createMessage('info', 'topCenter')" style="margin-right: 10px">显示中上角提示信息</sl-button>
            <sl-button type="primary" @click="createMessage('info', 'topRight')" style="margin-right: 10px">显示右上角提示信息</sl-button>
            <sl-button type="primary" @click="createMessage('info', 'bottomLeft')" style="margin-right: 10px">显示左下角提示信息</sl-button>
            <sl-button type="primary" @click="createMessage('info', 'bottomCenter')" style="margin-right: 10px">显示中下角提示信息</sl-button>
            <sl-button type="primary" @click="createMessage('info', 'bottomRight')" style="margin-right: 10px">显示右下角提示信息</sl-button>
        </div>
    </template>
    <script>
        export default {
            methods: {
                createMessage(type, pos) {
                    this.$message[type](\`This is a message of \${type}\`, {
                      pos,
                    });
                },
            }
        }
    </script>`


export const CodeTitle =
`    <template>
        <div>
            <sl-button type="primary" @click="createMessageTitle('success')" style="margin-right: 10px">显示成功提示信息</sl-button>
            <sl-button type="primary" @click="createCenterTitleMessage('success', 'topCenter')" style="margin-right: 10px">显示成功提示信息</sl-button>
        </div>
    </template>
    <script>
        export default {
            methods: {
                createMessageTitle(type, pos) {
                    this.$message[type](\`请重新登陆\`, {
                        title: '修改密码成功!',
                        pos,
                    });
                },
                createCenterTitleMessage(type, pos) {
                    this.$message[type](\`请重新登陆\`, {
                        title: '修改密码成功!',
                        centerContent:true,
                        pos,
                    });
                },
            }
        }
    </script>`

export const CodeService =
`    message.success(content, options, onClose)
    message.error(content, options, onClose)
    message.info(content, options, onClose)
    message.warning(content, options, onClose)
    message.loading(content, options, onClose)`

export const CodePromise =
`    message.success(content, options, onClose).then(afterClose)
    message.error(content, options, onClose).then(afterClose)
    message.info(content, options, onClose).then(afterClose)
    message.warning(content, options, onClose).then(afterClose)
    message.loading(content, options, onClose).then(afterClose)`

export const CodeOpen =
`    message.open({
        content: \`This is a message of success\`,
        options: {
            pos: 'topLeft',
            pauseOnHover: false,
        },
        type: 'success'
    })`

export const CodeConfig =
`    message.config({
        duration: 10000,
        pauseOnHover: false,
        animate: false,
        maxCount: 3,
    })
    message.destroy()`