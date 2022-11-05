import axios from "axios";

const url = "/api/user";
export default class heroAPI {
  static async getAllUser() {
    const res = await axios.get(url);
    return res.data;
  }
  static async getUser(id) {
    const res = await axios.get(`${url}/${id}`);
    return res.data;
  }
  static async postUser(hero) {
    const res = await axios.post(url, hero);
    return res.data;
  }
  static async updateUser(id, hero) {
    const res = await axios.put(`${url}/${id}`, hero);
    return res.data;
  }
  static async deleteUser(id) {
    const res = await axios.delete(`${url}/${id}`);
    return res.data;
  }
}
