import "./Header.css"
import {Link} from "react-router-dom";

type ILogoProps = {
    name: string
}

const Logo = ({name}: ILogoProps) => {
    return (
        <div className="logo">
            <Link className="logoLink" to="/" key="Logo">{name}</Link>
        </div>
    )
}

export default Logo;