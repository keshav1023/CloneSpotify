import { useState } from "react";
import {useNavigate} from "react-router-dom";
import spotify_logo from "../assets/images/spotify_logo_white.svg";
import IconText from "../components/shared/IconText";
import { Icon } from "@iconify/react";
import TextWithHover from "../components/shared/TextWithHover";
import TextInput from "../components/shared/TextInput";
import CloudinaryUpload from "../components/shared/CloudinaryUpload";
import {makeAuthenticatedPOSTResquest} from "../utils/serverHelper"

const UploadSong = () => {

    const [name, setName] = useState("");
    const [thumbnail, setThumbnail] = useState("");
    const [playlistUrl, setPlaylistUrl] = useState("");
    const [uploadedSongFileName, setUploadedSongFileName] = useState();
    const navigate = useNavigate();

    const submitSong = async () => {
        const data = {name,thumbnail, track:playlistUrl};
        const response = await makeAuthenticatedPOSTResquest(
            "/song/create", 
            data
        );
        if(response.err){
            alert("Could not upload song");
            return;
        }
        alert("Success !!!");
        navigate("/home")
    };

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
        <div className="content p-8 pt-0 overflow-auto">
            <div className="text-2xl font-semibold mb-5 text-white mt-8">
                Upload Your Music
            </div>
            <div className="w-2/3 flex space-x-3">
                <div className="w-1/2">
                    <TextInput
                        label="Song name"
                        labelClassName="text-white"
                        placeholder="Name"
                        value={name}
                        setValue={setName}
                     />
                </div>
                <div className="w-1/2">
                    <TextInput
                        label="Song thumbnail"
                        labelClassName="text-white"
                        placeholder="Thumbnail"
                        value={thumbnail}
                        setValue={setThumbnail}    
                     />
                </div>
            </div>
                <div className="py-5">
                {uploadedSongFileName ? (
                    <div className="bg-white rounded-full p-3 w-1/3">{uploadedSongFileName.substring(0,35)}...
                    </div>
                ) :(
                    <CloudinaryUpload 
                        setUrl={setPlaylistUrl}
                        setName={setUploadedSongFileName}
                    />
                )}
                </div>
                <div className="bg-white w-40 rounded-full flex justify-center items-center p-4 cursor-pointer font-semibold"
                    onClick={submitSong}
                >
                    Submit Song
                </div>
        </div>
      </div>
    </div>
  );
};



export default UploadSong;
