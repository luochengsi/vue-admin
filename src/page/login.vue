<template>
  <div class="login" :style="winSize">
    <el-row>
      <el-col :span='24'>
        <div class="content">
          <el-form label-position="left" label-width="0px" class="demo-ruleForm card-box loginform" 
          :style="formOffset"
          :model='data'
          :rules="rule_data"
          ref='data'>
          <h1 class="title">系统登录</h1>
          <el-form-item
          prop='username'>
          <el-input type="text" auto-complete="off" placeholder="账号" 
          v-model='data.username'
          @keyup.native.enter="login('data')"></el-input>
        </el-form-item>
        <el-form-item
        prop='password'>
        <el-input type="password" auto-complete="off" placeholder="密码" 
        v-model='data.password'
        @keyup.native.enter="login('data')"></el-input>
      </el-form-item>
      <el-checkbox checked style="margin:0px 0px 35px 0px;">记住密码</el-checkbox>
      <el-form-item style="width:100%;">
        <el-button type="primary" @click='login("data")'>登录</el-button>
        <el-button>重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</el-col>
</el-row>
</div>
</template>

<script>
import {
    user as UserApi
} from '../config/request.js';
import jz from '../JZ.js'
import local from '../util/local.js'
  module.exports = {
    name: 'login',
    data() {
      return {
        winSize: {
          width: '',
          height: ''
        },

        formOffset: {
          position: 'absolute',
          left: '',
          top: ''
        },

        data: {
          username: '',
          password: ''
        },

        rule_data: {
          username: [{
            required: true,
            message: '用户名不能为空！',
            trigger: 'blur'
          }],
          password: [{
            required: true,
            message: '密码不能为空！',
            trigger: 'blur'
          }],
        }
      }
    },
    methods: {
      setSize() {
        this.winSize.width = $(window).width() + "px";
        this.winSize.height = $(window).height() + "px";

        this.formOffset.left = (parseInt(this.winSize.width) / 2 - 175) + 'px';
        this.formOffset.top = (parseInt(this.winSize.height) / 2 - 178) + 'px';
      },

      login(ref) {
        var vm = this
        this.$refs[ref].validate((valid) => {
            if (valid) {
              $.post(jz.login, {
                loginName: vm[ref].username,
                password: vm[ref].password,
                systemId: 1,
              })
              .then(function(d) {
                if(d.state === 0) {
                  local.set('navlist', d.menuItemLlist)
                  vm.$store.dispatch('save_token', d.token).then(() => {
                    vm.$router.push({path: '/'});
                  })
                }else{
                  errorMsg.call(vm, '用户名与密码不一致')
                }
              })













              //   UserApi.login.call(this, this[ref], data => {

              //       // console.log(data);
              //       // return;

              //       this.$store.dispatch('update_userinfo', data).then(() => {
              //           this.$router.push({path: '/'});
              //       });

              //   });
            }
        });
        }
    },
    created() {
      this.setSize();
      $(window).resize(() => {
        this.setSize();
      });
    }
  }
</script>

<style>
  .login{
    background: #1F2D3D;         
  }
  .login .card-box {
    box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin-bottom: 20px;
    background-color: #F9FAFC;
    border: 2px solid #8492A6;
  }

  .login .title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }

  .login .loginform {
    width: 350px;
    padding: 35px 35px 15px 35px;
  }
</style>
