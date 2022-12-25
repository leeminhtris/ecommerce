import React from "react";

function SystemProduct(props) {
  const { product } = props;
  return (
    <div className="system__product">
      <div className="system__product__name">
        Cấu hình điện thoại {product.name}
      </div>
      <ul className="system__product__list">
        <li className="system__product__list__item">
          <p className="system__product__list__item__left">Màn hình</p>
          <p className="system__product__list__item__right">
            {product.system[0].screen}
          </p>
        </li>
        <li className="system__product__list__item">
          <p className="system__product__list__item__left">Hệ điều hành</p>
          <p className="system__product__list__item__right">
            {product.system[0].operating}
          </p>
        </li>
        <li className="system__product__list__item">
          <p className="system__product__list__item__left">Camera</p>
          <p className="system__product__list__item__right">
            {product.system[0].camera}
          </p>
        </li>
        <li className="system__product__list__item">
          <p className="system__product__list__item__left">Chip</p>
          <p className="system__product__list__item__right">
            {product.system[0].chip}
          </p>
        </li>
        <li className="system__product__list__item">
          <p className="system__product__list__item__left">RAM</p>
          <p className="system__product__list__item__right">
            {product.system[0].ram}
          </p>
        </li>
        <li className="system__product__list__item">
          <p className="system__product__list__item__left">Bộ nhớ trong</p>
          <p className="system__product__list__item__right">
            {product.system[0].memory}
          </p>
        </li>
        <li className="system__product__list__item">
          <p className="system__product__list__item__left">Pin</p>
          <p className="system__product__list__item__right">
            {product.system[0].pin}
          </p>
        </li>
      </ul>
    </div>
  );
}

export default SystemProduct;
