import Api from "@/services/Api";

export default {
  logIn(email, password) {
    let data = JSON.stringify({
      session: {
        email: email,
        password: password
      }
    });
    return Api().post("/sessions", data);
  },
  logOut() {
    return Api().delete("/sessions");
  },
  checkAuthenticated() {
    return Api().get("/sessions/authenticated");
  },
  getCurrentUser() {
    return Api().get("/sessions/current");
  }
};
