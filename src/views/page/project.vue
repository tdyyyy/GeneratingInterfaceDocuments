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

    <a-button  type="primary" class="editable-add-btn" @click="showDrawer">新增</a-button>
    <div class="all_table">
      <a-table bordered :dataSource="dataSource" :columns="columns" :scroll="{ x: true }" :pagination="false">
        <template slot="operation" slot-scope="record" >
          <a-button type="primary" class="mar_btn" @click="onEdit(record.id)" size="small">编辑</a-button>
          <a-button type="primary" class="mar_btn" @click="onWord"  size="small">导出word文档</a-button>
          <a-button type="danger" @click="onDelete(record.id)"  size="small">删除</a-button>
        </template>
      </a-table>
    </div>
    <!-- 抽屉 -->
    <a-drawer title="Create a new project" :width="720" @close="onClose" :visible="visible"
            :wrapStyle="{height: 'calc(100% - 108px)',overflow: 'auto',paddingBottom: '108px'}">
      <a-form :form="form" layout="vertical" hideRequiredMark>
        <a-form-item label="项目名称：">
          <a-input v-decorator="['name', {rules: [{ required: true, message: 'Please enter user name' }]}]" placeholder="请输入项目名称"/>
        </a-form-item>
        <a-form-item label="备注：">
          <a-textarea v-decorator="['description', {rules: [{ required: true, message: 'Please enter url description' }]}]" :rows="4" placeholder="请输入备注"/>
        </a-form-item>
        <div class="drawer_footer">
          <a-button :style="{marginRight: '8px'}" @click="onClose">取消</a-button>
          <a-button @click="save" type="primary">保存</a-button>
        </div>
      </a-form>
    </a-drawer>

  </div>
</template>
<script>
    export default {
        name: 'project',
        data () {
            return {
                visible: false,
                basePath: `/`,             // 路由配置
                routes: [{
                    path: 'project',
                    breadcrumbName: '我的项目'
                }],
                form: this.$form.createForm(this),
                dataSource: [{
                    id: 0,
                    name: 'Edward King 0',
                    create_time: 'London, Park Lane no. 1London,',
                    bz: 'London, Park Lane no. 0',
                }, {
                    id: 1,
                    name: 'Edward King 1',
                    create_time: 'London, Park Lane no. 1London,',
                    bz: 'London, Park Lane no. 1London, Park Lane no. 1London, ParPark Lane no. 1London, Park Lane no. 1London, ParPark Lane no. 1London, Park Lane no. 1London, Park Lane no. 1London, Park Lane no. 1',
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
                    fixed: 'right'
                }],
            }
        },
        // watch: {
        //     'form.description': {
        //         deep: true,
        //         handler (newVal) {
        //             if (newVal.length > 300) {
        //                 this.$message.info('备注字数不能大于100');
        //                 this.form.description = newVal.slice(0, 100)
        //             }
        //         }
        //     }
        // },
        methods: {
            onEdit (key) {
               console.log(key)
            },
            onDelete (key) {
                console.log(key)
            },
            showDrawer() {
                this.visible = true
            },
            onClose() {
                this.visible = false
            },
            // 保存新项目
            save () {

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
