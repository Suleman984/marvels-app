import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MD5 } from 'crypto-js';
import "./App.css";
import Header from "./Components/organisms/Header";
import Menubar from "./Components/organisms/Menubar";
import { Poster } from './Components/molecules/Poster';
import ComicSection from './Components/molecules/ComicSection';
import { Box } from '@mui/material';
import Video from './Components/atoms/Video';
import { PosterTypes } from './Interfaces/PosterInterfaces';

const App: React.FC = () => {
  const [Characters, setCharacters] = useState<any[]>([]);
  const [Movies, setMovies] = useState<any[]>([]);
  const [Comics, setComics] = useState<any[]>([]);
  const [isMenuHovered, setIsMenuHovered] = useState(false);
 
  const Poster1:PosterTypes={
    mainText:"Available Now",
    mainHeading:"NEW ON MARVEL UNLIMITED",
    text:"Read these plus 30,000+ digital comics for $9.99 a month!"
  }
  const Poster2:PosterTypes={
    mainText:"ON SALE 9/13",
    mainHeading:"NEW COMICS THIS WEEK",
    text:"Check out the newest Marvel comics coming out this week!"
  }
  useEffect(() => {
    const publicKey = 'fbae50a994a9c88e0db414c5488142de';
    const privateKey = 'bf8510677df0531b2544c2e3c1cf1396979ff23f';
    const ts = new Date().getTime().toString();
    const hash = MD5(ts + privateKey + publicKey).toString();

    const apiUrl = `https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`;

    axios
      .get(apiUrl)
      .then((response) => {
        const data = response.data.data;
        console.log(response.data)
        setCharacters(data.results);
      })
      .catch((error) => {
        console.error('Error fetching data from Marvel API:', error);
      });
  }, []);

  return (
    <>
      <Header />
      <Menubar />
      {/* <Tagline/>
      <Slider1/> */}
      <div>
        <Poster poster={Poster1}/>
        <br />
        <ComicSection />
      </div>
      <Box style={{width:'100%',height:'100vh'}}>
        <Video/>
      </Box>
    </>
  );
};

export default App;
