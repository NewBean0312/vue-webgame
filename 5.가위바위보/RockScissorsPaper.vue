<template>
  <div>
    <div>
      <div id="computer" :style="computedStyleObject"></div>
      <dutton @click="onClickButton('바위')">바위</dutton>
      <dutton @click="onClickButton('가위')">가위</dutton>
      <dutton @click="onClickButton('보')">보</dutton>
    </div>
    <div>
      <div>{{ result }}</div>
      <div>현재 {{ score }}점</div>
    </div>
  </div>
</template>

<script>
const rspCords = {
  바위: "0",
  가위: "-142px",
  보: "-284px",
};

const scores = {
  가위: 1,
  바위: 0,
  보: -1,
};

const computerChoice = (imageCode) => {
  /* rspCords 객체의 엔트리(키-쌍)를 배열 형태로 변환하여, Object.entries(rspCords)를 호출함
   * 그 배열에서 find 메서드를 사용하여, 조건에 맞는 첫 번째 요소를 찾음
   * find 메서드는 주어진 함수의 결과가 true인 첫 번째 요소를 반환
   */
  return Object.entries(rspCords).find(function (v) {
    /* find 메서드에 전달된 함수에서, v는 배열의 각 요소(키-값 쌍)
     * 여기서 v[1]는 값에 해당하며, 이 값이 imageCode와 같은이 비교
     * 이 조건이 true일 경우, 해당 요소가 반환
     */
    return v[1] === imageCode;
  })[0]; // find 메서드가 반환한 요소는 배열 형태로, [0]을 사용하여 그 배열의 첫 번째 요소(즉, 키)를 가져옴
};

let interval = null;
export default {
  data() {
    return {
      imageCode: rspCords.바위,
      result: "",
      score: 0,
    };
  },
  computed: {
    computedStyleObject() {
      return {
        background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${this.imageCode} 0`,
      };
    },
  },
  methods: {
    changeHand() {
      interval = setInterval(() => {
        if (this.imageCode === rspCords.바위) {
          this.imageCode = rspCords.가위;
        } else if (this.imageCode === rspCords.가위) {
          this.imageCode = rspCords.보;
        } else if (this.imageCode === rspCords.보) {
          this.imageCode = rspCords.바위;
        }
      }, 100);
    },
    onClickButton(choice) {
      clearInterval(interval);
      const myScore = scores[choice];
      const cpuScore = scores[computerChoice(this.imageCode)];
      const diff = myScore - cpuScore;
      if (diff === 0) {
        this.result = "비겼습니다.";
      } else if ([-1, 2].includes(diff)) {
        this.result = "이겼습니다.";
        this.score += 1;
      } else {
        this.result = "졌습니다.";
        this.score -= 1;
      }
      setTimeout(() => {
        this.changeHand()
      }, 1000)
    },
  },
  mounted() {
    this.changeHand();
  },
  beforeDestroy() {
    clearInterval(interval);
  },
};
</script>

<style scoped>
#computer {
  width: 142px;
  height: 200px;
  background-position: 0 0;
}
</style>
