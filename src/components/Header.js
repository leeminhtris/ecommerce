import React, { useRef, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

function Header() {
  const menu = [
    {
      display: "Trang chủ",
      path: "/",
    },
    {
      display: "Sản phẩm",
      path: "/catalog",
    },
    {
      display: "Bài viết",
      path: "/blog",
    },
    {
      display: "Liên hệ",
      path: "/contact",
    },
  ];

  const { pathname } = useLocation();
  console.log(pathname);
  const menuActive = menu.findIndex((i) => i.path === pathname);

  const menuRef = useRef(null);
  const menuToggle = () => {
    menuRef.current.classList.toggle("active");
  };

  const headerRef = useRef(null);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("shrink");
      } else {
        headerRef.current.classList.remove("shrink");
      }
    });
    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);

  return (
    <div className="header" ref={headerRef}>
      <div className="container">
        <div className="header__logo">
          <span>M</span>
          <span>T</span>
        </div>
        <div className="header__menu">
          <div className="header__menu__mobile--toggle" onClick={menuToggle}>
            <i className="bx bx-menu-alt-left"></i>
          </div>
          <div className="header__menu__left" ref={menuRef}>
            <div className="header__menu__left__close" onClick={menuToggle}>
              <i className="bx bx-chevron-left"></i>
            </div>
            {menu.map((item, index) => (
              <div
                key={index}
                className={`header__menu__item header__menu__left__item ${
                  index === menuActive ? "active" : ""
                }`}
                onClick={menuToggle}
              >
                <Link to={item.path}>{item.display}</Link>
              </div>
            ))}
          </div>
          <div className="header__menu__right">
            <div
              className="header__menu__item header__menu__right__item"
              title="Giỏ hàng"
            >
              <Link to="/cart">
                <i className="bx bx-shopping-bag"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
