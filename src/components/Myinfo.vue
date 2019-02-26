<template>
  <div class="container">
    <div style="height: 60px"></div>
    <div class="icon">
      <img src="../assets/img/code.png">
    </div>
    <div class="codeInf">我的二维码</div>
    <p class="label">我的客户列表</p>
    <div class="card" v-for="(item, $index) in list" :key="$index">
      <div class="headImg">
        <img src="../assets/img/logo-hainan.png">
      </div>
      <div class="name">{{item.cusName}}</div>
      <div class="money"><span>{{item.costMoney}}</span><span>元</span></div>
    </div>

    <infinite-loading @infinite="infiniteHandler">
      <div slot="no-more">没有更多客户了</div>
      <div slot="no-results">未查询到结果</div>
    </infinite-loading>
  </div>
</template>

<script>
  import InfiniteLoading from 'vue-infinite-loading';
  import axios from 'axios';
  export default {
    name: "Myinfo",
    data() {
      return {
        page: 1,
        list: [],
      };
    },
    components: {
      InfiniteLoading,
    },
    methods: {

      infiniteHandler($state) {
        axios.get(this.HOST+'/goLogin/getQrcode/1')
          .then(({ data }) => {
          if (data.cusList.length) {
            this.list.push(...data.cusList);
            $state.loaded();
            $state.complete();
            /*this.page += 1;*/
          } else {
            $state.complete();
          }
        });
      },
    },
  }
</script>

<style scoped>
  .container {
    padding: 10px;
    font-size: 16px;
    font-weight: 500;
  }
  .icon{
    text-align: center;
  }
  .icon img{
    width: 100px;
  }
  .codeInf{
    text-align: center;
    font-weight: 600;
    font-size: 18px;
    margin-top: 10px;
  }
  .card{
    display: flex;
    background-color: white;
    border-bottom: 1px solid #cccccc;
    border-radius: 10px;
    margin-bottom: 10px;
  }
  .card .headImg{
    flex: 0 1 60px;
    padding: 5px;
    height: 60px;
    overflow: hidden;
  }

  .card .headImg img{
    width: 50px;

  }
  .card .name{
    flex: 0 1 50%;
    margin-left: 10px;
    line-height: 60px;
  }
  .card .money{
    flex: 0 1 30%;
    text-align: right;
    line-height: 60px;
    margin-right: 10px;
  }
  .label{
    margin: 10px;
    font-weight: 600;

  }

</style>
