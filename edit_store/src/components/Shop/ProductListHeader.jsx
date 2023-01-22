import { ProductContext } from "../../contexts/ProductContext";
import { useContext } from "react";
import categories from "../shared/categories.json"

function ProductListHeader() {
    const productContext = useContext(ProductContext);

    const firstLetterUpper = (string) => {
        return string.slice(0,1).toUpperCase() + string.slice(1,string.length)
    }
    
  return (
    <div id="headerproductlist">
      <div className="textoverlay">
        <h1>
            {firstLetterUpper(categories[productContext.category])}
        </h1>
        <p>These awesome products</p>
      </div>

    </div>
  );
}

export default ProductListHeader;
