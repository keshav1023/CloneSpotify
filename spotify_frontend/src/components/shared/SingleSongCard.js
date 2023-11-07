const SingleSongCard = () => {
    return (
        <div className="flex hover:bg-gray-400 hover:bg-opacity-20 p-2 rounded-sm">
            <div className="w-12 h-12 bg-cover bg-center"
                style={{
                    backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSgO3eEz3PsKnktBWVpsXiyIOCIgZgTudPGg&usqp=CAU)`
                }}
            ></div>
            <div className="flex w-full">
                <div className="text-white flex justify-center flex-col pl-4 w-5/6">
                    <div className="cursor-pointer hover:underline">Takda hi Jawan</div>
                    <div className="text-xs text-gray-400 cursor-pointer hover:underline">Prophe C</div>
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