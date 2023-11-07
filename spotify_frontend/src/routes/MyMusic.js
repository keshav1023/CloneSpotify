import { Icon } from "@iconify/react";
import spotify_logo from "../assets/images/spotify_logo_white.svg";
import IconText from "../components/shared/IconText";
import SingleSongCard from "../components/shared/SingleSongCard";
import TextWithHover from "../components/shared/TextWithHover";


const MyMusic = () => {    



  return (
    <div className="h-full w-full flex">
      {/* Left Panel div */}
      <div className="h-full w-1/5 bg-black flex flex-col justify-between pb-10">
        {/* This div is for logo */}
        <div>
          <div className="logoDiv p-6">
            <img src={spotify_logo} alt="Spotify Logo" width={125} />
          </div>
          <div className="py-5">
            <IconText iconName={"material-symbols:home"} displayText={"Home"} />
            <IconText iconName={"ion:search"} displayText={"Search"} />
            <IconText
              iconName={"icomoon-free:books"}
              displayText={"Your Library"}
            />
            <IconText
              iconName={"material-symbols:library-music-sharp"}
              displayText={"My music"}
              active
            />
          </div>
          <div className="pt-5">
            <IconText
              iconName={"material-symbols:add-box"}
              displayText={"Create Playlist"}
            />
            <IconText
              iconName={"fluent-emoji:heart-decoration"}
              displayText={"Liked Songs"}
            />
          </div>
        </div>
        <div className="px-5">
          <div className="border border-gray-100 text-white rounded-full w-2/5 flex  px-2 py-1 items-center justify-center hover:border-white cursor-pointer">
            <Icon icon="humbleicons:globe" />
            <div className="ml-2 text-sm font-semibold">English</div>
          </div>
        </div>
      </div>
      {/* Right Panel div */}
      <div className="h-full w-4/5 bg-app-black overflow-auto">
        <div className="navbar bg-black bg-opacity-30 w-full h-1/10 flex items-center justify-end">
            <div className="w-1/2 flex h-full">
                <div className="w-3/5 flex justify-around items-center">
                    <TextWithHover displayText={"Premium"}/>
                    <TextWithHover displayText={"Support"}/>
                    <TextWithHover displayText={"Download"}/>
                    <div className="h-2/3 border-r border-white"></div>
                </div>
                <div className="w-1/3 flex justify-around h-full items-center">
                    <TextWithHover displayText={"Upload Songs"}/>
                    <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center font-semibold cursor-pointer">
                        AC
                    </div>
                </div>
            </div>
        </div>
        <div className="content p-8 overflow-auto">
            <div className="text-white text-xl font-semibold pb-4 pl-2">My Songs</div>
            <div className="space-y-3 overflow-auto">
                <SingleSongCard />
                <SingleSongCard />
                <SingleSongCard />
                <SingleSongCard />
                <SingleSongCard />
                <SingleSongCard />
                <SingleSongCard />
            </div>
        </div>
      </div>
    </div>
  );
};



export default MyMusic;
