<template>
    <div class="infoComponent">
      <div class="header">
        <mu-appbar title="快递详情" >
          <mu-icon-button icon="navigate_before" slot="left" :size="48"  @click="turnBefore" />
        </mu-appbar>
      </div>
      <div class="paperBox">
        <mu-paper class="demo-paper" :zDepth="4" >
        <div class="paperTop">
          <mu-paper :zDepth="2">
            <mu-list>
              <mu-list-item v-if="!errorShow" :title="infoData.com" :describeText="'物流号：'+msg">
                <mu-avatar icon="flight_takeoff" backgroundColor="blue" slot="leftAvatar" />
              </mu-list-item>
              <div v-if="errorShow">
                <mu-list-item  title="物流单号不存在" :describeText="'物流号：'+msg">
                  <mu-avatar icon="warning" backgroundColor="red" slot="leftAvatar" />
                </mu-list-item>
              </div>
            </mu-list>
          </mu-paper>
        </div>
        <div class="demo-vsteper-container">
          <mu-stepper :activeStep="activeStep" orientation="vertical">
            <mu-step  v-for="(i,index) in infoData.data" key="@index">
              <mu-step-label num=" ">
                {{i.time}}
              </mu-step-label>
              <mu-step-content :active="true">
                <p>
                  {{i.context}}
                </p>
              </mu-step-content>
            </mu-step>
          </mu-stepper>
        </div>
        </mu-paper>
      </div>


    </div>
</template>

<script>
  import {AppConfig} from "../../util/serverConfig";
  import axios from 'axios'
  export default {
        data () {
            return {
                msg: 'Welcome to Your Vue.js App',
                activeStep: 0,
                infoData:{},
                errorShow:false
            }
        },
        created(){
          this.msg=this.$route.query.id?this.$route.query.id:'';
          console.log(this.$route.query.id);
          this.msg=this.$route.query.id;
          let params = {
            id:this.$route.query.id
          };
          axios.get(AppConfig.url.getExpressDetail, {params}).then((res) => {
            console.log(res);
            if (res.status === 200) {
              if(res.data.status=="10001"){
                  console.log('订单不存在');
                this.errorShow=true;
              }else{
                  if(res.data.data&&res.data.data.length>0){
                    this.infoData=res.data;
                  }else{
                    console.log('订单不存在');
                    this.errorShow=true;
                  }
              }
            }
          })
        },
        methods:{
          turnBefore:function () {
            this.$router.push({path:'/FindMain'});
          }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
   .infoComponent{
     display: flex;
     flex-direction: column;
     height: 100%;
   }
  .paperBox{
    flex: 1;
    overflow-y: scroll;

  }
  .demo-paper{
    display: flex;
    flex-direction: column;
    margin: 10px;
    /*height: 90%;*/
  }
  .demo-vsteper-container{
    flex: 1;
  }
  .mu-step:last-child{
    padding-bottom: 10px;
  }
  .paperTop{
    /*margin: 10px 0;*/
  }


</style>
