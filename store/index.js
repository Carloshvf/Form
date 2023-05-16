export const state = () => ({
  infoUser: [],
});

export const mutations = {
  setUser(state, infoUser) {
    state.infoUser.push(infoUser.info);
  },
  setDelete(state, index) {
    state.infoUser.splice(index, 1);
  },
  setEditSplice(state, value) {
    state.infoUser.splice(value.number, 1), state.infoUser.push(value.details);
  },
};
