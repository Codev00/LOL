import axios from "axios";

export default class userAPI {
  static async register(data) {
    const res = await axios.post("/api/users", data);
    return res.data;
  }
  static async login(data) {
    const res = await axios.post("/api/users/login", data);
    return res.data;
  }
  static async account() {
    const res = await axios.get("/api/users/account", {
      headers: {
        Authorization: "Beazer " + localStorage.getItem("token"),
      },
    });
    return res.data;
  }
  static async logout(token) {
    const res = await axios.post("/api/users/account/logout", token);
    return res.data;
  }
}
