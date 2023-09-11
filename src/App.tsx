import React, { useState } from "react";
import "./App.css";
import Header from "./Components/organisms/Header";
import Menubar from "./Components/organisms/Menubar";
import Tagline from "./Components/atoms/Tagline";
import DisplayCards from "./Components/molecules/DisplayCards";

const App: React.FC = () => {
  const [showDisplayCards, setShowDisplayCards] = useState(false);

  const handleShowDisplayCards = (show: boolean) => {
    setShowDisplayCards(show);
  };

  return (
    <>
      <Header />
      <Menubar onShowDisplayCards={handleShowDisplayCards} />
      {showDisplayCards && <DisplayCards />}
      {!showDisplayCards && <Tagline />}
    </>
  );
};

export default App;
