<template>
  <div id="container">
    <pageAside @switchPage="switchPage"></pageAside>
    <div id="wrthiser">
      <div class="pages" ref="pages">
        <homePage class="page"></homePage>
        <onePage id="page2"></onePage>
        <onePage id="page3"></onePage>
        <onePage id="page4"></onePage>
      </div>
    </div>
  </div>
</template>

<script>
import onePage from './components/onePage'
import pageAside from './components/aside'
import homePage from './views/HomePage'

export default {
  name: 'this',
  data () {
    return {
      // pageNo: [1, 2, 3, 4],
      // this.$children[0].currentPage: 0
    }
  },
  mounted () {
    this.mouseEvent()
  },
  methods: {
    switchPage (pageNo) {
      // oBox[0].style.transition = "0.5s ease";
      // console.log('123')
      this.$refs.pages.style.top = -pageNo * this.$store.state.pageHeight + 'px'
      // console.log(this.$refs.pages.style.top)
    },
    getpage () {
      console.log('父组件')
    },
    mouseEvent (event) {
      document.addEventListener('mousewheel', (event) => {
        const pageLength = this.$children[0].pageNo.length
        console.log()
        if (event.wheelDelta < 0) {
          if (this.$children[0].currentPage < pageLength - 1) {
            this.$refs.pages.style.top = -this.$children[0].currentPage * this.$store.state.pageHeight - this.$store.state.pageHeight + 'px'
            this.$children[0].currentPage += 1
            console.log(this.$children[0].currentPage + ' ' + pageLength)
          }
        } else if (event.wheelDelta > 0) {
          if (this.$children[0].currentPage > 0) {
            this.$refs.pages.style.top = -this.$children[0].currentPage * this.$store.state.pageHeight + this.$store.state.pageHeight + 'px'
            this.$children[0].currentPage -= 1
            console.log(this.$children[0].currentPage + ' ' + pageLength)
          }
        }
      })
    }
  },
  components: {
    onePage: onePage,
    pageAside: pageAside,
    homePage: homePage
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

#page1 {
  background: rgba(134, 94, 197, 0.3);
}

#page2 {
  background: rgba(35, 170, 242, 0.3);
}

#page3 {
  background: rgba(28, 214, 108, 0.3);
}

#page4 {
  background: rgba(255, 214, 97, 0.3);
}

#page5 {
  background: rgba(250, 50, 96, 0.3);
}
</style>
