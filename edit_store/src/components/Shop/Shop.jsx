import Filters from "./Filters"
import ProductList from "./ProductList"
import ProductListHeader from "./ProductListHeader"
import SortBar from "./SortBar"
import { useParams } from "react-router-dom"

import { ProductContext } from "../../contexts/ProductContext";
import { useContext,useEffect } from "react";

function Shop() {
  const productContext = useContext(ProductContext);
  const { category } = useParams();
  
  
  productContext.filterByCategory(category);

  return (
    <>
      <ProductListHeader/>
      <SortBar/>
      

      <div className="gridrow">
        <Filters/>
        <ProductList/>
      </div>
    </>
  )
}

export default Shop