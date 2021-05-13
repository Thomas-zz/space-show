<!--  -->
<template>
  <div>
    <div class="time-swiper">
      <div class='ShowImage'>
        <div ref= 'child1' class="image"></div>
        <div ref= 'child2' class="image"></div>
      </div>
      <div class="Textshow">
         <div>  <span class="leftText" v-for="(item, index) in TitleArray" :key="index"><i :class = "{i:true, move: isTrue}" :style = "{transitionDelay:index * 100 + 'ms' }">{{item}}</i></span></div>
         <div :class="{RightText:true,}"><span :class = "{ span: true,timeMove: isTrue}">{{historys[currentIndex].time}}</span></div>
      </div>
      <div  class="ContentShow">
          <span :class = "{content:true,contentMove:isTrue}">{{historys[currentIndex].content}}</span>
      </div>
      <div class="leftArrow" @click = "moveLeft"></div>
      <div class="rightArrow" @click = "moveRight"></div>
  </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      currentIndex: 0,
      lastIndex: 0,
      RightCount: 0,
      LeftCount: 0,
      TitleArray: [],
      isTrue: true,
      True: true,
      historys: [
        {
          title: '东方红一号',
          time: '1970/4/24',
          content: '1970年4月24日 中国第一颗人造卫星“东方红一号”成功发射',
          url: require('assets/img/history/1东方红一号.jpg')
        },
        {
          title: '亚洲一号',
          time: '1990/4/7',
          content: '“亚洲一号”卫星成功发射，中国航天正式迈入世界商业航天市场',
          url: require('assets/img/history/2亚洲一号.jpg')
        },
        {
          title: '神舟五号',
          time: '2003/10/25',
          content: '”神舟五号”成功发射，实现了中华民族千年飞天梦',
          url: require('assets/img/history/3神舟五号.jpg')
        },
        {
          title: '嫦娥一号',
          time: '2007/10/24',
          content: '中国第一颗探月卫星“嫦娥一号”成功发射',
          url: require('assets/img/history/4嫦娥一号.jpg')
        },
        {
          title: '神舟七号',
          time: '2008/9/25',
          content: '“神舟七号”成功发射，太空中第一次留下了中国人的脚步',
          url: require('assets/img/history/5神舟七号.jpg')
        },
        {
          title: '天宫一号',
          time: '2011/9/29',
          content: '中国第一个空间实验室“天宫一号”成功发射',
          url: require('assets/img/history/6天宫一号.jpg')
        },
        {
          title: '嫦娥三号',
          time: '2013/12/02',
          content: '”亚洲一号”卫星成功发射，中国航天正式迈入世界商业航天市场',
          url: require('assets/img/history/7嫦娥三号.jpg')
        },
        {
          title: '嫦娥四号',
          time: '2018/12/08',
          content: '“嫦娥四号”探测器成为人类首个在月背软着陆的航天器',
          url: require('assets/img/history/8嫦娥四号.jpg')
        },
        {
          title: '天问一号',
          time: '2020/07/23',
          content: '“天问一号”火星探测器发射升空',
          url: require('assets/img/history/10天问一号.jpg')
        },
        {
          title: '北斗卫星',
          time: '2020/07/31',
          content: '北斗全球卫星导航系统正式开通',
          url: require('assets/img/history/9北斗卫星.jpg')
        },
        {
          title: '嫦娥五号',
          time: '2020/12/17',
          content: '”嫦娥五号”返回器着陆地球实现了中国首次月球无人采样返回',
          url: require('assets/img/history/11嫦娥五号.jpg')
        },
        {
          title: '天和核心舱',
          time: '2021//04/29',
          content: '“天和”核心舱成功发射，开启了中国航天空间站时代。',
          url: require('assets/img/history/12天和.jpg')
        }
      ]
    }
  },
  methods: {
    moveRight () {
      this.isTrue = false
      this.RightCount += 1
      this.lastIndex = this.currentIndex
      if (this.lastIndex === this.historys.length - 1) {
        this.currentIndex = 0
      } else {
        this.currentIndex = this.lastIndex + 1
      }
      if (this.RightCount % 2 !== 0) {
        this.$refs.child1.className = 'image moveLeftTop'
        this.$refs.child1.style = `
        background: url('${this.historys[this.lastIndex].url}');
        `
        this.$refs.child2.className = 'image moveRightBottom'
        this.$refs.child2.style = `
        background: url('${this.historys[this.currentIndex].url}');
        transform-origin: right bottom; transform: scale(1);`
      } else {
        this.$refs.child2.className = 'image moveLeftTop'
        this.$refs.child2.style = `
        background: url('${this.historys[this.lastIndex].url}');
        transform-origin: left top; transform: scale(0);`
        this.$refs.child1.className = 'image moveRightBottom'
        this.$refs.child1.style = `
        background: url('${this.historys[this.currentIndex].url}');
        transform-origin: right bottom; transform: scale(1);`
      }
      setTimeout(() => {
        this.TitleArray = this.historys[this.currentIndex].title.split('')
        this.isTrue = true
      }, 700)
    },
    moveLeft () {
      this.isTrue = false
      this.LeftCount += 1
      this.lastIndex = this.currentIndex
      if (this.lastIndex === 0) {
        this.currentIndex = this.historys.length - 1
      } else {
        this.currentIndex = this.lastIndex - 1
      }
      if (this.LeftCount % 2 !== 0) {
        this.$refs.child2.className = 'image reverse-moveRightBottom'
        this.$refs.child2.style = `
        background: url('${this.historys[this.currentIndex].url}');
        transform-origin: right bottom; transform: scale(0);`
        this.$refs.child1.className = 'image reverse-moveLeftTop'
        this.$refs.child1.style = `
        background: url('${this.historys[this.currentIndex].url}');
        transform-origin: left top; transform: scale(1);`
      } else {
        this.$refs.child1.className = 'image reverse-moveRightBottom'
        this.$refs.child1.style = `
        background: url('${this.historys[this.currentIndex].url}');
        transform-origin: right bottom; transform: scale(0);`
        this.$refs.child2.className = 'image reverse-moveLeftTop'
        this.$refs.child2.style = `
        background: url('${this.historys[this.currentIndex].url}');
        transform-origin: left top; transform: scale(1);`
      }
      setTimeout(() => {
        this.TitleArray = this.historys[this.currentIndex].title.split('')
        this.isTrue = true
      }, 600)
    }
  },
  mounted () {
    this.$refs.child1.style = `
      background: url('${this.historys[this.currentIndex].url}')`
    this.$refs.child2.style = `
      transform: scale(0);`

    this.TitleArray = this.historys[this.currentIndex].title.split('')
    console.log(this.TitleArray)
  }
}
</script>
<style scoped>
.time-swiper{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
}
.ShowImage{
    position: relative;
    background-color: rgba(7,7,7,0.8);
    width: 76%;
    height: 69%;
    max-width: 800px;
    max-height: 500px;
    overflow: hidden;
    border-radius: 7px;
    border:10px solid rgba(242, 242, 243);
}
.image{
  position: absolute;
  width: 100%;
  height: 100%;
  transition-duration:300ms;
  transition-timing-function: ease;
  background-size: cover;
  background-position: center;
}
.moveLeftTop{
    left: 0;
    top:0;
    transform-origin: left top;
    animation-name: moveLeftTop;
    animation-fill-mode: forwards;
    animation-duration: 300ms;
}
@keyframes moveLeftTop {
    0%{
        transform: scale(1);
    }
    100%{
        transform: scale(0);
    }
}
.reverse-moveLeftTop{
    left: 0;
    top:0;
    transform-origin: left top;
    transform: scale(0);
}
.moveRightBottom{
    bottom: 0;
    right:0;
    transform-origin: right bottom;
    transform: scale(0);
}
.reverse-moveRightBottom{
    bottom: 0;
    right:0;
    transform-origin: right bottom;
    transform: scale(0);
}
.Textshow{
    position: absolute;
    top:7%;
    left:16%;
    color:white;
    display: flex;
    flex-direction: column;
}
.leftText{
    display: inline-block;
    padding-right: 1rem;
    font-size: 3rem;
    font-weight: 600;
    overflow: hidden;
}
.i{
    position: relative;
    top:2em;
    /* transition-delay: calc(var(--i)*0.5)s; */
    transition:top ease-in-out 500ms;
}
.move{
    top:0em;
}

.RightText{

    overflow: hidden;
}
.span{
  display: inline-block;
  position: relative;
  font-size: 2rem;
  font-weight: 500;
  right: 6rem;
  opacity: 0;
  transition:right ease-in-out 500ms;
}
.timeMove{
    opacity: 1;
    right:0;
}

.leftArrow{
    background: url("~assets/arrow.png");
    position: absolute;
    width:200px;
    height: 200px;
    transform: rotateY(180deg) scale(0.5);
    left: -4rem;
}
.rightArrow{
    background: url("~assets/arrow.png");
    position: absolute;
    width:200px;
    height: 200px;
    transform: scale(0.5);
    right: -4rem;
}
.ContentShow{
    position: absolute;
    bottom:11%;
    right: 10%;
    color: white;
    overflow: hidden;
}
.content{
   position: relative;
   display: inline-block;
   font-size: 1.5em;
   left:30em;
   opacity: 0;
   transition:all ease-in-out 500ms;
}
.contentMove{
   left: 0em;
   opacity: 1;
}
</style>
