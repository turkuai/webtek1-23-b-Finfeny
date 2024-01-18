import React, { useState , useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Form from 'react-bootstrap/Form';

function RecipeItem({ name, amount }) {

    const [edit, setEdit] = useState(false);
    const toggle = () => setEdit(!edit);
    const [nameValue, setNameValue] = useState(name);
    const [amountValue, setamountValue] = useState(amount);

    return (
        <Container>
            <Row>
                {
                edit ?  <Col>
                            <Form.Control hidden={!edit} type="text" value={nameValue} onChange={(eventName) => {setNameValue(eventName.target.value)}}/>
                        </Col>
                        : <></>
                }
                {
                edit ?  <Col>
                            <Form.Control hidden={!edit} type="number" value={amountValue} onChange={(eventAmount) => {setamountValue(eventAmount.target.value)}}/>
                        </Col>
                        : <></>
                }
                <Col hidden={edit}>{nameValue}</Col>
                <Col style={{textAlign: "center"}} hidden={edit}>{amountValue}</Col>
                <Col>
                    <Button variant="primary" onClick={toggle} hidden={edit}>
                    <i class="bi bi-pencil-square"></i>
                    </Button>
                    <Button variant="success" onClick={toggle}  hidden={!edit}>
                    <i class="bi bi-check-square"></i>
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}

export default RecipeItem;