import Card from 'react-bootstrap/Card';
import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import RecipeDialog from './RecipeDialog';

function RecipeCard({title, desc, picurl}) {
  
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={picurl}/>
      <Card.Body>
        <Card.Title>{title.length>50 ? title.slice(0, 17)+"..." : title}</Card.Title>
        <Card.Text>{desc.length>50 ? desc.slice(0, 47)+"..." : desc}</Card.Text>   
      <Button onClick={toggle}>
        Click Me
      </Button>
      </Card.Body>
      <RecipeDialog picurl={picurl} title={title} desc={desc} show={modal} setShow={setModal}/>
    </Card>
  );
}

export default RecipeCard;