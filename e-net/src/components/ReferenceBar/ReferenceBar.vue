<!--  -->
<template>
  <div>
    <div class="branch" :style = "{ flexDirection:flexValue}">
      <div class="img" :style = "{ transform: degX+''+degY+''+deg }">
        <div class="circle"><div class="littlecircle"></div></div>
        <div class="linear">
          <div class="linear1"></div>
          <div class="linear2"></div>
        </div>
      </div>
      <div class="text"><slot></slot></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReferenceBar',
  data () {
    return {
      degX: '',
      degY: '',
      deg: ''
    }
  },
  props: {
    degreeY: {
      type: Number,
      default: 0
    },
    degreeX: {
      type: Number,
      default: 0
    },
    degree: {
      type: Number,
      default: 0
    },
    flexValue: {
      type: String,
      default: ''
    }
  },
  mounted () {
    this.degX = `rotateX(${this.degreeX + 'deg'})`
    this.degY = `rotateY(${this.degreeY + 'deg'})`
    this.deg = `rotate(${this.degree + 'deg'})`
  }
}
</script>
<style scoped>
.branch {
  display: flex;
  width: 15em;
  height: 4em;
  font-size: 1.1rem;
}
.img {
  height: 100%;
  flex: 4;
}
.circle {
  width: 1em;
  height: 1em;
  border: 0.25em solid white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  animation-name: shiny;
  animation-fill-mode: forwards;
  animation-duration: 1s;
  animation-iteration-count: infinite;
}
.littlecircle {
  background-color: white;
  border-radius: 50%;
  width: 40%;
  height: 40%;
}
@keyframes shiny {
  100% {
    transform: scale(1.1);
  }
}
.linear {
  transform: translate(0.25em, -0.2em);
}
.linear1 {
  width: 1.6em;
  height: 0.1em;
  background-color: white;
  border-radius: 5%;
  transform: translate(1.25em, -0.625em);
  /* transform: translate(1em,-0.8em); */
}
.linear2 {
  width: 3em;
  height: 0.1em;
  border-radius: 5%;
  background-color: white;
  transform-origin: 0 50%;
  transform: translate(2.85em, -0.725em) rotate(45deg);
}
.text {
  color: white;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  font-weight: 600;
  font-size: 1.2em;
  flex: 6;
}
</style>
