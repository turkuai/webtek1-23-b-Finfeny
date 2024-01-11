import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useState } from 'react';
import "./Counter.css";

function Counter(property) {
    
    const [count, setCount] = useState(0);

    function plus()
    {
        setCount(count + 1);
    }

    return (
        <div>
            <Container id="container">
                <Row id="row">
                    <Col md="auto">
                        <Button onClick={() => setCount(count - 1)}>-</Button>
                    </Col>
                    <Col md="auto" style={{paddingInline: "30px"}}>
                        {count}
                    </Col>
                    <Col md="auto">
                        <Button onClick={plus}>+</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Counter;
