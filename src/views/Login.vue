<template>
  <!--<div class="login" :style="{background: 'url('+backgroundImg+')'}">-->
    <div class="login">
    <div class="login_contain">
      <p class="login_text">接口文档管理中心</p>
      <a-form :form="form" id='components-form-demo-normal-login' @submit="handleSubmit" class='login-form'>
        <a-form-item>
          <a-input placeholder='Username' v-decorator="['userName',{ rules: [{ required: true, message: 'Please input your username!' }] }]">
            <a-icon slot="prefix" type='user' style="color: rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-input v-decorator="['password',{ rules: [{ required: true, message: 'Please input your Password!' }] }]" type='password' placeholder='Password'>
            <a-icon slot="prefix" type='lock' style="color: rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a class='login-form-forgot' href=''>忘记密码？</a>
          <a-button type='primary' htmlType='submit' class='login-form-button'>
            Log in
          </a-button>
          没有用户名？ <a href='' @click="gotoRegister">现在注册!</a>
        </a-form-item>
      </a-form>
    </div>

  </div>

</template>

<script>
    export default {
        name: 'login',
        data () {
            return {
                backgroundImg: require('../assets/cat.jpg')
            }
        },
        beforeCreate () {
            this.form = this.$form.createForm(this);
        },
        methods: {
            // 登录
            handleSubmit (e) {
                e.preventDefault();
                this.form.validateFields((err, values) => {
                    if (!err) {
                        sessionStorage.setItem('ioaLoginCount', values.userName)
                        console.log('Received values of form: ', values);
                        this.$router.push({
                            name: 'project'
                        })
                    }
                });
            },
            // 注册
            gotoRegister () {
                this.$route.push({
                    name: 'project'
                })
            }
        }
    };
</script>
<style scoped>
  .login{
    width: 100%;
    height: 100%;
    background: url('http://ioaly.cn/image/cat.f4a30b32.jpg');
    background-size: cover;
  }
  .login_contain {
    width: 300px;
    height: 300px;
    margin: 0 auto;
    padding-top: 200px;
  }
  .login_text {
    font-size: 20px;
  }
  #components-form-demo-normal-login .login-form {
    max-width: 300px;
  }
  #components-form-demo-normal-login .login-form-forgot {
    float: right;
    color: #fff;
  }
  #components-form-demo-normal-login .login-form-button {
    width: 100%;
    color: #fff;
  }
</style>