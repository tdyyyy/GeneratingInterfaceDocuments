<template>
    <div id="app">
        <a-layout id="components-layout-demo-custom-trigger" style="height: 100%">
            <!-- 目录 -->
            <a-layout-sider :trigger="null" collapsible v-model="collapsed">
                <div v-if="!collapsed" class="logo" />
                <div v-if="collapsed" class="blog_logo" />
                <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['1']">
                    <a-menu-item key="1">
                        <a-icon type="ordered-list" />
                        <span>我的项目</span>
                    </a-menu-item>
                    <a-menu-item key="2">
                        <a-icon type="book" />
                        <span>我的模板</span>
                    </a-menu-item>
                    <a-menu-item key="3">
                        <a-icon type="upload" />
                        <span>待定</span>
                    </a-menu-item>
                </a-menu>
            </a-layout-sider>
            <!--  头部与内容 -->
            <a-layout>
                <a-layout-header style="background: #fff; padding: 0">
                    <a-icon class="trigger" :type="collapsed ? 'menu-unfold' : 'menu-fold'" @click="()=> collapsed = !collapsed"/>
                </a-layout-header>
                <a-layout-content class="content">
                    <router-view/>
                </a-layout-content>
            </a-layout>
        </a-layout>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                collapsed: false,
            }
        },
    }
</script>
<style lang="scss">
    .trigger {
      float: left;
    }
    .content {
        margin: 10px;
        padding: 10px;
        background: #fff;
        overflow: scroll;
    }
</style>

