import React from "react"
import styled from "styled-components"
import axios from "axios"
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import MainPage from "./js/mainpage.js"
import SectionPage from "./js/sectionpage.js";
import SeatsPage from "./js/seatspage.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/sessoes/:id/" element={<SectionPage />}/>
        <Route path="/assentos/:idsec/" element={<SeatsPage />}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
