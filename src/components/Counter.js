import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useState } from 'react';

function Counter(property) {
    
    const [count, setCount] = useState(0);

    function plus()
    {
        setCount(count + 1);
    }

    return (
        <div>
            <Container style={{paddingBottom: "15px"}}>
                <Row className="justify-content-md-center" style={{width: "fit-content", border: "1px solid  #c1c1c1", padding: "10px", borderRadius: "2px"}}>
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

