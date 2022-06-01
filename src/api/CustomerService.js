import axios from "axios";

const apiUrl = "customers";

export default class CustomerService {
  static async getAll() {
    const response = await axios.get(`${apiUrl}`);
    return response.data;
  }
  static async delete(id) {
    await axios.delete(`${apiUrl}/${id}`);
  }
  static async create(customer) {
    await axios.post(`${apiUrl}`, customer);
  }
  static async update(customer, id) {
    await axios.put(`${apiUrl}/${id}`, customer);
  }
}
