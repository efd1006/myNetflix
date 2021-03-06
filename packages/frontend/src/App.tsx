import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routing from "./config/routing/Routing";
import  { createGlobalStyle } from "styled-components";
import VideoPlayerComponent from "./features/videoPlayer/VideoPlayerComponent"

const GlobalStyle = createGlobalStyle`
  body{
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
    user-select: none;
  }
  ul{
    padding: 0;
    margin: 0;
  }
  li{
    margin: 0;
    padding: 0;
  }
  button{
    font-family: 'Montserrat', sans-serif;
  }
  *, *::before, *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
  }
`;

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
          <Routing />
      <VideoPlayerComponent small="small"/>
    </BrowserRouter>
  );
};

export default App;
