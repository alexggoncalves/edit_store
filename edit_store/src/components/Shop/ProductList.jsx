import { ProductContext } from "../../contexts/ProductContext";
import { useContext, useEffect } from "react";
import ProductCard from "../shared/ProductCard";
import { useParams } from "react-router-dom";

import { v4 as uuidv4 } from 'uuid';

function ProductList() {
  const productContext = useContext(ProductContext);
  productContext.fetchProducts(25);
  const { category } = useParams();
  


  if (productContext.list)
    return (
      <div
        id="mainproductlist"
        className="product-list col-12 col-t-8 col-d-9 gridrowfull"
      >
        <div className="central-link-light marginbottomdouble">
          {productContext.list.map((product) => (
            <ProductCard product={product} key={uuidv4()} / >
          ))}

          <a href="#" title="Load More">
            <i className="icn-reload"></i> Load More
          </a>
        </div>
      </div>
    );
}

export default ProductList