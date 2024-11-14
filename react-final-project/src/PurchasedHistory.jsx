import React from 'react';
import { useSelector } from 'react-redux';


export default function PurchaseHistory() {
  const purchaseHistory = useSelector(state => state.purchaseHistory);

  return (
    <div className="purchase-history-container">
      <h2 className="title">Purchase History</h2>
      {purchaseHistory.length === 0 ? (
        <img src='purchaseHistory.jpg'></img>
        // <p>No purchase history available.</p>
      ) : (
        <div className="purchase-cards">
          {purchaseHistory.map((purchase, index) => (
            <div key={index} className="purchase-card">
              <div className="purchase-card-header">
                <h3 className="purchase-date">Date: {purchase.date}</h3>
                <p className="purchase-total-amount">Total Amount: ${purchase.totalAmount?.toFixed(2)}</p>
              </div>
              {purchase.items && purchase.items.length > 0 ? (
                <ul className="purchase-items-list">
                  {purchase.items.map((item, index) => (
                    <li key={index} className="purchase-item">
                      <span>{item.name}</span> - ${item.price.toFixed(2)} x {item.quantity}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No items in this purchase.</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
