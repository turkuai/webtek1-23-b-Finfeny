import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Etusivu()
{
    return(
            <div className="header" style={{backgroundColor: "black", height: "40px", paddingInline: "15px", padding: "7px"}}>
                <Link className="Link me-3" to="/Etusivu">Etusivu</Link>
                <Link className="Link me-3" to="/Ravintola">Ravintola</Link>
                <Link className="Link me-3" to="/Meistä">Meistä</Link>
                <Link className="Link me-3" to="/TicTacToe">TicTacToe</Link>
                <Link className="Link me-3" to="/StudentCard">StudentCard</Link>
                <Link className="Link me-3" to="/Värinvaihto">Värinvaihto</Link>
            </div>
    )
}

export default Etusivu;