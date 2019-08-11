<template>
    <div class="component-container clearfix">
        <div class="layout salus-scrollbar">
            <router-view></router-view>
        </div>
        <sidebar class="sidebar salus-scrollbar"></sidebar>
    </div>
</template>
<script>
    export default {
        name: 'ComponentView',
        components: {
            Sidebar: () => import('../../view-components/sidebar/sidebar')
        }
    }
</script>
<style scoped>
    .layout {
        position: relative;
    }
</style>