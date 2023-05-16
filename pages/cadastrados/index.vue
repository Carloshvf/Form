<template>
  <div class="container d-flex justify-content-center mt-5">
    <div class="row">
      <div class="col">
        <h1 class="title">Informações Cadastradas</h1>
        <ul class="products">
          <li v-for="(item, index) in informacao" :key="item.id">
            <p>Email: {{ item.email }}</p>
            <p>Nome: {{ item.name }}</p>
            <p>Senha: {{ item.password }}</p>
            <b-button class="editing">
              <img
                src="../../static/img/editSelect.svg"
                alt="del"
                @click="showEdit(index.toString())"
              />
            </b-button>
            <b-button class="deleting">
              <img
                src="../../static/img/deleteSelect.svg"
                alt="del"
                @click="deleteInfoEdit(index)"
              />
            </b-button>
            <b-modal size="lg" :id="index.toString()">
              <template v-slot:modal-title>
                <h1>Edite as informações</h1>
              </template>
              <template>
                <div class="row">
                  <div class="col">
                    <b-form-group label="Endereço de Email:">
                      <b-form-input
                        type="email"
                        placeholder="Email"
                        v-model="editEmail"
                        required
                      ></b-form-input>
                    </b-form-group>
                  </div>
                  <div class="col">
                    <b-form-group label="Nome:">
                      <b-form-input
                        placeholder="Digite o seu nome..."
                        type="text"
                        v-model="editName"
                        required
                      ></b-form-input>
                    </b-form-group>
                  </div>
                  <div class="col">
                    <b-form-group label="Senha:">
                      <b-form-input
                        placeholder="Digite uma senha..."
                        type="password"
                        v-model="editPassword"
                        required
                      ></b-form-input>
                    </b-form-group>
                  </div>
                </div>
              </template>
              <template v-slot:modal-footer>
                <b-button class="btn-save" @click="editInfo(index)">
                  Editar
                </b-button>
              </template>
            </b-modal>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";

export default {
  data() {
    return {
      edit: null,
      editEmail: "",
      editName: "",
      editPassword: "",
    };
  },

  computed: {
    informacao() {
      return this.$store.state.infoUser;
    },
    informacaoEdit: {
      get() {
        return this.$store.state.infoUser;
      },
      set(value) {
        this.$store.commit("setEdit", value);
      },
    },
  },

  methods: {
    ...mapMutations({
      userEdit: "setEdit",
      userEditSplice: "setEditSplice",
      userDelete: "setDelete",
    }),

    async showEdit(index) {
      (this.editEmail = this.informacaoEdit[index].email),
        (this.editName = this.informacaoEdit[index].name),
        (this.editPassword = this.informacaoEdit[index].password),
        await this.$bvModal.show(index);
      // console.log(index, value);
    },
    async editInfo(index) {
      await this.userEditSplice({
        number: index,
        details: {
          email: this.editEmail,
          name: this.editName,
          password: this.editPassword,
        },
      });
    },
    async deleteInfoEdit(index) {
      // console.log(index);
      await this.userDelete(index);
    },
  },
};
</script>

<style lang="scss" scoped>
.products {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.products li {
  border: 1px solid #efefef;
  border-radius: 5px;
  padding: 10px;
  text-align: center;
  list-style: none;
  margin: 0 10px;
  width: 100%;
}

.editing {
  background-color: #efefef;
}
.deleting {
  background-color: #efefef;
}
</style>
