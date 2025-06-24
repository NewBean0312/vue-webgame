<template>
  <td @click="onClickTd">{{ cellData }}</td>
</template>

<script>
export default {
  props: {
    cellData: String,
    rowIndex: Number,
    cellIndex: Number,
  },
  methods: {
    onClickTd() {
      const rootData = this.$root.$data;
      this.$set(
        rootData.tableData[this.rowIndex],
        this.cellIndex,
        rootData.turn
      );
      rootData.turn = rootData.turn === "O" ? "X" : "O";
    },
  },
};
</script>

<style></style>
