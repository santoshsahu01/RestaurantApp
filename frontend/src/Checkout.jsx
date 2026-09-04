import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Checkout.css";

function Checkout({ cart = [], setCart }) {
const [orderPlaced, setOrderPlaced] = useState(false);

const total = cart.reduce(
(sum, item) => sum + item.price,
0
);

const removeItem = (id) => {
setCart(cart.filter((item) => item.id !== id));
};

const handleCheckout = () => {
if (cart.length === 0) {
alert("Your cart is empty");
return;
}


setOrderPlaced(true);
setCart([]);


};

if (orderPlaced) {
return ( <div className="order-success"> <div className="success-icon">✓</div>

    <h1>Order Placed!</h1>

    <p>Your food order has been placed successfully.</p>

    <Link to="/">
      <button>Back to Menu</button>
    </Link>
  </div>
);

}

return ( <div className="checkout-page">

  <div className="checkout-header">
    <h1>Checkout</h1>
    <p>Review your order before checkout</p>
  </div>

  <div className="checkout-container">

    <div className="order-items">

      <h2>Your Items</h2>

      {cart.length === 0 ? (

        <div className="empty-cart">
          <p>Your cart is empty 🛒</p>

          <Link to="/">
            <button>Go to Menu</button>
          </Link>
        </div>

      ) : (

        cart.map((item, index) => (

          <div className="checkout-item" key={`${item.id}-${index}`}>

            <img
              src={item.image}
              alt={item.name}
            />

            <div className="item-info">

              <h3>{item.name}</h3>

              <p>{item.category}</p>

              <strong>₹{item.price}</strong>

            </div>

            <button
              className="remove-btn"
              onClick={() => removeItem(item.id)}
            >
              ✕
            </button>

          </div>

        ))

      )}

    </div>


    <div className="order-summary">

      <h2>Order Summary</h2>

      <div className="summary-row">
        <span>Items</span>
        <span>{cart.length}</span>
      </div>

      <div className="summary-row">
        <span>Subtotal</span>
        <span>₹{total}</span>
      </div>

      <div className="summary-row">
        <span>Delivery</span>
        <span>₹0</span>
      </div>

      <hr />

      <div className="total-row">
        <span>Total</span>
        <strong>₹{total}</strong>
      </div>

      <button
        className="checkout-btn"
        onClick={handleCheckout}
        disabled={cart.length === 0}
      >
        Checkout ₹{total}
      </button>

    </div>

  </div>

</div>


);
}

export default Checkout;
