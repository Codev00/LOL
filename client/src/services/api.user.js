import axios from "axios";

const url = "/api/user";
export default class userAPI {
  static async getAllUser() {
    const res = await axios.get(url);
    return res.data;
  }
  static async getUser(id) {
    const res = await axios.get(`${url}/${id}`);
    return res.data;
  }
  static async postUser(user) {
    const res = await axios.post(url, user);
    return res.data;
  }
  static async updateUser(id, user) {
    const res = await axios.put(`${url}/${id}`, user);
    return res.data;
  }
  static async deleteUser(id) {
    const res = await axios.delete(`${url}/${id}`);
    return res.data;
  }
}
