<template>
  <td>{{ cellData }}</td>
</template>

<script>
export default {
  props: {
    cellData: String,
    rowIndex: Number,
    cellIndex: Number,
  },
};
</script>

<style></style>
