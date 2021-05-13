<!--首页-->
<template>
  <div class="homePage">
    <div id="banner-video">
      <video id="home-video" src="~assets/video/Moon.mp4" autoplay loop muted>
        <!-- <source src="~assets/videoplayback.mp4" type="video/mp4" /> -->
      </video>
    </div>
    <!-- <div class="overlay">
      <div class="corner-marker"> -->
        <!-- <img class="logo" src="~assets/CNSA.png" /> -->
        <!-- <div class="text">
          <p class="cnsa">C N S A</p>
          <p>中国航天</p>
        </div>
      </div>
      <div class="title">
      </div>
    </div> -->
     <time-axis class="time-axis"></time-axis>
  </div>
</template>

<script>
import TimeAxis from '../components/TimeAxis/TimeAxis.vue'
export default {
  name: '',
  data () {
    return {}
  },
  components: {
    TimeAxis
  }
}
</script>
<style  scoped>
@charset "UTF-8";
.homePage {
  background: rgba(0, 0, 0, 0.25);
  position: relative;
}

#banner-video {
  position: relative;
  width: 100%;
  height: 100vh;
}
#banner-video #home-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  /* height: 100%; */
  object-fit: fill;
  min-height: 661px;
  /*加滤镜*/
  /*filter: blur(15px); //背景模糊设置 */
  /*-webkit-filter: grayscale(100%);*/
  /*filter:grayscale(100%); //背景灰度设置*/
  z-index: -1;
}

.overlay {
  position: absolute;
  height: 45vh;
  top: 14%;
  left: 6%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.overlay .corner-marker {
  font-family: Helvetica;
  font-size: 1.2rem;
  color: #e3e3e3;
}
.overlay .corner-marker .logo {
  display: inline-block;
  width: 2.5rem;
  padding-right: 1rem;
  padding-top: 0.2rem;
}
.overlay .corner-marker .text {
  display: inline-block;
}
.overlay .corner-marker .text .cnsa {
  text-indent: 3px;
}
.overlay .title {
  font-family: Helvetica;
  font-size: 4.2rem;
  font-weight: 600;
  direction: rtl;
  color: #e3e3e3;
}
.time-axis {
  position: absolute;
  width: 70%;
  height: 100%;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
}
</style>
