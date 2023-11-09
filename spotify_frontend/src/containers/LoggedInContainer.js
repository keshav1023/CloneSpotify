import { useContext, useLayoutEffect, useRef, useState } from "react";
import { Howl, Howler } from "howler";
import spotify_logo from "../assets/images/spotify_logo_white.svg";
import IconText from "../components/shared/IconText";
import { Icon } from "@iconify/react";
import TextWithHover from "../components/shared/TextWithHover";
import songContext from "../contexts/songContext";
import CreatePlaylistModal from "../modals/CreatePlaylistModal";

const LoggedInContainer = ({children, currentActiveScreen}) => {
    const [CreatePlaylistModalOpen, setCreatePlaylistModalOpen] =useState(false);

    const {
        currentSong, 
        setCurrentSong, 
        soundPlayed, 
        setSoundPlayed, 
        isPaused, 
        setIsPaused
    } = useContext(songContext);
    
    const firstUpdate = useRef(true)

    useLayoutEffect(()=> {

        if(firstUpdate.current){
            firstUpdate.current = false;
            return;
        }

        if(!currentSong){
            return;
        }
        changeSong(currentSong.track);
    }, [currentSong && currentSong.track]);

    const playSound = () => {
        if(!soundPlayed){
            return;
        }
        soundPlayed.play();
    };

    const changeSong = (songSrc) => {
        if (soundPlayed) {
          soundPlayed.stop();
        }
        let sound = new Howl({
          src: [songSrc],
          html5: true,
        });
        setSoundPlayed(sound);
        sound.play();
        setIsPaused(false);
      };

      const pausedSound = ()=>{
        soundPlayed.pause();
      };

      const togglePlayPause = () =>{
        if(isPaused){
            playSound(currentSong.track);
            setIsPaused(false);
        }
        else{
            pausedSound();
            setIsPaused(true);
        }
      };

  return (
    <div className="h-full w-full bg-app-black">
    {CreatePlaylistModalOpen && <CreatePlaylistModal closeModal={()=>{setCreatePlaylistModalOpen(false)}}/>}
    <div className={`${currentSong ? "h-9/10" : "h-full"} w-full flex`}>
        {/* Left Panel div */}
        <div className="h-full w-1/5 bg-black flex flex-col justify-between pb-10">
            {/* This div is for logo */}
            <div>
            <div className="logoDiv p-6">
                <img src={spotify_logo} alt="Spotify Logo" width={125} />
            </div>
            <div className="py-5">
                <IconText 
                    iconName={"material-symbols:home"} 
                    displayText={"Home"} 
                    targetLink={"/home"}
                    active={currentActiveScreen==="home"}
                />
                <IconText 
                    iconName={"ion:search"} 
                    displayText={"Search"} 
                    targetLink={"/search"}
                    active={currentActiveScreen==="search"}

                />
                <IconText
                    iconName={"icomoon-free:books"}
                    displayText={"Your Library"}
                    targetLink={"/library"}
                    active={currentActiveScreen==="library"}

                />
                <IconText
                    iconName={"material-symbols:library-music-sharp"}
                    displayText={"My Music"}
                    targetLink={"/myMusic"}
                    active={currentActiveScreen==="myMusic"}
                />
            </div>
            <div className="pt-5">
                <IconText
                    iconName={"material-symbols:add-box"}
                    displayText={"Create Playlist"}
                    onClick={()=>{setCreatePlaylistModalOpen(true)}}
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
                    <div className="w-2/3 flex justify-around items-center">
                        <TextWithHover displayText={"Premium"}/>
                        <TextWithHover displayText={"Support"}/>
                        <TextWithHover displayText={"Download"}/>
                        <div className="h-2/3 border-r border-white"></div>
                    </div>
                    <div className="w-1/3 flex justify-around h-full items-center">
                        <TextWithHover targetLink={"/uploadSong"} displayText={"Upload Songs"}/>
                        <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center font-semibold cursor-pointer">
                            AC
                        </div>
                    </div>
                </div>
            </div>
            <div className="content p-8 pt-0 overflow-auto">
                {children}
            </div>
        </div>
      </div>
      {/* This div is the current playing song */}

      { currentSong &&
        <div className="w-full h-1/10 bg-black bg-opacity-30 text-white flex items-center px-4">
        <div className="w-1/4 flex items-center">
                <img  
                    src={currentSong.thumbnail}
                    alt="currentSongThumbnail"
                    className="h-14 w-14 rounded"
                />
                <div className="pl-4">
                    <div className="text-sm hover:underline cursor-pointer">
                        {currentSong.name}
                    </div>
                    <div className="text-xs text-gray-500 hover:underline cursor-pointer">
                        {currentSong.artist.firstName + " " + currentSong.artist.lastName}
                    </div>
                </div>
        </div>
        <div className="w-1/2 flex justify-center h-full flex-col items-center">
                <div className="flex w-1/3 justify-between items-center">
                    {/* Controls for playing the song */}
                    <Icon 
                        icon="ph:shuffle-fill" 
                        fontSize={30} 
                        className="cursor-pointer text-gray-500 hover:text-white"
                        
                    />
                    <Icon 
                        icon="mi:previous" 
                        fontSize={30} 
                        className="cursor-pointer text-gray-500 hover:text-white"
                        
                    />
                    <Icon 
                        icon={isPaused ? "gridicons:play" : "gridicons:pause"} 
                        fontSize={50} 
                        className="cursor-pointer text-gray-500 hover:text-white"
                        onClick={togglePlayPause}
                    />
                    <Icon 
                        icon="mi:next" 
                        fontSize={30} 
                        className="cursor-pointer text-gray-500 hover:text-white"
                        
                    />
                    <Icon 
                        icon="tabler:repeat" 
                        fontSize={30} 
                        className="cursor-pointer text-gray-500 hover:text-white"
                        
                    />
                </div>
                <div>Progress Bar Here</div>
        </div>
        <div className="w-1/4 flex justify-end">
                Volume control
        </div>
        </div>
      }

    </div>
  );
};

export default LoggedInContainer;