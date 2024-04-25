import { createContext, useState } from "react";

import PropTypes from "prop-types";
import { products } from "../data/products/products";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {

  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const [totalPrice, setTotalPrice] = useState(
    +localStorage.getItem("totalPrice") || 0
  );

  const addToCart = (id) => {
    let newCart;
    const product = products.find((pr) => pr.id === id);        
    product.quantity = 1;
    newCart = [...cart, product];
    localStorage.setItem("cart", JSON.stringify(newCart));
    setCart(newCart);
    calcPrice();
  };

  const increaseQuantity = (id) => {
    let newCart = cart.map((pr) => {
      if (pr.id === id) {
        pr.quantity++;
      }
      return pr;
    });
    localStorage.setItem("cart", JSON.stringify(newCart));
    setCart(newCart);
    calcPrice();
  };

  const decreaseQuantity = (id) => {
    let newCart;

    const productInCart = cart.find((pr) => pr.id === id);

    if (productInCart.quantity === 1) {
      newCart = cart.filter((pr) => pr.id !== id);
    } else {
      newCart = cart.map((pr) => {
        if (pr.id === id) {
          pr.quantity--;
        }
        return pr;
      });
    }

    localStorage.setItem("cart", JSON.stringify(newCart));
    setCart(newCart);
    calcPrice();
  };

  const calcPrice = () => {
    let arr = JSON.parse(localStorage.getItem("cart")) || cart;
    let res =
      arr.reduce((acc, pr) => {
        if (pr.discount) {
          return Math.round(
            acc +
            pr.price * pr.quantity * (1 - pr.discount / 100)
          );
        } else {
          return acc + pr.price * pr.quantity;
        }
      }, 0) || 0;
    localStorage.setItem("totalPrice", res);
    setTotalPrice(res);
  };

  const state = {
    cart,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    calcPrice,
    setTotalPrice,
    totalPrice,
  };

  return <CartContext.Provider value={state}>{children}</CartContext.Provider>;
};

CartContextProvider.propTypes = {
  children: PropTypes.node,
};

export default CartContextProvider;
