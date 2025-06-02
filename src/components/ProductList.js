import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://alpha-backend-ztym.onrender.com/api/products")
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Produktliste</h2>
      <ul>
        {products.map(p => (
          <li key={p._id}>{p.name} ({p.unit})</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
