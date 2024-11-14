import { useDispatch, useSelector } from "react-redux";
import { addPurchase, clearCart, decrement, increment, removeFromCart } from "./Store";
import { useState } from "react";


function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const [discountedAmount, setDiscountedAmount] = useState(0);
  const [couponCode, setCouponCode] = useState('');
  const [couponDiscount, setCouponDiscount] = useState(0);

  const handleApplyCoupon = () => {
    switch (couponCode) {
      case 'TEJA10': setCouponDiscount(10); break;
      case 'TEJA20': setCouponDiscount(20); break;
      case 'TEJA30': setCouponDiscount(30); break;
      default: setCouponDiscount(0);
    }
  };

  const handleDiscount = (disValue) => {
    setDiscountedAmount(disValue);
  };

  const calculateTotal = () => {
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const discount = total * (discountedAmount / 100);
    const netAmount = total - discount;
    const discountCoupon = total * (couponDiscount / 100);
    const finalAmount = total - discount - discountCoupon;

    return {
      total: parseFloat(total.toFixed(2)),
      discount: parseFloat(discount.toFixed(2)),
      netAmount: parseFloat(netAmount.toFixed(2)),
      finalAmount: parseFloat(finalAmount.toFixed(2)),
    };
  };

  const { total, discount, netAmount, finalAmount } = calculateTotal();

  const all = cart.map((item, index) => (
    <div key={index} className="cart-item-card">
      <div className="item-info">
        <span>{item.name}</span>
        <span>Price: ${item.price}</span>
        <span>Qty: {item.quantity}</span>
      </div>
      <div className="item-actions">
        <button onClick={() => dispatch(increment(item.name))}>+</button>
        <button onClick={() => dispatch(decrement(item.name))}>-</button>
        <button onClick={() => dispatch(removeFromCart(item.name))}>Remove</button>
      </div>
    </div>
  ));

  const handleHistory = () => {
    const { finalAmount } = calculateTotal();
    const purchase = new Date().toLocaleDateString(); 

    const purchaseHistory = {
        date: purchase,
        items: [...cart],
        totalAmount: Number(finalAmount)
    };

    dispatch(clearCart());
    dispatch(addPurchase(purchaseHistory));
  };

  return (
    <div className="cart-container">
      <h2>{cart.length > 0 ? all : <img src="public/cartEmpty.avif" alt="Cart Empty" />}</h2>
      {cart.length > 0 && (
        <div className="cart-summary">
          <h3>Total: ${total}</h3>
          <div className="discount-buttons">
            <button onClick={() => handleDiscount(10)}>Apply 10% Discount</button>
            <button onClick={() => handleDiscount(20)}>Apply 20% Discount</button>
            <button onClick={() => handleDiscount(30)}>Apply 30% Discount</button>
          </div>
          <input
            type="text"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            placeholder="Enter Coupon Code"
          />
          <button onClick={handleApplyCoupon}>Apply Coupon</button>
          <div className="summary-details">
            <h3>Discount Amount: ${discount}</h3>
            <h3>Net Amount: ${netAmount}</h3>
            <h3>Final Amount to Pay: ${finalAmount}</h3>
          </div>
          <button onClick={handleHistory} className="purchase-btn">Purchase</button>
        </div>
      )}
    </div>
  );
}

export default Cart;
