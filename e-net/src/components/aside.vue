<!--侧边栏-->
<template>
  <aside>
    <ul id="aside-ul">
      <li @click="switchPage(index)" v-for="(item, index) in pageNo" v-bind:key="item">{{ item }}</li>
    </ul>
    <!-- <button @click="getPage">获取oPage</button> -->
  </aside>
</template>

<script>
export default {
  name: 'page-aside',
  data () {
    return {
      pageNo: [1, 2, 3, 4],
      currentPage: 0
    }
  },
  methods: {
    switchPage (pageNo) {
      this.$emit('switchPage', pageNo)
      this.currentPage = pageNo
      // console.log(pageNo)
    }
  }
}
</script>
<style lang="scss" scoped>
aside {
  position: fixed;
  margin: auto;
  top: 40%;
  right: 5%;
  z-index: 2;

  li {
    height: 4rem;
    width: 6rem;
    text-align: center;
    line-height: 4rem;
    border: 1px solid;

    &:hover {
      cursor: pointer;
    }
  }
}
</style>
