import { useContext } from "react";
import songContext from "../../contexts/songContext";

const SingleSongCard = ({info, playSound}) => {

    const {currentSong, setCurrentSong} = useContext(songContext);
    // console.log(info);

    return (
        <div className="flex hover:bg-gray-400 hover:bg-opacity-20 p-2 rounded-sm" 
        onClick={()=>{
            setCurrentSong(info);
            }}
        >
            <div className="w-12 h-12 bg-cover bg-center"
                style={{
                    backgroundImage: `url("${info.thumbnail}")`
                }}
            ></div>
            <div className="flex w-full">
                <div className="text-white flex justify-center flex-col pl-4 w-5/6">
                    <div className="cursor-pointer hover:underline">
                        {info.name}
                    </div>
                    <div className="text-xs text-gray-400 cursor-pointer hover:underline">
                        {info.artist.firstName + " " + info.artist.lastName}
                    </div>
                </div>
                <div className="w-1/6 text-gray-400 text-sm flex justify-center items-center">
                    <div>3.44</div>
                    <div className="text-gray-400 text-lg flex justify-center items-center pl-3">...</div>
                </div>
            </div>
        </div>
    )
};

export default SingleSongCard;