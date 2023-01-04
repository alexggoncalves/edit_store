import logo from "../../assets/logo.svg"
import HeaderLink from "./HeaderLink";

import { Link } from "react-router-dom";


// TO-DO -------------------------
// components X
// separate promobar from header X
// -------------------------------

const Header = () => {
    return (
        <header className="bg-white">
            <nav className="gridrow">
                <div className="col-5 col-t-3 col-d-2" id="logo">
                    <Link to="/" title="Ir para a página inicial">
                        <img className="imgfit" src={logo} alt="Edit Store Logo" />
                    </Link>
                </div>
                <ul id="mainmenu" className="col-12 col-t-6 col-d-7">
                    <HeaderLink	to="/shop" title="Shop" icon="icn-chevron-down" showTitle={true}/>
                    <HeaderLink	to="#" title="Fabric" icon="icn-chevron-down" showTitle={true}/>
                    <HeaderLink	to="#" title="Journal" icon="icn-chevron-down" showTitle={true}/>
                    <HeaderLink	to="#" title="About" icon="icn-chevron-down" showTitle={true}/>
                </ul>
                <ul id="customermenu" className="col-7 col-t-3 col-d-2 textright">
                    <HeaderLink	to="#" title="Login" showTitle={true}/>
                    <HeaderLink	to="#" title="Search" icon="icn-search"/>
                    <HeaderLink	to="#" title="Wishlist" icon="icn-heart"/>
                    <HeaderLink	to="#" title="Shopping Cart" icon="icn-shopping-cart"/>
                </ul>
            </nav>
        </header>
    )
}

export default Header