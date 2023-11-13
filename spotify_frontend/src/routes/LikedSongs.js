import { useState, useEffect } from "react";
import SingleSongCard from "../components/shared/SingleSongCard";
import { makeAuthenticatedGETResquest } from "../utils/serverHelper";
import LoggedInContainer from "../containers/LoggedInContainer";

const LikedSongs = () => {
  const [likedSongs, setLikedSongs] = useState([]);
  useEffect(() => {
    //fetch data
    const getData = async () => {
      const response = await makeAuthenticatedGETResquest("/song/get/myLiked/songs");
      
      setLikedSongs(response.data[0].likedSongs)
    };
    getData();
  }, []);

  return (
    <LoggedInContainer currentActiveScreen="likedSongs">
      <div className="text-white text-xl font-semibold pb-4 pl-2 pt-8">Liked Songs</div>
      <div className="space-y-3 overflow-auto">
        {likedSongs.map((item) => {
          return <SingleSongCard info={item} playSound={() => {}} />;
        })}
      </div>
    </LoggedInContainer>
  );
};

export default LikedSongs;