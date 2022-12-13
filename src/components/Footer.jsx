import { Link } from "react-router-dom";
import ContactIcon from "./ContactIcon";
import React from "react";

function Footer() {
  const footerAboutLinks = [
    {
      display: "Giới thiệu",
      path: "/about",
    },
    {
      display: "Liên hệ",
      path: "/",
    },
    {
      display: "Tin tức",
      path: "/",
    },
    {
      display: "Hệ thống cửa hàng",
      path: "/",
    },
  ];

  const footerCustomerLinks = [
    {
      display: "Chính sách đổi trả",
      path: "/",
    },
    {
      display: "Chính sách bảo hành",
      path: "/",
    },
    {
      display: "Chính sách hoàn tiền",
      path: "/",
    },
  ];

  return (
    <div className="footer">
      <div className="container">
        <div className="footer__info">
          <div className="footer__title">Tổng đài hỗ trợ</div>
          <div className="footer__content">
            <p>
              Liên hệ đặt hàng <strong>0986421693</strong>
            </p>
            <p>
              Thắc mắc đơn hàng <strong>0986421693</strong>
            </p>
            <p>
              Góp ý, khiếu nại <strong>0986421693</strong>
            </p>
          </div>
        </div>
        <div className="footer__info">
          <div className="footer__title">Về MT-STORE</div>
          <div className="footer__content">
            {footerAboutLinks.map((item, index) => (
              <p key={index}>
                <Link to={item.path}>{item.display}</Link>
              </p>
            ))}
          </div>
        </div>
        <div className="footer__info">
          <div className="footer__title">Chăm sóc khách hàng</div>
          <div className="footer__content">
            {footerCustomerLinks.map((item, index) => (
              <p key={index}>
                <Link to={item.path}>{item.display}</Link>
              </p>
            ))}
          </div>
        </div>
        <div className="footer__info">
          <p>
            <Link to="/" className="footer__logo">
              MT
            </Link>
          </p>
          <ContactIcon
            facebook="bx bxl-facebook-square"
            instagram="bx bxl-instagram"
          />
          <div className="footer__paypal">
            <img
              src="https://cdn.tgdd.vn/Files/2019/07/16/1179841/636629240000820088-760x367.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
