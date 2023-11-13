import { useContext, useLayoutEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Howl, Howler } from "howler";
import spotify_logo from "../assets/images/spotify_logo_white.svg";
import IconText from "../components/shared/IconText";
import { Icon } from "@iconify/react";
import TextWithHover from "../components/shared/TextWithHover";
import songContext from "../contexts/songContext";
import CreatePlaylistModal from "../modals/CreatePlaylistModal";
import AddToPlaylistModal from "../modals/AddToPlaylistModal";
import { makeAuthenticatedPOSTResquest } from "../utils/serverHelper";
const LoggedInContainer = ({ children, currentActiveScreen }) => {
  const [CreatePlaylistModalOpen, setCreatePlaylistModalOpen] = useState(false);
  const [addToPlaylistModalOpen, setAddToPlaylistModalOpen] = useState(false);

  const {
    currentSong,
    setCurrentSong,
    soundPlayed,
    setSoundPlayed,
    isPaused,
    setIsPaused,
  } = useContext(songContext);

  const firstUpdate = useRef(true);

  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    if (!currentSong) {
      return;
    }
    changeSong(currentSong.track);
  }, [currentSong && currentSong.track]);

  const addSongToPlaylist = async (playlistId) => {
    const songId = currentSong._id;
    const payload = { playlistId, songId };

    const response = await makeAuthenticatedPOSTResquest(
      "/playlist/add/song",
      payload
    );
    if (response._id) {
      setAddToPlaylistModalOpen(false);
    }
  };

  const playSound = () => {
    if (!soundPlayed) {
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

  const pausedSound = () => {
    soundPlayed.pause();
  };

  const togglePlayPause = () => {
    if (isPaused) {
      playSound(currentSong.track);
      setIsPaused(false);
    } else {
      pausedSound();
      setIsPaused(true);
    }
  };

  const navigate = useNavigate();
  const handleLogout = () => {
    // Delete token from localStorage
    localStorage.removeItem("userLoginSessionToken");

    // Redirect to the "/login" route
    navigate("/login");
    navigate(0);
  };

  // const toggleHeart = (prop) => {
  //   const heartButton = document.getElementById("heartButton");
  //   console.log(prop+", Heart button is : -  "+heartButton);
  //   heartButton.classList.toggle("text-red-500");
  // };
  const [isFilled, setIsFilled] = useState(false);

  const toggleHeart = () => {
    setIsFilled(!isFilled);
  };

  return (
    <div className="h-full w-full bg-app-black">
      {CreatePlaylistModalOpen && (
        <CreatePlaylistModal
          closeModal={() => {
            setCreatePlaylistModalOpen(false);
          }}
        />
      )}
      {addToPlaylistModalOpen && (
        <AddToPlaylistModal
          closeModal={() => {
            setAddToPlaylistModalOpen(false);
          }}
          addSongToPlaylist={addSongToPlaylist}
        />
      )}
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
                active={currentActiveScreen === "home"}
              />
              <IconText
                iconName={"ion:search"}
                displayText={"Search"}
                targetLink={"/search"}
                active={currentActiveScreen === "search"}
              />
              <IconText
                iconName={"icomoon-free:books"}
                displayText={"Your Library"}
                targetLink={"/library"}
                active={currentActiveScreen === "library"}
              />
              <IconText
                iconName={"material-symbols:library-music-sharp"}
                displayText={"My Music"}
                targetLink={"/myMusic"}
                active={currentActiveScreen === "myMusic"}
              />
            </div>
            <div className="pt-5">
              <IconText
                iconName={"material-symbols:add-box"}
                displayText={"Create Playlist"}
                onClick={() => {
                  setCreatePlaylistModalOpen(true);
                }}
              />
              <IconText
                iconName={"fluent-emoji:heart-decoration"}
                displayText={"Liked Songs"}
                targetLink={"/likedSongs"}
                active={currentActiveScreen === "likedSongs"}
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
                <TextWithHover displayText={"Premium"} />
                <TextWithHover displayText={"Support"} />
                <TextWithHover displayText={"Download"} />
                <div className="h-2/3 border-r border-white"></div>
              </div>
              <div className="w-1/3 flex justify-around h-full items-center">
                <TextWithHover
                  targetLink={"/uploadSong"}
                  displayText={"Upload Songs"}
                />
                <div
                  className="bg-white w-12 h-10 rounded-md flex items-center justify-center font-semibold cursor-pointer text-xs"
                  onClick={handleLogout}
                >
                  Logout
                </div>
              </div>
            </div>
          </div>
          <div className="content p-8 pt-0 overflow-auto">{children}</div>
        </div>
      </div>
      {/* This div is the current playing song */}

      {currentSong && (
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
                {currentSong.artist.firstName +
                  " " +
                  currentSong.artist.lastName}
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
          <div className="w-1/4 flex justify-end pr-4 space-x-4 items-center">
            <Icon
              icon="ic:round-playlist-add"
              fontSize={35}
              className="cursor-pointer text-gray-500 hover:text-white"
              onClick={() => {
                setAddToPlaylistModalOpen(true);
              }}
            />
            {/* <Icon
              icon="ph:heart-bold"
              fontSize={30}
              className="cursor-pointer text-gray-500 hover:text-white"
              onClick={() => {
                toggleHeart();
              }}
            /> */}
            {/* <button
              class="relative p-2 text-gray-500 bg-transparent border-none focus:outline-none transform scale-100 transition-transform hover:scale-110"
              id="heartButton"
              onClick={() => {
                toggleHeart("Hello");
              }}
            >
              <svg class="w-8 h-8 fill-current" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C6.47 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-4.47 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </button> */}
            <Icon
              icon="heroicons:heart-20-solid"
              fontSize={30}
              style={{ color: isFilled ? "red" : "gray" }}
              className="cursor-pointer hover:text-white"
              onClick={toggleHeart}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default LoggedInContainer;
