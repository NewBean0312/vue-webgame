<template>
  <div>
    <div id="screen">{{ message }}</div>
    <div>
      <div>평균 시간: {{  }}</div>
      <button @click="onreset">리셋</button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        result: [],
        state: 'waiting',
        message: '클릭해서 시작하세요.'
      }
    },
    methods: {
      onReset() {}
    }
  };
</script>

<style>

</style>