import React, { useContext} from 'react'
import './Fooditem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
const Fooditem = ({ id, name, description, price, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
  return (
      <div className='fooditem'>
          <div className="fooditem-image-container">
              <img className='fooditem-image' src={image} alt="" /> 
              {
                  !cartItems[id] ? (
                      <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt="" />
                  ) : (
                      <div className='fooditem-counter'>
                          <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                          <p>{cartItems[id]}</p>
                          <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="" />
                      </div>
                  )
              }
          </div>
          <div className="fooditem-info">
              <div className="fooditem-name-rating">
                  <p>{name}</p>
                  <img src={assets.rating_starts} alt="" />
              </div>
              <p className='fooditem-desc'>
                  {description}
              </p>
              <p className='fooditem-price'>${price}</p>
          </div>
      </div>
  );
}

export default Fooditem;
