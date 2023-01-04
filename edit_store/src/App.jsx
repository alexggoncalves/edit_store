import "./App.css";
import { Route, Routes } from "react-router-dom";

//PAGES
import { HomePage } from "./components/HomePage/HomePage";
import { ProductPage } from "./components/ProductPage/ProductPage"
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import PromoBar from "./components/PromoBar/PromoBar/Promobar";

function App() {
  return (
    <>
      <PromoBar text="Free shipping for orders above USD 150"/>
      <Header />
      <main >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/1" element={<ProductPage id={1}/>} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
