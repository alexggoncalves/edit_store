import { Link } from "react-router-dom";
function SubCategory({ title }) {
  if (title)
    return (
      <li>
        <Link to={`/products/${title.toLowerCase()}`} title={title}>
          <i className="icn-chevron-right"></i> {title}
        </Link>
      </li>
    );
}

export default SubCategory;
