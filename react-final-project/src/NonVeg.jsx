import { useDispatch, useSelector } from "react-redux";
import { addToCart, fetchProducts } from "./Store";
import { useEffect } from "react";

function NonVeg() {
  const nonVegProducts = useSelector(state => state.products.nonVeg) || [];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const items = nonVegProducts.map((product, index) => (
    <li key={index} className="product-card">
      <img
        src={product.image}
        alt={product.name}
        className="product-image"
      />
      <div className="product-info">
        <h3>{product.name}</h3>
        <p>${product.price}</p>
        <button onClick={() => dispatch(addToCart(product))}>Add to cart</button>
      </div>
    </li>
  ));

  return (
    <>
      <h1>Non-Veg Products</h1>
      <ul className="product-list">
        {items}
      </ul>
    </>
  );
}

export default NonVeg;
