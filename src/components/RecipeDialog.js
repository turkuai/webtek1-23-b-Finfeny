import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'react-bootstrap';
import ListGroup from "./ListGroup"


function RecipeDialog({title, desc, picurl, show, setShow}) {

  return (
    <div>
      <Modal show={show}>
        <Modal.Header /*closeButton={toggle}*/>
          <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
        <Modal.Body>
            <img src={picurl} alt={title} className='img-fluid'/>
            <p>{desc}</p>
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