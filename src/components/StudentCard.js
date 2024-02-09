import React from "react";
import { useRef } from "react";
import { Topic, TopicList, Grade, GradeList, defaultGradesData } from "../sivu/StudentGrades";
import { Container } from 'react-bootstrap';
import StudentCardViewer from "./StudentCardViewer"
import StudentCardEditor from "./StudentCardEditor"

export default function StudentCard() {

    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");

    // Write your code here. Use only React, don't use JavaScript DOM functions!
    // When you have to create the list of DOM elements for the 
    // topics or grades and the list of all grades in the card, 
    // use the map function of grades, TopicList and GradeList arrays.

    const [users, setUsers] = React.useState(defaultGradesData)

    return (
        <Container>
            <StudentCardEditor
                name={name}
                email={email}
                users={users}
                setName={setName}
                setEmail={setEmail}
                setUsers={setUsers}
            />
            <StudentCardViewer
                name={name}
                email={email}
                users={users}
            />
        </Container>
    );
}