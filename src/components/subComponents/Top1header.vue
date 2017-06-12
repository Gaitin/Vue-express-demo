<template>
  <div class="header">
    <mu-appbar title="快递查询" >
      <mu-icon-button icon="menu" slot="left"  @click="toggle(true)"/>
      <mu-icon-button icon="expand_more" slot="right"/>
    </mu-appbar>
    <div>
      <mu-drawer :open="open" :docked="docked" @close="toggle()">
        <mu-list @itemClick="docked ? '' : toggle()">
          <mu-list-item title="登录" @click="moduleClick">
            <mu-icon value="person_pin" slot="left" color="pinkA200"/>
            <mu-icon value="keyboard_arrow_right" slot="right" color="pinkA200"/>
          </mu-list-item>
          <mu-divider />
          <mu-list-item title="时效查询" @click="moduleClick">
            <mu-icon value="alarm" slot="left" color="pinkA200"/>
            <mu-icon value="keyboard_arrow_right" slot="right" color="pinkA200"/>
          </mu-list-item>
          <mu-divider />
          <mu-list-item title="关于" to="/About">
            <mu-icon value="report" slot="left" color="pinkA200"/>
            <mu-icon value="keyboard_arrow_right" slot="right" color="pinkA200"/>
          </mu-list-item>
          <mu-divider />
          <mu-list-item v-if="docked" @click.native="open = false" title="Close"/>
          <mu-divider />
        </mu-list>
      </mu-drawer>
    </div>
    <mu-toast v-if="toast" message="组件未完成" />
  </div>
</template>

<script>
    export default {
      data(){
        return {
          open: false,
          docked: true,
          toast:false
        }
      },
      methods: {
        toggle (flag) {
          this.open = !this.open
          this.docked = !flag
        },
      moduleClick(){
          this.toast=true;
          if (this.toastTimer) clearTimeout(this.toastTimer)
          this.toastTimer = setTimeout(() => { this.toast = false }, 2000)
        }
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .mu-toast{
    left: 35%;
    width: auto;
    bottom: 50%;
  }

</style>
