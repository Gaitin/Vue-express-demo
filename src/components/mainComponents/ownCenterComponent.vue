<template>
    <div class="own">
       <div class="ownHeader">
         <mu-list>
           <mu-list-item title="Mike Li" describeText="Jan 9, 2014">
             <mu-avatar src="http://cdn.kuaidi100.com/images/all/36/shunfeng.png" slot="leftAvatar"/>
           </mu-list-item>
         </mu-list>
       </div>
       <div class="ownOrder">
         <mu-list>
           <mu-list-item title="我的寄件订单" >
             <mu-avatar  :size=32  icon="assignment" backgroundColor="#EBBE49" slot="leftAvatar"/>
             <mu-icon value="keyboard_arrow_right" slot="right"/>
           </mu-list-item>
         </mu-list>
       </div>
       <div class="ownAddress">
        <mu-list>
          <mu-list-item title="地址管理" >
            <mu-avatar :size=32  icon="pin_drop" backgroundColor="blue" slot="leftAvatar"/>
            <mu-icon value="keyboard_arrow_right" slot="right"/>
          </mu-list-item>
        </mu-list>
      </div>
       <div class="ownSuggest">
        <mu-list>
          <mu-list-item title="意见反馈" >
            <mu-avatar  :size=32 icon="insert_comment" backgroundColor="blue" slot="leftAvatar"/>
            <mu-icon value="keyboard_arrow_right" slot="right"/>
          </mu-list-item>
        </mu-list>
      </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    .own {
      div{
        margin: 5px 0;
        background-color: #fff;
      }
      .mu-list{
        padding: 0;
      }
    }

</style>
