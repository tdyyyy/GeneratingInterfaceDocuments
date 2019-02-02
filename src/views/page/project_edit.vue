<template>
    <div id="project" class="wrap">
    <!-- 面包屑 -->
        <bread-crumb :routes="routes"></bread-crumb>
        <!-- 表格 -->
        <div class="body_content">
            <div class="search_block">
                <div>
                    <a-form :form="form" layout='inline' hideRequiredMark>
                        <a-form-item label="接口名称：">
                            <a-input v-model="form.name" placeholder="请输入接口名称"/>
                        </a-form-item>
                        <a-form-item label="接口地址：">
                            <a-input v-model="form.address" placeholder="请输入接口地址"/>
                        </a-form-item>
                        <a-button type="primary" class="search" @click="showDrawer">检索</a-button>

                    </a-form>
                </div>

            </div>
            <a-button  type="text" class="editable-add-btn" @click="showDrawer">服务列表</a-button>
            <a-button  type="primary" class="editable-add-btn" @click="newInterface">新增接口</a-button>
            <div class="all_table">
                <a-table bordered :dataSource="dataSource" :columns="columns" :scroll="{ x: true }" :pagination="false">
                    <template slot="operation" slot-scope="text, record">
                        <a-button type="primary" class="mar_btn" @click="onEdit(record)" size="small">编辑</a-button>
                        <a-button type="danger" @click="onDelete(record)"  size="small">删除</a-button>
                    </template>
                </a-table>
            </div>
            <!-- 抽屉 -->
            <a-drawer title="服务列表" :width="720" @close="onClose" :visible="visible" :wrapStyle="{height: 'calc(100% - 108px)',overflow: 'auto',paddingBottom: '108px'}">

                <div class="drawer_footer">
                    <a-button :style="{marginRight: '8px'}" @click="onClose">取消</a-button>
                    <a-button @click="save" type="primary">保存</a-button>
                </div>
            </a-drawer>

        </div>

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
                }, {
                    path: 'project/project_edit',
                    breadcrumbName: '接口列表'
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
                    title: '所属服务',
                    width: '180px',
                    dataIndex: 'name',
                    align: 'center',
                    scopedSlots: { customRender: 'name' },
                }, {
                    title: '接口名称',
                    dataIndex: 'create_time',
                    align: 'center',
                }, {
                    title: '接口地址',
                    dataIndex: 'bz',
                    align: 'center',
                }, {
                    title: '操作',
                    width: '240px',
                    dataIndex: 'operation',
                    align: 'center',
                    scopedSlots: { customRender: 'operation' },
                    fixed: 'right'
                }],
            }
        },
        mounted () {
            var _this = this
            document.onkeydown = function (event) {
                var e = event || window.event
                if (e.keyCode === 13) {
                    _this.search()
                }
            }
        },
        methods: {
            // 接口列表
            search () {

            },
            onEdit (record) {
                this.$router.push( {
                    path: `/project/interface_add`,
                    query: record.id
                })
            },
            onDelete (record) {
                console.log(record)
            },
            // 服务列表
            showDrawer() {
                this.visible = true
            },
            onClose() {
                this.visible = false
            },
            // 保存新服务
            save () {
                this.form.validateFields((err, values) => {
                    if (!err) {
                        console.log('Received values of form: ', values);
                    }
                });
            },
            // 生成word文档
            newInterface () {
                this.$router.push(`/project/interface_add`)
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
            margin-left: 5px;
            float: right;
        }
        .mar_btn {
            margin-right: 10px;
        }
    }

</style>
