import HeroTile from "../home/tiles/HeroTile";

const Gallery = () => {
    return (
        <div className="main-wrapper">
            <HeroTile>
                {() => <h1>Gallery</h1>}
            </HeroTile>
        </div>
    )
}

export default Gallery;