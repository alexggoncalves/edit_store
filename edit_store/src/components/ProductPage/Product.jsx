import Thumbnail from "./Thumbnail";
import ProductDetails from "./ProductDetails";
import { ProductContext } from "../../contexts/ProductContext";
import { useContext } from "react";

const Product = (props) => {
  const productContext = useContext(ProductContext);
    const product = productContext.product;
    
    return (<>
        {product && (
        <div className="gridrow" id="product">
          
          <div id="thumbs" className="col-3 col-t-1">
            <Thumbnail image={product.image}/>

          </div>

          <div id="bigimg" className="col-9 col-t-4 col-d-5">
            <img
              className="imgfit"
              //srcSet="imgs/products/product23.jpg 720w, imgs/products/medium/product23.jpg 640w"
              sizes="(min-width: 1200px) 720px, 640px"
              src={product.image}
            />
            <div className="share margintopfull">
              Share this product
              <a href="#" title="Facebook">
                <i className="icn-facebook"></i>
              </a>
              <a href="#" title="Twitter">
                <i className="icn-twitter"></i>
              </a>
              <a href="#" title="Pinteres">
                <i className="icn-pinterest"></i>
              </a>
            </div>
          </div>

          <ProductDetails />

        </div>
      )}
      </>
    )
}

export default Product;