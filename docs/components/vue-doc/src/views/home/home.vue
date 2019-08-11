<template>
    <div>
        <div class="home">
            <div class="banner text-center">
                <div class="text-container">
                    <div class="title"><span class="text-project">Salus</span><span class="ico-separate">-</span>让WEB开发更规范</div>
                    <p>一款组件化的标准前端框架，让web开发更迅速、简单</p>
                </div>
            </div>
            <div class="container">
                <div class="explain-box">
                    <h3 class="text-center">统一规范、提高开发设计效能</h3>
                    <ul class="box-list">
                        <li>
                            <div class="list-img"><img src="../../assets/imgs/home/01.png" alt=""/></div>
                            <p class="text-center">降低各方面沟通成本<br/>统一设计标准及工作方法</p>
                        </li>
                        <li>
                            <div class="list-img"><img src="../../assets/imgs/home/02.png" alt=""/></div>
                            <p class="text-center">减少开发成本<br/>加快产品开发迭代的生成速度</p>
                        </li>
                        <li>
                            <div class="list-img"><img src="../../assets/imgs/home/03.png" alt=""/></div>
                            <p class="text-center">逐步提高交互体验<br/>更好的服务于用户体验工作</p>
                        </li>
                    </ul>
                </div>
                <div class="explain-box">
                    <h3 class="text-center">为您提供了全面的HTML、CSS及JS组件</h3>
                    <ul class="box-list">
                        <li>
                            <div class="list-img"><img src="../../assets/imgs/home/04.png" alt=""/></div>
                            <p class="text-center">样式基于 Sass(Scss) 开发<br/>代码结构清晰简单，易于扩展和维护</p>
                        </li>
                        <li class="salus-col-6">
                            <div class="list-img"><img src="../../assets/imgs/home/05.png" alt=""/></div>
                            <p class="text-center">组建基于 Vue2.6 开发<br/>旨在提供丰富易用可扩展的标准组建</p>
                        </li>
                        <li class="salus-col-6">
                            <div class="list-img"><img src="../../assets/imgs/home/06.png" alt=""/></div>
                            <p class="text-center">迭代发布，组建按需下载<br/>方便各团队可定制化的解决方案</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
    export default {
        name: 'Home',
        components: {
            Footer: () => import('../../view-components/footer/footer')
        }
    }
</script>