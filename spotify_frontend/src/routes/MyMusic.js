import { useState, useEffect } from "react";
import SingleSongCard from "../components/shared/SingleSongCard";
import { makeAuthenticatedGETResquest } from "../utils/serverHelper";
import LoggedInContainer from "../containers/LoggedInContainer";

const MyMusic = () => {
  const [songData, setSongData] = useState([]);
  useEffect(() => {
    //fetch data
    const getData = async () => {
      const response = await makeAuthenticatedGETResquest("/song/get/mysongs");
      setSongData(response.data);
    };
    getData();
  }, []);

  return (
    <LoggedInContainer currentActiveScreen="myMusic">
      <div className="text-white text-xl font-semibold pb-4 pl-2 pt-8">My Songs</div>
      <div className="space-y-3 overflow-auto">
        {songData.map((item) => {
          return <SingleSongCard info={item} playSound={() => {}} />;
        })}
      </div>
    </LoggedInContainer>
  );
};

export default MyMusic;