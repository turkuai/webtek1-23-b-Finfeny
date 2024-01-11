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
            <Container>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <Button onChange={() => setCount(count - 1)}>-</Button>
                    </Col>
                    <Col md="auto">
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

