<!--  -->
<template>
  <div class="fullpage">
     <video class="home-video" src="~assets/video/EarthScroll.mp4" autoplay loop muted>
        <!-- <source src="~assets/videoplayback.mp4" type="video/mp4" /> -->
      </video>
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
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.home-video{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: fill;
  min-height: 661px;
  /*加滤镜*/
  /*filter: blur(15px); //背景模糊设置 */
  /*-webkit-filter: grayscale(100%);*/
  /*filter:grayscale(100%); //背景灰度设置*/
  z-index: -1;
}
.left-nav {
  flex: 1;
}
.right-show {
  flex: 3;
}
</style>
