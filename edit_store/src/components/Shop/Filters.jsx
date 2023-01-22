import { ProductContext } from "../../contexts/ProductContext";
import { useContext } from "react";

import { Link } from "react-router-dom";
import Category from "./Category";
import SubCategory from "./SubCategory";

function Filters() {
  const productContext = useContext(ProductContext);

  return (
    <div id="filters" className="col-12 col-t-4 col-d-3">
      <p className="fancytext">Filters</p>
      <ul className="categories">
        <Category open={false} title="Tops">
          <SubCategory title="Jackets" />
          <SubCategory title="Sweaters" />
          <SubCategory title="Shirts" />
          <SubCategory title="Coats" />
          <SubCategory title="Polos" />
        </Category>
        <Category open={false} title="Bottoms">
          <SubCategory title="Shorts" />
          <SubCategory title="Pants" />
          <SubCategory title="Skirts" />
        </Category>
        <Category open={false} title="Bags">
          <SubCategory title="Travel" />
          <SubCategory title="Work" />
        </Category>
        <Category open={false} title="Shoes">
          <SubCategory title="Sneakers" />
          <SubCategory title="Boots" />
          <SubCategory title="Flip-Flops" />
        </Category>
      </ul>

      <div className="sizes">
        <p className="fancytext">- Sizes</p>
        <div className="sizebtns marginverticalfourth">
          <button type="button">1</button>
          <button type="button">2</button>
          <button type="button">3</button>
          <button type="button">4</button>
        </div>
        <Link to="#" title="View Size Guide" className="fancytext">
          See our sizing guide
        </Link>
      </div>
    </div>
  );
}

export default Filters;
