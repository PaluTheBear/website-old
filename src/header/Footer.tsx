import "./Footer.css";
import instagram_logo from "../logos/Instagram_Glyph_Black.png";
import linkedin_logo from "../logos/LinkedIn.png";
import github_logo from "../logos/GitHub.png";

const Footer = () => {
    return (
        <div className="footer">
            <a href="https://www.github.com/paluthebear/" style={{scale: "1"}}><img alt="Link Github" src={github_logo} /></a>
            <a href="https://www.instagram.com/palu.myr/" style={{scale: "1"}}><img alt="Link Instagram" src={instagram_logo}/></a>
            <a href="https://www.linkedin.com/in/paul-myr/" style={{scale: "1.1"}}><img alt="Link Linkedi=In" src={linkedin_logo} /></a>
        </div>
    )
}

export default Footer;