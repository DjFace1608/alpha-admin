import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import axios from 'axios';
const ProductImportExcel = () => {
  const [message, setMessage] = useState('');
  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = async (evt) => {
      const data = evt.target.result;
      const workbook = XLSX.read(data, { type: 'binary' });
      const sheet = workbook.Sheets[workbook.SheetNames[0]];
      const json = XLSX.utils.sheet_to_json(sheet);
      try {
        await axios.post("https://alpha-backend-ztym.onrender.com/api/products/import", json);
        setMessage("Excel-Import erfolgreich ✅");
      } catch (err) {
        console.error(err);
        setMessage("❌ Fehler beim Import");
      }
    };
    reader.readAsBinaryString(file);
  };
  return (
    <div>
      <h2>Produkte aus Excel importieren</h2>
      <input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} />
      <p>{message}</p>
    </div>
  );
};
export default ProductImportExcel;
