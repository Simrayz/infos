<template>
  <v-app id="app" app-data="true">
    <component :is="layout">
      <router-view/>
    </component>
  </v-app>
</template>

<script>
import store from "./store";

const default_layout = "default";

export default {
  name: "app",
  created() {
    store.dispatch("checkAuth");
  },
  computed: {
    layout() {
      return (this.$route.meta.layout || default_layout) + "-layout";
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.layout-wrapper {
  height: 100%;
}
</style>
