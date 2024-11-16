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
    onClickButton(choice) {},
  },
  mounted() {
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
