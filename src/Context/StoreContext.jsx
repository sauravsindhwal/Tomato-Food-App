import { createContext, useState } from "react";
import { food_list } from "../assets/food del assets/frontend_assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});

    // Add item to the cart
    const addToCart = (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
        } else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        }
    };

    // Remove item from the cart
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
   
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0; // Use let if the variable will change
        for (let itemId in cartItems) {
          const item = food_list.find((item) => item._id === itemId);
          if (item) {
            totalAmount += item.price * cartItems[itemId]; // Calculate total amount
          }
        }
        return totalAmount;
      };
      
    const contextValue = {
        food_list,
        cartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
