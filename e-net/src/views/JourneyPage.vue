<!--首页-->
<template>
  <div class="homePage" @mousemove="mouseMove()">
    <div id="banner-video" ref="bannerVideo">
      <video id="home-video" src="~assets/video/Moon.mp4" autoplay loop muted>
        <!-- <source src="~assets/videoplayback.mp4" type="video/mp4" /> -->
      </video>
      <Time-Swiper ref="swiper" class="time-axis"></Time-Swiper>
      <swiper-bottom ref="SwiperBotton" class="swiper-bottom"></swiper-bottom>
    </div>
    <!-- <div class="video-show" ref="pageFive">
      <div class="video-show-content">
        <exit-icon></exit-icon>
        <video-box></video-box>
      </div>
    </div> -->
  </div>
</template>
<script>
// import TimeAxis from '../components/TimeAxis/TimeAxis.vue'
import TimeSwiper from '../components/TimeAxis/ChildComponents/TimeSwiper.vue'
import SwiperBottom from '../components/TimeAxis/ChildComponents/SwiperBottom.vue'
// import VideoBox from 'components/VideoShow/VideoBox.vue'
// import ExitIcon from 'components/VideoShow/ExitIcon.vue'
export default {
  name: '',
  data () {
    return {
      degreeX: -180,
      flexValue: 'row-reverse',
      degree: 180,
      // 节流锁
      lock: true
    }
  },
  methods: {
    getVideoShow () {
      this.$refs.pageFive.classList.add('moveTop')
    },
    mouseMove () {
      if (!this.lock) return
      clearTimeout(this.timeout)
      const that = this
      const e = window.event
      const mouseX = e.clientX
      const mouseY = e.clientY
      // 屏幕中点
      const centerX = window.innerWidth / 2
      const centerY = window.innerHeight / 2
      // 鼠标移动距离
      const moveX = mouseX - centerX
      const moveY = mouseY - centerY
      this.$refs.swiper.$refs.Bg.style.transform = `translate3d(${moveX / 12}px,${
        moveY / 16
      }px,${0}) rotateX(${-moveX / 70}deg) rotateY(${moveY / 70}deg)`
      this.$refs.swiper.$refs.TextShow.style.transform = `translate3d(${moveX / 7}px,${
        moveY / 10
      }px,${50}px)  rotateX(${-moveX / 70}deg) rotateY(${moveY / 70}deg)`
      this.$refs.swiper.$refs.ShowImg.style.transform = `translate3d(${moveX / 8}px,${
        moveY / 13
      }px,${90}px)  rotateX(${-moveX / 70}deg) rotateY(${moveY / 70}deg)`
      this.$refs.swiper.$refs.Content.style.transform = `translate3d(${moveX / 9}px,${
        moveY / 10
      }px,${50}px)  rotateX(${-moveX / 70}deg) rotateY(${moveY / 70}deg)`
      this.$refs.SwiperBotton.$refs.Restrict.style.transform = `translate3d(${moveX / 13}px,${
        moveY / 15
      }px,${50}px)  rotateX(${-moveX / 80}deg) rotateY(${moveY / 80}deg) scale(0.7)`

      this.lock = false
      this.timeout = setTimeout(function () {
        that.lock = true
      }, 50)
    }
  },
  components: {
    // TimeAxis,
    TimeSwiper,
    SwiperBottom
    // VideoBox,
    // ExitIcon
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
  top: 40%;
  left: 50%;
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
.swiper-bottom {
  position: absolute;
  top: 70%;
  left: 18%;
  z-index: 0;
}
</style>
