/* 基础提示code */

export const CodeBasic =
    `    <template>
        <div>
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
        </div>
    </template>`;


/* 可关闭的信息提示Code */
export const CodeClosable =
    `    <template>
        <div style="width: 30%;">
            <sl-alert type="error" closable message="Error Text" @close="onClose"></sl-alert>

            <sl-alert type="error" closable message="Error Text"
                        description="Error Description Error Description Error Description Error Description Error Description Error Description"
                        @close="onClose">
            </sl-alert>
        </div>
    </template>
    <script>
        export default {
            methods: {
                onClose(e) {
                    console.log(e, 'I was closed.');
                }
            }
        }
    </script>`;

/* 含有辅助性文字介绍Code */
export const CodeDescription =
    `    <template>
        <div style="width: 30%;">
            <sl-alert message="Normal-default Text"
                        description="Error Description Error Description Error Description Error Description Error Description Error Description">
            </sl-alert>

            <sl-alert type="info" message="Normal-info Text"
                        description="Error Description Error Description Error Description Error Description Error Description Error Description">
            </sl-alert>

            <sl-alert type="success" message="Normal-info Text"
                        description="Error Description Error Description Error Description Error Description Error Description Error Description">
            </sl-alert>

            <sl-alert type="warning" message="Normal-warning Text"
                        description="Error Description Error Description Error Description Error Description Error Description Error Description">
            </sl-alert>

            <sl-alert type="error" message="Error Text"
                        description="Error Description Error Description Error Description Error Description Error Description Error Description">
            </sl-alert>
        </div>
    </template>`;

/* 带有图标Code */
export const CodeIcon =
    `    <template>
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
    </template>`;

/* 可自定义关闭的信息提示Code */
export const CodeCloseText =
    `    <template>
        <div style="width: 30%;">
            <sl-alert type="error" message="Error Text" closeText="Close Now">
            </sl-alert>
        </div>
    </template>`;

/* 顶部公告Code */
export const CodeBanner =
    `    <template>
        <div style="width: 30%;">
            <sl-alert message="Warning Text" banner></sl-alert>
        </div>
    </template>`;

