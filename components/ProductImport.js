import React, { useState } from 'react';
import axios from 'axios';
const ProductImport = () => {
  const [jsonText, setJsonText] = useState('');
  const [message, setMessage] = useState('');
  const handleImport = async () => {
    try {
      const products = JSON.parse(jsonText);
      await axios.post("https://alpha-backend-d0r9.onrender.com/api/products/import", products);
      setMessage("Import erfolgreich ✅");
    } catch (err) {
      console.error(err);
      setMessage("❌ Fehler beim Import – ist das JSON korrekt?");
    }
  };
  return (
    <div>
      <h2>Produkte importieren</h2>
      <textarea
        rows="10"
        cols="60"
        value={jsonText}
        onChange={(e) => setJsonText(e.target.value)}
        placeholder='Füge hier dein JSON ein, z. B. [{"product_id":"001","name":"Joghurt","unit":"Stk"}]'
      ></textarea>
      <br />
      <button onClick={handleImport}>Importieren</button>
      <p>{message}</p>
    </div>
  );
};
export default ProductImport;
