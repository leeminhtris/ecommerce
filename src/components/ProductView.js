import React, { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { addItem } from "../redux/shoppingCart/productItems";

import Banner from "./Banner";
import promotion from "../api/promotion";
import SystemProduct from "./SystemProduct";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import numberWithCommas from "../utils/numberWithCommas";

function ProductView(props) {
  const { product } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState(undefined);
  const [capacity, setCapacity] = useState(undefined);
  const [price, setPrice] = useState(product.price);

  const changeQuantity = (type) => {
    if (type === "PLUS") {
      setQuantity(quantity + 1);
    } else {
      setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
    }
  };

  const check = () => {
    if (capacity === undefined) {
      toast.error("Vui lòng chọn dung lượng.");
      return false;
    }
    if (color === undefined) {
      toast.error("Vui lòng chọn màu sắc.");
      return false;
    }

    return true;
  };

  const addToCart = () => {
    if (check()) {
      dispatch(
        addItem({
          id: product.id,
          name: product.name,
          imageAvt: product.image[0].imgAvt,
          brandName: product.brandName,
          color: color,
          capacity: capacity,
          quantity: quantity,
          price: price,
        })
      );
      toast.success("Thêm vào giỏ hàng thành công!");
    }
  };

  const goToCart = () => {
    if (check()) {
      dispatch(
        addItem({
          id: product.id,
          name: product.name,
          imgageAvt: product.image[0].imgAvt,
          brandName: product.brandName,
          price: price,
          color: color,
          capacity: capacity,
          quantity: quantity,
        })
      );
      navigate("/cart");
    }
  };
  return (
    <div className="product">
      <h1 className="product__view__name">Điện thoại {product.name} </h1>
      <div className="product__view">
        <div className="product__view__left">
          <div className="product__view__left__img">
            <img
              src={product.image[0].img01}
              alt=""
              className="product__view__left__img--avt"
            />
          </div>
        </div>
        <div className="product__view__right">
          <div className="product__view__right__item">
            {product.capacity.map((item, index) => (
              <div
                key={index}
                className={`product__view__right__item__info product__view__right__item__info__capacity ${
                  item === capacity ? "active" : ""
                }`}
                onClick={() => setCapacity(item)}
              >
                {item}
              </div>
            ))}
          </div>
          <div className="product__view__right__item">
            {product.colors.map((item, index) => (
              <div
                className={`product__view__right__item__info product__view__right__item__info__color ${
                  item === color ? "active" : ""
                }`}
                key={index}
                onClick={() => setColor(item)}
              >
                {item}
              </div>
            ))}
          </div>
          <div className="product__view__right__item">
            <div className="product__view__right__item__quantity">
              <div
                className="product__view__right__item__quantity__btn"
                onClick={() => changeQuantity("MINUS")}
              >
                <i className="bx bx-minus"></i>
              </div>
              <div className="product__view__right__item__quantity__input">
                {quantity}
              </div>
              <div
                className="product__view__right__item__quantity__btn"
                onClick={() => changeQuantity("PLUS")}
              >
                <i className="bx bx-plus"></i>
              </div>
            </div>
          </div>
          <div className="product__view__right__item__price">
            {numberWithCommas(price)} đ
          </div>
          <div className="product__view__right__title">
            Giá tại <span>Hà Nội</span>
          </div>
          <Banner
            img="https://cdn.tgdd.vn/2022/12/banner/Desk-920-x-230-920x230-2.webp"
            marginBottom={10}
          />
          <div className="product__view__right__promotion">
            <div className="product__view__right__promotion__info">
              <div className="product__view__right__promotion__info__title">
                Khuyến mãi
              </div>
              <div className="product__view__right__promotion__info__desc">
                Giá và khuyến mãi dự kiến áp dụng đến 23:00 | 31/12
              </div>
            </div>
            {promotion.map((item, index) => (
              <div
                className="product__view__right__promotion__item"
                key={item.id}
              >
                <div className="product__view__right__promotion__item__stt">
                  {item.id}
                </div>
                <div className="product__view__right__promotion__item__title">
                  {item.title}
                </div>
              </div>
            ))}
          </div>
          {product.status === 1 ? (
            <div className="product__view__right__item__status product__view__right__item__status--stock">
              Còn hàng
            </div>
          ) : (
            <div className="product__view__right__item__status product__view__right__item__status--outstock">
              Hết hàng
            </div>
          )}

          <div className="product__view__right__item">
            <div className="product__view__right__item__add">
              <Button size="sm" onClick={() => goToCart()}>
                Mua ngay
              </Button>
              <Button size="sm" onClick={() => addToCart()}>
                Thêm vào giỏ hàng
              </Button>
            </div>
          </div>
          <SystemProduct product={product} />
          <div className="product__view__right__desc">
            <div className="product__view__right__desc__info ">
              <h3>Thông tin sản phẩm</h3>
              <p dangerouslySetInnerHTML={{ __html: product.description }}></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductView;
