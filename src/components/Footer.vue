<template>
  <mu-paper class="bottom">
    <mu-bottom-nav :value="bottomNav">
      <mu-bottom-nav-item value="home" title="Home" icon="home" to="/"/>
      <mu-bottom-nav-item value="public" title="Public" icon="public" to="/public"/>
      <mu-bottom-nav-item value="message" title="Message" icon="message" to="/message"/>
      <mu-bottom-nav-item value="user" title="User" icon="account_circle" to="/user"/>
    </mu-bottom-nav>
  </mu-paper>
</template>

<script>
export default {
  data () {
    return {}
  },
  computed: {
    bottomNav () {
      const val = this.$route.path.toString().split('/')[1]
      return (val === '') ? 'home' : val
    }
  }
}
</script>

<style scoped>
.bottom {
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 376px;
}
</style>
