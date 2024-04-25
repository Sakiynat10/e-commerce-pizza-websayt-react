import PropTypes from "prop-types";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { LanguageContext } from "../../App";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ProductCard = ({
  id,
  image,
  name,
  description,
  discount,
  price,
  filter,
}) => {
  const { addToCart, cart, increaseQuantity, decreaseQuantity } =
    useContext(CartContext);
  const productInCart = cart.find((pr) => pr.id === id);
  const { languageObj: t } = useContext(LanguageContext);

  return (
    <div className="category-card" key={id}>
      <div className="card-img">
        <LazyLoadImage effect="blur" src={image} />
      </div>
      <div className="card-info">
        <h3 className="product-name">{name}</h3>
        <p>{description}</p>
        <div className="add-cart">
          {productInCart ? (
            <div className="button-group">
              <button className="decrease" onClick={() => decreaseQuantity(id)}>
                -
              </button>
              <button className="cart-quantity">
                {productInCart.quantity}
              </button>
              <button className="increase" onClick={() => increaseQuantity(id)}>
                +
              </button>
            </div>
          ) : (
            <button onClick={() => addToCart(id)}>{t.choose}</button>
          )}
          <h3>
            {discount ? Math.round(price * (1 - discount / 100)) : price} ₽
          </h3>
        </div>
      </div>
      {filter ? <span className="filter">{filter}</span> : <></>}
    </div>
  );
};

ProductCard.propTypes = {
  id: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  discount: PropTypes.number,
  price: PropTypes.string || PropTypes.number,
  filter: PropTypes.string,
};

export default ProductCard;
