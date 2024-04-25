import {  useContext } from "react"
import { CartContext } from "../../context/CartContext"
import PropTypes from "prop-types";

const CartProductCard = ({name ,quantity , description , price , discount , image , filter , id}) => {
  const {increaseQuantity , decreaseQuantity  } = useContext(CartContext);

  return (

    <div className="cart">
        <img className="cart-img" src={image} alt={name} />
        {filter ? <span className="filter">{filter}</span> : <></>}
        <div className="cart-infos">
            <div className="cart-infos__top">
                <h4>{name}</h4>
                <p>{description}</p>
            </div>
            <div className="cart-infos__bottom">
                <div className="button-group">
                    <button className="decrease" onClick={() => decreaseQuantity(id)}>-</button>
                    <button className="cart-quantity">{quantity}</button>
                    <button className="increase" onClick={() => increaseQuantity(id)}>+</button>
                </div>
                <h3>{discount ? Math.round(price * (1 - discount/100)) : price} ₽</h3>
            </div>
            <h1 className="total-price">
                
            </h1>
        </div>
    </div>
  )
}

CartProductCard.propTypes = {
    name: PropTypes.string , 
    description:PropTypes.string ,
    price:PropTypes.string || PropTypes.number ,
    discount:PropTypes.number ,
    image:PropTypes.string ,
    filter:PropTypes.string ,
    id:PropTypes.string ,
    quantity:PropTypes.number ,
}

export default CartProductCard