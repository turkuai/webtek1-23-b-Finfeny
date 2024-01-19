import React, { useState , useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Counter from "./Counter";

function RecipeItem({ name, amount }) {

    const [edit, setEdit] = useState(false);
    const toggle = () => setEdit(!edit);
    const [nameValue, setNameValue] = useState(name);
    const [amountValue, setamountValue] = useState(amount);

    
    //<Form.Control hidden={!edit} type="number" value={amountValue} onChange={(eventAmount) => {setamountValue(eventAmount.target.value)}}/>

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
                            <Counter value={amountValue} onChange={(eventAmount) => {setamountValue(eventAmount), console.log(amountValue)}}></Counter>
                        </Col>
                        : <></>
                }
                <Col hidden={edit}>{nameValue}</Col>
                <Col style={{textAlign: "center"}} hidden={edit}>{amountValue}</Col>
                <Col md="auto">         
                    <Button variant={edit ? "success" : "primary"} onClick={toggle}>
                    <i class={edit ?  "bi bi-check-square" : "bi bi-pencil-square"}></i>
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}

export default RecipeItem;