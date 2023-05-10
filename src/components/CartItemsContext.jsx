import { createContext, useState, useEffect } from "react";

export const CartItemsContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (newItem) => {
    const updatedCartItems = [...cartItems, newItem];
    setCartItems(updatedCartItems);
  }

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems"));
    if (storedCartItems) {
      setCartItems(storedCartItems);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (item) => {
    setCartItems(cartItems.filter((cartItem) => cartItem.title !== item.title));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartItemsContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart, handleAddToCart }}
    >
      {children}
    </CartItemsContext.Provider>
  );
};
