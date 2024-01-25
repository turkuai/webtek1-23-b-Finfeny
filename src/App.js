import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Counter from "./components/Counter";
import "./components/RecipeCard"
import RecipeCard from "./components/RecipeCard";
import RecipeItem from "./components/RecipeItem";
import ListGroup from "./components/ListGroup"
import RecipeDialog from "./components/RecipeDialog"
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./sivu/Header"
import Ravintola from "./sivu/Ravintola"
import Etusivu from "./sivu/Etusivu"
import Meistä from "./sivu/Meistä";
import TicTacToe from "./sivu/TicTacToe";
function App() {
    
    return (
            <div>
                <Router>
                    <Header />
                        <Routes>
                            <Route path="/Etusivu" element={<Etusivu/>}/>
                            <Route path="/Ravintola" element={<Ravintola/>}/>
                            <Route path="/Meistä" element={<Meistä/>}/>
                            <Route path="/TicTacToe" element={<TicTacToe/>}/>
                        </Routes>
                </Router>
            </div>
    );
}
export default App;