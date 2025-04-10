import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../components/Cart/CartContext';
import '../styles/Cart.css';

const Cart = () => {
  const navigate = useNavigate();
  const { 
    cartItems, 
    removeFromCart, 
    updateQuantity, 
    clearCart, 
    getTotalPrice 
  } = useCart();

  const handleQuantityChange = (itemId, newQuantity) => {
    updateQuantity(itemId, parseInt(newQuantity));
  };

  const handleCheckout = () => {
    // In a real application, this would navigate to a checkout page
    alert('Proceeding to checkout...');
    // navigate('/checkout');
  };

  return (
    <div className="cart-container">
      <h1 className="cart-title">Your Shopping Cart</h1>
      
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty</p>
          <button className="continue-shopping" onClick={() => navigate('/paintings')}>
            Continue Shopping
          </button>
        </div>
      ) : (
        <>
          <div className="cart-header">
            <div className="header-item product-col">Product</div>
            <div className="header-item price-col">Price</div>
            <div className="header-item quantity-col">Quantity</div>
            <div className="header-item total-col">Total</div>
            <div className="header-item actions-col">Actions</div>
          </div>
          
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="product-col">
                  <img src={item.image} alt={item.title} className="cart-item-image" />
                  <div className="cart-item-details">
                    <h3>{item.title}</h3>
                    <p>by {item.artist}</p>
                  </div>
                </div>
                
                <div className="price-col">
                  <p>Rs. {item.price.toFixed(2)}</p>
                </div>
                
                <div className="quantity-col">
                  <div className="quantity-control">
                    <button 
                      className="quantity-btn" 
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <input 
                      type="number" 
                      min="1" 
                      value={item.quantity} 
                      onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                      className="quantity-input"
                    />
                    <button 
                      className="quantity-btn" 
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
                
                <div className="total-col">
                  <p>Rs. {(item.price * item.quantity).toFixed(2)}</p>
                </div>
                
                <div className="actions-col">
                  <button 
                    className="remove-item-btn"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="cart-summary">
            <div className="summary-row">
              <span>Subtotal:</span>
              <span>Rs. {getTotalPrice().toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Shipping:</span>
              <span>{getTotalPrice() > 200 ? 'Free' : 'Rs. 50.00'}</span>
            </div>
            <div className="summary-row total">
              <span>Total:</span>
              <span>Rs. {(getTotalPrice() + (getTotalPrice() > 200 ? 0 : 50)).toFixed(2)}</span>
            </div>
            
            <div className="cart-actions">
              <button className="clear-cart-btn" onClick={clearCart}>
                Clear Cart
              </button>
              <button className="continue-shopping" onClick={() => navigate('/paintings')}>
                Continue Shopping
              </button>
              <button className="checkout-btn" onClick={handleCheckout}>
                Proceed to Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;