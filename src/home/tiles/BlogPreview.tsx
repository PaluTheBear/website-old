import "./BlogPreview.css"
import {Link} from "react-router-dom";
import {createLinkFromDateAndTitle} from "../../util/Helperfunctions";

interface IBlogPreviewProps {
    title: string;
    subtitle?: string;
    picture?: string;
    author: string;
    date: Date;
}

const BlogPreview = (props: IBlogPreviewProps) => {

    const subtitle = props.subtitle || ""
    const trimmedSubtitle = subtitle.length > 120 ? subtitle.substring(0, 120).trim() + "..." : subtitle

    const link = "/blog/" + createLinkFromDateAndTitle(props.date, props.title);

    return (
        <div className="blog-preview-kachel">
            <Link to={link} className="div-link">
                <img id="blog-preview-image" src={props.picture} alt=""/>
                <h2 id="blog-preview-title">{props.title}</h2>
                <p id="blog-preview-subtitle">{trimmedSubtitle || ""}</p>
                <p id="blog-preview-signature">{`${props.author} / ${props.date.toDateString()}`}</p>
            </Link>
        </div>
    );
}

export default BlogPreview;
export type { IBlogPreviewProps };
