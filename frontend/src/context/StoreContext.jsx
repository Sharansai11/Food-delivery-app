import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
export const StoreContext = createContext(null);

const StroreContextProvider = (props) => {


   const [cartItems, setCartItems] = useState({});
const addToCart = (itemId) => {
if (!cartItems [itemId]) {
setCartItems((prev)=>({...prev, [itemId]:1}))
}
else {
setCartItems((prev)=>({...prev, [itemId]: prev [itemId]+1}))
}
}
const removeFromCart = (itemId) => {
setCartItems((prev)=>({...prev, [itemId]: prev [itemId]-1}))
}
const getTotalCartAmount = () => {
  let totalAmount = 0;
  for (const itemId in cartItems) {
    if (cartItems[itemId] > 0) {
      const item = food_list.find(item => item._id === itemId);
      if (item) {
        totalAmount += item.price * cartItems[itemId];
      }
    }
  }
  return totalAmount;
}

    useEffect(()=>{
      console.log(cartItems);
    },[cartItems]);

      const contextValue = {
        food_list,
      cartItems,
      removeFromCart,
      addToCart,
      getTotalCartAmount
      };
    
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );

}
export default StroreContextProvider;