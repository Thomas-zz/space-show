<!--  -->
<template>
  <div ref="Restrict" class="restrictBox">
    <div class="flow" ref="flow">
      <div
        v-for="(item, index) in historys"
        :key="index"
        class="orginStyle"
        @click="changeSwiperCurrentIndex(index)"
      >
        <img :src="item.url" alt="" class="image" />
        <span>{{ item.title }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SwiperBottom',
  data () {
    return {
      historys: [
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
        },
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
        },
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
        }
      ],
      moveper: 340,
      moveX: '',
      currentIndex: 3,
      currentMove: 0,
      totalLength: 0
    }
  },
  mounted () {
    this.$bus.$on('changeSwiper', (index) => {
      this.changeSwiperCurrentIndex(index)
    })
    this.totalLength = this.historys.length
    this.currentMove = -this.moveper * 2
    this.$refs.flow.style = `transform:translateX(${this.currentMove}px);width:${
      this.moveper * this.totalLength
    }px;`
  },
  methods: {
    changeSwiperCurrentIndex (index) {
      console.log(index)
      if (index > this.currentIndex) {
        this.currentMove = this.currentMove - this.moveper
        this.$refs.flow.style = `transform:translateX(${this.currentMove}px);width:${
          this.moveper * this.totalLength
        }px`
        if (index === this.totalLength - 2) {
          setTimeout(() => {
            this.currentMove = -this.moveper * 3
            this.$refs.flow.style = `transform:translateX(${this.currentMove}px);width:${
            this.moveper * this.totalLength}px;transition:0s all;`
          }, 1000)
          this.currentIndex = 3
          this.$bus.$emit('changeImage', this.currentIndex - 1)
          return
        }
      } else if (index < this.currentIndex) {
        this.currentMove = this.currentMove + this.moveper
        this.$refs.flow.style = `transform:translateX(${this.currentMove}px);width:${
          this.moveper * this.totalLength
        }px`
        if (index === 1) {
          setTimeout(() => {
            this.currentMove = -this.moveper * 12
            this.$refs.flow.style = `transform:translateX(${this.currentMove}px);width:${
            this.moveper * this.totalLength}px;transition:0s all;`
          }, 1000)
          this.currentIndex = 13
          this.$bus.$emit('changeImage', this.currentIndex - 3)
          return
        }
      }
      this.currentIndex = index
      this.$bus.$emit('changeImage', this.currentIndex - 3)
    }
  }
}
</script>
<style scoped>
.restrictBox {
  width: 1020px;
  height: 32%;
  color: #ffffff;
  /* border: 1px solid white; */
  transition: 0.6s linear;
  overflow: hidden;
  transform:scale(0.7);
}
.flow {
  transition: 1s all;
}
.orginStyle {
  display: inline-block;
  width: 300px;
  height: 180px;
  opacity: 1;
  padding: 20px;
  overflow: hidden;
  transition: 0.5s ease;
}
.image {
  display: inline-block;
  width: 300px;
  height: 180px;
  transition:200ms all linear;
}
.orginStyle:hover{
  transform: scale(1.1);
}
</style>
