<template>
  <table-component :table-data="tableData" />
</template>

<script>
import TableComponent from "./TableComponent";

export default {
  components: {
    TableComponent,
  },
  data() {
    return {
      tableData: [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
      ],
    };
  },
};
</script>

<style></style>
