<template>
    <div class="page-box">
        <!-- 标题头部 -->
        <div class="detail-box">
            <h1>Button&nbsp;按钮</h1>
            <p>按钮用于开始一个即时操作。</p>
        </div>
        <!-- 标题头部结束 -->
        <!--基础按钮类型-->
        <div class="detail-box">
            <h2>基础按钮类型</h2>
            <p class="code-left-line">Demo</p>
            <div class="detail-block">
                <sl-button type="primary">主按钮</sl-button>
                <sl-button class="item-space">默认按钮</sl-button>
                <sl-button type="dashed" class="item-space">虚线按钮</sl-button>
                <sl-button type="link" class="item-space">文字按钮</sl-button>
                <sl-button type="danger" class="item-space">危险按钮</sl-button>
                <sl-button type="success" class="item-space">成功按钮</sl-button>
            </div>
            <search-code :code="CodeBasic"></search-code>
        </div>
        <!--基础按钮类型结束-->

        <!--按钮禁用-->
        <div class="detail-box">
            <h2>按钮禁用</h2>
            <p class="code-left-line">Demo</p>
            <div class="detail-block">
                <sl-button>默认按钮</sl-button>
                <sl-button disabled class="item-space">默认按钮(disabled)</sl-button>
            </div>
            <div class="detail-block">
                <sl-button type="primary">主按钮</sl-button>
                <sl-button disabled type="primary" class="item-space">主按钮(disabled)</sl-button>
            </div>
            <search-code :code="CodeDisable"></search-code>
        </div>
        <!--按钮禁用结束-->

        <!--按钮大小-->
        <div class="detail-box">
            <h2>按钮大小</h2>
            <p class="code-left-line">Demo</p>
            <div class="detail-block">
                <sl-button type="primary" size="small">主按钮(small)</sl-button>
                <sl-button type="primary" size="middle" class="item-space">主按钮(middle)</sl-button>
                <sl-button type="primary" class="item-space">主按钮(default)</sl-button>
            </div>
            <search-code :code="CodeSize"></search-code>
        </div>
        <!--按钮大小结束-->

        <!--满宽按钮-->
        <div class="detail-box">
            <h2>满宽按钮</h2>
            <p class="code-left-line">Demo</p>
            <div class="detail-block">
                <sl-button full>默认按钮(full)</sl-button>
                <sl-button type="primary" full style="margin-top: 10px">主按钮(full)</sl-button>
            </div>
            <search-code :code="CodeFull"></search-code>
        </div>
        <!--满宽按钮-->

        <!--图标按钮-->
        <div class="detail-box">
            <h2>图标按钮</h2>
            <p class="code-left-line">Demo</p>
            <div class="detail-block">
                <sl-button icon><i class="salus-icon-search-o"></i></sl-button>
                <sl-button shape="circle" icon class="item-space"><i class="salus-icon-search-o"></i>
                </sl-button>
                <sl-button type="primary" icon class="item-space"><i
                        class="salus-icon-search-o"></i>按钮
                </sl-button>
            </div>
            <search-code :code="CodeIcon"></search-code>
        </div>
        <!--图标按钮结束-->

        <!--按钮组-->
        <div class="detail-box">
            <h2>按钮组</h2>
            <p class="code-left-line">Demo</p>
            <div class="detail-block">
                <sl-button-group gap>
                    <sl-button type="primary">按钮(primary)</sl-button>
                    <sl-button class="item-space">按钮(secondary)</sl-button>
                    <sl-button icon>
                        按钮(more actions)<i class="salus-icon-triangle-down"></i>
                    </sl-button>
                </sl-button-group>
            </div>
            <div class="detail-block">
                <sl-button-group>
                    <sl-button>按钮</sl-button>
                    <sl-button type="primary">按钮</sl-button>
                </sl-button-group>
            </div>
            <div class="detail-block">
                <sl-button-group>
                    <sl-button icon><i class="salus-icon-lock-o"></i></sl-button>
                    <sl-button type="primary" icon><i class="salus-icon-unlock-o"></i>
                    </sl-button>
                </sl-button-group>
            </div>
            <div class="detail-block">
                <sl-button-group size="small">
                    <sl-button>按钮</sl-button>
                    <sl-button type="primary">按钮</sl-button>
                </sl-button-group>
            </div>
            <search-code :code="CodeGroup"></search-code>
        </div>

        <div class="detail-box">
            <h2>加载按钮</h2>
            <p class="code-left-line">Demo</p>
            <div class="detail-block">
                <sl-button type="primary" :loading="trueVal">加载</sl-button>
                <sl-button type="primary" :loading="isLoading"
                              @click="enterLoading" class="item-space">点击加载</sl-button>
            </div>
            <search-code :code="CodeLoad"></search-code>
        </div>
        <!--代码展示部分结束-->

        <!--api展示-->
        <div class="detail-box">
            <h2>API</h2>
            <p class="row-in-round">sl-button</p>
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
                    <td>loading</td>
                    <td>设置按钮载入状态</td>
                    <td>boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>size</td>
                    <td>设置按钮大小，可选值为 small middle 或者 default</td>
                    <td>string</td>
                    <td>default</td>
                </tr>
                <tr>
                    <td>type</td>
                    <td>设置按钮类型，可选值为 primary dashed link danger success或者default</td>
                    <td>string</td>
                    <td>default</td>
                </tr>
                <tr>
                    <td>full</td>
                    <td>将按钮宽度调整为其父宽度的选项</td>
                    <td>boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>icon</td>
                    <td>是否为含图标与文字的按钮</td>
                    <td>boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>shape</td>
                    <td>设置按钮形状，可选值为 circle 或者 default</td>
                    <td>string</td>
                    <td>default</td>
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
                        <td>click</td>
                        <td>点击按钮时的回调</td>
                        <td>(event) => void</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <p class="row-in-round">sl-button-group</p>
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
                    <td>gap</td>
                    <td>是否为有间隔的按钮组</td>
                    <td>boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>size</td>
                    <td>设置按钮大小，可选值为 small middle 或者 default</td>
                    <td>string</td>
                    <td>default</td>
                </tr>
                </tbody>
            </table>
        </div>
        <!--api展示结束-->

    </div>
</template>
<script>
    import {CodeBasic, CodeDisable, CodeSize, CodeFull, CodeIcon, CodeGroup, CodeLoad} from "./button.code";

    export default {
        name: 'Button',
        data() {
            return {
                trueVal: true,
                isLoading: false,
                CodeBasic,
                CodeDisable,
                CodeSize,
                CodeFull,
                CodeIcon,
                CodeGroup,
                CodeLoad
            }
        },
        components: {
            SearchCode: () => import('../../common/searchCode/searchCode')
        },
        methods: {
            enterLoading() {
                this.isLoading = true;
                setTimeout(() => {
                    this.isLoading = false;
                }, 3000)
            }
        }
    }
</script>