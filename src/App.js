import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Counter from "./components/Counter";
import { useState } from "react";

function App() {
    const message1 = "Hello class!"
    const message2 = "mornig!"
    const showMessage = true
    
    return (
        <>
            <div>
                <Container className="text-center py-2">
                    <Row>
                        <Col>
                            <h1>{showMessage ? message1 : message2}</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Counter count={2}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Counter count={2}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Counter count={2}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Counter count={2}/>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}
export default App;