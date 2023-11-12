import { useState } from "react";
import { Howl, Howler } from "howler";
import spotify_logo from "../assets/images/spotify_logo_white.svg";
import IconText from "../components/shared/IconText";
import { Icon } from "@iconify/react";
import TextWithHover from "../components/shared/TextWithHover";
import LoggedInContainer from "../containers/LoggedInContainer";


const focusCardsData =[ 
    {
        title: "Peacefull Piano",
        desc: "Relax and indulge with beautiful piano pieces",
        imgUrl: "https://media.istockphoto.com/id/888275014/photo/focused-young-artist-playing-electric-piano.webp?b=1&s=170667a&w=0&k=20&c=Z9CS7YBhBUqRALc5hsFQqBynSnlSX7VxwLTD6sLheic="
    },
    {
        title: "Punjabi Hits",
        desc: "Leave your seats and get on the floor with these dope tracks",
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROc4-srrIgTlQPveSzqxjSmgPFD5ZvueVHrg&usqp=CAU"
    },
    {
        title: "Instrumental Study",
        desc: "Focus with soft study music in the background",
        imgUrl: "https://media.istockphoto.com/id/1163646379/photo/a-band-of-musicians-playing-bongo-and-sitar.jpg?s=1024x1024&w=is&k=20&c=_ZQ4TqXE25ZrZZqomo6si1dgv2NCtAQesOIuQRXZOeE="
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

const spotifyPLaylistCardsData =[ 
    {
        title: "Classical",
        desc: "Sit back and enjoy vintage classical gems",
        imgUrl: "https://media.istockphoto.com/id/92026251/photo/hip-hop-musician.webp?b=1&s=170667a&w=0&k=20&c=ianQoNtBBjNWVnUNvvmwnK9WA277WGc8QbFhIxmTvO0="
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

const soundOfIndiaCardsData =[ 
    {
        title: "Classical",
        desc: "Sit back and enjoy vintage classical gems",
        imgUrl: "https://media.istockphoto.com/id/92026251/photo/hip-hop-musician.webp?b=1&s=170667a&w=0&k=20&c=ianQoNtBBjNWVnUNvvmwnK9WA277WGc8QbFhIxmTvO0="
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
        <LoggedInContainer currentActiveScreen="home"  >

            <PlaylistView titleText="Focus" cardsData={focusCardsData} />
            <PlaylistView titleText="Spotify Playlist" cardsData={spotifyPLaylistCardsData} />
            <PlaylistView titleText="Sound of India" cardsData={soundOfIndiaCardsData} />
        </LoggedInContainer>
    )
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
//checking commit
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
