import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import AdminProducts from "./pages/AdminProducts";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

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
        <Route
          path="/admin"
          element={
            <>
              <Navbar />
              <AdminProducts />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
