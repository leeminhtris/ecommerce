import Helmet from "../../components/Helmet";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../../components/CartItem";

import numberWithCommas from "../../utils/numberWithCommas";
import Banner from "../../components/Banner";
import Button from "../../components/Button";
import Popup from "reactjs-popup";

import productData from "../../api/productsApi";

function Cart() {
  const cartItems = useSelector((state) => state.cartItems.value);
  console.log("cartitems " + cartItems);
  const [cartProduct, setCartProduct] = useState([]);
  const [totalProduct, setTotalProduct] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setCartProduct(productData.getCartItemDetails(cartItems));
    setTotalProduct(
      cartItems.reduce((total, item) => total + Number(item.quantity), 0)
    );
    setTotalPrice(
      cartItems.reduce(
        (total, item) => total + Number(item.quantity) * Number(item.price),
        0
      )
    );
  }, [cartItems]);

  const handleOrder = () => {};

  return (
    <Helmet title="Giỏ hàng">
      <Banner
        img="https://magiamgialazada.vn/wp-content/uploads/2018/01/voucher-bi-mat-lazada-khuyen-mai-tet-am-lich-2018-truyen-nhan-sam-tet.png"
        marginBottom={50}
      />

      <div className="cart">
        <div className="cart__list">
          {cartProduct.map((item, index) => (
            <CartItem key={index} item={item} />
          ))}
        </div>
        <div className="cart__info">
          <div className="cart__info__txt">
            <p>Shopping Bag ({totalProduct})</p>
            <div className="cart__info__txt__price">
              <span>Thành tiền</span>
              <span>{numberWithCommas(totalPrice)}</span>
            </div>
          </div>
          <div className="cart__info__btn">
            <Button size="block" onClick={handleOrder}>
              Đặt hàng
            </Button>

            <Button size="block">
              <Link to="/catalog">Tiếp tục mua hàng</Link>
            </Button>
          </div>
        </div>
      </div>
    </Helmet>
  );
}

export default Cart;
