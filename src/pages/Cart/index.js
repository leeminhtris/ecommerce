import Helmet from "../../components/Helmet";
import { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import CartItem from "../../components/CartItem";

import Banner from "../../components/Banner";
import Button from "../../components/Button";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import numberWithCommas from "../../utils/numberWithCommas";

function Cart() {
  const [products, setProducts] = useState([]);
  const [message, setMessage] = useState("");
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    getInitData();
  }, []);

  function getInitData() {
    let cartItems = localStorage.getItem("cartItems");
    if (cartItems) {
      console.log("cartItems", cartItems);
      let productData = JSON.parse(cartItems);
      setProducts(productData.products);
      setTotalQuantity(productData.amount);
      setTotalPrice(productData.totalPrice);
      console.log(productData.amount);
    } else {
      setMessage("Chưa có sản phẩm nào trong giỏ hàng của bạn");
    }
    console.log("asdsad");
  }

  const OlderComponent = () => {
    return (
      <Popup trigger={<Button size="block">Đặt hàng</Button>} modal>
        <div>
          Tên *
          <input type="text" name="number" placeholder="Tên" />
        </div>
        <div>
          Số điện thoại *
          <input type="text" name="number" placeholder="Số điện thoại" />
        </div>
        <button type="submit">
          <span>Xác nhận</span>
        </button>
      </Popup>
    );
  };

  return (
    <Helmet title="Giỏ hàng">
      <Banner
        img="https://magiamgialazada.vn/wp-content/uploads/2018/01/voucher-bi-mat-lazada-khuyen-mai-tet-am-lich-2018-truyen-nhan-sam-tet.png"
        marginBottom={50}
      />
      <div className="cart">
        <div className="cart__list">
          {products.map((item, index) => (
            <CartItem key={index} item={item} />
          ))}
        </div>
        <div className="cart__info">
          <div className="cart__info__txt">
            <p>Giỏ hàng ({totalQuantity})</p>
            <div className="cart__info__txt__price">
              <span>Thành tiền</span>
              <span>{numberWithCommas(totalPrice)} đ</span>
            </div>
          </div>
          <div className="cart__info__btn">
            {products.length > 0 ? <OlderComponent></OlderComponent> : ""}
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
