import {useState, useEffect} from 'react';
import React from 'react';
import styled from "styled-components";
import axios from "axios";
import ReactDOM from "react-dom";

export default function SucessPage({usercpf, username}) {

    return(
        <>
        <Header><p>Cineflex</p></Header>
        <PageContent>
        <OrderOk>Pedido feito com sucesso!</OrderOk>
        <div data-test="movie-info">
        <SubTittle>Filme e sessão</SubTittle>
        <OrderInfos>Enola Holmes</OrderInfos>
        <OrderInfos>24/06/2021 15:00</OrderInfos>
        </div>
        <div data-test="seats-info">
        <SubTittle>Ingressos</SubTittle>
        <OrderInfos> Assento 16</OrderInfos>
        </div>
        <div data-test="client-info">
        <SubTittle>Comprador</SubTittle>
        <OrderInfos>Marcelinho</OrderInfos>
        <OrderInfos>2020202020</OrderInfos>
        </div>
        <ConfirmButton data-test="go-home-btn">Voltar pra Home</ConfirmButton>
        </PageContent>
        </>

    )

}

const PageContent = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    margin-top: 67px;
    margin-bottom: 122px;
    padding-left: 20px;
    background-color: #ffffff
    `
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
const OrderOk = styled.div`
    display: flex;
    width: 100%;
    height: 80px;
    font-family: 'Roboto', sans-serif;
    font-weight: Bold;
    Font-size: 24px;
    Line-height: 28px;
    Line-height: 100%;
    color:#247A6B;
    box-sizing: border-box;
    padding-top: 30px;
    padding-right: 100px;
    padding-left: 76px;

    `
const SubTittle = styled.div`
    display: flex;
    flex-direction: column;
    Font-weight: Bold;
    Font-size: 24px;
    Line-height: 28px;
    Line-height: 100%;
    Text-Align: Left;
    Vertical-align: Center;
    font-family: 'Roboto', sans-serif;
    margin-bottom: 12px;
    margin-top: 30px;
    `
const OrderInfos = styled.div`
    display: flex;
    font-family: 'Roboto', sans-serif;
    font-weight: normal;
    Font-size: 22px;
    Line-height: 26px;
    Line-height: 100%;
    Text-align: Left;
    Vertical-align: Center;
    margin-top: 6px;
    
    `
const ConfirmButton = styled.button`
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
    margin-left:  38px;
    border-radius: 3px;
    `