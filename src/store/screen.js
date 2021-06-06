const state = () => ({
  screen: {
    position: {
      left: 40,
      top: 40,
    },
    size: {
      width: 100,
      heigh: 100,
    },
    sizeRation: {
      widthRation: 100,
      heightRation: 100,
    },

    backgroundColor: '#ccc',
  },
});

const getters = {};
const actions = {};
const mutations = {
  set_position(state, position) {
    let { left, top } = position;
    state.screen.position.left = left;
    state.screen.position.top = top;
  },
  set_size(state, size) {
    let { width, height } = size;
    state.screen.size.width = width;
    state.screen.size.height = height;
  },
  set_sizeRation(state, sizeRation) {
    let { widthRation, heightRation } = sizeRation;
    state.screen.sizeRation.widthRation = widthRation;
    state.screen.sizeRation.heightRation = heightRation;
  },
  set_backgroundColor(state, color) {
    state.screen.backgroundColor = color;
  },
};

export default {
  namespace: true,
  state,
  getters,
  mutations,
  actions,
};
