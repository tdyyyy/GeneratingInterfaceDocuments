<template>
  <div id="project">
    <!-- 面包屑 -->
    <bread-crumb :routes="routes"></bread-crumb>
    <!-- 表格 -->

    <a-button  type="primary" class="editable-add-btn" @click="showDrawer">新增系统</a-button>
    <div class="all_table">
      <a-table bordered :dataSource="dataSource" :columns="columns" :scroll="{ x: true }" :pagination="false">
        <template slot="operation" slot-scope="text, record">
          <a-button type="primary" class="mar_btn" @click="onEdit(record)" size="small">编辑</a-button>
          <a-button type="primary" class="mar_btn" @click="onWord(record)"  size="small">导出word文档</a-button>
          <a-button type="danger" @click="onDelete(record)"  size="small">删除</a-button>
        </template>
      </a-table>
    </div>
    <!-- 抽屉 -->
    <a-drawer title="Create a new project" :width="720" @close="onClose" :visible="visible"
            :wrapStyle="{height: 'calc(100% - 108px)',overflow: 'auto',paddingBottom: '108px'}">
      <a-form :form="form" layout="vertical" hideRequiredMark>
        <a-form-item label="系统名称：">
          <a-input v-decorator="['name', {rules: [{ required: true, message: '请输入系统名称' }]}]" placeholder="请输入系统名称"/>
        </a-form-item>
        <a-form-item label="备注：">
          <a-textarea v-decorator="['description', {rules: [{ required: true, message: '请输入备注' }, {max: 200, message: '备注最大长度是100'}]}]" :rows="4" placeholder="请输入备注"/>
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
    import Breadcrumb from '@/components/Breadcrumb.vue'
    export default {
        name: 'project',
        components: {
            'bread-crumb': Breadcrumb
        },
        data () {
            return {
                visible: false,
                routes: [{
                    path: 'project',
                    breadcrumbName: '我的系统'
                }],
                form: this.$form.createForm(this),
                dataSource: [{
                    id: 0,
                    name: 'Edward King 0',
                    create_time: 'London, Park Lane no. 1London,',
                    bz: 'London, Park Lane no. 0',
                }, {
                    id: 1,
                    name: 'Edward King 1Edward King 1',
                    create_time: 'London, Park Lane no. 1London,',
                    bz: 'don, Park Lane no. 1',
                }],
                columns: [{
                    title: '系统名称',
                    dataIndex: 'name',
                    align: 'center',
                    scopedSlots: { customRender: 'name' },
                }, {
                    title: '创建时间',
                    width: '180px',
                    dataIndex: 'create_time',
                    align: 'center',
                }, {
                    title: '备注',
                    width: '300px',
                    dataIndex: 'bz',
                    align: 'center',
                }, {
                    title: '操作',
                    width: '300px',
                    dataIndex: 'operation',
                    align: 'center',
                    scopedSlots: { customRender: 'operation' },
                    fixed: 'right'
                }],
            }
        },
        methods: {
            onEdit (record) {
                this.$router.push(`/project_edit/${record.id}`)
            },
            onDelete (record) {
                console.log(record)
            },
            showDrawer() {
                this.visible = true
            },
            onClose() {
                this.visible = false
            },
            // 保存新项目
            save () {
                this.form.validateFields((err, values) => {
                    if (!err) {
                        console.log('Received values of form: ', values);
                    }
                });
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
