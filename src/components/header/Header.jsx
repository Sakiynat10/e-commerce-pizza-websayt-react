import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import "./header.scss";
import { CartContext } from "../../context/CartContext";
import { LanguageContext } from "../../App";
import { categories } from "../../data/categories/categories";

const Header = () => {
  const { totalPrice } = useContext(CartContext);
  const state = useContext(LanguageContext);
  const { language: l, languageObj: t, setLanguage } = state;
  const [toggle, setToggle] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className={scrollPosition >= 195 ? "header scroll" : "header"}>
      {console.log(scrollPosition)}
      <div
        className={scrollPosition >= 40 ? "top-nav top-nav_scroll" : "top-nav"}
      >
        <div className="container top-container">
          <div className="top-left">
            <a
              className="top-left--logo"
              href="https://www.bing.com/maps?osid=0801f43c-1b83-4b68-a7bb-e78f096cc05d&cp=55.744336~37.265906&lvl=10.010755&pi=0&imgid=4d16336c-10ce-42aa-a334-0e2546cbf722&v=2&sV=2&form=S00027"
            >
              <img src="/Location.svg" alt="location" />
              {t.location}
            </a>
            <div className="top-left__infos">
              <p className="left-address">{t.check_address}</p>
              <p>
                {t.delivertime}
                <span>00:24:19</span>
              </p>
              <NavLink></NavLink>
            </div>
          </div>
          <div className="top-right">
            <p className="right-data">
              {t.worktimedata}
              {t.worktime}
            </p>
            <a href="#" className="right-infos">
              <img src="/user.svg" alt="user" />
              <p>{t.account}</p>
            </a>
          </div>
        </div>
      </div>
      <div className="main-nav">
        <div className="container main-nav__container">
          <NavLink className="main-nav__logo" to="/">
            <img src="/pizza-logo.svg" alt="" />
            <p>{t.brand_name}</p>
          </NavLink>
          <div className="nav-center">
            {t.categories.map((category, i) => (
              <a key={i} href={`#${category.name}`}>
                {category.name}
              </a>
            ))}
          </div>
          <div className="nav-right">
            <NavLink className="nav-cart" to="/cart">
              <img src="/cart.svg" alt="cart" />
              <p className="price">{totalPrice} ₽</p>
              {/* <p className="price">{cart.length}</p> */}
            </NavLink>
            <select value={l} onChange={(e) => setLanguage(e.target.value)}>
              <option value="uz">Uz</option>
              <option value="ru">Ru</option>
              <option value="en">En</option>
            </select>
            <button onClick={handleToggle} className="toggle-btn">
              <img src="/menu.svg" className={toggle === true ? "none" : "menu"} alt="menu" />
              <img src="/close.svg" alt="close" className={toggle === true ? "menu" : "none"} />
            </button>
          </div>
        </div>
      </div>
      <div className={toggle === true ? "toggle nav-toggle" : " toggle"}>
        <NavLink className="main-nav__logo" to="/">
          <img src="/pizza-logo.svg" alt="" />
          <p>{t.brand_name}</p>
        </NavLink>
        <ul>
          {t.categories.map((category, i) => (
            <li key={i}>
              <a href={`/#${category.name}`}>{category.name}</a>
            </li>
          ))}
        </ul>
        <NavLink className="nav-cart" to="/cart">
          <img src="/cart-red.svg" alt="cart" />
          <p className="price">{totalPrice} ₽</p>
          {/* <p className="price">{cart.length}</p> */}
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
