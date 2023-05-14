<template>
  <div class="container d-flex justify-content-center">
    <div class="form-row">
      <div class="col">
        <h1>Cadastre-se</h1>
        <b-form class="home">
          <b-form-group label="Endereço de Email:">
            <b-form-input
              type="email"
              placeholder="Email"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group label="Nome:">
            <b-form-input
              placeholder="Nome"
              type="text"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group label="Senha:">
            <b-form-input
              placeholder="Senha"
              type="password"
              required
            ></b-form-input>
          </b-form-group>
          <b-button class="btn" @click="salvarInfo()">Salvar</b-button>
        </b-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {};
  },

  methods: {
    salvarInfo() {
      return;
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 1em;
}

.btn-salvar {
  text-align: center;
  align-items: center;
}
</style>
