<template>
  <tr>
    <td-component
      v-for="(cellData, index) in rowData"
      :cell-index="index"
      :row-index="rowIndex"
      :key="index"
    ></td-component>
  </tr>
</template>

<script>
import TdComponent from "./TdComponent";

export default {
  components: {
    TdComponent,
  },
  data() {
    parent: "부모 컴포넌트";
  },
  computed: {
    rowData() {
      return this.$store.state.tableData[this.rowIndex];
    }
  },
  props: {
    rowIndex: Number,
  },
};
</script>

<style></style>
