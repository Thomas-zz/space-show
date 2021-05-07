<!--首页-->
<template>
  <div class="homePage">
    <div id="banner-video">
      <video id="home-video" src="~assets/videoplayback.mp4" autoplay loop muted>
        <!-- <source src="~assets/videoplayback.mp4" type="video/mp4" /> -->
      </video>
    </div>
    <div class="overlay">
      <div class="corner-marker">
        <img class="logo" src="~assets/CNSA.png" />
        <div class="text">
          <p class="cnsa">C N S A</p>
          <p>中国航天</p>
        </div>
      </div>
      <div class="title">
        <p>一个有希望的民族</p>
        <p>需要一群仰望星空的人</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {}
  }
}
</script>
<style lang="scss" scoped>
.homePage {
  background: rgba(0, 0, 0, 0.25);
  position: relative;
}

#banner-video {
  position: relative;
  width: 100%;
  height: 100vh;
  #home-video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: fill;
    min-height: 661px;
    //   width: auto;
    /*加滤镜*/
    /*filter: blur(15px); //背景模糊设置 */
    /*-webkit-filter: grayscale(100%);*/
    /*filter:grayscale(100%); //背景灰度设置*/
    z-index: -1;
  }
}

.overlay {
  position: absolute;
  height: 45vh;
  top: 14%;
  left: 6%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .corner-marker {
    .logo {
      display: inline-block;
      width: 2.5rem;
      padding-right: 1rem;
      padding-top: 0.2rem;
    }
    .text{
      display: inline-block;
      .cnsa {
        text-indent: 3px;
      }
    }
    font-family: Helvetica;
    font-size: 1.2rem;
    color: rgba(227, 227, 227);
  }
  .title {
    font-family: Helvetica;
    font-size: 4.2rem;
    font-weight: 600;
    direction: rtl;
    color: rgba(227, 227, 227);
  }
}
</style>
