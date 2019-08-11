<template>
    <div class="page-box">
        <!-- 标题头部 -->
        <div class="detail-box">
            <h1>Pagination&nbsp;分页</h1>
            <p>采用分页的形式分隔长列表，每次只加载一个页面。分页组件由类似按钮风格的链接并排排列组成。</p>
        </div>
        <!-- 标题头部结束 -->

        <!--基础分页-->
        <div class="detail-box">
            <h2>基础分页</h2>
            <p class="code-left-line">Demo</p>
            <div class="detail-block salus-clearfix">
                <sl-pagination v-model="current" :total="50"></sl-pagination>
            </div>
            <search-code :code="CodeBasic"></search-code>
        </div>
        <!--基础分页结束-->

        <!--带跳转的分页-->
        <div class="detail-box">
            <h2>快速跳转</h2>
            <p>快速跳转到某一页。</p>
            <p class="code-left-line">Demo</p>
            <div class="detail-block salus-clearfix">
                <sl-pagination showQuickJumper :defaultCurrent="2" :total="500" @change="onChange"/>
            </div>
            <search-code :code="CodeJumper"></search-code>
        </div>
        <!--带跳转的分页结束-->

        <!--改变显示条数-->
        <!--<div class="detail-box">-->
            <!--<h2>改变显示条数</h2>-->
            <!--<p>改变每页显示条目数。</p>-->
            <!--<p class="code-left-line">Demo</p>-->
            <!--<div class="detail-block salus-clearfix">-->
                <!--<sl-pagination showSizeChanger @showSizeChange="onShowSizeChange" :defaultCurrent="3" :total="500" />-->
            <!--</div>-->
            <!--<search-code :code="CodeShowSizeChange"></search-code>-->
        <!--</div>-->
        <!--改变显示条数结束-->

        <!--显示总数的分页-->
        <div class="detail-box">
            <h2>显示总数</h2>
            <p>通过自定义模板展示数据总数。</p>
            <p class="code-left-line">Demo</p>
            <div class="detail-block salus-clearfix">
                <sl-pagination :total="85" :defaultCurrent="1"
                        :showTotal="(total, range) => `当前${range[0]}-${range[1]}条，共${total}条`"/>
            </div>
            <search-code :code="CodeShowTotal"></search-code>
        </div>
        <!--显示总数的分页-->

        <!--简单分页-->
        <div class="detail-box">
            <h2>简单分页</h2>
            <!--<p>仅包含。</p>-->
            <p class="code-left-line">Demo</p>
            <div class="detail-block salus-clearfix">
                <sl-pagination simple :defaultCurrent="2" :total="50" />
            </div>
            <search-code :code="CodeSimple"></search-code>
        </div>
        <!--简单分页结束-->

        <!--参数说明-->
        <div class="detail-box">
            <h2>API</h2>
            <p class="row-in-round">sl-pagination</p>
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
                    <td>current(v-model)</td>
                    <td>当前页数</td>
                    <td>number</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>defaultCurrent</td>
                    <td>默认的当前页数</td>
                    <td>number</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>defaultPageSize</td>
                    <td>默认的每页条数</td>
                    <td>number</td>
                    <td>10</td>
                </tr>
                <tr>
                    <td>itemRender</td>
                    <td>用于自定义页码的结构，可用于优化 SEO</td>
                    <td>(page, type: 'page' | 'prev' | 'next', originalElement) => vNode</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>pageSize(.sync)	</td>
                    <td>每页条数</td>
                    <td>number</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>pageSizeOptions</td>
                    <td>指定每页可以显示多少条</td>
                    <td>string[]</td>
                    <td>['10', '20', '30', '40']</td>
                </tr>
                <tr>
                    <td>showQuickJumper</td>
                    <td>是否可以快速跳转至某页</td>
                    <td>boolean</td>
                    <td>false</td>
                </tr>
                <!--<tr>-->
                    <!--<td>showSizeChanger</td>-->
                    <!--<td>是否可以改变 pageSize</td>-->
                    <!--<td>boolean</td>-->
                    <!--<td>false</td>-->
                <!--</tr>-->
                <tr>
                    <td>hideOnSinglePage</td>
                    <td>只有一页时是否隐藏分页器</td>
                    <td>boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>showTotal</td>
                    <td>用于显示数据总量和当前数据顺序</td>
                    <td>Function(total, range)</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>simple</td>
                    <td>当添加该属性时，显示为简单分页</td>
                    <td>boolean</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>size</td>
                    <td>当为「small」时，是小尺寸分页</td>
                    <td>string</td>
                    <td>""</td>
                </tr>
                <tr>
                    <td>total</td>
                    <td>数据总数</td>
                    <td>number</td>
                    <td>0</td>
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
                        <td>change</td>
                        <td>页码改变的回调，参数是改变后的页码及每页条数</td>
                        <td>Function(page, pageSize)</td>
                    </tr>
                    <!--<tr>-->
                        <!--<td>showSizeChange</td>-->
                        <!--<td>pageSize 变化的回调</td>-->
                        <!--<td>Function(current, size)</td>-->
                    <!--</tr>-->
                    </tbody>
                </table>
            </div>
        </div>
        <!--参数说明结束-->
    </div>
</template>
<script>
    import {CodeBasic, CodeJumper,CodeShowTotal, CodeSimple, CodeShowSizeChange} from "./pagination.code";

    export default {
        data() {
            return {
                CodeBasic,
                current: 2,
                CodeJumper,
                CodeShowTotal,
                CodeSimple,
                CodeShowSizeChange
            }
        },
        components: {
            SearchCode: () => import('../../common/searchCode/searchCode')
        },
        methods: {
            onChange(pageNumber) {
                console.log('Page: ', pageNumber);
            },
            // onShowSizeChange(current, pageSize) {
            //     console.log(current, pageSize);
            // }
        }
    }
</script>