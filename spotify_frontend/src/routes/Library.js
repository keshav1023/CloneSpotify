import { useState, useEffect } from "react";
import LoggedInContainer from "../containers/LoggedInContainer";
import { makeAuthenticatedGETResquest } from "../utils/serverHelper";

const Library = () => {

    const [myPlaylists, setMyPlaylists] = useState([]);

    useEffect(()=>{
        const getData = async () => {
            const response = await makeAuthenticatedGETResquest("/playlist/get/me");
            setMyPlaylists(response.data);
            console.log(response.data);
        }; 
        getData();
    },[]);

    return (
        <LoggedInContainer currentActiveScreen={"library"}>
            <div className="text-white text-xl pt-8 font-semibold">My Playlists</div>
            <div className="py-5 grid gap-5 grid-cols-5">
                {myPlaylists.map(item=>{
                    return (
                        <Card 
                            key={JSON.stringify(item)} 
                            title={item.name}
                            desc={item.description}
                            imgUrl={item.thumbnail}
                        />
                    )
                })}
            </div>

        </LoggedInContainer>
    );
};

const Card = ({title,desc,imgUrl}) => {
    return (<div className="bg-black bg-opacity-40 w-full p-4 rounded-lg cursor-pointer">
        <div className="pb-4-pt-2 ">
            <img
                className="w-full rounded-md h-50" 
                src={imgUrl}
                alt="label"
            />
        </div>
        <div className="text-white font-semibold py-3">{title}</div>
        <div className="text-gray-500 text-sm">{desc}</div>
    </div> )
};

export default Library;