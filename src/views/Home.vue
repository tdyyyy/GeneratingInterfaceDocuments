<template>
    <div id="app">
        <a-layout id="components-layout-demo-custom-trigger" style="height: 100%">
            <!-- 目录 -->
            <a-layout-sider :trigger="null" collapsible v-model="collapsed">
                <div v-if="!collapsed" class="logo" />
                <div v-if="collapsed" class="blog_logo" />
                <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['1']" :selectedKeys="[current]" @click="menuRouter">
                    <a-menu-item key="1">
                        <a-icon type="ordered-list" />
                        <span>我的系统</span>
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
                    <div class="login_user">
                        <a-avatar class="login_avatar" icon="user" />
                        <i class="login_name">{{loginUser}}</i>
                        <span>
                             <a-icon type="logout" @click="logOut" style="color: #188ffe; cursor: pointer; font-size: 22px;line-height: 58px;" />
                        </span>
                    </div>
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
                loginUser: '',
                current: '1',
                routers: ['', '/project', '', '/test']
            }
        },
        created () {
            this.loginUser = sessionStorage.getItem('ioaLoginCount')
            this.$message.success('来了，老弟~');
        },
        methods: {
            logOut () {
                const _this = this
                this.$confirm({
                    title: '提示',
                    content: '不再多待一会吗？',
                    okText: '确认',
                    cancelText: '取消',
                    onOk() {
                        return _this.$router.push('/')
                    },
                    onCancel() {},
                });
            },
            menuRouter (item) {
                this.current = item.key
                this.$router.push(this.routers[+item.key])
            }
        }
    }
</script>
<style lang="scss">
    #app {
        .trigger {
            float: left;
        }
        .content {
            margin: 10px;
            padding: 10px;
            background: #fff;
            overflow: scroll;
        }
        .login_user {
            width: 200px;
            display: flex;
            justify-content: flex-end;
            font-size: 18px;
            float: right;
            margin-right: 10px;
            line-height: 45px;
            .login_avatar {
                margin-top: 14px;
                background-color:#188ffe;
                width: 20px;
                height: 20px;
                font-size: 14px;
                padding: 0;
                line-height:20px
            }
            .login_name{
                line-height: 50px;
                margin-right: 20px;
                margin-left: 10px;
                font-style: normal;
                font-size: 14px;
            }
        }
    }

</style>

