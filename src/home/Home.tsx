import HeroTile from "./tiles/HeroTile";
import BlogPreviewTile from "./tiles/BlogPreviewTile";
import MainpagePresentation from "./tiles/MainpagePresentation";
import {IBlogPreviewProps} from "./tiles/BlogPreview";
import postJson from "../posts.json"
import { createLinkFromDateAndTitle  } from "../util/Helperfunctions"

const getArticles = () => {
    const articles: IBlogPreviewProps[] = postJson.articles.map( (it) => {
        const artcl: IBlogPreviewProps = {
            title: it.title,
            subtitle: it.subtitle,
            author: it.author,
            date: new Date(it.date),
            picture: createLinkFromDateAndTitle(new Date(it.date), it.title) + "/preview.png"
        };

        return artcl;
    })

    return articles;
}

const Home = () => {
    const articles = getArticles();

    return (
        <div className="main-wrapper">
            <HeroTile>
                {() => <MainpagePresentation />}
            </HeroTile>
            {articles.length > 2 &&
                <BlogPreviewTile blogArticles={articles} />
            }
        </div>
    )
}

export default Home;
