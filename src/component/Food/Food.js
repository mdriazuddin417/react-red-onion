import React from "react";
import "./food.css";
import { Button, Card } from "react-bootstrap";
import { FiShoppingCart } from "react-icons/fi";
const Food = ({ food }) => {
  const { name, balance, picture, text, id } = food;
  return (
    <div className="col text-center ">
      <Card style={{ width: "18rem" }} className="border-0 food p-2">
        <div>
          <Card.Img variant="top" src={picture} className="w-75" />
        </div>
        <Card.Body>
          <Card.Title>{name}</Card.Title>

          <Card.Text className="text-secondary"> {text.slice(0, 30)}</Card.Text>
          <Card.Title>Price: {balance}</Card.Title>
          <Button variant="outline-primary" className="w-100 rounded-pill">
            Buy Now <FiShoppingCart></FiShoppingCart>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Food;
