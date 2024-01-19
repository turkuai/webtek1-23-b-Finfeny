import React, { useState, useEffect, useRef } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import ListGroup from "./ListGroup"


function RecipeDialog({title, desc, picurl, show, setShow}) {
  
  const [editTitle, setEditTitle] = useState(false);
  const toggleTitle = () => setEditTitle(!editTitle);
  const [titleValue, setTitleValue] = useState(title);
  
  const [editDesc, setEditDesc] = useState(false);
  const toggleDesc = () => setEditDesc(!editDesc);
  const [descValue, setDescValue] = useState(desc);

  const ref = useRef(desc);

  return (
    <div>
      <Modal show={show}>
        <Modal.Header /*closeButton={toggle}*/>
          <Form.Control hidden={!editTitle} type="text" value={titleValue} onChange={(eventTitle) => {console.log(eventTitle.target.value); setTitleValue(eventTitle.target.value)}}/>
          <Modal.Title hidden={editTitle}>{titleValue}</Modal.Title>
          <Button variant={editTitle ? "success" : "primary"} onClick={toggleTitle}>
          <i class={editTitle ? "bi bi-check-square" : "bi bi-pencil-square"}></i>
          </Button>
          </Modal.Header>
        <Modal.Body>
            <img src={picurl} className='img-fluid'/>
            <p hidden={editDesc}>{descValue}</p>
            <Form.Control hidden={!editDesc}  as="textarea" rows={3} style={{marginBlock: "10px"}} value={descValue} onChange={(eventDesc) => {console.log(eventDesc.target.value); setDescValue(eventDesc.target.value)}}/>
            <Button variant={editDesc ? "success" : "primary"} onClick={toggleDesc} className="mb-3">
            <i class={editDesc ? "bi bi-check-square" : "bi bi-pencil-square"}></i>
            </Button>
            <Button hidden={!editDesc} variant="light" onClick={() => {console.log(ref.current); setDescValue(ref.current)}} className="mb-3" style={{ marginLeft: "10px" }}>
            <i class="bi bi-arrow-counterclockwise"></i>
            </Button>
            <ListGroup></ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default RecipeDialog;