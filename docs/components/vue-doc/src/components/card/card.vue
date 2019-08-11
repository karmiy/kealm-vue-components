<template>
    <div class="page-box page-select ng-scope">
        <div class="detail-box">
            <h1>Card 卡片/面板</h1>
            <p>卡片容器，可承载文字、列表、图片、段落，常用于后台概览页面。</p>
        </div>

        <!--基础卡片-->
        <div class="detail-box">
            <h2>基础卡片</h2>
            <p>包含标题、内容和操作区域。</p>
            <p class="code-left-line">Demo</p>
            <sl-card title="Card Title">
                <a href="#" slot="extra">more</a>
                <p>card content</p>
                <p>card content</p>
                <p>card content</p>
            </sl-card>
            <search-code :code="CodeBasic"></search-code>
        </div>
        <!--基础卡片结束-->

        <!--卡片边框-->
        <div class="detail-box">
            <h2>卡片无边框</h2>
            <p>在灰色背景上使用无边框的卡片</p>
            <p class="code-left-line">Demo</p>
            <div class="salus-card-no-border-demo">
                <sl-card style="width: 300px;" title="Card Title" :bordered="false">
                    <a href="#" slot="extra">more</a>
                    <p>card content</p>
                    <p>card content</p>
                    <p>card content</p>
                </sl-card>
            </div>
            <search-code :code="CodeBorder"></search-code>
        </div>
        <!--卡片边框结束-->

        <!--简洁卡片-->
        <div class="detail-box">
            <h2>简洁卡片</h2>
            <p>只包含内容区域。</p>
            <p class="code-left-line">Demo</p>
            <sl-card style="width: 300px;">
                <p>card content</p>
                <p>card content</p>
                <p>card content</p>
            </sl-card>
            <search-code :code="CodeSimple"></search-code>
        </div>
        <!--简洁卡片结束-->

        <!--带图片的卡片-->
        <div class="detail-box">
            <h2>带图片的卡片</h2>
            <p>可配置定义更丰富的内容展示。</p>
            <p class="code-left-line">Demo</p>
            <sl-card style="width: 300px">
                <img alt="example" src="../../assets/imgs/card-example.png" slot="cover"/>
                <sl-card-meta timeInfo="2018-08-08 18:00:00">
                    <template slot="description">description</template>
                    <a href="#" slot="metaExtra">more</a>
                </sl-card-meta>
            </sl-card>
            <search-code :code="CodeImg"></search-code>
        </div>
        <!--带图片的卡片结束-->

        <!--卡片阴影-->
        <div class="detail-box">
            <h2>卡片阴影</h2>
            <p>分为默认阴影、鼠标悬浮时阴影。</p>
            <p class="code-left-line">Demo</p>
            <div class="detail-block">
                <sl-card style="width: 300px;" defaultShadow>
                    <p>card content</p>
                    <p>card content</p>
                    <p>card content</p>
                </sl-card>
            </div>
            <div class="detail-block">
                <sl-card style="width: 300px;" hoverable>
                    <p>card content</p>
                    <p>card content</p>
                    <p>card content</p>
                </sl-card>
            </div>
            <search-code :code="CodeShadow"></search-code>
        </div>
        <!--卡片阴影结束-->

        <!--API-->
        <div class="detail-box">
            <h2>API</h2>
            <p class="row-in-round">sl-card</p>
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
                    <td>actions</td>
                    <td>卡片操作组，位置在卡片底部</td>
                    <td>slots</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>activeTabKey</td>
                    <td>当前激活页签的 key</td>
                    <td>string</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>defaultActiveTabKey</td>
                    <td>初始化选中页签的 key，如果没有设置 activeTabKey</td>
                    <td>string</td>
                    <td>第一个页签</td>
                </tr>
                <tr>
                    <td>headStyle</td>
                    <td>自定义标题区域样式</td>
                    <td>object</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>bodyStyle</td>
                    <td>内容区域自定义样式</td>
                    <td>object</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>bordered</td>
                    <td>是否有边框</td>
                    <td>boolean</td>
                    <td>true</td>
                </tr>
                <tr>
                    <td>cover</td>
                    <td>卡片封面</td>
                    <td>slot</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>extra</td>
                    <td>卡片右上角的操作区域</td>
                    <td>string 丨 slot</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>hoverable</td>
                    <td>鼠标移过时可浮起</td>
                    <td>boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>defaultShadow</td>
                    <td>默认阴影</td>
                    <td>boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>loading</td>
                    <td>当卡片内容还在加载中时，可以用 loading 展示一个占位</td>
                    <td>boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>title</td>
                    <td>卡片标题</td>
                    <td>string｜slot</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>type</td>
                    <td>卡片类型，可设置为 inner 或 不设置</td>
                    <td>string</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>tabList</td>
                    <td>页签标题列表, 可以通过scopedSlots属性自定义tab</td>
                    <td>Array<{key: string, tab: any, scopedSlots: {tab: 'XXX'}}></td>
                    <td>-</td>
                </tr>
                </tbody>
            </table>
            <p class="row-in-round">事件</p>
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
                    <td>tabChange</td>
                    <td>页签切换的回调</td>
                    <td>(key) => void</td>
                </tr>
                </tbody>
            </table>
            <p class="row-in-round">sl-card-meta</p>
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
                    <td>avatar</td>
                    <td>头像/图标</td>
                    <td>slot</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>description</td>
                    <td>描述内容</td>
                    <td>string 丨 slot</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>title</td>
                    <td>标题内容</td>
                    <td>string 丨 slot</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>timeInfo</td>
                    <td>时间信息</td>
                    <td>string</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>metaExtra</td>
                    <td>元数据中的操作区域</td>
                    <td>string 丨 slot</td>
                    <td>-</td>
                </tr>
                </tbody>
            </table>
        </div>
        <!--API-->
    </div>
</template>
<script>
    import {CodeBasic, CodeBorder, CodeSimple, CodeImg, CodeShadow} from "./card.code";

    export default {
        name: 'Card',
        data() {
            return {
                CodeBasic,
                CodeBorder,
                CodeSimple,
                CodeImg,
                CodeShadow
            }
        },
        components: {
            SearchCode: () => import('../../common/searchCode/searchCode')
        }

    }
</script>
<style scoped>
    .salus-card-no-border-demo {
        background: #F3F6FB;
        border: 1px solid rgba(194, 202, 216, 0.4);
        padding: 15px;
        border-radius: 4px;
    }
</style>