<template>
  <div id="container">
    <pageAside @switchPage="switchPage"></pageAside>
    <div id="wrapper">
      <div class="pages" ref="pages">
        <onePage id="page1"></onePage>
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

export default {
  name: 'App',
  data () {
    return {
      // pageNo: [1, 2, 3, 4],
      // currentPage: 0
    }
  },
  methods: {
    switchPage (pageNo) {
      // oBox[0].style.transition = "0.5s ease";
      console.log('123')
      this.$refs.pages.style.top = -pageNo * this.$store.state.pageHeight + 'px'
      console.log(this.$refs.pages.style.top)
    },
    getpage () {
      console.log('父组件')
    }
  },
  components: {
    onePage: onePage,
    pageAside: pageAside
  }
}

// const oPages = document.getElementsByClassName('pages')
// const pageHeigth = window.innerHeight

// const app = new Vue({
//   el: '#container',
//   data: {
//     pageNo: [1, 2, 3, 4],
//     currentPage: 0,
//   },
//   methods: {
//     switchPage(pageNo) {
//       // oBox[0].style.transition = "0.5s ease";
//       oPages[0].style.top = -pageNo * pageHeigth + 'px'
//       this.currentPage = pageNo
//       console.log(this.currentPage + ' ' + this.pageNo.length)
//     },
//   },
// })

// document.addEventListener('mousewheel', (event) => {
//   if (event.wheelDelta < 0) {
//     if (app.currentPage < app.pageNo.length - 1) {
//       oPages[0].style.top = -app.currentPage * pageHeigth - pageHeigth + 'px'
//       app.currentPage += 1
//       console.log(app.currentPage + ' ' + app.pageNo.length)
//     }
//   } else if (event.wheelDelta > 0) {
//     if (app.currentPage > 0) {
//       oPages[0].style.top = -app.currentPage * pageHeigth + pageHeigth + 'px'
//       app.currentPage -= 1
//       console.log(app.currentPage + ' ' + app.pageNo.length)
//     }
//   }
// })
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

#wrapper {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
}

.pages {
  position: absolute;
  top: 0;
  transition: 0.5s ease;
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
