import Helmet from "../../components/Helmet";
import Section, { SectionBody, SectionTitle } from "../../components/Section";
// import ProductCard from "../../components/ProductCard";
import ProductView from "../../components/ProductView";
import Grid from "../../components/Grid";
import { useParams } from "react-router-dom";

import * as productApi from "../../api/productsApi";
import { useState, useEffect, Fragment } from "react";

function Product() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const getProduct = async () => {
    const pro = await productApi.getProductById(id);
    setProduct(pro);
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  return (
    <Fragment>
      {product ? (
        <Helmet title={product.name}>
          <Section>
            <SectionBody>
              <ProductView product={product} />
            </SectionBody>
          </Section>
          <Section>
            <SectionTitle>Sản phẩm liên quan</SectionTitle>
            <SectionBody>
              <Grid col={4} mdCol={2} smCol={1} gap={20}>
                {product.name}
              </Grid>
            </SectionBody>
          </Section>
        </Helmet>
      ) : (
        <div></div>
      )}
    </Fragment>
  );
}

export default Product;
