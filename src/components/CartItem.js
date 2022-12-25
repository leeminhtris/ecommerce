import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addItem, removeItem } from "../redux/shoppingCart/productItems";
import numberWithCommas from "../utils/numberWithCommas";

function CartItem(props) {
  console.log("props", props);
  const { item } = props;
  const dispatch = useDispatch();

  const removeCartItem = () => {
    dispatch(removeItem(item));
  };
  return (
    <div className="cart__item">
      <div className="cart__item__img">
        <img src={item.imageAvt} alt="" />
      </div>
      <div className="cart__item__info">
        <div className="cart__item__info__name">
          <Link to={`/catalog/${item.id}`}>
            {`${item.name} - ${item.color} - ${item.capacity}`}
          </Link>
        </div>
        <div className="cart__item__info__name__price">
          {numberWithCommas(item.price)} ({item.quantity})
        </div>
        <div className="cart__item__info__del" onClick={() => removeCartItem()}>
          <i className="bx bx-trash"></i>
        </div>
      </div>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.object,
};

export default CartItem;
