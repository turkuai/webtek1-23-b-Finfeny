import React from "react";
import { useRef } from "react";
import { Topic, TopicList, Grade, GradeList, defaultGradesData } from "../sivu/StudentGrades";

export default function StudentCardEditor({name, email, users, setName, setEmail, setUsers}) {

    //const [name, setName] = React.useState("");
    //const [email, setEmail] = React.useState("");
    //const [users, setUsers] = React.useState(defaultGradesData)
    const ref = useRef(4);

    function setTopic(id, value) {
        console.log("setTopic:", value);

        const newUsers = users.map((user) => {
            if (user.id == id) {
                return { ...user, topic: value };
            } else {
                return user;
            }
        });

        setUsers(newUsers);
    }

    function setGrade(id, value) {
        console.log("setGrade:", value);

        const newUsers = users.map((user) => {
            if (user.id == id) {
                return { ...user, grade: value };
            } else {
                return user;
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
        console.log("ref:", ref.current);
        console.log("newUsers:", newUsers);
        setUsers(newUsers)
    }

    function mapUser(user) {
        return (
            <div key={user.id}>
                &#x2049;
                <select value={user.topic} onChange={(event) => setTopic(user.id, event.target.value)} style={{ margin: "7px" }}>
                    {
                        TopicList.map(topic => <option value={topic}>{topic}</option>)
                    }
                </select>
                <select value={user.grade} onChange={(event) => setGrade(user.id, event.target.value)} style={{ margin: "7px" }}>
                    {
                        GradeList.map(grade => <option value={grade}>{grade}</option>)
                    }
                </select>
                <button onClick={(event) => {
                    const filterdUser = users.filter((item) => item.id != user.id);
                    console.log(filterdUser);
                    setUsers(filterdUser);
                }}
                    style={{ margin: "7px" }}>-</button>
            </div>
        )
    }

    return  (
        <div style={{ padding: "20px", borderStyle: "solid", borderWidth: "2px", marginTop: "15px" }}>
            <h2>Editor</h2>
            <br />
            <p>Name:</p>
            <input type="text" onChange={(event) => setName(event.target.value)}></input>
            <br />
            <br />
            <p>Email:</p>
            <input type="email" onChange={(event) => setEmail(event.target.value)}></input>
            <br />
            <br />
            <p>Grades:</p>
            <ul >
                {users.map(mapUser)}
            </ul>
            <button onClick={handleAddNewUser} style={{ width: "100%" }}>+</button>
        </div>
    );
}