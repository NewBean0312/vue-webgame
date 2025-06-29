<template>
  <tr>
    <td-component
      v-for="(cellData, index) in rowData"
      :cell-data="cellData"
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
  props: {
    rowData: Array,
    rowIndex: Number,
  },
};
</script>

<style></style>
