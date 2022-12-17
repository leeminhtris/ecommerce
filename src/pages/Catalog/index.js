import Helmet from "../../components/Helmet";
import Banner from "../../components/Banner";
import { useState } from "react";
import productData from "../../api/productsApi";
// import api from "../../api";
import ProductCard from "../../components/ProductCard";
import Grid from "../../components/Grid";

function Catalog() {
  // search
  const [search, setSearch] = useState("");
  console.log(search);

  //danh sách sản phẩm
  const productList = productData.getAllProducts();
  const [product, setProduct] = useState(productList);
  console.log(product);
  const allProducts = () => {
    setProduct(productList);
  };
  return (
    <Helmet title="Sản phẩm">
      <Banner
        img="https://img3.thuthuatphanmem.vn/uploads/2019/10/08/banner-quang-cao-dien-thoai_103211774.jpg"
        marginBottom={30}
      />
      <div className="catalog">
        <div className="catalog__search">
          <input
            type="text"
            placeholder="Tìm kiếm..."
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <i className="bx bx-search"></i>
        </div>

        <div className="catalog__filter">
          <button onChange={allProducts}>Tất cả</button>
        </div>
        <div className="catalog__content">
          <Grid col={4} mdCol={2} smCol={1}>
            {productData.getAllProducts().map((item, index) => (
              <ProductCard key={index.id} data={item} />
            ))}
          </Grid>
        </div>
      </div>
    </Helmet>
  );
}
export default Catalog;
