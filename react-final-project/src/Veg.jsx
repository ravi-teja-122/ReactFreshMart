import { useDispatch, useSelector } from "react-redux";
import { addToCart, fetchProducts } from "./Store"; // make sure fetchProducts is imported
import { useEffect } from "react";

function Veg() {
  const dispatch = useDispatch();
  const vegProducts = useSelector(state => state.products.veg);

  const items = vegProducts.map((product, index) => (
    <div key={index} className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <h3>{product.name}</h3>
        <p>${product.price}</p>
        <button className="add-to-cart-btn" onClick={() => dispatch(addToCart(product))}>
          Add to Cart
        </button>
      </div>
    </div>
  ));

   // Fetch products when the component mounts
   useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <h1 className="section-title">Veg Products</h1>
      <div className="product-list">
        {items}
      </div>
    </>
  );
}

export default Veg;
