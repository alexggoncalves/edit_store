import { Link } from "react-router-dom";

export function HeaderLink(props) {

    return (
        <li>
            <Link to={props.to} title={props.title}>
                {props.showTitle && props.title}
                {props.icon != undefined && <i className={props.icon}></i>}
            </Link>
        </li>
    )
  }
  
  export default HeaderLink
  