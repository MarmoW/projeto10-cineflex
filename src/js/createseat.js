import {useState, useEffect} from 'react';
import React from 'react';
import styled from "styled-components";
import axios from "axios";
import ReactDOM from "react-dom";
import { Link, useParams } from "react-router-dom";

export default function CreateSeat(seat) {

    return(
        <Seats key={seat.id} disponivel={seat.isAvailable}><div>{seat.name}</div></Seats>
    )
}


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