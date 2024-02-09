import React from "react";
import { useRef } from "react";
import { Topic, TopicList, Grade, GradeList, defaultGradesData } from "../sivu/StudentGrades";

export default function StudentCardViewer({name, email, users}) {

    console.log(users)

    return  (
        <div style={{ padding: "20px", borderStyle: "solid", borderWidth: "2px", marginTop: "15px" }}>
            <h2>Viewer</h2>
            <br />
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Grades:</p>
            <ul>
                {users.map((user) => (
                    <div key={user.id}>
                        <p>&#x2049; {user.topic}: {user.grade}</p>
                    </div>
                ))}
            </ul>
        </div>
    );
}