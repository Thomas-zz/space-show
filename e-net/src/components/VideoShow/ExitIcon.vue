<!--  -->
<template>
  <div class="exit-icon">
    <div>
      <div></div>
      <div class="icon"></div>
      <div></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ExitIcon',
  data () {
    return {}
  }
}
</script>
<style scoped>
.exit-icon {
  position: absolute;
  top: 10%;
  left: 10%;
  width: 6rem;
  height: 6rem;
}
.icon {
  background: url('~assets/rocket.png') no-repeat;
  background-size: contain;
  width: 5rem;
  height: 5rem;
  transform: rotate(-90deg);
}
</style>
