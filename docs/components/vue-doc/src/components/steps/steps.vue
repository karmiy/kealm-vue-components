<template>
    <div class="page-box">
        <div class="detail-box">
            <h1>Steps 步骤条</h1>
            <p>引导用户完成任务的导航条。</p>
        </div>

        <!--基础步骤条开始-->
        <div class="detail-box">
            <h2>基础步骤条</h2>
            <p class="code-left-line">Demo</p>
            <sl-steps :current="1">
                <sl-step title="步骤1" description="描述（可选）"></sl-step>
                <sl-step title="步骤2" description="描述（可选）"></sl-step>
                <sl-step title="步骤3" description="描述（可选）"></sl-step>
                <sl-step title="步骤4" description="描述（可选）"></sl-step>
            </sl-steps>
            <search-code :code="CodeBasic"></search-code>
        </div>
        <!--基础步骤条结束-->

        <!--小型步骤条开始-->
        <div class="detail-box">
            <h2>小型步骤条</h2>
            <p class="code-left-line">Demo</p>
            <sl-steps :current="1" size="small">
                <sl-step title="步骤1" description="描述（可选）"></sl-step>
                <sl-step title="步骤2" description="描述（可选）"></sl-step>
                <sl-step title="步骤3" description="描述（可选）"></sl-step>
                <sl-step title="步骤4" description="描述（可选）"></sl-step>
            </sl-steps>
            <search-code :code="CodeSmall"></search-code>
        </div>
        <!--小型步骤条结束-->

        <!--垂直步骤条开始-->
        <div class="detail-box">
            <h2>垂直步骤条</h2>
            <p class="code-left-line">Demo</p>
            <sl-steps :current="1" direction="vertical">
                <sl-step title="步骤1" description="描述（可选）"></sl-step>
                <sl-step title="步骤2" description="描述（可选）"></sl-step>
                <sl-step title="步骤3" description="描述（可选）"></sl-step>
                <sl-step title="步骤4" description="描述（可选）"></sl-step>
            </sl-steps>
            <search-code :code="CodeVertical"></search-code>
        </div>
        <!--垂直步骤条结束-->

        <!--垂直小型步骤条开始-->
        <div class="detail-box">
            <h2>垂直小型步骤条</h2>
            <p class="code-left-line">Demo</p>
            <sl-steps :current="1" direction="vertical" size="small">
                <sl-step title="步骤1" description="描述（可选）"></sl-step>
                <sl-step title="步骤2" description="描述（可选）"></sl-step>
                <sl-step title="步骤3" description="描述（可选）"></sl-step>
                <sl-step title="步骤4" description="描述（可选）"></sl-step>
            </sl-steps>
            <search-code :code="CodeVerticalSmall"></search-code>
        </div>
        <!--垂直小型步骤条结束-->

        <!--步骤运行错误开始-->
        <div class="detail-box">
            <h2>步骤运行错误</h2>
            <p class="code-left-line">Demo</p>
            <sl-steps :current="1" status="error">
                <sl-step title="步骤1" description="描述（可选）"></sl-step>
                <sl-step title="步骤2" description="描述（可选）"></sl-step>
                <sl-step title="步骤3" description="描述（可选）"></sl-step>
                <sl-step title="步骤4" description="描述（可选）"></sl-step>
            </sl-steps>
            <search-code :code="CodeError"></search-code>
        </div>
        <!--步骤运行错误结束-->

        <!--步骤运行错误开始-->
        <div class="detail-box">
            <h2>步骤运行错误</h2>
            <p class="code-left-line">Demo</p>
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
            <search-code :code="CodeError"></search-code>
        </div>
        <!--步骤运行错误结束-->

        <!--参数说明开始-->
        <div class="detail-box">
            <h2>API</h2>
            <p class="row-in-round">sl-steps</p>
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
                    <td>current</td>
                    <td>指定当前步骤，从 0 开始记数。在子 sl-step 元素中，可以通过 status 属性覆盖状态</td>
                    <td>number</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>direction</td>
                    <td>指定步骤条方向。目前支持水平（horizontal）和竖直（vertical）两种方向</td>
                    <td>string</td>
                    <td>horizontal</td>
                </tr>
                <tr>
                    <td>labelPlacement</td>
                    <td>指定标签放置位置，默认水平放图标下方，可选horizontal放图标右侧</td>
                    <td>string</td>
                    <td>vertical</td>
                </tr>
                <!--<tr>-->
                    <!--<td>progressDot</td>-->
                    <!--<td>点状步骤条，可以设置为一个 作用域插槽, labelPlacement 将强制为 vertical</td>-->
                    <!--<td>Boolean or slot="progressDot" slot-scope="{index, status, title, description, prefixCls})"</td>-->
                    <!--<td>false</td>-->
                <!--</tr>-->
                <tr>
                    <td>size</td>
                    <td> 指定大小，目前支持普通（default）和迷你（small）</td>
                    <td>string</td>
                    <td>default</td>
                </tr>
                <tr>
                    <td>status</td>
                    <td>指定当前步骤的状态，可选 wait process finish error</td>
                    <td>string</td>
                    <td>process</td>
                </tr>
                <tr>
                    <td>initial</td>
                    <td>起始序号，从 0 开始记数</td>
                    <td>number</td>
                    <td>0</td>
                </tr>
                </tbody>
            </table>

            <p class="row-in-round">sl-step</p>
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
                    <td>description</td>
                    <td>步骤的详情描述，可选</td>
                    <td>string 丨 slot</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>icon</td>
                    <td>步骤图标</td>
                    <td>string 丨 slot</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>status</td>
                    <td>指定状态。当不配置该属性时，会使用 sl-steps 的 current 来自动指定状态。可选：wait process finish error</td>
                    <td>string</td>
                    <td>wait</td>
                </tr>
                <tr>
                    <td>title</td>
                    <td>标题</td>
                    <td>string 丨 slot</td>
                    <td>-</td>
                </tr>
                </tbody>
            </table>
        </div>
        <!--参数说明结束-->
    </div>
</template>
<script>
    import {CodeBasic, CodeSmall, CodeVertical, CodeVerticalSmall, CodeError, CodeChange} from "./steps.code";

    export default {
        data() {
            return {
                CodeBasic,
                CodeSmall,
                CodeVertical,
                CodeVerticalSmall,
                CodeError,
                CodeChange,
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
        components: {
            SearchCode: () => import('../../common/searchCode/searchCode')
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
</style>