<template>
  <div id="container">
    <pageAside @switchPage="switchPage"></pageAside>
    <div id="wrthiser">
      <div class="pages" ref="pages">
        <homePage class="page"></homePage>
        <starsPage class="page" ref="starsPage"></starsPage>
        <humanPage class="page"></humanPage>
        <journeyPage class="page"></journeyPage>
      </div>
    </div>
  </div>
</template>

<script>
import pageAside from './components/aside'
import homePage from './views/HomePage'
import starsPage from './views/starsPage'
import humanPage from './views/human'
import journeyPage from './views/JourneyPage'
import './common/font/font.css'
// import { setTimeout } from 'timers';

export default {
  name: 'this',
  data () {
    return {
      // 节流锁
      lock: true
      // pageNo: [1, 2, 3, 4],
      // this.$children[0].currentPage: 0
    }
  },
  mounted () {
    this.mouseEvent()
  },
  methods: {
    switchPage (pageNo) {
      if (!this.lock) return
      this.$refs.pages.style.top = -pageNo * this.$store.state.pageHeight + 'px'
      // 当切到第二个页面时，执行加载动画
      if (this.$refs.pages.style.top === -this.$store.state.pageHeight + 'px') {
        this.$refs.starsPage.pageIn()
      }
      this.lock = false
      this.unlocking()
      // console.log(this.$refs.pages.style.top)
    },
    mouseEvent (event) {
      document.addEventListener('mousewheel', (event) => {
        if (!this.lock) return
        const pageLength = this.$children[0].pageNo.length
        if (event.wheelDelta < 0) {
          if (this.$children[0].currentPage < pageLength - 1) {
            this.$refs.pages.style.top = -this.$children[0].currentPage * this.$store.state.pageHeight - this.$store.state.pageHeight + 'px'
            this.$children[0].currentPage += 1
            if (this.$refs.pages.style.top === -this.$store.state.pageHeight + 'px') {
              this.$refs.starsPage.pageIn()
            }
            this.lock = false
            this.unlocking()
            console.log(this.$children[0].currentPage + ' ' + pageLength)
          }
        } else if (event.wheelDelta > 0) {
          if (this.$children[0].currentPage > 0) {
            this.$refs.pages.style.top = -this.$children[0].currentPage * this.$store.state.pageHeight + this.$store.state.pageHeight + 'px'
            this.$children[0].currentPage -= 1
            if (this.$refs.pages.style.top === -this.$store.state.pageHeight + 'px') {
              this.$refs.starsPage.pageIn()
            }
            this.lock = false
            this.unlocking()
            console.log(this.$children[0].currentPage + ' ' + pageLength)
          }
        }
      })
    },
    unlocking () {
      const that = this
      setTimeout(function () {
        that.lock = true
      }, 1400)
    }
  },
  components: {
    pageAside: pageAside,
    homePage: homePage,
    starsPage: starsPage,
    humanPage,
    journeyPage
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
}

img {
  vertical-align: top;
  border: none;
}

#wrthiser {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
}

.pages {
  position: absolute;
  top: 0;
  transition: 0.5s ease;
  .page {
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
