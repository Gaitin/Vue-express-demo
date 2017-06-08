<template>
    <div class="findMain">
      <mu-toast v-if="toast" message="快递号不能为空" />
      <div class="searchBox">
          <img src="../../assets/images/df2e44a170b12279c3b7d3fe57dcdf0a.jpg" alt="">
          <div class="sbox">
            <mu-text-field  v-model="textValue"  hintText="快递单号" type="text" iconClass="iconEr" />
            <i class="material-icons iconCamera">&#xE3B5;</i>
            <div class="btnSearch" @click="showDetail">
              <i class="material-icons ">search</i>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
              textValue:'',
              toast: false
            }
        },
        methods:{
          showDetail:function () {
              if(this.textValue!=''){
                this.$router.push({path:'/info',query: {id:this.textValue}})
              }else{
                this.toast = true;
                if (this.toastTimer) clearTimeout(this.toastTimer)
                this.toastTimer = setTimeout(() => { this.toast = false }, 2000)
              }
          }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .findMain{
    width: 100%;
    height: 180px;
  }
   .searchBox{
     width: 100%;
     height: 100%;
     display: flex;
     justify-content: center;
     flex-direction: column;
     align-items: center;
     margin: 20px 0;
     /*background-color: #3481ED;*/
     /*background: url("../../assets/images/e555cd95955b76e8c20eaae05b7e82e2_opt.jpg")center no-repeat;*/
   }
  .btnSearch{
    position: absolute;
    right: -32px;
    top: 5px;
    width: 40px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #3481ED;
    color: #fff;
  }

  .sbox{
    position: relative;
    display: flex;
    justify-content: center;
    margin-top: 10px;
    /*align-items: center;*/
    /*border: 1px solid #3481ED;*/
  }
  .iconCamera{
    position: absolute;
    right: 10px;
    top: 8px;
    color: #999;
  }
  .mu-ripple-wrapper{
    background-color:#3481ED;
    color:#fff;
  }
  .mu-toast{
    left: 30%;
    width: auto;
    bottom: 50%;
  }
</style>
