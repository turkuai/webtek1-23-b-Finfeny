import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function RecipeItem({ name, amount }) {
    return (
        <Container>
            <Row>
                <Col>{name}</Col>
                <Col>{amount}</Col>
            </Row>
        </Container>
    );

}

export default RecipeItem;