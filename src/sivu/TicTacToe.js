import React from "react";
import { Container } from "react-bootstrap";
import TicTacToeBoard from "../components/TicTacToeBoard";

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