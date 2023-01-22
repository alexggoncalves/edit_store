import { Link } from "react-router-dom";
import { ProductContext } from "../../contexts/ProductContext";
import { useContext, useEffect } from "react";

import { useState } from "react";

function Category({ children, title, open }) {
  const [openStatus, setOpen] = useState(open);
  const [active, setActive] = useState(false);

  const productContext = useContext(ProductContext);

  const handleOpen = (e) => {
    e.preventDefault();
    setOpen(!openStatus);
  }

  const setCategory = (e)=> {
    e.preventDefault();
    if(!active){
        productContext.chooseCategory(title.toLowerCase());
        setActive(true);
    }
    else {
        productContext.chooseCategory("0");
        setActive(false);
    }
  }

  if (title)
    return (
      <li className={openStatus ? "open" : undefined}>
        <Link to={`/products`} title={title} >
          <span onClick={setCategory}>{title}</span>
          <i className="icn-chevron-down" onClick={handleOpen}></i>
          <i className="icn-chevron-up" onClick={handleOpen}></i>
        </Link>
        <ul>{children}</ul>
      </li>
    );
}

export default Category;
