/* 基础面包屑 */
export const CodeBasic =
    `    <template>
        <div>
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
        </div>
    </template>`;

/* 分隔符 */
export const CodeSeparator =
    `    <template>
        <div>
            <sl-breadcrumb separator=">">
                <sl-breadcrumb-item>一级页面 </sl-breadcrumb-item>
                <sl-breadcrumb-item href="">二级页面 </sl-breadcrumb-item>
                <sl-breadcrumb-item>三级页面 </sl-breadcrumb-item>
            </sl-breadcrumb>
            <sl-breadcrumb>
                <span slot="separator" style="color: red">></span>
                <sl-breadcrumb-item>一级页面</sl-breadcrumb-item>
                <sl-breadcrumb-item href="">二级页面</sl-breadcrumb-item>
                <sl-breadcrumb-item>三级页面</sl-breadcrumb-item>
            </sl-breadcrumb>
        </div>
    </template>`;

/* 路由 */
export const CodeRouter =
    `    <template>
        <div>
            <sl-breadcrumb :routes="routes">
                <template slot="itemRender" slot-scope="{route, params, routes, paths}">
                    <span v-if="routes.indexOf(route) === routes.length - 1">
                        {{route.breadcrumbName}}
                    </span>
                    <router-link v-else :to="\`\${basePath}/\${paths.join('/')}\`">
                        {{route.breadcrumbName}}
                    </router-link>
                </template>
            </sl-breadcrumb>
        </div>
    </template>
    <script>
        export default {
            data() {
                return {
                     basePath: \`./breadcrumb\`,
                     routes: [{
                         path: 'index',
                         breadcrumbName: '首页'
                     }, {
                         path: 'first',
                         breadcrumbName: '一级面包屑'
                     }, {
                         path: 'second',
                         breadcrumbName: '当前页面'
                     }]
                }
            }
        }
    </script>`;