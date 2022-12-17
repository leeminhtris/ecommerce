import Helmet from "../../components/Helmet";
import Section, { SectionBody, SectionTitle } from "../../components/Section";
import ProductCard from "../../components/ProductCard";
import ProductView from "../../components/ProductView";
import Grid from "../../components/Grid";
import productData from "../../api/productsApi";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

function Product() {
  const { slug } = useParams();
  const product = productData.getProductBySlug(slug);
  const relatedProduct = productData.getProducts(8);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  return (
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
            {relatedProduct.map((item, index) => (
              <ProductCard key={item.id} data={item} />
            ))}
          </Grid>
        </SectionBody>
      </Section>
    </Helmet>
  );
}

export default Product;
