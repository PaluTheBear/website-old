import "./Footer.css";
import instagram_logo from "../logos/Instagram_Glyph_Black.png";
import linkedin_logo from "../logos/LinkedIn.png";
import github_logo from "../logos/GitHub.png";

const Footer = () => {
    return (
        <div className="footer">
            <a href="https://www.github.com/paluthebear/"><img alt="Link Github" src={github_logo} /></a>
            <a href="https://www.instagram.com/palu.myr/" style={{scale: "0.8"}}><img alt="Link Instagram" src={instagram_logo}/></a>
            <a href="https://www.linkedin.com/in/paul-myr/" ><img alt="Link Linkedi=In" src={linkedin_logo} /></a>
        </div>
    )
}

export default Footer;