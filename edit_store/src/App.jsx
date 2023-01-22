import { Route, Routes } from "react-router-dom";

//PAGES
import { HomePage } from "./components/HomePage/HomePage";
import { ProductPage } from "./components/ProductPage/ProductPage";
import Shop from "./components/Shop/Shop";

import Header from "./components/shared/Header/Header";
import Footer from "./components/shared/Footer/Footer";
import PromoBar from "./components/shared/PromoBar/Promobar";

import { ProductProvider } from "./contexts/ProductContext";
import { useEffect } from "react";

const App = () => {

  
  return (
    <ProductProvider>
        <PromoBar text="Free shipping for orders above USD 150" />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/products/" element={<Shop />} />
          </Routes>
        </main>
        <Footer />
    </ProductProvider>
  );
};

export default App;
