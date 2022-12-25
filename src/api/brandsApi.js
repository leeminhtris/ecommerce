import API from "./instance";
import CONFIG from "../config";

export async function getAllBrands() {
  try {
    const response = API.get(`${CONFIG.BASE_URL}/brands`);
    return response.data;
  } catch (err) {}
}
