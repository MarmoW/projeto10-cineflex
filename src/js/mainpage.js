import {useState, useEffect} from 'react';
import React from 'react';
import styled from "styled-components";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import ReactDOM from "react-dom";
//import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";


export default function MainPage() {
    const [movieslist, setMovieslist] = React.useState(undefined)
    

    useEffect(() => {
		const request = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies");
        
		request.then(resposta => {
		    setMovieslist(resposta.data);
		});
        console.log(movieslist)
	}, []);


    if(movieslist === undefined){
        console.log("carregando")
        return 
    }

    return (
    <>
        <Header><p>Cineflex</p></Header>
        <PageContent>
            <SelectMovies><p>Selecione o filme</p></SelectMovies>
        
        <MoviesDiv>
            {movieslist.map((movie) => 
            <Link key={movie.id} to={`/sessoes/${movie.id}`}>
                <Movies data-test="movie">
                    <MoviePoster src={movie.posterURL} alt={movie.title}/>
                </Movies>
            </Link>     )}
                 
        </MoviesDiv>
        </PageContent>
    </>

    )
}

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
const PageContent = styled.div`
    display: flex;
    align-items:center;
    justify-content: center;
    flex-direction: column;
    margin-top: 67px;
    background-color: #E5E5E5`
const MoviesDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    flex-basis: 100%;`
const Movies = styled.div`
    display: flex;
    flex: wrap;
    justify-content: center;
    align-items: center;
    width: 145px;
    min-Width: 145px;
    Height: 209px;
    background-color: #ffffff;
    margin-left: 15px;
    margin-top: 20px;
    margin-right: 15px;
    margin-bottom: 20px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;`
const MoviePoster = styled.img`
    display: flex;
    width: 129px;
    height: 193px;`
