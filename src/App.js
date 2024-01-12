import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Counter from "./components/Counter";
import "./components/RecipeCard"
import RecipeCard from "./components/RecipeCard";
import RecipeItem from "./components/RecipeItem";

function App() {
    const message1 = "Hello class!"
    const message2 = "mornig!"
    const showMessage = true
    
    return (
        <>
            <div>
                <Row style={{paddingTop: "20px"}}>
                    <Col md="auto" style={{paddingLeft: "30px"}}>
                    <RecipeCard
                        title="My awesome kebab"
                        desc="Very tasty kebab with lamb meat and hot spices, which we can cook on the grill in the winter when outside is freezing cracking show and inside the fire cracks in the stove"
                        picurl="https://images.pexels.com/photos/8963961/pexels-photo-8963961.jpeg"
                    />
                    </Col>                    
                    <Col md="auto" style={{paddingLeft: "10px"}}>
                    <RecipeCard
                        title="My awesome kebab"
                        desc="Very tasty kebab with lamb meat and hot spices, which we can cook on the grill in the winter when outside is freezing cracking show and inside the fire cracks in the stove"
                        picurl="https://images.pexels.com/photos/8963961/pexels-photo-8963961.jpeg"
                    />
                    </Col>
                </Row>
                <Row>
                    <RecipeItem
                        name="Hot chili, tsp"
                        amount={3}
                    />
                </Row>
            </div>
        </>
    );
}
export default App;