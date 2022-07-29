import portrait from "../../portrait.jpeg";
import "./MainpagePresentation.css"

const MainpagePresentation = () => {
    return (
        <div className="hero">
            <div className="hero-column">
                <div className="hero-title">
                    <h1>Hi, I'm Paul Mayer.</h1>
                    <h3>Student - B.Sc. Computer Science</h3>
                    <h4>University of Stuttgart</h4>
                </div>
            </div>
            <div className="hero-column">
                <img id="hero-image" src={portrait} alt="Portrait of Paul Mayer" />
            </div>
        </div>
    )}

export default MainpagePresentation;
