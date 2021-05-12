<!--“星辰”页面-->
<template>
  <div class="stars-page" @mousemove="mouseMove()">
    <div class="left-list">
      <div class="left-arrow" ref="LeftArrow" @click="toLeft()"></div>
      <ul class="starsli">
        <li
          ref="starsLi"
          @mouseenter="mouseEnter(index)"
          @mouseleave="mouseLeave()"
          @click="clickLi(index)"
          v-for="(item, index) in starsList"
          v-bind:key="item"
        >
          <p>{{ item }}</p>
        </li>
      </ul>
      <img :src="imgurl" class="starsImg" ref="starsImg" />
    </div>
    <StarsShow class="right-list" ref="StarsShow"></StarsShow>
    <div id="moon"></div>
    <img src="~assets/星空.png" class="bgImg" ref="bgImg1" />
    <img src="~assets/星空.png" class="bgImg2" ref="bgImg2" />
    <video ref="earth" class="earth-video" src="~assets/earth.mp4" autoplay loop muted></video>
  </div>
</template>

<script>
import StarsShow from '../components/starsShow'

export default {
  name: 'starsPage',
  data () {
    return {
      starsList: [
        '北斗 BEIDOU',
        "嫦娥 CHANG'E",
        '墨子 MICIUS',
        '神舟 SHENZHOU',
        '天宫 TIANGONG',
        '天问 TIANWEN'
      ],
      imgList: [
        { imgurl: require('../assets/北斗.png') },
        { imgurl: require('../assets/嫦娥.png') },
        { imgurl: require('../assets/墨子.png') },
        { imgurl: require('../assets/神舟飞船.png') },
        { imgurl: require('../assets/天宫.png') },
        { imgurl: require('../assets/天问.png') }
      ],
      imgurl: '',
      current: 0,
      // 节流锁
      lock: true,
      // 定时器
      timeout: null,
      // 设置鼠标离开li的时候要不要清除图片url
      ifUrl: true,
      // 鼠标位置
      mouseX: 0,
      mouseY: 0
    }
  },
  methods: {
    pageIn () {
      for (let i = 0; i < this.starsList.length; i++) {
        setTimeout(() => {
          this.$refs.starsLi[i].style.transform = 'translateX(0)'
        }, 200 * i)
      }
    },
    clickLi (index) {
      // this.mouseEnter(this.current)
      // 不清除图片url
      this.ifUrl = false
      const that = this
      // 退场动画
      for (let i = 0; i < this.starsList.length; i++) {
        setTimeout(() => {
          this.$refs.starsLi[i].style.transform = 'translateX(-120%)'
        }, 100 * i)
      }
      setTimeout(() => {
        this.earthMove(true)
        // 箭头淡入
        that.$refs.LeftArrow.style.opacity = 1
      }, 400)
      // 设置starsShow的值
      this.$refs.StarsShow.setValue(index)
      setTimeout(function () {
        that.$refs.StarsShow.enterAnimation()
      }, 1200)
    },
    toLeft () {
      this.ifUrl = true
      const that = this
      // 箭头淡出
      that.$refs.LeftArrow.style.opacity = 0
      that.$refs.StarsShow.enterAnimation()
      setTimeout(() => {
        this.earthMove(false)
      }, 800)
      for (let i = 0; i < this.starsList.length; i++) {
        setTimeout(() => {
          this.$refs.starsLi[i].style.transform = 'translateX(0)'
        }, 1100 + 100 * i)
      }
    },
    earthMove (val) {
      if (val) {
        this.$refs.earth.style.right = 40 + '%'
      } else {
        this.$refs.earth.style.right = 0
      }
    },
    mouseEnter (index) {
      this.current = index
      this.lock = true
      // console.log('当前列：' + this.current)
      this.imgurl = this.imgList[index].imgurl
    },
    mouseLeave () {
      if (this.ifUrl) {
        this.current = null
        this.imgurl = ''
      }
    },
    mouseMove () {
      if (!this.lock) return
      clearTimeout(this.timeout)
      const that = this
      const e = window.event
      const width = this.$refs.starsImg.clientWidth / 2
      const height = this.$refs.starsImg.clientHeight / 2
      const mouseX = e.clientX
      const mouseY = e.clientY

      this.$refs.starsImg.style.left = (e.clientX - width) / 16 + 'rem'
      this.$refs.starsImg.style.top = (e.clientY - height) / 26 + 'rem'

      // 移动背景图
      if (mouseX < this.mouseX) {
        this.$refs.bgImg1.style.left = this.$refs.bgImg1.getBoundingClientRect().left + 1 + 'px'
        this.$refs.bgImg2.style.left = this.$refs.bgImg2.getBoundingClientRect().left + 0.5 + 'px'
      } else if (mouseX > this.mouseX) {
        this.$refs.bgImg1.style.left = this.$refs.bgImg1.getBoundingClientRect().left - 1 + 'px'
        this.$refs.bgImg2.style.left = this.$refs.bgImg2.getBoundingClientRect().left - 0.5 + 'px'
      }

      if (mouseY < this.mouseY) {
        this.$refs.bgImg1.style.top = this.$refs.bgImg1.getBoundingClientRect().top + 1 + 'px'
        this.$refs.bgImg2.style.top = this.$refs.bgImg2.getBoundingClientRect().top + 0.5 + 'px'
      } else if (mouseY > this.mouseY) {
        this.$refs.bgImg1.style.top = this.$refs.bgImg1.getBoundingClientRect().top - 1 + 'px'
        this.$refs.bgImg2.style.top = this.$refs.bgImg2.getBoundingClientRect().top - 0.5 + 'px'
      }

      // 重设mouseX和mouseY
      this.mouseX = mouseX
      this.mouseY = mouseY

      // 关锁
      this.lock = false
      // 200毫秒后打开
      this.timeout = setTimeout(function () {
        that.lock = true
      }, 50)
    }
  },
  components: {
    StarsShow
  }
}
</script>
<style lang="scss" scoped>
.stars-page {
  position: relative;
  background: rgba(2, 2, 2, 1);
  overflow: hidden;
  // background: url('~assets/星空.png');
  .left-list {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    z-index: 2;
    .left-arrow{
      width: 2rem;
      height: 2rem;
      border-top: 5px solid rgb(154, 154, 154);
      border-left: 5px solid rgb(154, 154, 154);
      border-radius: 2px;
      cursor: pointer;
      position: absolute;
      top: 50%;
      left: 15%;
      opacity: 0;
      transform: translateY(-50%) rotate(-45deg);
      transition: 2s ease;
      z-index: 2;
    }
    .starsli {
      li {
        height: 6.5rem;
        width: 40vw;
        position: relative;
        text-align: right;
        line-height: 6.5rem;
        font-size: 1.9rem;
        color: rgb(154, 154, 154);
        // border: 1px solid black;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 600;
        z-index: 2;
        // 页面进入时li从左边出来
        transition: 0.8s ease;
        transform: translateX(-120%);
        p {
          transition: 1s ease;
        }
        &:hover {
          color: rgb(254, 254, 254);
          cursor: pointer;
          p {
            transform: translate(3rem);
          }
        }
        &::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: -5%;
          height: 3px;
          width: 45vw;
          background: linear-gradient(to left, rgb(15, 15, 15), rgb(38, 38, 38));
        }
      }
    }
    .starsImg {
      position: absolute;
      width: 23rem;
      opacity: 0.5;
      transition: 0.1s linear;
    }
  }
  .right-list {
    width: 50%;
    height: 100%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    z-index: 2;
  }
  #moon {
    position: absolute;
    left: 2rem;
    top: 2rem;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-size: 210px;
    box-shadow: inset 15px 0 30px 6px rgb(0, 0, 0), inset -3px 0 6px 2px rgba(255, 255, 255, 0.2);
    z-index: 1;
  }
  .bgImg {
    position: absolute;
    width: 120%;
    top: -2rem;
    left: -20px;
    z-index: 1;
    opacity: 0.2;
    // transition: 0.5s linear;
  }
  .bgImg2 {
    position: absolute;
    width: 120%;
    top: -2rem;
    left: -20px;
    z-index: 0;
    opacity: 0.6;
    transform: rotate(180deg);
    // transition: 0.5s linear;
  }
  .earth-video {
    z-index: 0;
    width: 65%;
    position: absolute;
    right: 2%;
    transition: 0.8s ease;
  }
}
</style>
