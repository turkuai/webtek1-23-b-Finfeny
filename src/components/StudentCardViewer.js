import React from "react";
import { useRef } from "react";
import { Topic, TopicList, Grade, GradeList, defaultGradesData } from "../sivu/StudentGrades";

export default function StudentCardViewer({state}) {

    return  (
        <div style={{ padding: "20px", borderStyle: "solid", borderWidth: "2px", marginTop: "15px" }}>
            <h2>Viewer</h2>
            <br />
            <p>Name: {state.name}</p>
            <p>Email: {state.email}</p>
            <p>Grades:</p>
            <ul>
                {state.items.map((item) => (
                    <div key={item.id}>
                        <p>&#x2049; {item.topic}: {item.grade}</p>
                    </div>
                ))}
            </ul>
        </div>
    );
}