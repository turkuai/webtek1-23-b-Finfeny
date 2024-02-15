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

let lastId = 4;

function reducer(state, action) {
  switch (action.type) {
    case "name":
      return { ...state, name: action.name };
    case "email":
      return { ...state, email: action.email };
    case "topic": {
      //console.log(action)
      const newItems = state.items.map(item => {
        if (item.id == action.id) {
          return { ...item, topic: action.value };
        } else {
          //console.log(action.id);
          return item;
        }
      })
      return { ...state, items: newItems };
    }
    case "grade": {
      //console.log(action)
      const newItems = state.items.map(item => {
        if (item.id == action.id) {
          return { ...item, grade: action.value };
        } else {
          console.log(action.id);
          return item;
        }
      })
      return { ...state, items: newItems };
    }
    case "newItem": {
      const newUsers = [...state.items, {
        id: lastId,
        topic: Topic.Math,
        grade: Grade.A
      }];
      lastId = lastId + 1;
      //console.log("ref:", ref.current);
      //console.log("newUsers:", newUsers);
      return { ...state, items: newUsers }
    }
    case "removeItem":
      const filterdUser = state.items.filter((element) => element.id != action.id);
      //console.log(filterdUser);
      return { ...state, items: filterdUser }
  }
}  