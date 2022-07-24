import Darkmode from "./Darkmode";
import "./Header.css"
import Logo from "./Logo";
import NavItem from "./NavItem";

const Header = () => {
    return (
        <div className="header">
            <Logo name="PM" />
            <div className="navbar">
                <NavItem title="Home" destination="/"/>
                <NavItem title="Contact" destination="/about"/>
                {/*<NavItem title="Gallery" destination="/gallery"/> */}
            </div>
            <div className="darkmode-wrapper">
                <Darkmode />
            </div>
        </div>
    )
}

export default Header;
