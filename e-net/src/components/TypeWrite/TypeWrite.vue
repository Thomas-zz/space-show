<!--  -->
<template>
  <div ref="typewrite">
       <single-line :content="texts"></single-line>
  </div>
</template>

<script>
import SingleLine from './ChildComponents/SingleLine.vue'
export default {
  name: 'TypeWrite',
  data () {
    return {
      texts: '一个有希望的民族需要一群仰望星空的人'
    }
  },
  methods: {
  },
  mounted () {
  },
  components: {
    SingleLine
  }
}
</script>
<style scoped>
</style>
