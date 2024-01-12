import ListGroup from 'react-bootstrap/ListGroup';
import RecipeItem from './RecipeItem';

function DefaultExample() {
  return (
    <ListGroup>
      <ListGroup.Item><RecipeItem name="Lamb minced meat, kg" amount= "5"/></ListGroup.Item>
      <ListGroup.Item><RecipeItem name="Onions, kg" amount="2"/></ListGroup.Item>
      <ListGroup.Item><RecipeItem name= "Salt, tbsp" amount= "5"/></ListGroup.Item>
      <ListGroup.Item><RecipeItem name= "Pepper, tbsp" amount= "4"/></ListGroup.Item>
      <ListGroup.Item><RecipeItem name= "Hot chilli, tsp" amount= "3"/></ListGroup.Item>
    </ListGroup>
  );
}

export default DefaultExample;