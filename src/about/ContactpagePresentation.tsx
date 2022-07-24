import portrait from "../portrait.jpeg";

const ContactpagePresentation = () => {
    return (
        <div className="hero">
            <div className="hero-column">
                <div className="hero-title">
                    <h1>Contact</h1>
                    <p>Offers, questions and inquiries please send to<br />
                    <a href="mailto:paul@mayer-zuffenhausen.de">paul@mayer-zuffenhausen.de</a></p>
                </div>
            </div>
            <div className="hero-column">
                <img id="hero-image" src={portrait} alt="Paul Alpen 2021" />
            </div>
        </div>
    );
}

export default ContactpagePresentation;