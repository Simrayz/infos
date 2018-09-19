<template>
  <div id="login-container">
    <Login/>
  </div>
</template>

<script>
// @ is an alias to /src
import Login from "@/components/Login.vue";

export default {
  name: "LoginView",
  components: {
    Login
  }
};
</script>

<style lang="scss">
#login-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  background-color: rgb(218, 218, 218);
  #login-form {
    margin: auto;
    width: 500px;
  }
}
</style>
