import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MD5 } from 'crypto-js';
import "./App.css";
import Header from "./Components/organisms/Header";
import Menubar from "./Components/organisms/Menubar";
import Tagline from "./Components/atoms/Tagline";
import DisplayCards from "./Components/molecules/DisplayCards";
import { Slider1 } from "./Components/organisms/Slider1";
import PosterBackground from './Components/atoms/PosterLogo';
import { Poster } from './Components/molecules/Poster';
import CardImages from './Components/atoms/CardImages';
import ComicSection from './Components/molecules/ComicSection';
import { Box } from '@mui/material';

const App: React.FC = () => {
  const [Characters, setCharacters] = useState<any[]>([]);
  const [Movies, setMovies] = useState<any[]>([]);
  const [Comics, setComics] = useState<any[]>([]);
  const [isMenuHovered, setIsMenuHovered] = useState(false);

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
        <Poster />
        <br />
        <ComicSection />
      </div>
    </>
  );
};

export default App;
