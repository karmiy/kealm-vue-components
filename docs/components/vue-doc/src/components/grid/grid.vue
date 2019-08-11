<template>
    <div class="page-box">
        <!-- 标题头部 -->
        <div class="detail-box">
            <h1>Grid&nbsp;栅格</h1>
            <p>24 栅格系统。</p>
        </div>
        <!-- 标题头部结束 -->

        <!--基础栅格部分-->
        <div class="detail-box">
            <h2>基础栅格 </h2>
            <p class="code-left-line">Demo</p>
            <sl-row>
                <sl-col :span="12" class="salue-panel">col-12</sl-col>
                <sl-col :span="12" class="salue-panel demo-col-3">col-12</sl-col>
            </sl-row>
            <sl-row>
                <sl-col :span="8" class="salue-panel">col-8</sl-col>
                <sl-col :span="8" class="salue-panel demo-col-3">col-8</sl-col>
                <sl-col :span="8" class="salue-panel">col-8</sl-col>
            </sl-row>
            <sl-row>
                <sl-col :span="6" class="salue-panel">col-6</sl-col>
                <sl-col :span="6" class="salue-panel demo-col-3">col-6</sl-col>
                <sl-col :span="6" class="salue-panel">col-6</sl-col>
                <sl-col :span="6" class="salue-panel demo-col-3">col-6</sl-col>
            </sl-row>
            <search-code :code="CodeBasic"></search-code>
        </div>
        <!--基础栅格部分结束-->

        <!--区块间隔部分-->
        <div class="detail-box">
            <h2>区块间隔</h2>
            <p class="code-left-line">Demo</p>
            <div class="detail-block">
                <sl-row :gutter="16">
                    <sl-col :span="6">
                        <div class="salue-panel">col-6</div>
                    </sl-col>
                    <sl-col :span="6">
                        <div class="salue-panel demo-col-3">col-6</div>
                    </sl-col>
                    <sl-col :span="6">
                        <div class="salue-panel">col-6</div>
                    </sl-col>
                    <sl-col :span="6">
                        <div class="salue-panel demo-col-3">col-6</div>
                    </sl-col>
                </sl-row>
                <sl-row :gutter="{ xs: 8, sm: 8, md: 8, lg: 8, xl: 8, xxl: 8 }">
                    <sl-col :span="6">
                        <div class="salue-panel">col-6</div>
                    </sl-col>
                    <sl-col :span="6">
                        <div class="salue-panel demo-col-3">col-6</div>
                    </sl-col>
                    <sl-col :span="6">
                        <div class="salue-panel">col-6</div>
                    </sl-col>
                    <sl-col :span="6">
                        <div class="salue-panel demo-col-3">col-6</div>
                    </sl-col>
                </sl-row>
            </div>
            <search-code :code="CodeGutter"></search-code>
        </div>
        <!--区块间隔部分结束-->

        <!--左右偏移部分-->
        <div class="detail-box">
            <h2>左右偏移</h2>
            <p class="code-left-line">Demo</p>
            <div>
                <sl-row>
                    <sl-col :span="8">
                        <div class="salue-panel">col8</div>
                    </sl-col>
                    <sl-col :span="8" :offset="8">
                        <div class="salue-panel demo-col-3">col8</div>
                    </sl-col>
                </sl-row>
            </div>
            <search-code :code="CodeOffset"></search-code>
        </div>
        <!--左右偏移部分结束-->

        <!--Flex 布局部分-->
        <div class="detail-box">
            <h2>Flex 布局</h2>
            <p class="code-left-line">Demo</p>
            <div>
                <p class="detail-box-p">sub-element align left</p>
                <sl-row type="flex" justify="start">
                    <sl-col :span="4" class="salue-panel">col-4</sl-col>
                    <sl-col :span="4" class="salue-panel demo-col-3">col-4</sl-col>
                    <sl-col :span="4" class="salue-panel">col-4</sl-col>
                    <sl-col :span="4" class="salue-panel demo-col-3">col-4</sl-col>
                </sl-row>
                <p class="detail-box-p">sub-element align center</p>
                <sl-row type="flex" justify="center">
                    <sl-col :span="4" class="salue-panel">col-4</sl-col>
                    <sl-col :span="4" class="salue-panel demo-col-3">col-4</sl-col>
                    <sl-col :span="4" class="salue-panel">col-4</sl-col>
                    <sl-col :span="4" class="salue-panel demo-col-3">col-4</sl-col>
                </sl-row>
                <p class="detail-box-p">sub-element align right</p>
                <sl-row type="flex" justify="end">
                    <sl-col :span="4" class="salue-panel">col-4</sl-col>
                    <sl-col :span="4" class="salue-panel demo-col-3">col-4</sl-col>
                    <sl-col :span="4" class="salue-panel">col-4</sl-col>
                    <sl-col :span="4" class="salue-panel demo-col-3">col-4</sl-col>
                </sl-row>
                <p class="detail-box-p">sub-element monospaced arrangement</p>
                <sl-row type="flex" justify="space-between">
                    <sl-col :span="4" class="salue-panel">col-4</sl-col>
                    <sl-col :span="4" class="salue-panel demo-col-3">col-4</sl-col>
                    <sl-col :span="4" class="salue-panel">col-4</sl-col>
                    <sl-col :span="4" class="salue-panel demo-col-3">col-4</sl-col>
                </sl-row>
                <p class="detail-box-p">sub-element align full</p>
                <sl-row type="flex" justify="space-around">
                    <sl-col :span="4" class="salue-panel">col-4</sl-col>
                    <sl-col :span="4" class="salue-panel demo-col-3">col-4</sl-col>
                    <sl-col :span="4" class="salue-panel">col-4</sl-col>
                    <sl-col :span="4" class="salue-panel demo-col-3">col-4</sl-col>
                </sl-row>
            </div>
            <search-code :code="CodeFlex"></search-code>
        </div>
        <!--Flex 布局部分结束-->

        <!--Flex 对齐部分-->
        <div class="detail-box">
            <h2>Flex 对齐</h2>
            <p class="code-left-line">Demo</p>
            <p class="detail-box-p"> Align Top</p>
            <sl-row type="flex" justify="center" align="top">
                <sl-col :span="4"><p style="height:100px;" class="salue-panel">col-4</p></sl-col>
                <sl-col :span="4"><p style="height:50px;" class="salue-panel demo-col-3">col-4</p></sl-col>
                <sl-col :span="4"><p style="height:120px;" class="salue-panel">col-4</p></sl-col>
                <sl-col :span="4"><p style="height:80px;" class="salue-panel demo-col-3">col-4</p></sl-col>
            </sl-row>
            <p class="detail-box-p">Align Center</p>
            <sl-row type="flex" justify="space-around" align="middle">
                <sl-col :span="4"><p style="height:100px;" class="salue-panel">col-4</p></sl-col>
                <sl-col :span="4"><p style="height:50px;" class="salue-panel demo-col-3">col-4</p></sl-col>
                <sl-col :span="4"><p style="height:120px;" class="salue-panel">col-4</p></sl-col>
                <sl-col :span="4"><p style="height:80px;" class="salue-panel demo-col-3">col-4</p></sl-col>
            </sl-row>
            <p class="detail-box-p">Align Bottom</p>
            <sl-row type="flex" justify="space-between" align="bottom">
                <sl-col :span="4"><p style="height:100px;" class="salue-panel">col-4</p></sl-col>
                <sl-col :span="4"><p style="height:50px;" class="salue-panel demo-col-3">col-4</p></sl-col>
                <sl-col :span="4"><p style="height:120px;" class="salue-panel">col-4</p></sl-col>
                <sl-col :span="4"><p style="height:80px;" class="salue-panel demo-col-3">col-4</p></sl-col>
            </sl-row>
            <search-code :code="CodeFlexAlign"></search-code>
        </div>
        <!--Flex 对齐部分结束-->

        <!--Flex 排序部分-->
        <div class="detail-box">
            <h2>Flex 排序</h2>
            <p class="code-left-line">Demo</p>
            <sl-row type="flex">
                <sl-col :span="6" :order="order" v-for="(order,index) in orderList" class="salue-panel" :key="index">
                    {{ index + 1 }} col-order-{{ order }}
                </sl-col>
            </sl-row>
            <search-code :code="CodeFlexOrder"></search-code>
        </div>
        <!--Flex 排序部分结束-->

        <!--响应式布局部分-->
        <div class="detail-box">
            <h2>响应式布局</h2>
            <p class="code-left-line">Demo</p>
            <sl-row>
                <sl-col :xs="2" :sm="4" :md="6" :lg="8" :xl="10" class="salue-panel">
                    Col
                </sl-col>
                <sl-col :xs="20" :sm="16" :md="12" :lg="8" :xl="4" class="salue-panel demo-col-3">
                    Col
                </sl-col>
                <sl-col :xs="2" :sm="4" :md="6" :lg="8" :xl="10" class="salue-panel">
                    Col
                </sl-col>
            </sl-row>
            <search-code :code="CodeResponsive"></search-code>
        </div>
        <!--响应式布局部分结束-->

        <!--api展示-->
        <div class="detail-box">
            <h2>API</h2>
            <p class="row-in-round">sl-row</p>
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
                    <td>align</td>
                    <td>flex 布局下的垂直对齐方式：top middle bottom</td>
                    <td>string</td>
                    <td>top</td>
                </tr>
                <tr>
                    <td>gutter</td>
                    <td>栅格间隔，可以写成像素值或支持响应式的对象写法 { xs: 8, sm: 16, md: 24}</td>
                    <td>number/object</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>justify</td>
                    <td>flex 布局下的水平排列方式：start end center space-around space-between</td>
                    <td>string</td>
                    <td>start</td>
                </tr>
                <tr>
                    <td>type</td>
                    <td>布局模式，可选 flex，现代浏览器 下有效</td>
                    <td>string</td>
                    <td></td>
                </tr>
                </tbody>
            </table>
            <p class="row-in-round">sl-col</p>
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
                    <td>offset</td>
                    <td>栅格左侧的间隔格数，间隔内不可以有栅格</td>
                    <td>number</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>order</td>
                    <td>栅格顺序，flex 布局模式下有效</td>
                    <td>number</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>pull</td>
                    <td>栅格向左移动格数</td>
                    <td>number</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>push</td>
                    <td>栅格向右移动格数</td>
                    <td>number</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>span</td>
                    <td>栅格占位格数，为 0 时相当于 display: none</td>
                    <td>number</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>xs</td>
                    <td><576px 响应式栅格，可为栅格数或一个包含其他属性的对象</td>
                    <td>number|Object</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>sm</td>
                    <td>≥576px 响应式栅格，可为栅格数或一个包含其他属性的对象</td>
                    <td>number|Object</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>md</td>
                    <td>≥768px 响应式栅格，可为栅格数或一个包含其他属性的对象</td>
                    <td>number|Object</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>lg</td>
                    <td>≥992px 响应式栅格，可为栅格数或一个包含其他属性的对象</td>
                    <td>number|Object</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>xl</td>
                    <td>≥1200px 响应式栅格，可为栅格数或一个包含其他属性的对象</td>
                    <td>number|Object</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>xxl</td>
                    <td>≥1600px 响应式栅格，可为栅格数或一个包含其他属性的对象</td>
                    <td>number|Object</td>
                    <td>-</td>
                </tr>
                </tbody>
            </table>
        </div>
        <!--api展示结束-->
    </div>
</template>
<script>
    import {
        CodeBasic,
        CodeGutter,
        CodeOffset,
        CodeFlex,
        CodeFlexAlign,
        CodeFlexOrder,
        CodeResponsive
    } from './grid.code'

    export default {
        name: 'Grid',
        data() {
            return {
                CodeBasic,
                CodeGutter,
                CodeOffset,
                CodeFlex,
                CodeFlexAlign,
                CodeFlexOrder,
                orderList: [4, 3, 2, 1],
                CodeResponsive
            }
        },
        components: {
            SearchCode: () => import('../../common/searchCode/searchCode')
        }
    }
</script>