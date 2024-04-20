import { NavLink } from "react-router-dom";

import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="top-nav">
        <div className="container top-container">
          <div className="top-left">
            <a className="top-left--logo" href="https://www.bing.com/maps?osid=0801f43c-1b83-4b68-a7bb-e78f096cc05d&cp=55.744336~37.265906&lvl=10.010755&pi=0&imgid=4d16336c-10ce-42aa-a334-0e2546cbf722&v=2&sV=2&form=S00027">
              <img src="/Location.svg" alt="location" />
              Москва
            </a>
            <div className="top-left__infos">
              <p className="left-address">Проверить адрес</p>
              <p>
                Среднее время доставки*: <span>00:24:19</span>
              </p>
              <NavLink></NavLink>
            </div>
          </div>
          <div className="top-right">
            <p className="right-data">Время работы: с 11:00 до 23:00</p>
            <a href="#" className="right-infos">
              <img src="/user.svg" alt="user" />
              <p>Войти в аккаунт</p>
            </a>
          </div>
        </div>
      </div>
      <div className="main-nav">
        <div className="container main-nav__container">
            <NavLink className="main-nav__logo" to="/">
                <img src="/pizza-logo.svg" alt="" />
                <p>Куда пицца</p>
            </NavLink>
            <NavLink className="nav-cart" to="/cart">
                <img src="/cart.svg" alt="cart" />
                <p className="price">0 ₽</p>
            </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
