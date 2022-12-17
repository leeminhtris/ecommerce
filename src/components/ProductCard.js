import React from "react";
import { Link } from "react-router-dom";
import numberWithCommas from "../utils/numberWithCommas";

function ProductCard(props) {
  const { data } = props;
  return (
    <div className="product__card">
      <div className="product__card__item">
        <Link to={`/catalog/${data.slug}`}>
          <div className="product__card__item__img">
            <img src={data.image.imgAvt} alt="" />
          </div>

          <div className="product__card__item__info">
            <h1 className="product__card__item__info__name">{data.name}</h1>
            <p className="product__card__item__info__price">
              {numberWithCommas(data.price)}&nbsp;đ&nbsp;&nbsp;
              <del>{numberWithCommas(data.discount)}&nbsp;đ</del>
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
