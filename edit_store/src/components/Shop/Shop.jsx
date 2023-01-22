import Filters from "./Filters"
import ProductList from "./ProductList"
import ProductListHeader from "./ProductListHeader"
import SortBar from "./SortBar"
import { useEffect } from "react";

function Shop() {
  useEffect(()=>{
  window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
},[])
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