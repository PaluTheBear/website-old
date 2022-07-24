// import {useParams} from "react-router-dom";
import {lorem} from "../util/Helperfunctions";
import TextTile from "../home/tiles/TextTile";
import "../home/tiles/TextTile.css"
import HeroTile from "../home/tiles/HeroTile";
import BlogpagePresentation from "./BlogpagePresentation";

const Blog = () => {
    // const params = useParams()
    // const blogId = params.blogId || ""

    const testTitle = "This is a title!"
    const testPicture = "https://image.shutterstock.com/z/stock-photo-five-different-size-plate-on-beige-background-flat-lay-top-view-brown-and-natural-color-plates-2016701552.jpg"
    const testDate = new Date("2020-05-20")
    const testAuthor = "Paul Mayer"

    return (
        <>
            <HeroTile>
                {() => (
                    <BlogpagePresentation title={testTitle} picture={testPicture} date={testDate} author={testAuthor} />
                )}
            </HeroTile>
            <TextTile>
                {() => <>
                    <p>{lorem(500)}</p>
                    <h2>This is a subtitle</h2>
                    <p>{lorem(3000)}</p>
                    <h2>This is another subtitle</h2>
                    <p>{lorem(2000)}</p>
                </>}
            </TextTile>
        </>
    )}

export default Blog;