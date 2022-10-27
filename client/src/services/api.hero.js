import axios from "axios";

const url = "/api/hero";
export default class heroAPI {
  static async getAllHero() {
    const res = await axios.get(url);
    return res.data;
  }
  static async getHero(id) {
    const res = await axios.get(`${url}/${id}`);
    return res.data;
  }
  static async postHero(hero) {
    const res = await axios.post(url, hero);
    return res.data;
  }
  static async updateHero(id, hero) {
    const res = await axios.put(`${url}/${id}`, hero);
    return res.data;
  }
  static async deleteHero(id) {
    const res = await axios.delete(`${url}/${id}`);
    return res.data;
  }
}
