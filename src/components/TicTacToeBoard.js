import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import TicTacToeCard from "./TicTacToeCard";
import { useState } from "react";

const rowStyle={height: "100px", width: "500px", textAlign: "center", padding: "0"}

function TicTacToeBoard()
{
    const [currentSign, setCurrentSign] = useState("x")

    return(
        <Container>
            <Row style={rowStyle}>
                <Col><TicTacToeCard currentSign={currentSign} changeSign={setCurrentSign}/></Col><Col><TicTacToeCard currentSign={currentSign} changeSign={setCurrentSign}/></Col><Col><TicTacToeCard currentSign={currentSign} changeSign={setCurrentSign}/></Col>
            </Row>
            <Row style={rowStyle}>
                <Col><TicTacToeCard currentSign={currentSign} changeSign={setCurrentSign}/></Col><Col><TicTacToeCard currentSign={currentSign} changeSign={setCurrentSign}/></Col><Col><TicTacToeCard currentSign={currentSign} changeSign={setCurrentSign}/></Col>
            </Row>
            <Row style={rowStyle}>
                <Col><TicTacToeCard currentSign={currentSign} changeSign={setCurrentSign}/></Col><Col><TicTacToeCard currentSign={currentSign} changeSign={setCurrentSign}/></Col><Col><TicTacToeCard currentSign={currentSign} changeSign={setCurrentSign}/></Col>
            </Row>
        </Container>
    )
}

export default TicTacToeBoard;