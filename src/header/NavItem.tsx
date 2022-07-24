import "./Header.css"
import {Link} from "react-router-dom";

type INavItemProps = {
    title: string,
    destination: string
}

const NavItem = (props: INavItemProps) => {
    return (
        <Link to={props.destination} key={props.title} className="nav-item">{props.title}</Link>
    )
}

export default NavItem;