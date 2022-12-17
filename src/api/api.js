import CONFIG from "../config";
import axios from "axios";

//call api
export function getProducts() {
  let URL = `${CONFIG.BASE_URL}/products`;
  axios
    .get(URL)
    .then((res) => {
      const products = res.products;
      console.log(products);
    })
    .catch((error) => console.log(error));
}
