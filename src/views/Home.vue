<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Welcome to the Thor Frontend</h1>
    <Login/>
  </div>
</template>

<script>
// @ is an alias to /src
import Login from "@/components/Login.vue";

export default {
  name: "home",
  components: {
    Login
  }
};
</script>

<style lang="scss">
.home {
  #login-form {
    margin: 1rem auto;
  }
}
</style>
