import React from "react";
import { Container } from "react-bootstrap";
import { useState } from "react";
import TicTacToeBoard from "../components/TicTacToeBoard";
import TicTacToeCard from "../components/TicTacToeCard";

function TicTacToe()
{

    return(
        <Container>
            <br/>
            <h2>
                Moi
            </h2>
            <TicTacToeBoard/>
        </Container>
    )
}

export default TicTacToe;