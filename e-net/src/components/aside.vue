<!--侧边栏-->
<template>
  <aside>
    <ul id="aside-ul">
      <li ref='asideLi' @click="switchPage(index)" :class="{ select: index==currentPage}" v-for="(item, index) in pageNo" v-bind:key="item">{{ item }}</li>
    </ul>
    <!-- <button @click="getPage">获取oPage</button> -->
  </aside>
</template>

<script>
export default {
  name: 'page-aside',
  data () {
    return {
      pageNo: ['起航', '星辰', '牧星人', '征途'],
      currentPage: 0
    }
  },
  methods: {
    switchPage (pageNo) {
      this.$emit('switchPage', pageNo)
      this.currentPage = pageNo
      // const asideLi = this.$refs.asideLi
      // for(let i = 0; i < asideLi.length; i++){

      // }
    }
  }
}
</script>
<style lang="scss" scoped>
aside {
  position: fixed;
  margin: auto;
  top: 50%;
  transform: translateY(-50%);
  right: 5%;
  z-index: 3;

  li {
    height: 6rem;
    width: 6rem;
    text-align: center;
    font-size: 1rem;
    font-family: Helvetica;
    line-height: 6rem;
    // border: 1px solid;
    color: rgb(227, 227, 227);
    position: relative;
    &:hover {
      cursor: pointer;
      color: rgb(34, 187, 255);
      &:after{
        content:"";
        position: absolute;
        width: 0.2rem;
        height: 1rem;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        background: rgb(34, 187, 255);
      }
    }
  }
}

.select{
  color: rgb(34, 187, 255);
  &:after{
    content:"";
    position: absolute;
    width: 0.2rem;
    height: 1rem;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    background: rgb(34, 187, 255);
  }
}
</style>
