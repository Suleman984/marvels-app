import React, { useEffect, useState } from "react";
import axios from "axios";
import { MD5 } from "crypto-js";
import "./App.css";
import Menubar from "./Components/organisms/Menubar";
import { Poster } from "./Components/molecules/Poster";
import ComicSection from "./Components/molecules/ComicSection";
import { Box } from "@mui/material";
import Video from "./Components/atoms/Video";
import { PosterTypes } from "./Interfaces/PosterInterfaces";
import { VideoDesc } from "./Interfaces/videoDescription";
import { Footer } from "./Components/organisms/Footer";
import VideoTabs from "./Components/atoms/VideoTabs";
import Heading from "./Components/atoms/heading";
import { ComicAddresses } from "./Components/ImageAddresses";
import { StoriesAddresses } from "./Components/ImageAddresses";
import { SeriesAddresses } from "./Components/ImageAddresses";

const App=()=>{
  const [Comics, setComics] = useState<any[]>([]);
  const [Series, setSeries] = useState<any[]>([]);
  const [Stories, setStories] = useState<any[]>([]);
  const [comicsData,setComicsData]=useState<any[]>([]);
  const Poster1: PosterTypes = {
    imgSrc: "https://cdn.marvel.com/content/1x/mulogo_lob_log_eye_01_1.png",
    mainText: "Available Now",
    mainHeading: "NEW ON MARVEL UNLIMITED",
    text: "Read these plus 30,000+ digital comics for $9.99 a month!",
    backgroundImage: "./Assets/marvelbackground.jpg",
  };
  const Poster2: PosterTypes = {
    imgSrc: "https://cdn.marvel.com/content/1x/mulogo_lob_log_eye_01_1.png",
    mainText: "ON SALE 9/13",
    mainHeading: "NEW COMICS THIS WEEK",
    text: "Check out the newest Marvel comics coming out this week!",
    backgroundImage: "./Assets/poster.jpg",
  };
  const VideoDetails: VideoDesc = {
    mainText: "TRAILERS & EXTRAS",
    videoTitle: "Aug. `X-Force Vol.2` Themed Update! | Marvel Future Fight",
    descText: `Check out Cable, Domino and Stryfe with new powerful X-Force Vol.2 \n themed uniforms as well as the newly arisen super villain Omega Red`,
  };
  useEffect(() => {
    const publicKey = "fbae50a994a9c88e0db414c5488142de";
    const privateKey = "bf8510677df0531b2544c2e3c1cf1396979ff23f";
    const ts = new Date().getTime().toString();
    const hash = MD5(ts + privateKey + publicKey).toString();
    const apiUrl = `https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
    const fetchComics=`https://gateway.marvel.com:443/v1/public/series?ts=${ts}&apikey=${publicKey}&hash=${hash}
    `

    axios
    .get(apiUrl)
    .then((response) => {
      const data = response.data.data;
      const comicsData = data.results[0].comics.items;
      const seriesData = data.results[0].series.items;
      const storiesData = data.results[0].stories.items;
        setComics(comicsData);
        setSeries(seriesData);
        setStories(storiesData);
        console.log(response.data)
    })
    .catch((error) => {
      console.error("Error fetching data from Marvel API:", error);
    });
    axios.get(fetchComics).then((response)=>{
      const comicsData=response.data.data;
      const ComicFromApi=comicsData.results[10].comics.items;
      setComicsData(ComicFromApi);
    }).catch((error)=>{console.log("error"+error)})
}, []);
  
  return (
    
    <>
    {/* <LoginForm/> */}
       <Box height='8%'>
      <Heading />
      </Box>
      <Menubar
  comics={Comics}
  series={Series}
  stories={Stories}
  comicImages={ComicAddresses}
  storyImages={StoriesAddresses} 
  seriesImages={SeriesAddresses}
/>

      <Box maxWidth='100%'>
        <Poster poster={Poster1} cards={Comics}/>
        <br />
        <ComicSection comics={Comics}/>
      </Box>
      <Box style={{ width: "100%", height: "60vh" }}>
        <Video details={VideoDetails} />
      </Box>
      <Box className="custom-tabs" style={{ width: "90%", height: "250px",margin:'auto' }}>
        <VideoTabs />
      </Box>
      <Box>
        <Poster poster={Poster2} cards={Comics} />
        <br />
      </Box>
      <Box style={{width:'100%',height:'100vh'}}>
        <Footer/>
      </Box> 
    </>
  );
};

export default App;
