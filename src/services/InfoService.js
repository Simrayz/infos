import Api from "@/services/Api";

export default {
  getInfos() {
    return Api().get("/infos");
  },
  getInfo(params) {
    return Api().get("/infos/" + params.name);
  },
  createInfo(name, title, body) {
    return Api().post("/infos", {
      info: {
        name: name,
        title: title,
        body: body
      }
    });
  },
  deleteInfo(id) {
    return Api().delete("/infos/" + id);
  }
};
