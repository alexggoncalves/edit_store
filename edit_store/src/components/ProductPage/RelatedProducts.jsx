import { useEffect, useState } from "react";
import ProductCard from "../shared/ProductCard";

const RelatedProducts = (props) => {
  const [products, setProducts] = useState([]);
  const AMOUNT = 4;


  useEffect(() => {
    fetch(`https://foxcoding.net/api/getProductsList`)
    .then((res) => res.json())
    .then((data) => {
      const allProducts = data.data.products
    });
  },[])

  if (products.length > 0)
  {console.log(products)}
    return (
      <>
        <h2 className="textcenter marginverticalfull">Related Products</h2>
        <div className="gridrow marginbottomdouble product-list">
           {products.map((product,index)=>
           <ProductCard key={index} product={product}/>
          )}
        </div>
      </>
    );
};

export default RelatedProducts;
