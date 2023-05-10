import "./App.css";
// import { useState } from "react";
// import MenProducts from "./components/MenProducts";
// import WomenProducts from "./components/WomenProducts";
// import CartItemsContext from "./components/CartItemsContext";
// import Cart from "./components/Cart";
// import StickyBar from "./components/StickyBar";
import { CartProvider } from "./components/CartItemsContext";
// import StickyBar from "./components/StickyBar";
// import Cart from "./components/Cart";
import Home from "./components/Home";
// import Home from "./components/Home";
// import MenProducts from "./components/MenProducts";

// export const CartItemsContext = createContext();

function App() {

  return (
    <>
      <CartProvider>
        <Home />
      </CartProvider>
    </>
  );
}

export default App;
