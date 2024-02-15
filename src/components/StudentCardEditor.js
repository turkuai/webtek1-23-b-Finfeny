import React from "react";
import { useRef } from "react";
import { Topic, TopicList, Grade, GradeList, defaultGradesData } from "../sivu/StudentGrades";

export default function StudentCardEditor({ state, dispatch }) {

    const ref = useRef(4);

    /*function setTopic(id, value) {
        //console.log("setTopic:", value);

        const newUsers = users.map((item) => {
            if (item.id == id) {
                return { ...item, topic: value };
            } else {
                return item;
            }
        });

        setUsers(newUsers);
    }
    

    function setGrade(id, value) {
        //console.log("setGrade:", value);

        const newUsers = users.map((item) => {
            if (item.id == id) {
                return { ...item, grade: value };
            } else {
                return item;
            }
        });

        setUsers(newUsers);
    }
    

    function handleAddNewUser() {
        const newUsers = [...users, {
            id: ref.current,
            topic: Topic.Math,
            grade: Grade.A
        }];
        ref.current = ref.current + 1;
        //console.log("ref:", ref.current);
        //console.log("newUsers:", newUsers);
        setUsers(newUsers)
    }
    */

    function mapItem(item) {
        return (
            <div key={item.id}>
                &#x2049;
                <select value={item.topic} onChange={(event) => {
                    dispatch({ type: "topic", id: item.id, value: event.target.value});
                    console.log(event.target.value)
                }} style={{ margin: "7px" }}>
                    {
                        TopicList.map(topic => <option value={topic}>{topic}</option>)
                    }
                </select>
                <select value={item.grade} onChange={(event) => dispatch({ type: "grade", id: item.id, value: event.target.value})} style={{ margin: "7px" }}>
                    {
                        GradeList.map(grade => <option value={grade}>{grade}</option>)
                    }
                </select>
                <button onClick={(event) => dispatch({ type: "removeItem", id: item.id})
                    //const filterdUser = state.items.filter((element) => element.id != item.id);
                    //console.log(filterdUser);
                    //setUsers(filterdUser);
                }
                    style={{ margin: "7px" }}>-</button>
            </div>
        )
    }

    return (
        <div style={{ padding: "20px", borderStyle: "solid", borderWidth: "2px", marginTop: "15px" }}>
            <h2>Editor</h2>
            <br />
            <p>Name:</p>
            <input type="text" value={state.name} onChange={(event) => dispatch({ type: 'name', name: event.target.value })}></input>
            <br />
            <br />
            <p>Email:</p>
            <input type="email" value={state.email} onChange={(event) => dispatch({ type: 'email', email: event.target.value })}></input>
            <br />
            <br />
            <p>Grades:</p>
            <ul >
                {state.items.map(mapItem)}
            </ul>
            <button onClick={(event) => dispatch({ type: "newItem"})} style={{ width: "100%" }}>+</button>
        </div>
    );
}