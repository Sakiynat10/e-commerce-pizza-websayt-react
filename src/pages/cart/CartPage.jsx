import { Fragment, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartProductCard from "../../components/card/CartProductCard";
import "./cartPage.scss";

const CartPage = () => {
  const { cart } = useContext(CartContext);
  return (
    <Fragment>
      <section id="cart">
        <div className="container-850">
          <h1>Ваш заказ</h1>
          {cart.map((pr) => (
            <CartProductCard {...pr} key={pr.id} />
          ))}
        </div>
      </section>
      <section id="total-price">
        <div className="container-850">
          <div className="total-price_card">
            <div className="input-group">
              <input type="text" placeholder="Адрес" />
              <button type="submit" className="send-btn">
                <img src="/send.png" alt="send" />
              </button>
              <img
                className="location-img"
                src="/Location.svg"
                alt="Location"
              />
            </div>
            <div className="total-price_info">
              <p>
                Итого: <span>{cart.map((pr) => pr.price)}</span>
              </p>
              <button>Оформить заказ</button>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default CartPage;
