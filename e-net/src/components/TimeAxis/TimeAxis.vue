<!--  -->
<template>
  <div>
      <time-swiper class="time"></time-swiper>
  </div>
</template>

<script>
import TimeSwiper from './ChildComponents/TimeSwiper.vue'
export default {
  name: 'TimeAxis',
  data () {
    return {
    }
  },
  components: {
    TimeSwiper
  }
}
</script>
<style scoped>
.time{
  width: 100%;
  height: 100%;
  display: flex;
}
</style>
