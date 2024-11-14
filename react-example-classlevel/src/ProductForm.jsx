import React, { useRef, useState, useEffect } from 'react';
import { saveProduct, getProducts } from './Productservice'

function ProductForm() {
  // useRef for each form input field 
  const nameRef = useRef();
  const priceRef = useRef();
  const quantityRef = useRef();
  const categoryRef = useRef();
  const imageRef = useRef();

  const [products, setProducts] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name: nameRef.current.value,
      price: priceRef.current.value,
      quantity: quantityRef.current.value,
      category: categoryRef.current.value,
      image: imageRef.current.files[0].name
    };

    await saveProduct(formData);
    fetchProducts();
  };

  const fetchProducts = async () => {
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
      alert("Error fetching products.");
    }
  };

  // useEffect(() => {
  //   fetchProducts();
  // }, []);

  return (
    <>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <label>Product Name:</label>
        <input type="text" ref={nameRef} required />
        <br /><br />

        <label>Product Price:</label>
        <input type="text" ref={priceRef} required />
        <br /><br />

        <label>Product Quantity:</label>
        <input type="text" ref={quantityRef} required />
        <br /><br />

        <label>Product Category:</label>
        <input type="text" ref={categoryRef} required />
        <br /><br />

        <label>Product Image:</label>
        <input type="file" ref={imageRef} required />
        <br /><br />

        <button type="submit">Submit</button>
      </form>

      <button onClick={fetchProducts}>Fetch Products</button>

      <h2>Product List</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Category</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td>{product.category}</td>
              <td>{product.image}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ProductForm;