import React from 'react';
import ProductList from './components/ProductList';
import ProductImport from './components/ProductImport';
function App() {
  return (
    <div className="App">
      <h1>Alpha Admin Panel</h1>
      <ProductImport />
      <hr />
      <ProductList />
    </div>
  );
}
export default App;
import React from 'react';
import ProductList from './components/ProductList';
import ProductImport from './components/ProductImport';
import ProductImportExcel from './components/ProductImportExcel';
function App() {
  return (
    <div className="App">
      <h1>Alpha Admin Panel</h1>
      <ProductImportExcel />
      <hr />
      <ProductImport />
      <hr />
      <ProductList />
    </div>
  );
}
export default App;
