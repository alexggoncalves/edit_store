import { Link } from "react-router-dom";

import { useState } from "react";

function Category({ children, title, open }) {
  const [openStatus, setOpen] = useState(open);

  const handleOpen = (e) => {
    e.preventDefault();
    setOpen(!openStatus);
  }

  if (title)
    return (
      <li className={openStatus ? "open" : undefined}>
        <Link to={`/products/${title.toLowerCase()}`} title={title}>
          {title}
          <i className="icn-chevron-down" onClick={handleOpen}></i>
          <i className="icn-chevron-up" onClick={handleOpen}></i>
        </Link>
        <ul>{children}</ul>
      </li>
    );
}

export default Category;
