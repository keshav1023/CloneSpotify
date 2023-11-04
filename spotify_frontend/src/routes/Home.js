import spotify_logo from "../assets/images/spotify_logo_white.svg";
import IconText from "../components/shared/IconText";
import { Icon } from "@iconify/react";

const Home = () => {
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
      <div className="h-full w-4/5 bg-gray-300">Right Part</div>
    </div>
  );
};

export default Home;
