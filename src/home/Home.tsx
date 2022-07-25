import HeroTile from "./tiles/HeroTile";
import exampleImage from "./tiles/capitan.jpg";
import BlogPreviewTile from "./tiles/BlogPreviewTile";
import MainpagePresentation from "./tiles/MainpagePresentation";
import {IBlogPreviewProps} from "./tiles/BlogPreview";
import {lorem} from "../util/Helperfunctions";
import {useState} from "react";

const getArticles = ():IBlogPreviewProps[] => {
    const articles = [
        {title: "This is a Title", subtitle: lorem(), author:"Me", picture:exampleImage, date: new Date('December 1, 2020')},
        {title: "This is a Title", subtitle: lorem(), author:"Me", picture:exampleImage, date: new Date('July 20, 2020')},
        {title: "This is a Title", subtitle: lorem(), author:"Me", picture:exampleImage, date: new Date('August 17, 2020')},
        {title: "This is a Title", subtitle: lorem(), author:"Me", picture:exampleImage, date: new Date('January 11, 2021')},
        {title: "This is a Title", subtitle: lorem(), author:"Me", picture:exampleImage, date: new Date('March 14, 2021')},
        {title: "This is a Title", subtitle: lorem(), author:"Me", picture:exampleImage, date: new Date('April 27, 2021')}
    ]

    return articles.sort((firstEl, secondEl) => firstEl.date.toISOString() < secondEl.date.toISOString() ? 1 : -1)
}

const Home = () => {
    const [articles, setArticles] = useState("")

    return (
        <div className="main-wrapper">
            <HeroTile>
                {() => <MainpagePresentation />}
            </HeroTile>
            {articles.length > 0 &&
                <BlogPreviewTile blogArticles={getArticles()} />
            }
        </div>
    )
}

export default Home;
