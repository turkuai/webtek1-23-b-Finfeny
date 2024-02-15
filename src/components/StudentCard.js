import React, { useReducer } from "react";
import { useRef } from "react";
import { Topic, TopicList, Grade, GradeList, defaultGradesData } from "../sivu/StudentGrades";
import { Container } from 'react-bootstrap';
import StudentCardViewer from "./StudentCardViewer"
import StudentCardEditor from "./StudentCardEditor"

export default function StudentCard() {

  const [state, dispatch] = useReducer(reducer, {
    name: "",
    email: "",
    items: [
      {
        id: 2,
        topic: Topic.Literature,
        grade: Grade.C
      },
      {
        id: 3,
        topic: Topic.Biology,
        grade: Grade.F
      },
      {
        id: 1,
        topic: Topic.Math,
        grade: Grade.A
      },],
  });

  return (
    <Container>
      <StudentCardEditor
        state={state}
        dispatch={dispatch}
      />
      <StudentCardViewer
        state={state}
      />
    </Container>
  );
}

function reducer(state, action) {
  switch (action.type) {
    case "name":
      return { ...state, name: action.name };
    case "email":
      return { ...state, email: action.email };
    case "item":
      //console.log(action)
    const newItems = state.items.map(item => {
        if (item.id == action.id) {
          return { ...item, topic: action.value };
        } else {
          console.log(action.id);
          return item;
        }
      })
      return { ...state, items: newItems};
  }
}  