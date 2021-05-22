<!--首页-->
<template>
  <div class="homePage">
    <div id="banner-video" ref="bannerVideo">
      <video id="home-video" src="~assets/video/Moon.mp4" autoplay loop muted>
        <!-- <source src="~assets/videoplayback.mp4" type="video/mp4" /> -->
      </video>
      <reference-bar class="bar bar1" @click.native="getVideoShow" :degreeX="degreeX">
        <template> 撼天亦有曲折 </template>
      </reference-bar>
      <reference-bar class="bar bar2">
        <template> 你好火星 </template>
      </reference-bar>
      <reference-bar class="bar bar3" :flexValue="flexValue" :degree="degree">
        <template>
          <div>去离宇宙最近的地方,看一场火箭发射</div>
        </template>
      </reference-bar>
      <time-axis class="time-axis"></time-axis>
    </div>
    <div class="video-show" ref="pageFive">
      <div class="video-show-content">
        <exit-icon></exit-icon>
        <video-box></video-box>
      </div>
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
  </div>
</template>
<script>
import TimeAxis from '../components/TimeAxis/TimeAxis.vue'
import ReferenceBar from 'components/ReferenceBar/ReferenceBar.vue'
import VideoBox from 'components/VideoShow/VideoBox.vue'
import ExitIcon from 'components/VideoShow/ExitIcon.vue'
export default {
  name: '',
  data () {
    return {
      degreeX: -180,
      flexValue: 'row-reverse',
      degree: 180
    }
  },
  methods: {
    getVideoShow () {
      this.$refs.pageFive.classList.add('moveTop')
    }
  },
  components: {
    TimeAxis,
    ReferenceBar,
    VideoBox,
    ExitIcon
  }
}
</script>
<style scoped>
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
  height: 100%;
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
  width: 67rem;
  height: 47.1rem;
  top: 45%;
  left: 60%;
  transform: translate(-50%, -50%) scale(0.8);
}
.bar {
  position: absolute;
}
.bar1 {
  top: 15%;
  left: 10%;
}
.bar2 {
  top: 60%;
  left: 10%;
}
.bar3 {
  top: 85%;
  left: 40%;
}
.video-show {
  position: absolute;
  top: 100%;
  left: 0;
  height: 100%;
  width: 100vw;
  height: 100vh;
  z-index: 4;
  transition: 500ms top linear;
}
.moveTop {
  top: -1px;
}
.video-show-content {
  width: 100%;
  height: 100%;
  position: relative;
  background-color: black;
}
</style>
