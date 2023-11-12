import spotify_logo from "../assets/images/spotify_logo_white.svg";
import IconText from "../components/shared/IconText";
import { Icon } from "@iconify/react";
import TextWithHover from "../components/shared/TextWithHover";


const focusCardsData =[ 
    {
        title: "Peacefull Piano",
        desc: "Relax and indulge with beautiful piano pieces",
        imgUrl: "https://media.istockphoto.com/id/888275014/photo/focused-young-artist-playing-electric-piano.webp?b=1&s=170667a&w=0&k=20&c=Z9CS7YBhBUqRALc5hsFQqBynSnlSX7VxwLTD6sLheic="
    },
    {
        title: "Deep Focus",
        desc: "Keep calm and focus with this music",
        imgUrl: "https://plus.unsplash.com/premium_photo-1664382465438-023b318268e4?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c3R1ZHl8ZW58MHwwfDB8fHww"
    },
    {
        title: "Instrumental Study",
        desc: "Focus with soft study music in the background",
        imgUrl: "https://media.istockphoto.com/id/1163646379/photo/a-band-of-musicians-playing-bongo-and-sitar.jpg?s=1024x1024&w=is&k=20&c=_ZQ4TqXE25ZrZZqomo6si1dgv2NCtAQesOIuQRXZOeE="
    },
    {
        title: "Focus flow",
        desc: "Uptempo instrumental hip hop beats",
        imgUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d29ya3xlbnwwfDB8MHx8fDA%3D"
    },
    {
        title: "Beast to think to",
        desc: "Focus with deep techno and tech house",
        imgUrl: "https://images.unsplash.com/photo-1530352865347-3c2e277abefe?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG11c2ljJTIwYmVhdHN8ZW58MHwwfDB8fHww"
    }  
];

const spotifyPLaylistCardsData =[ 
    {
        title: "Reverb",
        desc: "Sit back and enjoy reverb remixes",
        imgUrl: "https://images.unsplash.com/photo-1630713815150-2c847025c1d9?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG9maXxlbnwwfDB8MHx8fDA%3D"
    },
    {
        title: "Hip Hop",
        desc: "Leave your seats and get on the floor with these dope tracks",
        imgUrl: "https://plus.unsplash.com/premium_photo-1682600101311-1121bc732450?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGlwJTIwaG9wfGVufDB8MHwwfHx8MA%3D%3D"
    },
    {
        title: "Retro",
        desc: "Good old days , good old songs",
        imgUrl: "https://images.unsplash.com/photo-1496293455970-f8581aae0e3b?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJldHJvJTIwbXVzaWN8ZW58MHwwfDB8fHww"
    },
    {
        title: "Disco",
        desc: "One-two-three-four , get on the dance floor",
        imgUrl: "https://media.istockphoto.com/id/931710220/photo/concert-party.webp?b=1&s=170667a&w=0&k=20&c=nqPSL5W7Sw0Al0S0yrOKTl1MkIGvO_5epMpkVR7R71I="
    },
    {
        title: "Rap hits",
        desc: "Feels so empty without this",
        imgUrl: "https://media.istockphoto.com/id/92026251/photo/hip-hop-musician.webp?b=1&s=170667a&w=0&k=20&c=ianQoNtBBjNWVnUNvvmwnK9WA277WGc8QbFhIxmTvO0="
    }  
];

const soundOfIndiaCardsData =[ 
    {
        title: "Classical",
        desc: "Sit back and enjoy vintage classical gems",
        imgUrl: "https://images.unsplash.com/photo-1479813183133-f2e9b38ed6c4?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9sbHl3b29kfGVufDB8MHwwfHx8MA%3D%3D"
    },
    {
        title: "Punjabi Hits",
        desc: "Leave your seats and get on the floor with these dope tracks",
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROc4-srrIgTlQPveSzqxjSmgPFD5ZvueVHrg&usqp=CAU"
    },
    {
        title: "90's Bollywood",
        desc: "Good old days , good old songs",
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUNlWLklxdutOKLMPnZ1ORWJYACee5AmRgiyqhI3Oh1dApYg7r_Z9yrqzjvhfgvvvjeSk&usqp=CAU"
    },
    {
        title: "Desi Hip-Hop",
        desc: "Krsna on mic and bringing some war",
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaHRCaUN9E9v-RKV13YrSKQMSfaNhl9ZDFaQ&usqp=CAU"
    },
    {
        title: "Sufi Songs",
        desc: "Bless your ears with these gems",
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTleAcSqTvfmI2ez2eFn3qcb4jV_RXSNZfh7A&usqp=CAU"
    }  
];

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
      <div className="h-full w-4/5 bg-app-black overflow-auto">
        <div className="navbar bg-black bg-opacity-30 w-full h-1/10 flex items-center justify-end">
            <div className="w-1/2 flex h-full">
                <div className="w-3/5 flex justify-around items-center">
                    <TextWithHover displayText={"Premium"}/>
                    <TextWithHover displayText={"Support"}/>
                    <TextWithHover displayText={"Download"}/>
                    <div className="h-1/2 border-r border-white"></div>
                </div>
                <div className="w-2/5 flex justify-around h-full items-center">
                     <div className="bg-green-400 h-2/3 px-8  rounded-full flex items-center justify-center font-semibold cursor-pointer">

                        <TextWithHover displayText={"Sign Up"}
                            targetLink={"/signup"}
                        />
                    </div>
                    <div className="bg-green-400 h-2/3 px-8 rounded-full flex items-center justify-center font-semibold cursor-pointer">

                        <TextWithHover displayText={"Log In"}
                            targetLink={"/login"}
                        />
                    </div>
                    
                    {/* <div >
                        Log in
                    </div> */}
                </div>
            </div>
        </div>
        <div className="content p-8 pt-0 overflow-auto">

            <PlaylistView titleText="Focus" cardsData={focusCardsData} />
            <PlaylistView titleText="Spotify Playlist" cardsData={spotifyPLaylistCardsData} />
            <PlaylistView titleText="Sound of India" cardsData={soundOfIndiaCardsData} />
        </div>
      </div>
    </div>
  );
};

const PlaylistView = ({titleText,cardsData}) => {
    return <div className="text-white mt-8">
        <div className="text-2xl font-semibold mb-5 cursor-pointer">{titleText}</div>
        <div className="w-full flex justify-between space-x-4">
            {
                // cards data will be an array
                cardsData.map(item=>{
                    return <Card title={item.title} desc={item.desc} imgUrl={item.imgUrl} />
                })
            
            }
        </div>
    </div>
};
const Card = ({title,desc,imgUrl}) => {
    return (<div className="bg-black bg-opacity-40 w-1/5 p-4 rounded-lg">
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

export default Home;
