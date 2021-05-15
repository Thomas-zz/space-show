<!--  -->
<template>
  <div>
    <div class="box-flex">
    <h1 class="title">两弹一星元勋</h1>
      <show-info
        v-for="(info, index) in Infos"
        :key="index"
        :Info="info"
        :index="index"
        :style="{
          transitionDuration: leftIndex === index||currentIndex === index||rightIndex === index ? animationTime : false
        }"
        :class="{
          left: leftIndex === index,
          middle: currentIndex === index,
          right: rightIndex === index,
        }"
        @click.native="changeTargetIndex(index)"
      ></show-info>
    </div>
  </div>
</template>

<script>
import ShowInfo from './ChildComponents/ShowInfo.vue'
export default {
  name: 'RightShow',
  data () {
    return {
      leftIndex: 22,
      currentIndex: 0,
      rightIndex: 1,
      animation: 'showImage',
      Infos: [
        {
          url: require('assets/img/figures/钱三强.png'),
          name: '钱三强',
          context:
            '中国原子能科学事业的创始人，在核物理研究中获多项重要成果，特别是发现重原子核三分裂、四分裂现象并对三分裂机制作了科学的解释。为中国原子能科学事业的创立、发展和“两弹”研制作出了突出贡献。'
        },
        {
          url: require('assets/img/figures/钱骥.png'),
          name: '钱骥',
          context:
            '我国空间技术的开拓者之一。领导卫星总体、结构、天线、环境模拟理论研究。负责与组织小型热真空环境模拟试验设备、中小型离心机、振动台设备的研制。负责领导探空火箭头部空间物理探测仪器、跟踪定位和数据处理设备的研制，获得丰富的试验资料。'
        },
        {
          url: require('assets/img/figures/姚桐斌.png'),
          name: '姚桐斌',
          context:
            '中国空间技术的开拓者之一。领导卫星总体、结构、天线、环境模拟理论研究。负责与组织小型热真空环境模拟试验设备、中小型离心机、振动台设备的研制。负责领导探空火箭头部空间物理探测仪器、跟踪定位和数据处理设备的研制，获得丰富的试验资料。'
        },
        {
          url: require('assets/img/figures/赵九章.png'),
          name: '赵九章',
          context:
            '对大气科学、地球物理学和空间科学的发展作出了重要贡献，是倡导和开拓中国地球科学数学物理化和新技术化的先驱。在气团分析、信风带热力学、大气长波斜压不稳定、大气准定常活动中心、有关带电粒子和外层空间磁场的物理机制等方面的研究成果是奠基性的。'
        },
        {
          url: require('assets/img/figures/邓稼先.png'),
          name: '邓稼先',
          context:
            '在原子弹、氢弹研究中，领导开展了爆轰物理、流体力学，状态方程、中子输运等基础理论研究，对原子弹的物理过程进行了大量模拟计算和分析，迈出了中国独立研究核武器的第一步。领导完成原子弹的理论方案，并参与指导核试验的爆轰模拟试验。原子弹试验成功后，立即组织力量，探索氢弹设计原理，选定技术途径。'
        },
        {
          url: require('assets/img/figures/王淦昌.png'),
          name: '王淦昌',
          context:
            '核武器研制的主要科学技术领导人之一，核武器研究实验工作的开拓者。在从事核武器研制期间，指导并参加了中国原子弹、氢弹研制工作。他是原子弹冷试验技术委员会主任委员，指导了中国第一次地下核试验，领导并具体组织了中国第二、三次地下核试验。主持指导抗核加固技术和激光模拟核爆炸试验等方面都取得重要成果。'
        },
        {
          url: require('assets/img/figures/彭桓武.png'),
          name: '彭桓武',
          context:
            '长期从事理论物理的基础与应用研究，先后在中国开展了关于原子核、钢锭快速加热工艺、反应堆理论和工程设计以及临界安全等多方面研究。对中国原子能科学事业做了许多开创性的工作。对中国第一代原子弹和氢弹的研究和理论设计作出了重要贡献。'
        },
        {
          url: require('assets/img/figures/程开甲.png'),
          name: '程开甲',
          context:
            '是中国核武器研究的开创者之一，在核武器的研制和试验中作出突出贡献。开创、规划领导了抗辐射加固技术新领域研究。是中国定向能高功率微波研究新领域的开创者之一 。出版了中国第一本固体物理学专著，提出了普遍的热力学内耗理论，导出了狄拉克方程，提出并发展了超导电双带理论和凝聚态TFDC电子理论。'
        },
        {
          url: require('assets/img/figures/黄纬禄.png'),
          name: '黄纬禄',
          context:
            '长期从事火箭与导弹控制技术理论与工程实践研究工作，开创了我国固体战略导弹的先河。他突出体现了忠诚报国、献身航天的坚定信念，攻坚克难、勇攀高峰的创新精神，团结协作、集思广益的优良作风，为提高自主创新能力提供强大精神动力。'
        },
        {
          url: require('assets/img/figures/屠守锷.png'),
          name: '屠守锷',
          context:
            '参与了我国火箭技术发展重大战略问题的决策，领导解决了若干重要型号研制中的关键技术问题。他积极倡导将我国自行研制的火箭打入国际市场，并多次提出发展捆绑技术，亲自指挥攻克了由于捆绑带来的结构动力学难关，为我国大推力运载火箭的发展奠定了坚实基础，为我国航天事业的发展作出了卓越贡献。'
        },
        {
          url: require('assets/img/figures/钱学森.png'),
          name: '钱学森',
          context:
            '中国航天之父”，主持完成了“喷气和火箭技术的建立”规划，参与了近程导弹、中近程导弹和中国第一颗人造地球卫星的研制，直接领导了用中近程导弹运载原子弹的“两弹结合”试验，参与制订了中国第一个星际航空的发展规划，发展建立了工程控制论和系统学等。是举世公认的人类航天科技的重要开创者和主要奠基人之一。'
        },
        {
          url: require('assets/img/figures/周光召.png'),
          name: '周光召',
          context:
            '1958年在国际上首先提出粒子的螺旋态振幅，并建立了相应的数学方法。是世界公认的赝矢量流部分守恒定理的奠基人之一。参加领导了爆炸物理、幅射流力学、高温高压物理、计算力学等研究工作。在中国第一颗原子弹和氢弹的理论设计中作出贡献。'
        },
        {
          url: require('assets/img/figures/杨嘉墀.png'),
          name: '杨嘉墀',
          context:
            '长期致力于中国自动化技术和航天技术的研究发展。参与制定中国空间技术发展规划。领导和参加包括第一颗卫星在内的多种卫星的总体及自动控制系统的研制，返回式卫星和东方红一号卫星。30多年来，多次参与中国空间计划方案论证工作。在三轴稳定的返回式卫星和科学探测卫星的发展中作出重大贡献。'
        },
        {
          url: require('assets/img/figures/陈能宽.png'),
          name: '陈能宽',
          context:
            '在我国第一颗原子弹、氢弹及核武器的发展研制工作中，主要领导组织了核装置爆轰物理、 炸药和装药物理化学、特殊材料及冶金、实验核物理等学科领域的研究工作。组织并参加了 聚合爆轰波人工热核反应研究以及核装置球面同步起爆的方案制定和研究，在较短的时间内 ，攻克了技术难关，实现预期结果。'
        },
        {
          url: require('assets/img/figures/陈芳允.png'),
          name: '陈芳允',
          context:
            '1964年和李力田等研制出飞机用抗干扰雷达，投产后大量装备我国歼击机。1964年至1965年，提出方案并和徐建平等研制出原子弹爆炸测试仪器，参加了卫星测控系统的建设工作，为我国人造卫星上天作出了贡献。1970年他提出并和共同工作者于1980年完成了微波统一测控系统，成为支持我国通信卫星上天的主要设备。'
        },
        {
          url: require('assets/img/figures/吴自良.png'),
          name: '吴自良',
          context:
            '从事苏联低合金钢40X代用品的研究，领导并完成了铀同位素分离用“甲种分离膜”的研制任务，研究钢中过渡族元素Mn、Cr、Mo、V、Ti和氮的s-i交互内耗峰，澄清了过去文献中许多争论和谬误，发现膜的增氧速度，端赖于垂直c－轴单晶的位错管道所提供的快速氧输运过程。'
        },
        {
          url: require('assets/img/figures/任新民.png'),
          name: '任新民',
          context:
            '相继领导组织了中程、中远程、远程液体弹道式地地导弹的多种液体火箭发动机的研制、试验工作。组织研制长征一号运载火箭，保证发射第一颗人造地球卫星东方红一号获得成功。领导组织了氢氧发动机、长征三号运载火箭和整个通信卫星工程的研制试验。'
        },
        {
          url: require('assets/img/figures/孙家栋.png'),
          name: '孙家栋',
          context:
            '是我国著名的航天技术专家，是我国人造卫星技术和深空探测技术的开创者之一，为我国突破卫星基本技术、卫星返回技术、地球静止轨道卫星发射和定点技术、导航卫星组网技术和深空探测基本技术作出了重大贡献；为创建和发展我国人造卫星总体技术、卫星航天工程管理技术和深空探测技术，作出了系统的、创造性的成就和贡献。'
        },
        {
          url: require('assets/img/figures/朱光亚.png'),
          name: '朱光亚',
          context:
            '中国原子弹、氢弹科技攻关组织领导者之一。曾参与了中国原子弹和氢弹的试验和研制，后又相继组织实施了核电站筹建(如秦山核电站)、核燃料的生产以及放射性同位素应用等项目的研究开发计划，并参与了“863计划”的制定与实施。还参与了“中国工程院”的筹建工作。'
        },
        {
          url: require('assets/img/figures/王希季.png'),
          name: '王希季',
          context:
            '中国早期从事火箭及航天器的研制和组织者之一。中国第一枚液体燃料探空火箭、气象火箭、生物火箭和高空试验火箭的技术负责人；提出中国第一颗卫星运载火箭“长征一号”的技术方案，并主持该型运载火箭初样阶段的研制；主持核试验取样系列火箭的研制。曾任返回式卫星的总设计师，负责制定研制方案，采用先进技术，研究卫星返回的关键技术。'
        },
        {
          url: require('assets/img/figures/王大珩.png'),
          name: '王大珩',
          context:
            '在光学与光学工程研究和组织领导工作中作出了杰出贡献，领导研制了我国第一台靶场装备大型精密光学跟踪电影经纬仪、我国第一台激光红外电视电影经纬仪和船体变形测量系统，为发展我国的尖端武器作出了杰出贡献。他是中国光学、仪器仪表和计量科教事业的奠基人之一。'
        },
        {
          url: require('assets/img/figures/于敏.png'),
          name: '于敏',
          context:
            '理论物理学家。中国工程物理研究院研究员、高级科学顾问。在核工业战线进行了多项开创性研究；在氢弹突破中起了关键作用；相当长时期领导核武器理论研究和物理设计，对中国核武器突破与发展做出了重大贡献。在核武器长远目标选择、技术途径确定、技术关键分解等方面发挥了重要作用。'
        },
        {
          url: require('assets/img/figures/郭永怀.png'),
          name: '郭永怀',
          context:
            '长期从事航空工程研究，发现了上临界马赫数，发展了奇异摄动理论中的变形坐标法，即国际上公认的PLK方法，倡导了中国高速空气动力学、电磁流体力学和爆炸力学等新兴学科的研究。担负国防科学研究的业务领导工作，为发展中国核弹与导弹等事业作出了重要贡献。'
        }
      ],
      i: 0,
      number: 0,
      animationTime: '250ms'
    }
  },
  components: {
    ShowInfo
  },
  methods: {
    changePage (pos) {
      this.currentIndex = pos
      this.leftIndex = this.currentIndex - 1 < 0 ? this.Infos.length - 1 : this.currentIndex - 1
      this.rightIndex = this.currentIndex + 1 > this.Infos.length - 1 ? 0 : this.currentIndex + 1
    },
    upCircle () {
      this.i = this.currentIndex + 1 > this.Infos.length - 1 ? 0 : this.currentIndex + 1
      this.changePage(this.i)
      if (this.number === this.i) {
        return
      }
      this.i++
      setTimeout(this.upCircle, 250)
    },
    downCircle () {
      this.i = this.currentIndex - 1 < 0 ? this.Infos.length - 1 : this.currentIndex - 1
      this.changePage(this.i)
      if (this.number === this.i) {
        return
      }
      this.i--
      setTimeout(this.downCircle, 250)
    },
    changeTargetIndex (index) {
      const preIndex = this.currentIndex
      this.changePage(index)
      if (index > preIndex && index === this.Infos.length - 1 && preIndex === 0) {
        index = preIndex + this.Infos.length - 1
      } else if (index < preIndex && index === 0 && preIndex === this.Infos.length - 1) {
        index = preIndex + this.Infos.length + 1
      } else if (index > preIndex) {
        index = preIndex + this.Infos.length + 1
      } else if (index < preIndex) {
        index = preIndex + this.Infos.length - 1
      } else {
        return
      }
      // 利用事件总线发射事件
      this.$bus.$emit('changeTargetIndex', index)
    }
  },
  mounted () {
    this.$bus.$on('changeCurrentIndex', (param) => {
      if (param.no - 1 === this.currentIndex) {
        return
      }
      const number = param.no - 1
      // const distant = this.Infos.length - number - this.currentIndex
      let flag = 0
      var i = 0
      if (number - this.currentIndex > 0) {
        flag = number - this.currentIndex <= Math.ceil(this.Infos.length / 2)
      } else {
        flag = number - this.currentIndex <= -Math.ceil(this.Infos.length / 2)
      }
      this.number = number
      this.i = i
      if (flag) {
        setTimeout(this.upCircle, 250)
      } else {
        setTimeout(this.downCircle, 250)
      }
    })
  }
}
</script>
<style scoped>
.box-flex {
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  top: -1rem;
  left: -10%;
  align-content: center;
}
.title{
  z-index: 3;
  transform: translateY(-18rem);
  color: rgb(254, 254, 254);
  font-size: 2.5rem;
}
.left {
  transform: translateX(-110%) scale(0.8);
  opacity: 1;
  transition-timing-function: linear;
  transition-property: all;
}
.left:hover{
  transform: translateX(-110%) scale(0.9)
}
.middle {
  transform: translateX(0) scale(1.2);
  transition-property: all;
  transition-timing-function: linear;
  opacity: 1;
  z-index: 2;
}
.middle:hover{
  transform: scale(1.3)
}
.right {
  transform: translateX(110%) scale(0.8);
  opacity: 1;
  transition-timing-function: linear;
  transition-property: all;
}
.right:hover{
  transform: translateX(110%) scale(0.9)
}
</style>
