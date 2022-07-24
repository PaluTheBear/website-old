import HeroTile from "../home/tiles/HeroTile";
import ContactpagePresentation from "./ContactpagePresentation";
import TextTile from "../home/tiles/TextTile";

const Contact = () => {
    return (
        <div className="main-wrapper">
            <HeroTile>
                {() => <ContactpagePresentation />}
            </HeroTile>
            <TextTile>
                {() => <>
                    <h2>Vita</h2>
                    <p>From 2020-2022 worked as Software Engineering Intern at <a href="https://www.iteratec.com">Iteratec</a>, enhancing clients creating modern digital solutions using Java, TypeScript, Python and various other technologies and frameworks. </p>
                    <p>Univeristy degree B.Sc. Computer Science estimated finish in spring 2023</p>
                    <p>Allgemeine Hochschulreife Abitur 2017.</p>
                </>}
            </TextTile>
        </div>
    )
}

export default Contact;