/* 基础步骤条 */
export const CodeBasic =
    `    <template>
        <div>
            <sl-steps :current="1">
                <sl-step title="步骤1" description="描述（可选）"></sl-step>
                <sl-step title="步骤2" description="描述（可选）"></sl-step>
                <sl-step title="步骤3" description="描述（可选）"></sl-step>
                <sl-step title="步骤4" description="描述（可选）"></sl-step>
            </sl-steps>
        </div>
    </template>`;

/* 小型步骤条 */
export const CodeSmall =
    `    <template>
        <div>
            <sl-steps :current="1" size="small">
                <sl-step title="步骤1" description="描述（可选）"></sl-step>
                <sl-step title="步骤2" description="描述（可选）"></sl-step>
                <sl-step title="步骤3" description="描述（可选）"></sl-step>
                <sl-step title="步骤4" description="描述（可选）"></sl-step>
            </sl-steps>
        </div>
    </template>`;

/* 垂直步骤条 */
export const CodeVertical =
    `    <template>
        <div>
            <sl-steps :current="1" direction="vertical">
                <sl-step title="步骤1" description="描述（可选）"></sl-step>
                <sl-step title="步骤2" description="描述（可选）"></sl-step>
                <sl-step title="步骤3" description="描述（可选）"></sl-step>
                <sl-step title="步骤4" description="描述（可选）"></sl-step>
            </sl-steps>
        </div>
    </template>`;

/* 垂直小型步骤条 */
export const CodeVerticalSmall =
    `    <template>
        <div>
            <sl-steps :current="1" direction="vertical" size="small">
                <sl-step title="步骤1" description="描述（可选）"></sl-step>
                <sl-step title="步骤2" description="描述（可选）"></sl-step>
                <sl-step title="步骤3" description="描述（可选）"></sl-step>
                <sl-step title="步骤4" description="描述（可选）"></sl-step>
            </sl-steps>
        </div>
    </template>`;

/* 步骤运行错误 */
export const CodeError =
    `    <template>
        <div>
            <sl-steps :current="1" status="error">
                <sl-step title="步骤1" description="描述（可选）"></sl-step>
                <sl-step title="步骤2" description="描述（可选）"></sl-step>
                <sl-step title="步骤3" description="描述（可选）"></sl-step>
                <sl-step title="步骤4" description="描述（可选）"></sl-step>
            </sl-steps>
        </div>
    </template>`;

/* 步骤切换 */
export const CodeChange =
    `    <template>
        <div>
            <sl-steps :current="current">
                <sl-step v-for="item in steps" :key="item.title" :title="item.title"/>
            </sl-steps>
            <div class="steps-content">{{steps[current].content}}</div>
            <div class="steps-action">
                <sl-button v-if="current < steps.length - 1" type="primary" @click="next">
                    Next
                </sl-button>
                <sl-button v-if="current == steps.length - 1" type="primary">
                    Done
                </sl-button>
                <sl-button v-if="current>0" style="margin-left: 8px" @click="prev">
                    Previous
                </sl-button>
            </div>
        </div>
    </template>
    <script>
        export default {
            data() {
                return {
                    current: 0,
                steps: [{
                    title: 'First',
                    content: 'First-content',
                }, {
                    title: 'Second',
                    content: 'Second-content',
                }, {
                    title: 'Third',
                    content: 'Third-content',
                }, {
                    title: 'Last',
                    content: 'Last-content',
                }]
                }
            },
            methods: {
                next() {
                    this.current++
                },
                prev() {
                    this.current--
                }
            }
        }
    </script>
    <style scoped>
        .steps-content {
            margin-top: 16px;
            border: 1px dashed #e9e9e9;
            border-radius: 6px;
            background-color: #fafafa;
            min-height: 30px;
            text-align: center;
            padding-top: 10px;
        }

        .steps-action {
            margin-top: 24px;
        }
    </style>`;