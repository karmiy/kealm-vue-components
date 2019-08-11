<template>
    <div>
        <header class="header clearfix">
            <router-link to="/component/quickstart" class="logo">
                <img src="../../assets/imgs/kealm.png" alt="Salus"/>
                <span class="ico-separate">|</span>
                <span>Kealm 组件库</span>
            </router-link>
        </header>
    </div>
</template>
<script>
    export default {
        name: 'Header',
        components: {
            Home: () => import('../../views/home/home')
        }
    }
</script>
