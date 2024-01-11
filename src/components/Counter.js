import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

function Counter(property, muutos) {
    return (
        <div>
            <Container>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <Button>-</Button>
                    </Col>
                    <Col id="row1" md="auto">
                        {property.count}
                    </Col>
                    <Col md="auto">
                        <Button>+</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Counter;