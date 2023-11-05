import spotify_logo from "../assets/images/spotify_logo_white.svg";
import IconText from "../components/shared/IconText";
import { Icon } from "@iconify/react";
import TextWithHover from "../components/shared/TextWithHover";

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
      <div className="h-full w-4/5 bg-app-black">
        <div className="navbar bg-black bg-opacity-30 w-full h-1/10 flex items-center justify-end">
            <div className="w-1/2 flex h-full">
                <div className="w-3/5 flex justify-around items-center">
                    <TextWithHover displayText={"Premium"}/>
                    <TextWithHover displayText={"Support"}/>
                    <TextWithHover displayText={"Download"}/>
                    <div className="h-1/2 border-r border-white"></div>
                </div>
                <div className="w-2/5 flex justify-around h-full items-center">
                    <TextWithHover displayText={"Sign up"}/>
                    <div className="bg-white h-2/3 px-8 rounded-full flex items-center justify-center font-semibold cursor-pointer">
                        Log in
                    </div>
                </div>
            </div>
        </div>
        <div className="content p-8">

            <PlaylistView />
        </div>
      </div>
    </div>
  );
};

const PlaylistView = () => {
    return <div className="text-white">
        <div className="text-2xl font-semibold mb-5">Focus</div>
        <div className="w-full flex justify-between">
            <Card 
                title= "Peacefull Piano"
                desc= "Relax and indulge with beautiful piano pieces"
            />
            <Card 
                title= "Deep Focus"
                desc= "Keep calm and focus with this music"
            />
            <Card 
                title= "Instrumental Study"
                desc= "Focus with soft study music in the background"
            />
            <Card 
                title= "Focus flow"
                desc= "Uptempo instrumental hip hop beats"
            />
            <Card 
                title= "Beast to think to"
                desc= "Focus with deep techno and tech house"
            />
        </div>
    </div>
};
const Card = ({title,desc}) => {
    return (<div className="bg-black bg-opacity-60 w-1/6 px-4 py-2 rounded-lg">
    <div className="py-4 ">
        <img
            className="w-full rounded-md" 
            src="data:image/jpeg;base64,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"
            alt="label"
        />
    </div>
    <div className="text-white text-sm font-semibold">
        {title}
    </div>
    <div className="text-gray-500 text-sm">
        {desc}
    </div>
    </div> )
};

export default Home;
