import { useState, useEffect } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import Counter from "../components/Counter";
import RecipeCard from "../components/RecipeCard";
import RecipeItem from "../components/RecipeItem";
import ListGroup from "../components/ListGroup"
import RecipeDialog from "../components/RecipeDialog"
import FileUpload from "../components/FileUpload";



function App() {
    const message1 = "Hello class!"
    const message2 = "mornig!"
    const showMessage = true

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch("/recipes").then(response => response.json()).then(json => {
            console.log("response:", json);

            setRecipes(json);
        });
    }, []);

function emptyReceip() {
    return {
        title: "Title",
        description: "desc",
        picurl: "https://images.pexels.com/photos/8963961/pexels-photo-8963961.jpeg"
    };
}

function addRecipe(recipe) { 
    console.log("Added recipe")
    fetch("/recipes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(recipe),
    }).then(response => response.json())
        .then(data => {
            // TODO: update the local temporary ID with the one provided by the server
        });
};
    function handleDelete(id) {
        const currentRecipe = recipes.find(recipe => recipe.id == id)
        const filteredRecipes = recipes.filter((recipe) => recipe.id != id)
        console.log(filteredRecipes)
        setRecipes(filteredRecipes)

            fetch("/recipes", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ id: id })
            });
    }

    return (
        <>
            <div>
                <Container style={{ paddingTop: "20px" }}>
                    <Row>
                        {recipes.map((recipe) => (
                            <Col md="auto" key={recipe.id}>
                                <RecipeCard
                                    id={recipe.id}
                                    title={recipe.title}
                                    desc={recipe.description}
                                    picurl={recipe.picurl}
                                    onDelete={handleDelete}
                                ></RecipeCard>
                            </Col>
                        ))}
                        <Col md="auto">
                            <Button variant="light" style={{ marginLeft: "0px", inlineSize: "288px", blockSize: "360px", fontSize: "50px", fontWeight: "10" }} onClick={() => setRecipes((receips) => {
                                const newRecipe = emptyReceip();
                                addRecipe(newRecipe);
                                return [...receips, newRecipe];
                            })}>
                                +
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}
export default App;