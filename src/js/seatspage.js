import {useState, useEffect} from 'react';
import React from 'react';
import styled from "styled-components";
import axios from "axios";
import ReactDOM from "react-dom";

export default function SeatsPage() {
    const [seatoptions, setSeatoptions] = React.useState(undefined)
    const URL = `https://mock-api.driven.com.br/api/v8/cineflex/showtimes/240/seats`
    useEffect(() => {
		const request = axios.get(URL);

		request.then(resposta => {
		    setSeatoptions(resposta.data);
		});
        console.log(seatoptions)
	}, []);

    if(seatoptions === undefined){
        console.log("carregando")
        return 
    }
    
    return (
        <>
        <Header><p>Cineflex</p></Header>
        <PageContent>
            <SelectMovies><p>Selecione o(s) assento(s)</p></SelectMovies>
        </PageContent>
        <SeatsDiv>
            {seatoptions.seats.map((seat) => <Seats key={seat.id}>{seat.name}</Seats>)}            
        </SeatsDiv>
        <ReserveForm>
            <p>Nome do comprador:</p>
            <ReserveInput type="text" placeholder="Digite seu nome..."/>
            <p>CPF do comprador:</p>
            <ReserveInput type="text" placeholder="Digite seu CPF..."/>
            <ReserveButton>Reservar assento(s)</ReserveButton>
        </ReserveForm>
        <Footer>
        <SmallPoster src={seatoptions.movie.posterURL}/>
            <FooterDiv>
                <p>{seatoptions.movie.title}</p>
                <p>{seatoptions.day.weekday}-{seatoptions.day.date}</p>
            </FooterDiv>
        </Footer>
        
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
    Font-style: Regular;
    Font-size: 34px;
    Line-height: 40px;
    Line-height: 100%;
    `
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
    Font-style: Regular;
    Font-size: 26px;
    Line-height: 30px;
    Line-height: 100%;
    color: #293845
    `
const SelectMovies =styled.div`
    display: flex;
    align-items:center;
    justify-content: center;
    width: 100%;
    height: 110px;
    color: #293845;
    font-family: 'Roboto', sans-serif;
    Font-style: Regular;
    Font-size: 24px;
    Line-height: 28px;
    Line-height: 100%;
    `
const PageContent = styled.div`
    display: flex;
    align-items:center;
    justify-content: center;
    flex-direction: column;
    margin-top: 67px;
    background-color: #ffffff
    `
const SeatsDiv = styled.div`
    display: flex;
    width: 100%;
    height: 207px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    padding-left: 24px;
    padding-right: 17px;
    box-sizing: border-box
    `
const Seats = styled.div`
    display: flex;
    justify-position: center;
    align-items: center;
    width: 24px;
    min-width: 24px;
    height: 26px;
    border-radius: 12px;
    background-color: #C3CFD9;
    border: solid 1px #808F9D;
    margin-right: 7px;
    text-align: center;
    `
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
    border-radius: 4px;
    `
const FooterDiv = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 14px;
    padding-bottom: 14px;
    box-sizing: border-box;
    `
const ReserveForm = styled.form`
    display: flex;
    flex-direction: column;
    font-family: 'Roboto', sans-serif;
    Font-style: Regular;
    Font-size: 18px;
    Line-height: 21px;
    Line-height: 100%;
    margin-left: 14px;
    `
const ReserveButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border: none;
    height: 45px;
    width: 225px;
    background-color: #E8833A;
    margin-top: 57px; 
    color: #FFFFFF;
    margin-left:  58px;
    border-radius: 3px;
    `
const ReserveInput = styled.input`
    display: flex;
    font-family: 'Roboto', sans-serif;
    Font-style: Italic;
    width: 327px;
    height: 51px;
    border: solid 1px #D4D4D4;
    padding-left: 18px;
    box-sizing: border-box;
    border-radius: 3px;
    `