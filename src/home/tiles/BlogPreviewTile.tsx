import "./BlogPreviewTile.css"
import BlogPreview, {IBlogPreviewProps} from "./BlogPreview";
import {createLinkFromDateAndTitle} from "../../util/Helperfunctions";

type BlogPreviewTileProps = {
    blogArticles: IBlogPreviewProps[]
}

const BlogPreviewTile = (props: BlogPreviewTileProps) => {
    const articles = props.blogArticles.map( article => <BlogPreview
        key={article.filelink}
        title={article.title}
        subtitle={article.subtitle}
        preview={article.preview}
        author={article.author}
        date={article.date}
        filelink={article.filelink}
    />)

    return (
        <div className="blog-preview-wrapper content-wrapper" >
            {articles}
        </div>
    )
}

export default BlogPreviewTile;
