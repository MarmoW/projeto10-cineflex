import {useState, useEffect} from 'react';
import React from 'react';
import styled from "styled-components";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import ReactDOM from "react-dom";


export default function SectionPage() {
    const  [infosections, letInfosections] = React.useState(undefined)
    const { id } = useParams();
    let URL = `https://mock-api.driven.com.br/api/v8/cineflex/movies/${id}/showtimes`

    useEffect(() => {
		const request = axios.get(URL);

		request.then(resposta => {
		    letInfosections(resposta.data);
		});
        console.log(infosections)
	}, []);

    if(infosections === undefined){
        console.log("carregando")
        return 
    }
    console.log(infosections)
    return(
    <>
    <Header><p>Cineflex</p></Header>
    <PageContent>
      <SelectMovies><p>Selecione o horário</p></SelectMovies>
    {infosections.days.map((days) => 
    <MovieSections key={days.id} data-test="movie-day">
    <p>{days.weekday} - {days.date}</p>
    <ButtonDiv>
        {days.showtimes.map((times) => <Link to={`/assentos/${times.id}/`} key={times.id} data-test="showtime" ><PickTime> {times.name}</PickTime></Link>)}
    </ButtonDiv>
    </MovieSections>  
    )}
    </PageContent>
    <Footer data-test="footer">
        <SmallPoster src={infosections.posterURL}/>
        <p>{infosections.title}</p>
    </Footer>
    </>

    )

}
const PageContent = styled.div`
    display: flex;
    align-items:flex-start;
    justify-content: center;
    flex-direction: column;
    margin-top: 67px;
    margin-bottom: 117px;
    background-color: #ffffff`
const SelectMovies =styled.div`
    display: flex;
    align-items:center;
    justify-content: center;
    width: 100%;
    height: 110px;
    color: #293845;
    font-family: 'Roboto', sans-serif;
    font-weight: Regular;
    Font-size: 24px;
    Line-height: 28px;
    Line-height: 100%;`
const MovieSections = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    Font family: Roboto;
    font-weight: Regular;
    Font-size: 20px;
    Line-height: 23px;
    Line-height: 100%;
    margin-left: 24px;`
const Footer = styled.div`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 117px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    background-color: #9EADBA;
    box-sizing: border-box;
    padding-top: 14px;
    padding-bottom: 14px;
    padding-left: 10px;
    font-family: 'Roboto', sans-serif;
    font-weight: Regular;
    Font-size: 26px;
    Line-height: 30px;
    Line-height: 100%;
    color: #293845`
const SmallPoster = styled.img`
    flex: wrap;
    justify-content: center;
    align-items: center;
    width: 64px;
    min-Width: 64px;
    Height: 89px;
    background-color: pink;
    margin-right: 14px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;`
const PickTime = styled.button`
    width: 83px;
    height: 42px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    font-weight: Regular;
    Font-size: 18px;
    Line-height: 21px;
    Line-height: 100%;
    color: #FFFFFF;
    background-color: #E8833A;
    border-radius: 3px;
    border: none;
    margin-right: 9px;
    margin-top: 22px;
    margin-bottom: 23px;
    text-decoration: none;`
const ButtonDiv = styled.div`display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    a {text-decoration: none;}`
const Header = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 67px;
    background-color: #C3CFD9;
    color: #E8833A;
    font-family: 'Roboto', sans-serif;
    font-weight: Regular;
    Font-size: 34px;
    Line-height: 40px;
    Line-height: 100%;`



    /*
<MovieSections>
    <p>Quinta-feira - 24/06/2021</p>
    <ButtonDiv>
        <PickTime> 15:00</PickTime>
        <PickTime> 17:00</PickTime>
    </ButtonDiv>
</MovieSections>

*/

