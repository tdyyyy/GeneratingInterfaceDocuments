<template>
    <div class="bread_contain">
        <a-breadcrumb :routes="routes">
            <template slot="itemRender" slot-scope="{route, params, routes, paths}">
              <span v-if="routes.indexOf(route) === routes.length - 1">
                {{route.breadcrumbName}}
              </span>
                <router-link v-else :to="`${basePath}/${paths.join('/')}`">
                    {{route.breadcrumbName}}
                </router-link>
            </template>
        </a-breadcrumb>
    </div>
</template>

<script>
    export default {
        name: "Breadcrumb",
        props: ['routes'],
        data () {
            return {
                basePath: ``,             // 路由配置
            }
        }
    }
</script>

<style scoped>
    .bread_contain {
        font-size: 18px;
        width: 100%;
        height: 30px;
        border-bottom: 1px solid #eef0f4;
        display:flex;
        justify-content: flex-start;
        margin-bottom: 10px;
    }
</style>