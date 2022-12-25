import React, { useEffect, useState } from "react";

import Banner from "../../components/Banner";
import Helmet from "../../components/Helmet";
import Slider from "../../components/Slider";
import Section, { SectionBody, SectionTitle } from "../../components/Section";
import Policy from "../../components/Policy";
import policy from "../../api/policy";
import Grid from "../../components/Grid";

import ProductCard from "../../components/ProductCard";

import * as productApi from "../../api/productsApi";

function Home() {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    const pro = await productApi.getAllProducts();
    setProducts(pro);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Helmet title="Trang chủ">
      <Slider />
      <Section>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={40}>
            {policy.map((item, index) => (
              <Policy
                key={index}
                name={item.name}
                icon={item.icon}
                title={item.description}
              />
            ))}
          </Grid>
        </SectionBody>
      </Section>

      <Section>
        <SectionTitle>Sản phẩm mới</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={40}>
            {products.map((item, index) => (
              <ProductCard key={index.id} data={item} />
            ))}
          </Grid>
        </SectionBody>
      </Section>

      <Section>
        <SectionTitle>Sản phẩm bán chạy nhất</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={40}>
            {products.map((item, index) => (
              <ProductCard key={index.id} data={item} />
            ))}
          </Grid>
        </SectionBody>
      </Section>
      <Banner
        img="https://www.viettablet.com/images/promo/47/tra-gop-0_-lai-suot-trong-3-thang-mobi-banner-viettablet.jpg"
        marginBottom={20}
      />

      <Section>
        <SectionTitle>Sản phẩm liên quan</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={40}>
            {products.map((item, index) => (
              <ProductCard key={index.id} data={item} />
            ))}
          </Grid>
        </SectionBody>
      </Section>
      <Banner img="https://img4.thuthuatphanmem.vn/uploads/2020/06/26/hinh-anh-banner-dien-may-thong-minh_033705387.png" />
    </Helmet>
  );
}
export default Home;
