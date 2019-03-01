<template>
    <div id="interface_add" class="wrap">
        <bread-crumb :routes="routes"></bread-crumb>
        <div class="body_content" style="padding-top:20px; ">
           <a-form :layout=formLayout>
            <a-form-item label='所属服务' :labelCol="formItemLayout.labelCol" :wrapperCol="formItemLayout.wrapperCol">
                <a-input placeholder='请输入所属服务' />
                <!--<a-select defaultValue="POST" @change="serChange">-->
                    <!--<a-select-option value="GET">GET</a-select-option>-->
                    <!--<a-select-option value="POST">POST</a-select-option>-->
                    <!--<a-select-option value="GET && POST">GET && POST</a-select-option>-->
                <!--</a-select>-->
            </a-form-item>
            <a-form-item label='接口名称'  :labelCol="formItemLayout.labelCol" :wrapperCol="formItemLayout.wrapperCol">
                <a-input placeholder='请输入接口名称' />
            </a-form-item>
            <a-form-item label='接口地址'  :labelCol="formItemLayout.labelCol" :wrapperCol="formItemLayout.wrapperCol">
                <a-input placeholder='api/aaa/bbb' />
            </a-form-item>
            <a-form-item label='请求方式'  :labelCol="formItemLayout.labelCol" :wrapperCol="formItemLayout.wrapperCol">
                <a-select defaultValue="POST" @change="typeChange">
                    <a-select-option value="GET">GET</a-select-option>
                    <a-select-option value="POST">POST</a-select-option>
                    <a-select-option value="GET && POST">GET && POST</a-select-option>
                </a-select>
            </a-form-item>
            <a-form-item label='接口参数'  :labelCol="formItemLayout.labelCol" :wrapperCol="formItemLayout.ParameterCol">
                <a-table bordered :dataSource="dataSource" :columns="columns" :pagination="false">
                    <template slot="name" slot-scope="text, record">
                        <a-input placeholder='' />
                    </template>
                    <template slot="type" slot-scope="text, record">
                        <a-input placeholder='' />
                    </template>
                    <template slot="bz" slot-scope="text, record">
                        <a-input placeholder='' />
                    </template>
                    <template slot="operation" slot-scope="text, record, index">
                        <a-button type="" class="mar_btn" @click="onDelete(record.key)">删除</a-button>
                        <a-button v-if="index === dataSource.length -1" type="primary" class="mar_btn" @click="addParameter">增加</a-button>
                    </template>
                </a-table>
            </a-form-item>
            <a-form-item label='请求示例'  :labelCol="formItemLayout.labelCol" :wrapperCol="formItemLayout.wrapperCol">
                <a-input placeholder='https://www.baidu.com/api?name=xiaoming' />
            </a-form-item>
            <a-form-item  label='备注'  :labelCol="formItemLayout.labelCol" :wrapperCol="formItemLayout.bzCol">
                <a-textarea placeholder="Basic usage" :rows="18"/>
            </a-form-item>
            <a-form-item :wrapperCol="buttonItemLayout.wrapperCol">
                <a-button  class="mar_btn"  type='primary'>保存</a-button>
                <a-button type='' @click="back">返回</a-button>
            </a-form-item>
        </a-form>
        </div>
    </div>
</template>

<script>
    import Breadcrumb from '@/components/Breadcrumb.vue'
    import AFormItem from "ant-design-vue/es/form/FormItem";
    export default {
        name: "interface_add",
        components: {
            AFormItem,
            'bread-crumb': Breadcrumb
        },
        data () {
          return {
              routes: [{
                  path: 'project',
                  breadcrumbName: '我的系统'
              }, {
                  path: 'project_edit',
                  breadcrumbName: '接口列表'
              }, {
                  path: 'interface_add',
                  breadcrumbName: '新增接口'
              }],
              formLayout: 'horizontal',
              dataSource: [{}],
              count: 2,
              columns: [{
                  title: '参数名',
                  dataIndex: 'name',
                  width: '30%',
                  align: 'left',
                  scopedSlots: { customRender: 'name' },
              }, {
                  title: '类型',
                  dataIndex: 'type',
                  align: 'left',
                  scopedSlots: { customRender: 'type' },
              }, {
                  title: '备注',
                  dataIndex: 'bz',
                  align: 'left',
                  scopedSlots: { customRender: 'bz' },
              }, {
                  title: '操作',
                  dataIndex: 'operation',
                  width: '180px',
                  align: 'left',
                  scopedSlots: { customRender: 'operation' },
              }],
          }
        },
        computed: {
            formItemLayout () {
                const { formLayout } = this;
                return formLayout === 'horizontal' ? {
                    labelCol: { span: 2 },
                    wrapperCol: { span: 9},
                    ParameterCol: { span: 18},
                    bzCol: { span: 18}
                } : {};
            },
            buttonItemLayout () {
                const { formLayout } = this;
                return formLayout === 'horizontal' ? {
                    wrapperCol: { span: 14, offset: 4 },
                } : {};
            },
        },
        methods: {
            typeChange (value) {
                console.log(`Selected: ${value}`);
            },
            addParameter  () {
                const { count, dataSource } = this
                const newData = {
                    key: count,
                    name: `Edward King ${count}`,
                    age: 32,
                    address: `London, Park Lane no. ${count}`,
                }
                this.dataSource = [...dataSource, newData]
                this.count = count + 1
            },
            onDelete (key) {
                const dataSource = [...this.dataSource]
                if (dataSource.length === 1) {
                    this.$message.info('老弟,不能再删了~');
                    return false
                }
                this.dataSource = dataSource.filter(item => item.key !== key)
            },
            back () {
                this.$router.back()
            }
        }
    }
</script>

<style scoped lang="scss">
#interface_add {

}
</style>