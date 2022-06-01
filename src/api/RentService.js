import axios from "axios";

const apiUrl = "rentalEvents";

export default class RentService {
  static async getAll() {
    const response = await axios.get(`${apiUrl}`);
    return response.data;
  }

  static async create(rentEvent) {
    await axios.post(`${apiUrl}`, rentEvent);
  }
}
