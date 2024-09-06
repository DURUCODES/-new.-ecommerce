import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./componets/Navbar";
import Home from "./pages/Home";
import Footer from "./componets/Footer";
import InfoSection from "./componets/InfoSection";
import Category from "./componets/Category";
import ShopCard from "./componets/ShopCard";
import CartPage from "./componets/CartPage";
import CheckoutPage from "./componets/CheckoutPage";
import { useState } from "react";
import OrderSummary from "./componets/OrderSummary";
import ProductDetails from "./componets/ProductDetails";
import FilterPage from "./componets/FilterPage";
function App() {
  const [order, setOrder] = useState(null);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<ShopCard />} />
        <Route path="cart" element={<CartPage />} />
        <Route
          path="/checkout"
          element={<CheckoutPage setOrder={setOrder} />}
        />
        <Route
          path="/order-confirmation"
          element={<OrderSummary order={order} />}
        />
        <Route path="/filter-data" element={<FilterPage />} />
        {/*  <Route path="/product:id" element={<ProductDetails />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
