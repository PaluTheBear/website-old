import "./HeroTile.css"

type HeroTileProps = {
    children(): JSX.Element
}

const HeroTile = (props: HeroTileProps) => {
    return (
        <div id="hero-wrapper" className="content-wrapper">
            {props.children()}
        </div>
    )
}

export default HeroTile;