<template>
  <div class="page" id="page1">

  </div>
</template>

<script>
export default {
  name: 'onepage',
  data () {
    return {}
  }
}
</script>

<style scoped lang="scss">

.page {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content {
  width: 200px;
  height: 60px;
  text-align: center;
  border: 1px solid black;
  position: relative;
}

.active-pre {
  top: -60px;
  left: 0;
}

.active {
  top: 0px;
  left: 0;
}

.active-after {
  top: 60px;
  left: 0;
}

.content {
  .boxs {
    position: absolute;
    transition: 0.5s ease;
    top: 0;
  }
}

.box {
  width: 200px;
  height: 60px;
  background: #000;
}
</style>
