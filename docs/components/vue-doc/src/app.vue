<template>
    <div>
        <Header></Header>
        <div  class="router-progress" v-if="isShowProgress"></div>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    data(){
        return {
            isShowProgress: false
        }
    },
    components: {
        Header: () => import('./view-components/header/header'),
        // Home: () => import('./views/home/home'),
    },
    watch: {
        $route: {
            handler: function(val, oldVal){
                this.isShowProgress === true && (this.isShowProgress = false);
                setTimeout(()=>{
                    this.isShowProgress = true;
                    clearTimeout(this.timer);
                    this.timer = setTimeout(()=> {
                        this.isShowProgress = false;
                        //console.log(this.isShowProgress);
                    },3000);
                },0);
            },
            // 深度观察监听
            deep: true
        }
    }
}
</script>
<style scoped>
    .router-progress{
        position: absolute;
        top: 61px;
        width: 0;
        opacity: 1;
        border-bottom: 3px solid #af85b8;
        /*transition: width .5s ease-in,opacity .5s .5s ease-out;*/
        animation: show 3s both;
    }
    @keyframes show {
        0%{
            width: 0;
            opacity: 1;
        }
        100%{
            width: 100%;
            /*opacity: 0;*/
        }
    }
    @keyframes showDiv {
        0%{
            opacity: 0;
        }
        100%{
            opacity: 1;
        }
    }
    .showDivRouter{
        animation: showDiv 3s both;
    }
    .router-progress.showProgress{
        width: 100%;
    }
</style>
