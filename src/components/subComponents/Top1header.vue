<template>
  <div class="header">
    <mu-appbar title="快递查询" >
      <mu-icon-button icon="menu" slot="left"  @click="toggle(true)"/>
      <mu-icon-button icon="expand_more" slot="right"/>
    </mu-appbar>
    <div>
      <mu-drawer :open="open" :docked="docked" @close="toggle()">
        <mu-list @itemClick="docked ? '' : toggle()">
          <mu-list-item title="登录">
            <mu-icon value="person_pin" slot="left" color="pinkA200"/>
            <mu-icon value="keyboard_arrow_right" slot="right" color="pinkA200"/>
          </mu-list-item>
          <mu-divider />
          <mu-list-item title="关于">
            <mu-icon value="report" slot="left" color="pinkA200"/>
            <mu-icon value="keyboard_arrow_right" slot="right" color="pinkA200"/>
          </mu-list-item>
          <mu-divider />
          <mu-list-item v-if="docked" @click.native="open = false" title="Close"/>
          <mu-divider />
        </mu-list>
      </mu-drawer>
    </div>
  </div>
</template>

<script>
    export default {
      data(){
        return {
          open: false,
          docked: true
        }
      },
      methods: {
        toggle (flag) {
          this.open = !this.open
          this.docked = !flag
        }
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }

</style>
