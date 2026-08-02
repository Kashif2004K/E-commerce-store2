import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import AdminProducts from "./pages/AdminProducts";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/admin" element={<AdminProducts />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
