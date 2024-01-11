import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function App() {
    const message = "Hello class!"

    return (
        <>
            <div>
                <Container className="text-center py-2">
                    <Row>
                        <Col>
                            <h1>{message}</h1>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default App;
