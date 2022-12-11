import React from "react"
import styled from "styled-components"
import axios from "axios"
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import MainPage from "./js/mainpage.js"
import SectionPage from "./js/sectionpage.js";
import SeatsPage from "./js/seatspage.js";
import SucessPage from "./js/sucesspage.js";

function App() {
  const [username, setUsername] = React.useState("")
  const [usercpf, setUsercpf] = React.useState("")
  const [secinfo, setSecinfo] = React.useState(undefined)
  const [yourseats, setYourseats] = React.useState([])
  const [seatsnum, setSeatsnum] = React.useState([])


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/sessoes/:id/" element={<SectionPage setUsername={setUsername} setUsercpf={setUsercpf} usercpf={usercpf} username={username}/>} />
        <Route path="/assentos/:idsec/" element={<SeatsPage seatsnum={seatsnum} setSeatsnum={setSeatsnum} setUsername={setUsername} setUsercpf={setUsercpf} usercpf={usercpf} username={username} setSecinfo={setSecinfo} setYourseats={setYourseats} yourseats={yourseats}/>}/>
        <Route path="/sucesso" element={<SucessPage usercpf={usercpf} username={username} secinfo={secinfo} yourseats={yourseats} seatsnum={seatsnum}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
