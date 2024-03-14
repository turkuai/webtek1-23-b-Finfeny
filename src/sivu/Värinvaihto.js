import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function Värinvaihto() {

  const [color, setColor] = useState("green");

  return(
    <Container>
      <div id="colorbox" style={{ backgroundColor: color, padding: "30px", textAlign: "center", width: "fit-content", marginBlock: "40px" }}>green</div>
      <button onClick={() => {
        const newColor = color == "green" ? "red" : "green";
        setColor(newColor);
  
//      if (color == "green") {
//        setColor("red")
//      }
//      else {
//        setColor("green")
//      }

      }}>Vaihda väriä</button>
    </Container>
  )
}