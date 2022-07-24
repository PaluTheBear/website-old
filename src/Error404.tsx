import HeroTile from "./home/tiles/HeroTile";

const Error404 = () => {
    return (
        <div className="main-wrapper">
            <HeroTile>
                {() => (
                    <div className="hero" style={{alignItems: "flex-end"}} >
                        <h1>404 - Nothing to see here...</h1>
                    </div>)}
            </HeroTile>
        </div>
    )
}

export default Error404;