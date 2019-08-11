<template>
    <div>
        <ul class="sidebar-menu">
            <li class="menu-item-group">
                <div class="sidebar-title">开发指南</div>
                <ul>
                    <li class="menu-item">
                        <router-link to="./quickstart"><span>快速上手</span></router-link>
                    </li>
                </ul>
            </li>
            <li class="menu-item-group">
                <div class="sidebar-title">布局</div>
                <ul>
                    <li class="menu-item">
                        <router-link to="./grid"><span>栅格</span></router-link>
                    </li>
                    <li class="menu-item">
                        <router-link to="./modal"><span>模态框</span></router-link>
                    </li>
                    <li class="menu-item">
                        <router-link to="./card"><span>卡片/面板</span></router-link>
                    </li>
                </ul>
            </li>
            <li class="menu-item-group">
                <div class="sidebar-title">导航</div>
                <ul>
                    <li class="menu-item">
                        <router-link to="./affix"><span>固钉</span></router-link>
                    </li>
                    <li class="menu-item">
                        <router-link to="./pagination"><span>分页</span></router-link>
                    </li>
                    <li class="menu-item">
                        <router-link to="./tabs"><span>选项卡</span></router-link>
                    </li>
                    <li class="menu-item">
                        <router-link to="./breadcrumb"><span>面包屑</span></router-link>
                    </li>
                    <li class="menu-item">
                        <router-link to="./steps"><span>步骤条</span></router-link>
                    </li>
                    <li class="menu-item">
                        <router-link to="./menu"><span>导航菜单</span></router-link>
                    </li>
                </ul>
            </li>
            <li class="menu-item-group">
                <div class="sidebar-title">表单</div>
                <ul>
                    <li class="menu-item">
                        <router-link to="./button"><span>按钮</span></router-link>
                    </li>
                    <li class="menu-item">
                        <router-link to="./radio"><span>单选框</span></router-link>
                    </li>
                    <li class="menu-item">
                        <router-link to="./input"><span>输入框</span></router-link>
                    </li>
                    <li class="menu-item">
                        <router-link to="./checkbox"><span>复选框</span></router-link>
                    </li>
                    <li class="menu-item">
                        <router-link to="./time-picker"><span>时间选择器</span></router-link>
                    </li>
                    <li class="menu-item">
                        <router-link to="./date-picker"><span>日期选择器</span></router-link>
                    </li>
                    <li class="menu-item">
                        <router-link to="./color-picker"><span>颜色选择器</span></router-link>
                    </li>
                    <li class="menu-item">
                        <router-link to="./input-number"><span>数字输入框</span></router-link>
                    </li>
                    <li class="menu-item">
                        <router-link to="./switch"><span>开关</span></router-link>
                    </li>
                    <li class="menu-item">
                        <router-link to="./rate"><span>评分</span></router-link>
                    </li>
                    <li class="menu-item">
                        <router-link to="./slider"><span>滑动条</span></router-link>
                    </li>
                    <li class="menu-item">
                        <router-link to="./select"><span>下拉选择器</span></router-link>
                    </li>
                    <li class="menu-item">
                        <router-link to="./dropdown"><span>下拉菜单</span></router-link>
                    </li>
                    <li class="menu-item">
                        <router-link to="./tree"><span>树形控件</span></router-link>
                    </li>
                    <li class="menu-item">
                        <router-link to="./form"><span>表单</span></router-link>
                    </li>
                    <li class="menu-item">
                        <router-link to="./transfer"><span>穿梭框</span></router-link>
                    </li>
                </ul>
            </li>
            <li class="menu-item-group">
                <div class="sidebar-title">信息</div>
                <ul>
                    <li class="menu-item">
                        <router-link to="./avatar"><span>头像</span></router-link>
                    </li>
                    <li class="menu-item">
                        <router-link to="./tag"><span>标签</span></router-link>
                    </li>
                    <li class="menu-item">
                        <router-link to="./message"><span>全局提示</span></router-link>
                    </li>
                    <li class="menu-item">
                        <router-link to="./alert"><span>信息提示</span></router-link>
                    </li>
                    <li class="menu-item">
                        <router-link to="./table"><span>表格</span></router-link>
                    </li>
                    <li class="menu-item">
                        <router-link to="./badge"><span>徽标数</span></router-link>
                    </li>
                    <li class="menu-item">
                        <router-link to="./upload"><span>文件上传</span></router-link>
                    </li>
                    <li class="menu-item">
                        <router-link to="./progress"><span>进度条</span></router-link>
                    </li>
                </ul>
            </li>
            <li class="menu-item-group">
                <div class="sidebar-title">其他</div>
                <ul>
                    <li class="menu-item">
                        <router-link to="./anchor"><span>锚点</span></router-link>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        name: 'Sidebar'
    }
</script>