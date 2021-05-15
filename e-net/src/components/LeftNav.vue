<!--  -->
<template>
  <div class="leftposition">
    <div class="content">
      <div>
        <div class="flow" ref="box">
          <list
            v-for="(list, index) in lists"
            :key="index"
            :class="{ turnred: currentIndex === index || ScrectIndex == index }"
            @click.native="changeRed(index)"
          >
            <template v-slot:left>
              {{ list.no | addZero }}
            </template>
            <template v-slot:right>
              {{ list.name }}
            </template>
          </list>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import List from './ChildComponents/List.vue'
export default {
  name: 'LeftNav',
  data () {
    return {
      lists: [
        {
          no: 1,
          name: '钱三强'
        },
        {
          no: 2,
          name: '钱骥'
        },
        {
          no: 3,
          name: '姚桐斌'
        },
        {
          no: 4,
          name: '赵九章'
        },
        {
          no: 5,
          name: '邓稼先'
        },
        {
          no: 6,
          name: '王淦昌'
        },
        {
          no: 7,
          name: '彭桓武'
        },
        {
          no: 8,
          name: '程开甲'
        },
        {
          no: 9,
          name: '黄纬禄'
        },
        {
          no: 10,
          name: '屠守锷'
        },
        {
          no: 11,
          name: '钱学森'
        },
        {
          no: 12,
          name: '周光召'
        },
        {
          no: 13,
          name: '杨嘉墀'
        },
        {
          no: 14,
          name: '陈能宽'
        },
        {
          no: 15,
          name: '陈芳允'
        },
        {
          no: 16,
          name: '吴自良'
        },
        {
          no: 17,
          name: '任新民'
        },
        {
          no: 18,
          name: '孙家栋'
        },
        {
          no: 19,
          name: '朱光亚'
        },
        {
          no: 20,
          name: '王希季'
        },
        {
          no: 21,
          name: '王大珩'
        },
        {
          no: 22,
          name: '于敏'
        },
        {
          no: 23,
          name: '郭永怀'
        },
        {
          no: 1,
          name: '钱三强'
        },
        {
          no: 2,
          name: '钱骥'
        },
        {
          no: 3,
          name: '姚桐斌'
        },
        {
          no: 4,
          name: '赵九章'
        },
        {
          no: 5,
          name: '邓稼先'
        },
        {
          no: 6,
          name: '王淦昌'
        },
        {
          no: 7,
          name: '彭桓武'
        },
        {
          no: 8,
          name: '程开甲'
        },
        {
          no: 9,
          name: '黄纬禄'
        },
        {
          no: 10,
          name: '屠守锷'
        },
        {
          no: 11,
          name: '钱学森'
        },
        {
          no: 12,
          name: '周光召'
        },
        {
          no: 13,
          name: '杨嘉墀'
        },
        {
          no: 14,
          name: '陈能宽'
        },
        {
          no: 15,
          name: '陈芳允'
        },
        {
          no: 16,
          name: '吴自良'
        },
        {
          no: 17,
          name: '任新民'
        },
        {
          no: 18,
          name: '孙家栋'
        },
        {
          no: 19,
          name: '朱光亚'
        },
        {
          no: 20,
          name: '王希季'
        },
        {
          no: 21,
          name: '王大珩'
        },
        {
          no: 22,
          name: '于敏'
        },
        {
          no: 23,
          name: '郭永怀'
        },
        {
          no: 1,
          name: '钱三强'
        },
        {
          no: 2,
          name: '钱骥'
        },
        {
          no: 3,
          name: '姚桐斌'
        },
        {
          no: 4,
          name: '赵九章'
        },
        {
          no: 5,
          name: '邓稼先'
        },
        {
          no: 6,
          name: '王淦昌'
        },
        {
          no: 7,
          name: '彭桓武'
        },
        {
          no: 8,
          name: '程开甲'
        },
        {
          no: 9,
          name: '黄纬禄'
        },
        {
          no: 10,
          name: '屠守锷'
        },
        {
          no: 11,
          name: '钱学森'
        },
        {
          no: 12,
          name: '周光'
        },
        {
          no: 13,
          name: '杨嘉墀'
        }
      ],
      currentIndex: 23,
      ScrectIndex: -1,
      permove: 0,
      position: 3
    }
  },
  methods: {
    changeRed (index) {
      this.ScrectIndex = -1
      console.log(this.$bus)
      if (index >= 46) {
        this.currentIndex = index
        this.ScrectIndex = index - 23
        console.log(this.ScrectIndex, this.ScrectIndex * this.permove)
        this.$refs.box.style = `transform:translateY(-${
          (index - this.position) * this.permove + 'px'
        });transition-duration: 500ms; pointer-events: none;`
        this.$bus.$emit('changeCurrentIndex', this.lists[this.ScrectIndex - 23])
        setTimeout(() => {
          this.$refs.box.style = `transform:translateY(${
            '-' + (this.ScrectIndex - this.position) * this.permove + 'px'
          });`
        }, 500)
      } else if (index <= 22) {
        this.currentIndex = index
        this.ScrectIndex = index + 23
        console.log(this.ScrectIndex, this.ScrectIndex * this.permove)
        this.$refs.box.style = `transform:translateY(-${
          (index - this.position) * this.permove + 'px'
        });transition-duration: 500ms; pointer-events: none;`
        this.$bus.$emit('changeCurrentIndex', this.lists[this.ScrectIndex - 23])
        setTimeout(() => {
          this.$refs.box.style = `transform:translateY(${
            '-' + (this.ScrectIndex - this.position) * this.permove + 'px'
          });`
        }, 500)
      } else {
        this.$refs.box.style = `transform:translateY(-${
          (index - this.position) * this.permove + 'px'
        });transition-duration: 500ms;`
        this.currentIndex = index
        this.$bus.$emit('changeCurrentIndex', this.lists[this.currentIndex - 23])
      }
    },
    moveNav (index) {
      console.log(index)
      this.ScrectIndex = -1
      if (index >= 46) {
        this.currentIndex = index
        this.ScrectIndex = index - 23
        this.$refs.box.style = `transform:translateY(-${
          (index - this.position) * this.permove + 'px'
        });transition-duration: 500ms; pointer-events: none;`
        setTimeout(() => {
          this.$refs.box.style = `transform:translateY(${
            '-' + (this.ScrectIndex - this.position) * this.permove + 'px'
          });`
        }, 500)
      } else if (index <= 22) {
        this.currentIndex = index
        this.ScrectIndex = index + 23
        this.$refs.box.style = `transform:translateY(-${
          (index - this.position) * this.permove + 'px'
        });transition-duration: 500ms; pointer-events: none;`
        setTimeout(() => {
          this.$refs.box.style = `transform:translateY(${
            '-' + (this.ScrectIndex - this.position) * this.permove + 'px'
          });`
        }, 500)
      } else {
        this.$refs.box.style = `transform:translateY(-${
          (index - this.position) * this.permove + 'px'
        });transition-duration: 500ms;`
        this.currentIndex = index
      }
    }
  },
  mounted () {
    const height = this.$refs.box.offsetHeight
    this.permove = height / this.lists.length
    this.$refs.box.style = `transform:translateY(${
      '-' + (this.currentIndex - this.position) * this.permove + 'px'
    })`
    this.$bus.$on('changeTargetIndex', (index) => {
      this.moveNav(index)
    })
  },
  components: {
    List
  },
  filters: {
    addZero (num) {
      return num >= 10 ? num : '0' + num
    }
  }
}
</script>
<style scoped>
.leftposition {
  position: relative;
  height: 62%;
  top: -2rem;
  left: -1rem;;
  width: 50%;
  color: rgb(154, 154, 154);
  display: flex;
  align-items: center;
  flex-direction: column;
}
.leftposition::before{
    position: absolute;
    content: '';
    width: 40%;
    height: 10%;
    background: linear-gradient(to bottom, rgba(30, 41, 65, 0.85), rgba(26, 36, 58, 0.1));
    z-index: 1;
}
.leftposition::after{
    position: absolute;
    bottom: 0;
    content: '';
    width: 39%;
    height: 10%;
    background: linear-gradient(to top, rgba(13, 16, 26, 0.85), rgba(12, 18, 29, 0.1));
    z-index: 1;
}
.content {
  height: 100%;
  width: 400px;
  overflow: hidden;
  display: flex;
  justify-content: center;
}
.flow {
  width: 100%;
  font-size: 2rem;
  font-family: SerifHeavy;
  font-weight: 600;
  position: relative;
}

.turnred {
  color: rgb(254, 254, 254);
  animation-name: turnBig;
  animation-fill-mode: forwards;
  animation-duration: 0.5s;
}

@keyframes turnBig {
  100% {
    transform: scale(1.2) translateX(1rem);
  }
}
</style>
