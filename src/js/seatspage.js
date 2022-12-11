import {useState, useEffect} from 'react';
import React from 'react';
import styled from "styled-components";
import axios from "axios";
import ReactDOM from "react-dom";
import { Link, useParams } from "react-router-dom";
import CreateSeat from "./createseat.js"

export default function SeatsPage({setUsername, setUsercpf, usercpf, username}) {
    const [seatoptions, setSeatoptions] = React.useState(undefined)
    const [selected, setSelected] = React.useState([])
    const { idsec } = useParams();
    const URL = `https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idsec}/seats`
    
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
    
    function saveUser(event) {
        event.preventDefault();
        console.log(username, usercpf);
    }

    return (
        <>
        <Header><p>Cineflex</p></Header>
        <PageContent>
            <SelectMovies><p>Selecione o(s) assento(s)</p></SelectMovies>
        <SeatsDiv>
            {seatoptions.seats.map((seat) =>  <Seats key={seat.id} disponivel={seat.isAvailable} data-test="seat"><div>{seat.name}</div></Seats>)}           
        </SeatsDiv>
        <Legenda>
            <DivLegendas><SeatsSelected /><div>Selecionado</div></DivLegendas>
            <DivLegendas><Seats disponivel={true}></Seats><div>Disponível</div></DivLegendas>
            <DivLegendas><Seats disponivel={false}></Seats><div>Indisponível</div></DivLegendas>
            
        </Legenda>
        <ReserveForm onSubmit={saveUser}>
            <p>Nome do comprador:</p>
            <ReserveInput type="text" placeholder="Digite seu nome..." value={username} onChange={(e) => setUsername(e.target.value)} required data-test="client-name"/>
            <p>CPF do comprador:</p>
            <ReserveInput type="text" placeholder="Digite seu CPF..." value={usercpf} onChange={(e) => setUsercpf(e.target.value)} required data-test="client-cpf"/>
            <ReserveButton type="submit" data-test="book-seat-btn">Reservar assento(s)</ReserveButton>
        </ReserveForm>
        </PageContent>
        <Footer data-test="footer">
        <SmallPoster src={seatoptions.movie.posterURL}/>
            <FooterDiv>
                <div>{seatoptions.movie.title}</div>
                <div>{seatoptions.day.weekday}-{seatoptions.name}</div>
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
    font-weight: Regular;
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
    font-weight: Regular;
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
    font-weight: Regular;
    Font-size: 24px;
    Line-height: 28px;
    Line-height: 100%;
    `
const PageContent = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    margin-top: 67px;
    margin-bottom: 122px;
    background-color: #ffffff
    `
const SeatsDiv = styled.div`
    display: flex;
    width: 100%;
    height: 207px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    padding-left: 17px;
    padding-right: 2px;
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
    background-color: ${props => props.disponivel ?'#C3CFD9' : '#FBE192'};
    border: solid 1px ${props => props.disponivel ?'#7B8B99' : '#F7C52B'};
    margin-right: 7px;
    text-align: center;
    box-sizing: border-box;
    padding-left: 3px;
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
    padding-top: 40px;
    padding-bottom: 40px;
    box-sizing: border-box;
    `
const ReserveForm = styled.form`
    display: flex;
    flex-direction: column;
    font-family: 'Roboto', sans-serif;
    font-weight: Regular;
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
    font-weight: Italic;
    width: 327px;
    height: 51px;
    border: solid 1px #D4D4D4;
    padding-left: 18px;
    box-sizing: border-box;
    border-radius: 3px;
    `
const Legenda = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-top: 16px;
    `
const SeatsSelected = styled.div`
    display: flex;
    justify-position: center;
    align-items: center;
    width: 24px;
    min-width: 24px;
    height: 26px;
    border-radius: 12px;
    background-color: #1AAE9E;
    border: solid 1px #0E7D71;
    margin-right: 7px;
    text-align: center;
    box-sizing: border-box;
    padding-left: 3px;
    `
const DivLegendas = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    font-weight: Regular;
    Font-size: 13px;
    Line-height: 15px;
    Line-height: 100%;
    color: #4E5A65;
    `
//selected.includes(seat.name) ? <SeatsSelected key={seat.id} disponivel={seat.isAvailable}><div>{seat.name}</div></SeatsSelected> : <Seats key={seat.id} disponivel={seat.isAvailable}><div>{seat.name}</div></Seats>})
//pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" placeholder="Digite seu CPF no formato: xxx.xxx.xxx-xx"