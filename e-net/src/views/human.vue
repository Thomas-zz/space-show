<!--  -->
<template>
  <div class="fullpage">
    <left-nav class="left-nav"></left-nav>
    <right-show class="right-show"></right-show>
  </div>
</template>

<script>
import LeftNav from 'components/LeftNav.vue'
import RightShow from 'components/RightShow/RightShow'
export default {
  name: '',
  data () {
    return {}
  },
  components: {
    LeftNav,
    RightShow
  }
}
</script>
<style scoped>
.fullpage {
  height: 100vh;
  width: 100wh;
  position: relative;
  /* background: rgb(41, 39, 39); */
  background: url('~assets/img/background/space.png') no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.left-nav {
  flex: 1;
}
.right-show {
  flex: 3;
}
</style>
