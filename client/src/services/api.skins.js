import axios from "axios";

const url = "/api/skins";
export default class heroAPI {
  static async getAllSkins() {
    const res = await axios.get(url);
    return res.data;
  }
  static async getSkins(id) {
    const res = await axios.get(`${url}/${id}`);
    return res.data;
  }
  static async postSkins(post) {
    const res = await axios.post(url, post);
    return res.data;
  }
  static async updateSkins(id, post) {
    const res = await axios.put(`${url}/${id}`, post);
    return res.data;
  }
  static async deleteSkins(id) {
    const res = await axios.delete(`${url}/${id}`);
    return res.data;
  }
}
