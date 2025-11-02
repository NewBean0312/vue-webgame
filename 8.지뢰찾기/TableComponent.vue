<template>
  <table>
    <tr v-for="(rowData, rowIndex) in tableData" :key="rowIndex">
      <td
        v-for="(cellData, cellIndex) in rowData"
        :key="cellIndex"
        :style="cellDataStyle(rowIndex, cellIndex)"
      >
        {{ cellDataText(rowIndex, cellIndex) }}
      </td>
    </tr>
  </table>
</template>

<script>
import { mapState } from "vuex";
import { CODE } from "./store";

export default {
  computed: {
    ...mapState(["tableData"]),
    cellDataStyle(state) {
      return (row, cell) => {
      switch (this.$store.state.tableData[row][cell]) {
        case CODE.NORMAL:
        case CODE.MINE:
          return {
            background: "#444",
          };
        case CODE.CLICKED_MINE:
        case CODE.OPENED:
          return {
            background: "white",
          };
        case CODE.QUESTION:
        case CODE.QUESTION_MINE:
          return {
            background: "yellow",
          };
        default:
          return {};
      }
    }},
    cellDataText() {
      return (row, cell) => {
      switch (this.$store.state.tableData[row][cell]) {
        case CODE.MINE:
          return "X";
        case CODE.NORMAL:
          return "";
        case CODE.FLAG_MINE:
        case CODE.FLAG:
          return "!";
        case CODE.QUESTION_MINE:
        case CODE.QUESTION:
          return "?";
        case CODE.CLICKED_MINE:
          return "펑";
        default:
          return "";
      }
    }},
  },
};
</script>
