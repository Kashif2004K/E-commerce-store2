import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import AdminProducts from "./pages/AdminProducts";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
            </>
          }
        />
        <Route
          path="/products"
          element={
            <>
              <Navbar />
              <Products />
            </>
          }
        />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route
          path="/admin"
          element={
            <>
              <Navbar />
              <AdminProducts />
            </>
          }
        />
        <Route
          path="/details"
          element={
            <>
              <Navbar />
              <ProductDetails />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
