import "./BlogPreview.css"
import {Link} from "react-router-dom";
import {createLinkFromDateAndTitle} from "../../util/Helperfunctions";

interface IBlogPreviewProps {
    title: string;
    subtitle?: string;
    preview?: string;
    author: string;
    filelink: string;
    date: Date;
}

const BlogPreview = (props: IBlogPreviewProps) => {

    const subtitle = props.subtitle || ""
    const trimmedSubtitle = subtitle.length > 120 ? subtitle.substring(0, 120).trim() + "..." : subtitle

    return (
        <div className="blog-preview-kachel">
            <Link to={props.filelink} className="div-link" target="_blank">
                <img id="blog-preview-image" src={props.preview} alt=""/>
                <h2 id="blog-preview-title">{props.title}</h2>
                <p id="blog-preview-subtitle">{trimmedSubtitle || ""}</p>
                <p id="blog-preview-signature">{`${props.author} / ${props.date.toDateString()}`}</p>
            </Link>
        </div>
    );
}

export default BlogPreview;
export type { IBlogPreviewProps };
