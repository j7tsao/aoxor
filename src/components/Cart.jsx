import React, { useContext, useState } from "react";
import { CartItemsContext } from "./CartItemsContext";
import StickyBar from "./StickyBar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

function Cart() {
  const { cartItems, removeFromCart, clearCart } = useContext(CartItemsContext);

  const [name, setName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  function ListItems() {
    return (
      <>
        <div className="cart">
          <span className="items-list">List of Items for {name}:</span>
          <div className="listItems-container">
            {cartItems.map((item) => (
              <div className="cart-row" key={item.index}>
                <img className="thumbnail" src={item.url} alt="thumbnail" />
                <span className="title">{item.title}</span>
                <span className="color">{item.color}</span>
                <span className="size">{item.size}</span>
                <span className="price">${item.price}</span>
                <button className="remove-button" onClick={() => removeFromCart(item)}>Remove</button>
              </div>
            ))}
          </div>
          <button className="clear-button" onClick={clearCart}>
            Clear Cart &nbsp;&nbsp;<FontAwesomeIcon icon={faTrashCan} />
          </button>
        </div>
      </>
    );
  }

  return (
    <>
      <StickyBar />
      {!isSubmitted && (
        <div className="form4name">
          <form className="label-container" onSubmit={handleSubmit}>
            <label>
              <p>請輸入你的名字</p>
              <p>Please enter your name:</p>
              <input
                className="input"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <input className="submit-button" type="submit" disabled={!name} />
          </form>
        </div>
      )}
      {isSubmitted && <ListItems />}
    </>
  );
}

export default Cart;
