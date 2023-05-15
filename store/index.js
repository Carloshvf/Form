export const state = () => ({
  all: [],
  teste: 1,
});

export const mutations = {
  setAll(state, all) {
    state.all = all;
  },
};

export const actions = {
  async uploadInfo(context, dados) {
    context.commit("setAll", dados);
  },
};
