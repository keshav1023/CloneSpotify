import spotify_logo from "../assets/images/spotify_logo_white.svg"

const Home = () => {
    return (
        <div className="h-full w-full flex">
        {/* Left Panel div */ }
            <div className="h-full w-1/5 bg-black">
                {/* This div is for logo */}
                <div className="logoDiv p-6">
                    <img src={spotify_logo} alt="Spotify logo" width={125}/>
                </div>
            </div>
        {/* Right Panel div */ }    
            <div className="h-full w-4/5 bg-gray-300">
                Right Part
            </div>
        </div>
    )
};

export default Home;