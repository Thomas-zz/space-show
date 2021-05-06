<template>
  <div class="page" id="page1">
    <div class="content">
      <div class="boxs">
        <div class="box" style="background: rgba(28, 214, 108,.3); top:-60px"></div>
        <div class="box" style="background: rgba(35, 170, 242,.3); top:0px;left:60px"></div>
        <div class="box" style="background: rgba(255, 214, 97,.3)"></div>
        <div class="box" style="background: rgba(250, 50, 96,.3)"></div>
      </div>
    </div>
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
