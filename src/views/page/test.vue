<template>
    <div>
        <a-button type="primary" @click="showDrawer">
            <a-icon type="plus" /> New account
        </a-button>
        <a-drawer title="Create a new account" :width="720" @close="onClose" :visible="visible" :wrapStyle="{height: 'calc(100% - 108px)',overflow: 'auto',paddingBottom: '108px'}">
            <a-form :form="form" layout="vertical" hideRequiredMark>
                <a-row :gutter="16">
                    <a-col :span="12">
                        <a-form-item label="Name">
                            <a-input
                                    v-decorator="['name', {
                  rules: [{ required: true, message: 'Please enter user name' }]
                }]"
                                    placeholder="Please enter user name"
                            />
                        </a-form-item>
                    </a-col>
                    <a-col :span="12">
                        <a-form-item label="Url">
                            <a-input
                                    v-decorator="['url', {
                  rules: [{ required: true, message: 'please enter url' }]
                }]"
                                    style="width: 100%"
                                    addonBefore="http://"
                                    addonAfter=".com"
                                    placeholder="please enter url"
                            />
                        </a-form-item>
                    </a-col>
                </a-row>
                <a-row :gutter="16">
                    <a-col :span="24">
                        <a-form-item label="Description">
                            <a-textarea
                                    v-decorator="['description', {
                  rules: [{ required: true, message: 'Please enter url description' }]
                }]"
                                    :rows="4"
                                    placeholder="please enter url description"
                            />
                        </a-form-item>
                    </a-col>
                </a-row>
            </a-form>
        </a-drawer>
    </div>
</template>
<script>
    export default {
        name: 'test',
        data() {
            return {
                form: this.$form.createForm(this),
                visible: false,
            }
        },
        methods: {
            showDrawer() {
                this.visible = true
            },
            onClose() {
                this.visible = false
            },
        },
    }
</script>
