<!--首页-->
<template>
  <div class="homePage">
    <div id="banner-video">
      <video id="home-video" src="~assets/videoplayback.mp4" autoplay loop muted>
        <!-- <source src="~assets/videoplayback.mp4" type="video/mp4" /> -->
      </video>
    </div>
    <div class="overlay">
        <div class="title">中 国 航 天</div>
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
.homePage{
    background: rgba(0,0,0,0.25);
}

#banner-video{
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
    z-index:-1;
  }
}

.overlay{
    position: absolute;
    left: 10%;
    display: flex;
    .title{
        font-family: Helvetica;
        font-size: 6rem;
        font-weight: 600;
        color: rgba(227, 227, 227);
        
    }
}
</style>
