<template>
    <div class="page-box">
        <div class="detail-box">
            <h1>快速上手</h1>
        </div>

        <div class="detail-box">
            <h2>安装</h2>

            <h3>方法1</h3>
            <p>常规npm源安装</p>
            <br>
            <search-code :code="codeInstall1" :expand="true"></search-code>

            <br>
            <h3>方法2</h3>
            <p>使用cnpm源快速安装</p>
            <search-code :code="codeInstall2" :expand="true"></search-code>
        </div>

        <div class="detail-box">
            <h2>全局引入</h2>
            <p>在入口文件中，如main.js中引入组件与样式，并使用Vue.use安装组件库</p>
            <search-code :code="codeUse1" :expand="true"></search-code>
        </div>

        <div class="detail-box">
            <h2>按需引入</h2>
            <p>当然如果你的项目中仅仅只使用到组件库的部分组件，我们不建议你导入整个组件库，而是根据需要按需引入。</p>
            <search-code :code="codeUse2" :expand="true"></search-code>
        </div>
    </div>
</template>
<script>
    import { codeInstall1, codeInstall2, codeUse1, codeUse2 } from './quickstart.code';
    export default {
        name: 'InputNumber',
        components: {
            SearchCode: () => import('../../common/searchCode/searchCode')
        },
        data() {
            return {
                codeInstall1,
                codeInstall2,
                codeUse1,
                codeUse2,
            }
        },
        methods: {
        }
    }
</script>
