import Banner from "../components/Banner";
import Helmet from "../components/Helmet";
import Slider from "../components/Slider";
import Section, { SectionBody, SectionTitle } from "../components/Section";

function Home() {
  return (
    <Helmet title="Trang chủ">
      <Slider />
      <Section>
        <SectionTitle>Sản Phẩm mới</SectionTitle>
        <SectionBody></SectionBody>
      </Section>
      <Section>
        <SectionTitle>Sản phẩm bán chạy nhất</SectionTitle>
        <SectionBody></SectionBody>
      </Section>
      <Banner img="https://img4.thuthuatphanmem.vn/uploads/2020/06/26/hinh-anh-banner-dien-may-thong-minh_033705387.png" />
    </Helmet>
  );
}
export default Home;
