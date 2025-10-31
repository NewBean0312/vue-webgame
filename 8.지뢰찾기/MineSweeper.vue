<template>
  <div>
    <mine-form />
    <div>{{ timer }}</div>
    <table-component />
    <div>{{ result }}</div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import store, { } from './store';
  import TableComponent from './TableComponent.vue';
  import MineForm from './MineForm.vue';

  export default {
    store,
    components: {
      TableComponent,
      MineForm,
    },
    computed: {
      ...mapState(['timer', 'result'])
    },
    methods: {
    }
  };
</script>

<style>
  table {
    border-collapse: collapse;
  }
  td {
    border: 1px solid black;
    width: 40px;
    height: 40px;
    text-align: center;
  }
</style>