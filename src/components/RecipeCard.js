import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function RecipeCard({title, desc, picurl}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={picurl}/>
      <Card.Body>
        <Card.Title>{title.length>50 ? title.slice(0, 17)+"..." : title}</Card.Title>
        <Card.Text>{desc.length>50 ? desc.slice(0, 47)+"..." : desc}</Card.Text>
        <Button variant="primary">Show details</Button>
      </Card.Body>
    </Card>
  );
}

export default RecipeCard;