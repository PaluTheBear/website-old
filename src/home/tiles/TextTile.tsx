import './TextTile.css'

type BlogTileProps = {
    children(): JSX.Element
}

const TextTile = (props: BlogTileProps) => {
    return (
        <div id="text-tile-wrapper" className="content-wrapper">
            <div id="text-entry">
                {props.children()}
            </div>
        </div>
    )
}

export default TextTile;
