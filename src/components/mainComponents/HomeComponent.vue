<template>
  <div class="homeComponent">
    <top1header class="topheader"></top1header>
    <div class="bodyContainer" >
      <div class="tabPanel">
      <div class="tab" v-if="bottomNav === 'send'">
        <sendMainComponent></sendMainComponent>
      </div>
      <div class="tab" v-if="bottomNav === 'find'">
        <findMainComponent></findMainComponent>
      </div>
      <div class="tab" v-if="bottomNav === 'own'">
        <ownCenterComponent></ownCenterComponent>
      </div>
      </div>
    </div>
    <div class="bottomNav">
      <mu-paper >
        <mu-bottom-nav :value="bottomNav" shift @change="handleChange">
          <mu-bottom-nav-item value="send" title="寄快递"  icon="airport_shuttle"/>
          <mu-bottom-nav-item value="find" title="查快递" icon="search"/>
          <mu-bottom-nav-item value="own" title="我" icon="person"/>
        </mu-bottom-nav>
      </mu-paper>
    </div>
  </div>

</template>

<script>
  import Top1header from '@/components/subComponents/Top1header.vue'
  import FindMainComponent from '@/components/mainComponents/FindMainComponent.vue'
  import sendMainComponent from '@/components/mainComponents/sendMainComponent.vue'
  import ownCenterComponent from '@/components/mainComponents/ownCenterComponent.vue'
    export default {
      components:{
        'top1header':Top1header,
        'findMainComponent':FindMainComponent,
        'sendMainComponent':sendMainComponent,
        'ownCenterComponent':ownCenterComponent
      },
        data () {
          return {
            bottomNav: 'find',
            bottomNavColor: 'find'
          }
        },
        methods: {
          handleChange (val) {
            this.bottomNav = val
          }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .homeComponent{
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
  }

  .bodyContainer{
    display: flex;
    flex: 1;
    overflow: hidden;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
  }
  .tabPanel{
    flex: 1;
  }
  .mu-paper{
    /*z-index: -1*/
  }
</style>
