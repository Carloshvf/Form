<template>
  <div class="container d-flex justify-content-center mt-5">
    <div class="form-row">
      <div class="col">
        <h1>Cadastre-se</h1>
        <b-form class="home">
          <b-form-group label="Endereço de Email:">
            <b-form-input
              type="email"
              placeholder="Email"
              v-model="email"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group label="Nome:">
            <b-form-input
              placeholder="Digite o seu nome..."
              type="text"
              v-model="name"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group label="Senha:">
            <b-form-input
              placeholder="Digite uma senha..."
              type="password"
              v-model="password"
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
import { mapActions, mapMutations } from "vuex";

export default {
  name: "Home",
  data() {
    return {
      email: "",
      name: "",
      password: "",
      detailInfo: [],
    };
  },

  methods: {
    ...mapActions(["uploadInfo"]),

    async salvarInfo() {
      this.detailInfo.push({
        email: this.email,
        name: this.name,
        password: this.password,
      });
      await this.uploadInfo(this.details);
      console.log(this.detailInfo);
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

.home input {
  width: 40em;
}
</style>
