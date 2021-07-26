<!--  -->
<template>
  <div class="show-info">
    <div class="image"><img :src="Info.url" alt="" style="width: 30%; height: 30%" /></div>
    <main class="context">
      <strong class="{}">{{ Info.name }}:</strong>{{ Info.context }}
    </main>
  </div>
</template>

<script>
export default {
  name: 'ShowInfo',
  data () {
    return {}
  },
  props: {
    Info: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>
<style scoped>
.show-info {
  position: absolute;
  /* background-color: rgb(154, 154, 154); */
  padding: 20px 20px 0px 20px;
  width: 20%;
  top: -10rem;
  height: 400px;
  background: rgb(2, 2, 2, 0.5);
  border: 1px solid rgba(254, 254, 254, 0.4);
  color: white;
  border-radius: 10px;
  opacity: 0;
  overflow: hidden;
}
.image {
  display: flex;
  justify-content: center;
  padding-bottom: 1.6rem;
}
.context {
  text-indent: 2em;
  line-height: 1.6rem;
  /* font-weight: 600; */
}
</style>
