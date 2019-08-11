<template>
    <div class="page-box">
        <div class="detail-box">
            <h1>Breadcrumb&nbsp;面包屑</h1>
            <p>显示当前页面在系统层级结构中的位置，并能向上返回。</p>
        </div>

        <div class="detail-box">
            <h2>基础面包屑</h2>
            <p class="code-left-line">Demo</p>
            <sl-breadcrumb>
                <sl-breadcrumb-item>
                    一级页面
                </sl-breadcrumb-item>
                <sl-breadcrumb-item>
                    <a>二级页面</a>
                </sl-breadcrumb-item>
                <sl-breadcrumb-item>
                    三级页面
                </sl-breadcrumb-item>
            </sl-breadcrumb>
            <search-code :code="CodeBasic"></search-code>
        </div>

        <div class="detail-box">
            <h2>分隔符</h2>
            <p class="code-left-line">Demo</p>
            <p>使用 separator 可以自定义分隔符。</p>
            <div class="detail-block">
                <sl-breadcrumb separator=">">
                    <sl-breadcrumb-item>一级页面 </sl-breadcrumb-item>
                    <sl-breadcrumb-item href="">二级页面 </sl-breadcrumb-item>
                    <sl-breadcrumb-item>三级页面 </sl-breadcrumb-item>
                </sl-breadcrumb>
            </div>
            <sl-breadcrumb>
                <span slot="separator" style="color: red">></span>
                <sl-breadcrumb-item>一级页面</sl-breadcrumb-item>
                <sl-breadcrumb-item href="">二级页面</sl-breadcrumb-item>
                <sl-breadcrumb-item>三级页面</sl-breadcrumb-item>
            </sl-breadcrumb>
            <search-code :code="CodeSeparator"></search-code>
        </div>

        <div class="detail-box">
            <h2>路由</h2>
            <p class="code-left-line">Demo</p>
            <p>和 RouterLink 进行结合使用。</p>
            <sl-breadcrumb :routes="routes">
                <template slot="itemRender" slot-scope="{route, params, routes, paths}">
                    <span v-if="routes.indexOf(route) === routes.length - 1">
                        {{route.breadcrumbName}}
                    </span>
                    <router-link v-else :to="`${basePath}/${paths.join('/')}`">
                        {{route.breadcrumbName}}
                    </router-link>
                </template>
            </sl-breadcrumb>
            <search-code :code="CodeRouter"></search-code>
        </div>

        <!-- api说明 -->
        <div class="detail-box">
            <h2>API</h2>
            <p class="row-in-round">sl-breadcrumb</p>
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
                    <td>separator</td>
                    <td>分隔符自定义</td>
                    <td>string 丨 slot</td>
                    <td>'/'</td>
                </tr>
                <tr>
                    <td>itemRender</td>
                    <td>自定义链接函数，和 vue-router 配置使用， 也可使用slot="itemRender" 和 slot-scope="props"</td>
                    <td>({route, params, routes, paths}) => vNode	</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>params</td>
                    <td>路由的参数</td>
                    <td>object</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>routes</td>
                    <td>router 的路由栈信息</td>
                    <td>object[]</td>
                    <td>-</td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
    import {CodeBasic, CodeSeparator, CodeRouter} from "./breadcrumb.code";

    export default {
        data() {
            return {
                CodeBasic,
                CodeSeparator,
                CodeRouter,
                basePath: `./breadcrumb`,
                routes: [{
                    path: '../../home',
                    breadcrumbName: '首页'
                }, {
                    path: '../component',
                    breadcrumbName: '一级面包屑'
                }, {
                    path: './breadcrumb',
                    breadcrumbName: '当前页面'
                }]
            }
        },
        components: {
            SearchCode: () => import('../../common/searchCode/searchCode')
        }
    }
</script>