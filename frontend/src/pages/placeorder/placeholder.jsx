import React, { useContext } from 'react'
import './placeholder.css'
import { StoreContext } from '../../context/StoreContext'

const placeholder = () => {
  const {getTotalCartAmount}=useContext(StoreContext)
  return (
    <form className='placeorder'>
      <div className="place-order-left">
        <p>Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder='First Name' />
          <input type="text"placeholder='last Name'  />
        </div>
          <input type="email" placeholder='Email Address' />
          <input type="text"placeholder='Street'  />
          <div className="multi-fields">
          <input type="text" placeholder='City' />
          <input type="text"placeholder='State'  />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Zip code' />
          <input type="text"placeholder='Country'  />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Zip code' />
          <input type="text"placeholder='Country'  />
        </div>
        <input type="text" placeholder='Phone number' />
      </div>
      <div className="place-order-right">

          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Sub Total</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery fee</p>
              <p>$2</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <p>${getTotalCartAmount() + 2}</p>
            </div>
            <hr />
            <div className="checkout"> 
              <button onClick={()=>navigate('/placeholder')}>PROCEED TO PAYMENT</button>
            </div>
          
            </div>
            </div>
    </form>
  )
}

export default placeholder