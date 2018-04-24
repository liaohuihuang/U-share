<template>
  <div class="header">
    <mu-appbar :title="title" class="title">
      <mu-icon-button icon="account_circle" slot="left" @click="drawerToggle(true)"/>
      <mu-icon-menu icon="more_vert" slot="right">
        <mu-menu-item title="menu one"/>
        <mu-menu-item title="menu two"/>
        <mu-menu-item title="menu three"/>
      </mu-icon-menu>
    </mu-appbar>
    <mu-drawer :open="open" :docked="docked" @close="drawerToggle()"></mu-drawer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      titleMap: new Map(this.$store.state.TITLE),
      open: false,
      docked: true
    }
  },
  methods: {
    drawerToggle (flag) {
      this.open = !this.open
      this.docked = !flag
    }
  },
  computed: {
    title () {
      return this.titleMap.get(this.$route.path)
    }
  }
}
</script>

<style scoped>
.title {
  position: fixed;
  text-align: center;
}
</style>
