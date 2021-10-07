import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import TitleFunc from "./Nasa/NasaTop";
import MidSect from "./Nasa/NasaMid";
import DescSect from "./Nasa/NasaThird";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Spinner } from "reactstrap";
import styled from 'styled-components';





// Very large rainbow spinner section
export const RainbowSpinner = (props) => {
  return(
    <div>
      <Spinner type='grow' color='red' children= '🔥'/>
      <Spinner type='grow' color='secondary' children= '❄'/>
      <Spinner type='grow' color='success' children= '🔥'/>
      <Spinner type='grow' color='danger' children= '❄'/>
      <Spinner type='grow' color='warning' children= '🔥'/>
      <Spinner type='grow' color='info' children= '❄'/>
      <Spinner type='grow' color='light' children= '🔥'/>
      <Spinner type='grow' color='dark' children= '❄'/>
      <Spinner type='grow' color='red' children= '🔥'/>
      <Spinner type='grow' color='secondary' children= '❄'/>
      <Spinner type='grow' color='success' children= '🔥'/>
      <Spinner type='grow' color='danger' children= '❄'/>
      <Spinner type='grow' color='warning' children= '🔥'/>
      <Spinner type='grow' color='info' children= '❄'/>
      <Spinner type='grow' color='light' children= '🔥'/>
      <Spinner type='grow' color='dark' children= '❄'/>
      <Spinner type='grow' color='red' children= '🔥'/>
      <Spinner type='grow' color='secondary' children= '❄'/>
      <Spinner type='grow' color='success' children= '🔥'/>
      <Spinner type='grow' color='danger'children= '❄'/>
      <Spinner type='grow' color='warning' children='🔥'/>
      <Spinner type='grow' color='info' children= '❄'/>
      <Spinner type='grow' color='light' children= '🔥'/>
      <Spinner type='grow' color='dark' children= '❄'/>
      <Spinner type='grow' color='red' children= '🔥'/>
      <Spinner type='grow' color='secondary' children= '❄'/>
      <Spinner type='grow' color='success' children= '🔥'/>
      <Spinner type='grow' color='danger' children= '❄'/>
      <Spinner type='grow' color='warning' children= '🔥'/>
      <Spinner type='grow' color='info' children= '❄'/>
      <Spinner type='grow' color='light' children= '🔥'/>
      <Spinner type='grow' color='dark' children= '❄'/>
      <Spinner type='grow' color='red' children= '🔥'/>
      <Spinner type='grow' color='secondary' children= '❄'/>
      <Spinner type='grow' color='success' children= '🔥'/>
      <Spinner type='grow' color='danger' children= '❄'/>
      <Spinner type='grow' color='warning'children= '🔥' />
      <Spinner type='grow' color='info' children= '❄'/>
   
    </div>
  )
}

const Body = styled.body`
background-color: black;
color: #BB8FCE;
`

function App() {


 
  return (
    <div className="App">

<Body>
<TitleFunc />
<MidSect />
<DescSect />

<RainbowSpinner />
</Body>
    </div>
  );
}

export default App;
