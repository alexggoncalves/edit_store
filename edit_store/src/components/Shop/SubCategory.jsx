import { Link } from "react-router-dom";
import { ProductContext } from "../../contexts/ProductContext";
import { useContext,useState } from "react";

function SubCategory({ title }) {
  const productContext = useContext(ProductContext);
  const [active, setActive] = useState(false);

  const setCategory = (e)=> {
    e.preventDefault();
    if(!active){
        productContext.chooseCategory(title.toLowerCase());
        setActive(true);
    }
    else {
        productContext.chooseCategory("0");
        setActive(false)
    }
  }

  if (title)
    return (
      <li>
        <Link to={`/products`} title={title} onClick={setCategory}>
          <i className="icn-chevron-right"></i> {title}
        </Link>
      </li>
    );
}

export default SubCategory;
