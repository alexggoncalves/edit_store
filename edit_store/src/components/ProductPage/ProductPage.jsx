import BreadCrumbs from "./BreadCrumbs";

import {  useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import Product from "./Product";
import Looks from "../HomePage/Looks/Looks";
import RelatedProducts from "./RelatedProducts";
import ProductReviews from "./ProductReviews";
import Press from "../HomePage/Press/Press"

import { ProductContext } from "../../contexts/ProductContext";
import { useContext } from "react";

export function ProductPage() {
  const productContext = useContext(ProductContext);
  const { id } = useParams();
  
  productContext.fetchProduct(id);

  return (
    <div className="page_container">
      <BreadCrumbs />
      <Product/>
      
      <div className="separador">
      </div>

      <div className="gridrow">
        <div className="col-12 col-t-10 col-d-8 offset-t-1 offset-d-2 graymedium marginbottomfull">
          Nunc a augue velit. Nullam eget velit sit amet orci dignissim iaculis.
          Quisque dignissim neque in odio laoreet sodales. Phasellus gravida
          facilisis est. Ut nec metus lobortis, euismod felis eget, ornare erat.
          Donec gravida diam sed facilisis consequat.
        </div>
        <div className="col-12 col-t-10 col-d-8 offset-t-1 offset-d-2 marginbottomfull">
          Nam tincidunt sem elit, a facilisis nibh maximus vitae. Proin suscipit
          augue mi, id sollicitudin orci lacinia vitae. Vestibulum est neque,
          posuere eget fringilla nec, congue ac ipsum. In tellus magna, placerat
          eu sapien et, faucibus aliquam nulla. Cras volutpat mattis mi, a
          porttitor odio elementum sed. Vivamus facilisis erat at lacus blandit
          suscipit. In nec sem gravida, dignissim est nec, hendrerit lacus. Nunc
          sed convallis massa.
        </div>
      </div>
      
      <Press>

      </Press>

      <div className="bg-graylight paddingverticaldouble marginbottomfull">
        <div className="gridrow">
          <div className="col-12 col-t-10 col-d-8 offset-t-1 offset-d-2">
            <p>
              Nunc a augue velit. Nullam eget velit sit amet orci dignissim
              iaculis. Quisque dignissim neque in odio laoreet sodales.
              Phasellus gravida facilisis est. Ut nec metus lobortis, euismod
              felis eget, ornare erat. Donec gravida diam sed facilisis
              consequat.
            </p>
          </div>
        </div>
      </div>

      <Looks />
      <ProductReviews />   
      <RelatedProducts/>
      
    </div>
  );
}
