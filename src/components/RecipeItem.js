import React, { useState, useEffect, useReducer } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Counter from "./Counter";

function RecipeItem({ name, amount }) {
  const [edit, setEdit] = useState(false);
  const toggle = () => setEdit(!edit);
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    name: name,
    amount: amount,
  });

  return (
    <Container>
      <Row>
        {edit ? (
          <Col>
            <Form.Control
              hidden={!edit}
              type="text"
              value={state.name}
              onChange={(eventName) => {
                dispatch({ type: "updateName", payload: eventName.target.value });
              }}
            />
          </Col>
        ) : (
          <></>
        )}
        {edit ? (
          <Col>
            <Counter
              value={state.amount}
              onChange={(eventAmount) => {
                dispatch({ type: "updateAmount", payload: eventAmount });
              }}
            ></Counter>
          </Col>
        ) : (
          <></>
        )}
        <Col hidden={edit}>{state.name}</Col>
        <Col style={{ textAlign: "center" }} hidden={edit}>
          {state.amount}
        </Col>
        <Col md="auto">
          <Button
            variant={edit ? "success" : "primary"}
            onClick={toggle}
          >
            <i className={edit ? "bi bi-check-square" : "bi bi-pencil-square"}></i>
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

function reducer(state, action) {
  switch (action.type) {
    case "updateName":
      return { ...state, name: action.payload };
    case "updateAmount":
      return { ...state, amount: action.payload };
  }
}

export default RecipeItem;