<!--  -->
<template>
  <div class="list">
    <span class="left">
      <slot name="left"></slot>
    </span>
    <span>
      <slot name="middle"></slot>
    </span>
    <span>
      <slot name="right"></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: 'List',
  data () {
    return {}
  }
}
</script>
<style scoped>
.list {
  width: 100%;
  height: 50px;
  padding-bottom: 10px;
}
.list:hover {
  color: rgb(254, 254, 254);
  cursor: pointer;
}
.left {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 700;
}
</style>
