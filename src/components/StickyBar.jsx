import React, { useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CartItemsContext } from "./CartItemsContext";
import './../App.css';
import { Link } from "react-router-dom";
import { CartProvider } from "./CartItemsContext";


function StickyBar() {
    const { cartItems } = useContext(CartItemsContext);
    return (
        <CartProvider>
        <div className="sticky-bar">
            <div className="container">
                <div className="home">
                    <Link to="/" style={{ textDecoration: 'none'}}><h3>HOME</h3></Link>
                </div>
                <div className="men">
                    <Link to="/men" style={{ textDecoration: 'none' }}><h3>MEN</h3></Link>
                </div>
                <div className="women">
                    <Link to="/women" style={{ textDecoration: 'none' }}><h3>WOMEN</h3></Link>
                </div>
                <div className="cart-icon-container">
                    <Link to="/cart" style={{ color: "black" }}><FontAwesomeIcon icon={faShoppingCart} /></Link>
                    <span className={cartItems.length ? "item-count-container-active": "item-count-container-non"}>
                        <p>
                            {cartItems.length ? cartItems.length: ''}
                        </p>
                    </span>
                </div>
            </div>
        </div>
        </CartProvider>
    )
}

export default StickyBar;