import Score from "./Score";
import { ProductContext } from "../../contexts/ProductContext";
import { useContext } from "react";

const ProductDetails = () => {
  const productContext = useContext(ProductContext);
  const product = productContext.product;
  
  if (product)
    return (
      <div id="product-description" className="col-12 col-t-7 col-d-6">
        <h1>{product.name}</h1>
        <div className="product-description-line gridrowfull nogutter">
          <div className="col-6 price">
            USD {parseInt(product.price).toFixed(2)}{" "}
          </div>

          <Score score={product.score} />
        </div>

        <div className="product-description-line gridrowfull">
          <div className="col-12">
            <p className="marginnone">Description</p>
            <p className="graymedium marginnone marginbottomthird smallerheight">
              {product.description}
            </p>
          </div>
        </div>

        {product.partnership && (
          <div className="product-description-line gridrowfull">
            <div className="col-6">Partnership</div>
            <div className="col-6 graymedium">{product.partnership}</div>
          </div>
        )}
        {product.inCollab && (
          <div className="product-description-line gridrowfull">
            <div className="col-6">In Collab</div>
            <div className="col-6 graymedium">Adidas</div>
          </div>
        )}
        {product.madeIn && (
          <div className="product-description-line gridrowfull">
            <div className="col-6">Made In</div>
            <div className="col-6 graymedium">{product.madeIn}</div>
          </div>
        )}

        <div className="product-description-line gridrowfull">
          <div className="col-12 fancytext">Size</div>
          <div className="col-6 sizebtns">

            {product.sizes && Object.keys(product.sizes).map((key, index) => 
              <button  type="button">{key}</button>
            )}

          </div>
          <div className="col-6 textright">
            <a href="#" title="Size Guidelines" className="fancytext">
              Size Guidelines
            </a>
          </div>
          <div className="col-12 small graymedium">
            Model is a US size 2-4, wears Matter size 1. 175cm tall.
          </div>
          <div className="col-12 fancytext">Quantity</div>
          <div className="col-6 col-d qty">
            <button type="button" className="btnleft">
              -
            </button>
            {/* <input type="number" value="1" name="qty" /> */}
            <button type="button" className="btnright">
              +
            </button>
          </div>
          <div className="col-6 col-d cart">
            <button type="button">Add to cart</button>
          </div>
          <div className="col-12 col-d textright wishlist marginbottomtwothirds">
            <a href="#" title="Add top wishlist" className="fancytext">
              <i className="icn-heart"></i> Add to wishlist
            </a>
          </div>
        </div>

        <div className="gridrowfull product-care">
          <div className="col-12">
            <ul>
              <li>
                <a href="#" title="Tops">
                  Features
                  <span className="plus">+</span>
                  <span className="minus">-</span>
                </a>
                <div className="graymedium">
                  <p>
                    Nunc a augue velit. Nullam eget velit sit amet orci
                    dignissim iaculis. Quisque dignissim neque in odio laoreet
                    sodales. Phasellus gravida facilisis est. Ut nec metus
                    lobortis, euismod felis eget, ornare erat. Donec gravida
                    diam sed facilisis consequat. Nam tincidunt sem elit, a
                    facilisis nibh maximus vitae. Proin suscipit augue mi, id
                    sollicitudin orci lacinia vitae. Vestibulum est neque,
                    posuere eget fringilla nec, congue ac ipsum. In tellus
                    magna, placerat eu sapien et, faucibus aliquam nulla. Cras
                    volutpat mattis mi, a porttitor odio elementum sed. Vivamus
                    facilisis erat at lacus blandit suscipit. In nec sem
                    gravida, dignissim est nec, hendrerit lacus. Nunc sed
                    convallis massa.
                  </p>
                </div>
              </li>
              <li className="open">
                <a href="#" title="Tops">
                  Fabric
                  <span className="plus">+</span>
                  <span className="minus">-</span>
                </a>
                <div className="graymedium">
                  <p>
                    Nunc a augue velit. Nullam eget velit sit amet orci
                    dignissim iaculis. Quisque dignissim neque in odio laoreet
                    sodales. Phasellus gravida facilisis est. Ut nec metus
                    lobortis, euismod felis eget, ornare erat. Donec gravida
                    diam sed facilisis consequat. Nam tincidunt sem elit, a
                    facilisis nibh maximus vitae. Proin suscipit augue mi, id
                    sollicitudin orci lacinia vitae. Vestibulum est neque,
                    posuere eget fringilla nec, congue ac ipsum. In tellus
                    magna, placerat eu sapien et, faucibus aliquam nulla. Cras
                    volutpat mattis mi, a porttitor odio elementum sed. Vivamus
                    facilisis erat at lacus blandit suscipit. In nec sem
                    gravida, dignissim est nec, hendrerit lacus. Nunc sed
                    convallis massa.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
};

export default ProductDetails;
