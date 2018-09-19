<template>

  <div class="info-container">
    <h1>INFORMATION VIEW</h1>

    <br>

    <InfoIndex/>

    <br>
    <!--<div class="input-container">
        <div class="input-group">
            <input type="text" v-model="info_name" placeholder="Info Name" />
        </div>
        <div class="input-group">
          <input type="text" v-model="info_title" placeholder="Info Title"/>
        </div>
        <div class="input-group">
          <input type="text" v-model="info_body" placeholder="Info Body"/>
        </div>
        <div class="input-group">
          <button @click="createInfo" type="submit">Add Info</button>
        </div>
    </div>-->
    <p>{{ info_name }}</p>
    <p>{{ info }}</p>
    <p>Authenticated: {{ this.$store.state.auth.authenticated }}</p>
    <button @click="logOut">Log Out</button>
  </div>

</template>

<script>
// @ is an alias to /src
import InfoService from "@/services/InfoService";
import store from "../store";
import InfoIndex from "@/components/InfoIndex";
import Login from "@/components/Login";

export default {
  name: "information",
  components: {
    InfoIndex,
    Login
  },
  data() {
    return {
      info_name: "",
      info_title: "",
      info_body: "",
      info: "",
      error: ""
    };
  },
  created() {
    store.dispatch("fetchInfos");
  },
  computed: {
    infos() {
      return store.state.infos;
    }
  },
  methods: {
    async getInfos() {
      await InfoService.getInfos().then(
        response => {
          this.infos = response.data.results;
        },
        error => {
          console.log(error);
        }
      );
    },
    logOut() {
      store.dispatch("signOut");
    }
  }
};
</script>

<style lang="scss">
.info-container {
  max-width: 1080px;
  margin: 0 auto;
  .info-index {
    width: 100%;
  }
}
</style>
