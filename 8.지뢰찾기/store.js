import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex); // this.$store

export const START_GAME = "START_GAME";
export const OPEN_CELL = "OPEN_CELL";
export const CLICK_MINE = "CLICK_MINE";
export const FLAG_CELL = "FLAG_CELL";
export const QUESTION_CELL = "QUESTION_CELL";
export const NORMALIZE_CELL = "NORMALIZE_CELL";
export const INCREMENT_TIMER = "INCREMENT_TIMER";

export default new Vuex.Store({
  // import store from './store';
  state: {
    tableData: [],
    data: {
      row: 0,
      cell: 0,
      mine: 0,
    },
    timer: 0,
    result: "",
  }, // vue의 data와 비슷
  getters: {}, // vue의 computed와 비슷
  mutations: {
    [START_GAME](state, { row, cell, mine }) {},
    [OPEN_CELL](state) {},
    [CLICK_MINE](state) {},
    [FLAG_CELL](state) {},
    [START_GAME](state) {},
    [NORMALIZE_CELL](state) {},
    [INCREMENT_TIMER](state) {},
  }, // state를 수정할 때 사용해요. 동기적으로
  actions: {}, // 비동기를 사용할때, 또는 여러 뮤테이션을 연달아 실행할 때
});
