<template>
  <div class="container d-flex justify-content-center">
    <div class="row">
      <div class="col">
        <h1>Cadastre-se</h1>
        <b-form>
          <b-form-group label="Endereço de Email:">
            <b-form-input
              type="email"
              placeholder="Email"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group label="Nome:">
            <b-form-input placeholder="Nome" required></b-form-input>
          </b-form-group>
          <b-form-group label="Senha:">
            <b-form-input placeholder="Senha" required></b-form-input>
          </b-form-group>
          <b-button class="" @click="salvarInfo()">Salvar</b-button>
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
    salvarInfo() {},
  },
};
</script>
