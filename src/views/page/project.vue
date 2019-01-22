<template>
  <div id="project">
    <!-- 面包屑 -->
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
    <!-- 表格 -->
    <a-button  type="primary" class="editable-add-btn" @click="handleAdd">新增</a-button>
    <div class="all_table">
      <a-table bordered :dataSource="dataSource" :columns="columns" :scroll="true" :pagination="false">
        <template slot="operation" slot-scope="text, record" >
          <a-button type="primary" class="mar_btn" @click="onEdit(record.id)" size="small">编辑</a-button>
          <a-button type="primary" class="mar_btn" @click="onWord"  size="small">导出word文档</a-button>
          <a-button type="danger" @click="onDelete(record.id)"  size="small">删除</a-button>
        </template>
      </a-table>
    </div>
  </div>
</template>
<script>
    export default {
        name: 'project',
        data () {
            return {
                basePath: `/`,
                routes: [{
                    path: 'project',
                    breadcrumbName: '我的项目'
                }],
                dataSource: [{
                    id: 0,
                    name: 'Edward King 0',
                    create_time: 'London, Park Lane no. 1London,',
                    bz: 'London, Park Lane no. 0',
                }, {
                    id: 1,
                    name: 'Edward King 1',
                    create_time: 'London, Park Lane no. 1London,',
                    bz: 'London, Park Lane no. 1London, Park Lane no. 1London, Park Lane no. 1London, Park Lane no. 1',
                }],
                columns: [{
                    title: '项目名称',
                    dataIndex: 'name',
                    width: '300px',
                    align: 'center',
                    scopedSlots: { customRender: 'name' },
                }, {
                    title: '创建时间',
                    width: '180px',
                    dataIndex: 'create_time',
                    align: 'center',
                }, {
                    title: '备注',
                    width: '240px',
                    dataIndex: 'bz',
                    align: 'center',
                }, {
                    title: 'operation',
                    width: '300px',
                    dataIndex: 'operation',
                    align: 'center',
                    scopedSlots: { customRender: 'operation' },
                }],
            }
        },
        methods: {
            onEdit (key) {
               console.log(key)
            },
            onDelete (key) {
                console.log(key)
            },
            handleAdd () {
                this.$router.push({
                    name: 'add_project'
                })
            },
            // 生成word文档
            onWord (key) {
                console.log(key)
            }
        },
    }
</script>
<style scoped lang="scss">
  #project {
    .bread_contain {
      font-size: 18px;
      width: 100%;
      height: 30px;
      border-bottom: 1px solid #eef0f4;
      display:flex;
      justify-content: flex-start;
      margin-bottom: 10px;
    }
    .editable-add-btn {
      margin-bottom: 8px;
      float: right;
    }
    .mar_btn {
      margin-right: 10px;
    }
  }

</style>
