import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Preloader from "./components/Preloader";
import RequestDrawer from "./components/RequestDrawer";
import ScrollManager from "./components/ScrollManager";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import ProductListing from "./pages/ProductListing";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="bg-ink font-sans">
      <AnimatePresence>
        {loading && <Preloader onDone={() => setLoading(false)} />}
      </AnimatePresence>

      <ScrollManager />
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/assortiment" element={<ProductListing />} />
          <Route path="/assortiment/:categorySlug" element={<ProductListing />} />
          <Route path="/product/:slug" element={<ProductDetail />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
      <RequestDrawer />
    </div>
  );
}
