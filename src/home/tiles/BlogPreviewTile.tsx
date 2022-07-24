import "./BlogPreviewTile.css"
import BlogPreview, {IBlogPreviewProps} from "./BlogPreview";
import {createLinkFromDateAndTitle} from "../../util/Helperfunctions";

type BlogPreviewTileProps = {
    blogArticles: IBlogPreviewProps[]
}

const BlogPreviewTile = (props: BlogPreviewTileProps) => {
    const articles = props.blogArticles.map( article => <BlogPreview
        key={createLinkFromDateAndTitle(article.date, article.title)}
        title={article.title}
        subtitle={article.subtitle}
        picture={article.picture}
        author={article.author}
        date={article.date}
    />)

    return (
        <div className="blog-preview-wrapper content-wrapper" >
            {articles}
        </div>
    )
}

export default BlogPreviewTile;