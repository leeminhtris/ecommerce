import API from "../api/instance";
import CONFIG from "../config";

export async function getAllProducts() {
  try {
    const response = await API.get(`${CONFIG.BASE_URL}/products`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getProductById(id) {
  try {
    const response = await API.get(`${CONFIG.BASE_URL}/product/${id}`);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
