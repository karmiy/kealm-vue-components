<template>
    <div class="page-box">
        <div class="detail-box">
            <h1>Switch 开关</h1>
            <p>开关选择器。</p>
        </div>

        <!--基础开关-->
        <div class="detail-box">
            <h2>基础开关</h2>
            <p class="code-left-line">Demo</p>
            <sl-switch defaultChecked @change='onChange'/>
            <search-code :code="CodeBasic"></search-code>
        </div>
        <!--基础开关结束-->

        <!--开关禁用-->
        <div class="detail-box">
            <h2>开关禁用</h2>
            <p class="code-left-line">Demo</p>
            <sl-switch defaultChecked :disabled="true"/>
            <search-code :code="CodeDisable"></search-code>
        </div>
        <!--开关禁用结束-->

        <!--带文字与图标的开关-->
        <div class="detail-box">
            <h2>带文字与图标的开关</h2>
            <p class="code-left-line">Demo</p>
            <div class="detail-block">
                <sl-switch checkedChildren="开" unCheckedChildren="关" defaultChecked />
            </div>
            <div class="detail-block">
                <sl-switch checkedChildren="1" unCheckedChildren="0" />
            </div>
            <div class="detail-block">
                <sl-switch defaultChecked >
                    <i class="salus-icon-check-o" slot="checkedChildren" />
                    <i class="salus-icon-pop-close-o" slot="unCheckedChildren" />
                </sl-switch>
            </div>
            <search-code :code="CodeIcon"></search-code>
        </div>
        <!--带文字与图标的开关结束-->

        <!--开关大小-->
        <div class="detail-box">
            <h2>开关大小</h2>
            <p class="code-left-line">Demo</p>
            <div class="detail-block">
                <sl-switch defaultChecked/>
            </div>
            <div class="detail-block">
                <sl-switch size="small" defaultChecked/>
            </div>
            <search-code :code="CodeSize"></search-code>
        </div>
        <!--开关大小结束-->

        <!--开关执行中-->
        <div class="detail-box">
            <h2>开关执行中</h2>
            <p class="code-left-line">Demo</p>
            <div class="detail-block">
                <sl-switch loading defaultChecked/>
            </div>
            <div class="detail-block">
                <sl-switch size="small" loading/>
            </div>
            <search-code :code="CodeLoading"></search-code>
        </div>
        <!--开关执行中结束-->

        <!--开关-->
        <div class="detail-box">
            <h2>开关</h2>
            <p class="code-left-line">Demo</p>
            <div class="detail-block">
                <sl-switch :loading="loading" :checked="checked" @click="clickSwitch" />
            </div>
            <search-code :code="CodeLoading"></search-code>
        </div>
        <!--开关结束-->

        <!--参数说明开始-->
        <div class="detail-box">
            <h2>API</h2>
            <p class="row-in-round">sl-switch</p>
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
                    <td>autoFocus</td>
                    <td>组件自动获取焦点</td>
                    <td>boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>checked(v-model)</td>
                    <td>指定当前是否选中</td>
                    <td>boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>checkedChildren</td>
                    <td>选中时的内容</td>
                    <td>string|slot</td>
                    <td></td>
                </tr>
                <tr>
                    <td>defaultChecked</td>
                    <td>初始是否选中</td>
                    <td>boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>disabled</td>
                    <td>是否禁用</td>
                    <td>boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>loading</td>
                    <td>加载中的开关</td>
                    <td>boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>size</td>
                    <td>开关大小，可选值：default small</td>
                    <td>string</td>
                    <td>default</td>
                </tr>
                <tr>
                    <td>unCheckedChildren</td>
                    <td>非选中时的内容</td>
                    <td>string|slot</td>
                    <td></td>
                </tr>
                </tbody>
            </table>

            <p class="row-in-round">sl-switch 事件</p>
            <table class="salus-table salus-table-striped salus-table-hover">
                <thead>
                <tr>
                    <th width="15%">事件名称</th>
                    <th width="70%">说明</th>
                    <th width="15%">回调参数</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>change</td>
                    <td>变化时回调函数</td>
                    <td>Function(checked:Boolean)</td>
                </tr>
                </tbody>
            </table>

            <p class="row-in-round">sl-switch 方法</p>
            <table class="salus-table salus-table-striped salus-table-hover">
                <thead>
                    <tr>
                        <th width="50%">名称</th>
                        <th width="50%">描述</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>blur()</td>
                        <td>移除焦点</td>
                    </tr>
                    <tr>
                        <td>focus()</td>
                        <td>获取焦点</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!--参数说明结束-->
    </div>
</template>
<script>
    import { CodeBasic, CodeDisable, CodeIcon, CodeSize, CodeLoading, CodeBegin } from "./switch.code";

    export default {
        data() {
            return {
                CodeBasic,
                CodeDisable,
                CodeIcon,
                CodeSize,
                CodeLoading,
                CodeBegin,
                loading: false,
                checked: false,
            }
        },
        components: {
            SearchCode: () => import('../../common/searchCode/searchCode')
        },
        methods: {
            onChange(checked){
                console.log(`switch to ${checked}`);
            },
            clickSwitch() {
                if (!this.loading) {
                    this.loading = true;
                    setTimeout(() => {
                        this.checked = !this.checked;
                        this.loading = false;
                    }, 3000);
                }
            }
        },
    }
</script>