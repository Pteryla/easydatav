const state = () => ({
  collections: [
    {
      name: '默认项目集',
      index: 'default_0',
      projects: [
        {
          name: '默认项目',
          creatTime: '2021-5-20',
          coverImg: '',
          project: {
            data: {},
            publicInfo: {},
          },
        },
      ],
    },
    {
      name: '我的项目集',
      index: 'default_1',
      projects: [],
    },
  ],
});

const getters = {};
const actions = {};
const mutations = {
  set_projectsCollections(state, val) {
    state.collections = val;
  },
};

export default {
  namespace: true,
  state,
  getters,
  mutations,
  actions,
};
