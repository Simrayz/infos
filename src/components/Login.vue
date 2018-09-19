<template>

  <v-card id="login-form">
    <v-card-title primary-title>
      <h3 class="headline mb-0">Login</h3>
    </v-card-title>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="Email"
        required
      />
      <v-text-field
        v-model="password"
        :rules="passwordRules"
        :counter="6"
        label="Password"
        required
      />
      <v-card-actions>
        <v-btn :disabled="!valid" @click="submit" class="success">Submit</v-btn>
        <v-btn @click="clear">clear</v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script>
import store from "@/store";

export default {
  name: "login",
  data: () => ({
    valid: true,
    email: "",
    emailRules: [
      v => !!v || "Email is required",
      v => /.+@.+/.test(v) || "E-mail must be valid"
    ],
    password: "",
    passwordRules: [
      v => !!v || "Password is required",
      v => (v && v.length >= 6) || "Password must be longer than 6 characters"
    ],
    select: null
  }),
  methods: {
    login(email, password) {
      store.dispatch("authenticate", {
        email: email,
        password: password,
        redirect: this.$route.query.redirect
      });
    },
    submit() {
      if (this.$refs.form.validate()) {
        this.login(this.email, this.password);
      }
    },
    clear() {
      this.$refs.form.reset();
    }
  }
};
</script>

<style lang="scss">
#login-form {
  max-width: 500px;
  padding: 1rem;
}
</style>
