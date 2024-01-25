import React, { useState } from "react";
import { Container } from "react-bootstrap";

function TicTacToeCard({ currentSign, changeSign }) {
    const [sign, setSign] = useState("")

    return (
        <Container>
            <div
                onClick={() => {
                    
                    setSign(currentSign);
                    currentSign == "o" ?
                        changeSign("x") : changeSign("o");
                }}
                style={{ backgroundColor: "#875", height: "80px", paddingTop: "30px", marginLeft: "0px" }}
            >
                {sign}
            </div>
        </Container>
    )
}

export default TicTacToeCard;