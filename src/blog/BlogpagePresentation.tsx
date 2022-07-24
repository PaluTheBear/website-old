type BlogPagePresentationProp = {
    title: string;
    picture: string;
    date: Date;
    author: string;
}

const BlogpagePresentation = (props: BlogPagePresentationProp) => {
    return (
        <div className="hero">
            <div className="hero-column">
                <div>
                    <h1>{props.title}</h1>
                    <h3>By {props.author}</h3>
                    <h4>{props.date.toDateString()}</h4>
                </div>
            </div>
            <div className="hero-column">
                <img id="hero-image" src={props.picture} alt="Blog Presentation" />
            </div>
        </div>
    );
}

export default BlogpagePresentation;