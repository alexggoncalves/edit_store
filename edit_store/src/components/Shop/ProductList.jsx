import { ProductContext } from "../../contexts/ProductContext";
import { useContext } from "react";
import ProductCard from "../shared/ProductCard";

import { v4 as uuidv4 } from 'uuid';

function ProductList() {
  const productContext = useContext(ProductContext);
  productContext.fetchProducts(20);

  if (productContext.products)
    return (
      <div
        id="mainproductlist"
        className="product-list col-12 col-t-8 col-d-9 gridrowfull"
      >
        <div className="central-link-light marginbottomdouble">
          {productContext.products.map((product) => (
            <ProductCard product={product} key={uuidv4()} / >
          ))}

          <a href="#" title="Load More">
            <i className="icn-reload"></i> Load More
          </a>
        </div>
      </div>
    );
}

export default ProductList;
