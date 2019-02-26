<template>
  <div v-loading.fullscreen.lock="fullscreenLoading">

    <div class="re-container">
      <div style="height: 40px"></div>
      <div class="icon">
        <img  src="../assets/img/logo-hainan.png">
      </div>

      <div class="re-line">
        <img class="icons" src="../assets/img/icon-account.png">
        <input type="text" v-model="cusname"  @change="checkZmOrNum(cusname)"  @keyup="checkZmOrNum(cusname)" placeholder="请输入手机号/用户名"><span class="checked">{{this.checkname}}</span>
      </div>
      <div class="re-line">
        <img class="icons" src="../assets/img/icon-secret.png">
        <input  type="password" v-model="password" @change="checkPassword(password)" @keyup="checkZmOrNum(cusname)" placeholder="请输入密码"><span class="checked">{{this.checkpass}}</span>
      </div>
      <div class="btn">
        <button @click="sumit()">登&nbsp &nbsp &nbsp &nbsp &nbsp录</button>
        <div class="smitinfo">{{this.smitinfo}}</div>

      </div>
      <!--<p>
        <button @click="test">测试一下你就知道捏</button>

      </p>-->

    </div>
    <img class="re-bg-bottom" id="bttombtn" src="../assets/img/bg-bottom.png">

  </div>
</template>
<script>
  var h = document.body.scrollHeight;
  window.onresize = function(){
    if (document.body.scrollHeight < h) {
      document.getElementById('bttombtn').style.display = 'none';
    }else{
      document.getElementById('bttombtn').style.display = 'block';
    }
  };
  var flag1=false;
  var flag2=false;
  export default {
    name: "Login",
    data(){
      return{
        fullscreenLoading: false,
        msg:'',
        cusname:this.$route.params.index,
        checkname:'',
        checkpass:'',
        smitinfo:'',
        password:'',
        openid:this.$route.params.openid
      }
    },

    computed: {
      api_url() {
        return this.$store.state.api_url
      },
    },
    methods: {
      /*test(){
        this.axios.get(this.HOST+'/goLogin/getQrcode/1')
          .then(response => {
            console.log(response.data)
          })
          //失败返回
          .catch(error => {
            console.log(error)
          });
      },*/
      open4(info) {
        this.$message.error(info);
      },
      open2(info) {
        this.$message({
          message: info,
          type: 'success'
        });
      },
      openFullScreen() {
        this.fullscreenLoading = true;
        setTimeout(() => {
          this.fullscreenLoading = false;
        }, 2000);
      },
      login(){
        console.log(this.msg.data);
        this.axios.get(this.HOST+ '/page/agentLogin/'+this.cusname+'/'+this.password)
        //成功返回
          .then(response => {
            console.log(response.data)
            if (response.data.code === 1) {
              this.open2('登录成功');
              this.$router.push({path: '/Myinfo/'+response.data.msg});
            }else if(response.data.code === 0){
              this.open4(response.data.msg)
            }

          })
          //失败返回
          .catch(error => {
            console.log(error)
          });
      },
      checkZmOrNum(zmnum) {
        var zmnumReg = /^[0-9a-zA-Z]*$/;
        if (zmnum != "" && !zmnumReg.test(zmnum)) {
          this.checkname='*请输入字母或者数字';
          flag1=false;
          /*alert("只能输入是字母或者数字,请重新输入");*/
          return false;
        }else if(zmnum == ""){
          this.checkname='*用户名不能为空';
          flag1=false;
        }else {
          this.checkname='';
          flag1=true;
        }
      },
      checkPassword(pass){
        var Reg = /^.{6,16}$/;
        if (pass != "" && !Reg.test(pass)) {
          this.checkpass='*密码为6-16位';
          flag2=false;
          /*alert("只能输入是字母或者数字,请重新输入");*/
          return false;
        }else if(pass == ""){
          this.checkpass='*密码不能为空';
          flag2=false;
        }else {
          this.checkpass='';
          flag2=true;
        }
      },
      sumit(){
        console.log(flag1&&flag2);
        if(flag1&&flag2){
          this.smitinfo='';
          this.openFullScreen();
          this.login();
        }else {
          this.smitinfo='请检查以上内容是否填写正确'
        }
      }
    }
  }
</script>

<style scoped>
  .smitinfo{
    position: absolute;
    margin-top: 10px;
    color: red;
    left: 0;
    right: 0;
    text-align: center;
  }
  .checked{
    position: absolute;
    right: 20px;
    margin-top: 20px;
    color: red;
  }
  .re-bg-bottom{
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
  }

  .re-container{
    height: 100vh;
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .re-line{
    text-align: left;
    padding:5px 0;
    margin: 10px 20px;
    border-bottom: 1px solid #cccccc;
  }
  .icon{
    text-align: center;
    width: 100%;
    margin-top: -20vh;
    margin-bottom: 20px;
  }
  .icon img{
    width: 100px;
  }
  .icons{
    width: 25px;
    margin: 0 10px;
    position: relative;
    bottom: -8px;
  }
  input{
    margin-left: 10px;
    border: 0;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
  }
  input:focus { outline: none; }
  .btn{
    margin-top: 10vh;
    text-align: center;
  }
  .btn button{

    text-align: center;

    font-size: 18px;
    width: 60%;
    background: linear-gradient(to top,rgb(123,174,245), rgb(58,142,234) );
    border: 0;
    border-radius: 20px;
    height: 40px;
    color:#ffffff;

  }
  .btn button:active{
    border: 2px solid #ffffff;
    border-radius: 25px;
    font-size: 17px;
  }
  .btn button:hover{
    outline: none;
  }
  .re-more{
    margin-top: 10vh;
    color:#cccccc
  }
  .re-more a{
    font-size: 16px;
    margin: 0 6px;
    letter-spacing: 3px;
    text-decoration:none;
    color:#666666
  }
  .re-more a:hover{text-decoration:none;}
</style>
