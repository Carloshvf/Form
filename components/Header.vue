<template>
  <section class="header" id="header">
    <div class="container-fluid">
      <div class="row">
        <div class="col-5">
          <nuxt-link class="brand align-items-center" to="/">
            <span>FORMS</span>
          </nuxt-link>
        </div>
        <div class="col-7">
          <nuxt-link
            to="/cadastrados"
            class="btn-cadastrados justify-content-end mt-1"
          >
            <span>Cadastrados</span>
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      user: "",
      headerButtons: false,
      headerId: "",
      auth: "",
    };
  },

  methods: {},
};
</script>

<style lang="scss">
@import "@/assets/scss/base.scss";

.header {
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.15) 0px -2px 10px 0px;
  justify-content: space-between;
  align-items: center;
  padding: 0.5em 2em;
}

.brand {
  font-size: 1.2em;
  color: black;
  text-decoration: none !important;
}

.brand:hover {
  color: grey;
}

.brand span {
  font-weight: 900;
  text-transform: uppercase;
}

.btn-cadastrados {
  display: flex;
  font-size: 1.2em;
  color: black;
}
.btn-cadastrados:hover {
  text-decoration: none !important;
  color: grey;
}

.btn-cadastrados span {
  font-weight: 900;
  text-transform: uppercase;
}
</style>
