import React, { useState } from "react";

function AddTransaction({ onAdd }) {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    product_name: "",
    product_price: "",
    total_products: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({
      ...formData,
      product_price: parseFloat(formData.product_price),
      total_products: parseInt(formData.total_products),
    });
    setFormData({ date: "", time: "", product_name: "", product_price: "", total_products: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="date" name="date" value={formData.date} onChange={handleChange} required />
      <input type="time" name="time" value={formData.time} onChange={handleChange} required />
      <input type="text" name="product_name" placeholder="Product Name" value={formData.product_name} onChange={handleChange} required />
      <input type="number" name="product_price" placeholder="Product Price" value={formData.product_price} onChange={handleChange} required />
      <input type="number" name="total_products" placeholder="Total Products" value={formData.total_products} onChange={handleChange} required />
      <button type="submit">Add Transaction</button>
    </form>
  );
}

export default AddTransaction;
