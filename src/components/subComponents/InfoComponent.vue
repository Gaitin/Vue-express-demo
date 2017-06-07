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
              <mu-list-item :title="infoData.com" :describeText="infoData.nu">
              </mu-list-item>
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
    export default {
        data () {
            return {
                msg: 'Welcome to Your Vue.js App',
                activeStep: 0,
                infoData:{
                  "message": "ok",
                  "nu": "440342130610",
                  "ischeck": "1",
                  "condition": "F00",
                  "com": "zhongtong",
                  "status": "200",
                  "state": "3",
                  "data": [
                    {
                      "time": "2017-06-02 18:25:52",
                      "ftime": "2017-06-02 18:25:52",
                      "context": "[北京昌平二部中通] [北京市] [北京昌平二部中通]的派件已签收 感谢使用中通快递,期待再次为您服务!",
                      "location": ""
                    },
                    {
                      "time": "2017-06-02 15:05:10",
                      "ftime": "2017-06-02 15:05:10",
                      "context": "[北京昌平二部中通] [北京市] 快件已到达[北京昌平二部中通],业务员松兰堡18911227031正在第2次派件 电话:18911227031 请保持电话畅通、耐心等待",
                      "location": ""
                    },
                    {
                      "time": "2017-06-02 09:44:25",
                      "ftime": "2017-06-02 09:44:25",
                      "context": "[北京市内部] [北京市] 快件离开 [北京市内部]已发往[北京昌平二部中通]",
                      "location": ""
                    },
                    {
                      "time": "2017-06-02 09:14:37",
                      "ftime": "2017-06-02 09:14:37",
                      "context": "[北京] [北京市] 快件到达 [北京]",
                      "location": ""
                    },
                    {
                      "time": "2017-06-01 00:27:49",
                      "ftime": "2017-06-01 00:27:49",
                      "context": "[泉州中转部] [泉州市] 快件离开 [泉州中转部]已发往[北京]",
                      "location": ""
                    },
                    {
                      "time": "2017-06-01 00:14:06",
                      "ftime": "2017-06-01 00:14:06",
                      "context": "[泉州中转部] [泉州市] 快件到达 [泉州中转部]",
                      "location": ""
                    },
                    {
                      "time": "2017-05-31 19:33:27",
                      "ftime": "2017-05-31 19:33:27",
                      "context": "[泉州市场部] [泉州市] 快件离开 [泉州市场部]已发往[泉州中转部]",
                      "location": ""
                    },
                    {
                      "time": "2017-05-31 16:03:25",
                      "ftime": "2017-05-31 16:03:25",
                      "context": "[泉州市场部] [泉州市] [泉州市场部]的奥斯格尔已收件 电话:18650067511",
                      "location": ""
                    }
                  ]
                }
            }
        },
        created(){
          this.msg=this.$route.query.id?this.$route.query.id:'';
          console.log(this.$route.query.id);
        },
        methods:{
          turnBefore:function () {
            this.$router.push({path:'/'});
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
