import "./Header.css"
import {Link, NavLink} from "react-router-dom";

type INavItemProps = {
    title: string,
    destination: string
}

const NavItem = (props: INavItemProps) => {
    return (
        <NavLink
            to={props.destination}
            key={props.title}
            className={({ isActive }) =>
                isActive ? "nav-item-active" : "nav-item"}
        >
            {props.title}
        </NavLink>
    )
}

export default NavItem;