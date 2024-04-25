import { Fragment, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartProductCard from "../../components/card/CartProductCard";
import "./cartPage.scss";
import { LanguageContext } from "../../App";

const CartPage = () => {
  const { cart , totalPrice } = useContext(CartContext);
  const {languageObj:t} = useContext(LanguageContext);

  return (

    <Fragment>
      <section id="cart">
        <div className="container-850">
          <h1>{t.yourorder}</h1>
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
                Итого: <span>{totalPrice} ₽</span>
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
