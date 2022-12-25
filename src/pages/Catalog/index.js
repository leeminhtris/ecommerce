import Helmet from "../../components/Helmet";
import Banner from "../../components/Banner";
import { useState, useEffect } from "react";
import ProductCard from "../../components/ProductCard";
import Grid from "../../components/Grid";
import * as productApi from "../../api/productsApi";

function Catalog() {
  // search

  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    const pro = await productApi.getAllProducts();
    setProducts(pro);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Helmet title="Sản phẩm">
      <Banner
        img="https://img3.thuthuatphanmem.vn/uploads/2019/10/08/banner-quang-cao-dien-thoai_103211774.jpg"
        marginBottom={30}
      />
      <div className="catalog">
        <div className="catalog__search">
          <input type="text" placeholder="Tìm kiếm..." />
          <i className="bx bx-search"></i>
        </div>

        <div className="catalog__filter">
          <button>Tất cả</button>
        </div>
        <div className="catalog__content">
          <Grid col={4} mdCol={2} smCol={1}>
            {products.map((item, index) => (
              <ProductCard key={index.id} data={item} />
            ))}
          </Grid>
        </div>
      </div>
    </Helmet>
  );
}

export default Catalog;
