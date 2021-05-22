<!--  -->
<template>
  <div class="video-box"></div>
</template>

<script>
export default {
  name: 'VideoBox',
  data () {
    return {
    }
  }
}
</script>
<style scoped>
.video-box{
   position: absolute;
   top:50%;
   left: 40%;
   transform: translate(-50%,-50%);
   width: 70%;
   height:60%;
   background: white;
}
</style>
