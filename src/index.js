import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, createHashRouter, RouterProvider } from "react-router-dom";
import MenProducts from "./components/MenProducts";
import WomenProducts from "./components/WomenProducts";
import Cart from "./components/Cart";
import { CartProvider } from "./components/CartItemsContext";
import Home from "./components/Home";

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "men",
    element: <MenProducts />,
  },
  {
    path: "women",
    element: <WomenProducts />,
  },
  {
    path: "cart",
    element: <Cart />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
