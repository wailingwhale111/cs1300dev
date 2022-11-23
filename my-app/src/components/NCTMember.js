import "./NCTMember.css"
import React from 'react'
import {Card, Button} from "react-bootstrap"

export default function NCTMember(props) {
	// function handleClick() {
  //   const itemInCart = {name: props.name, price: props.price, quantity: 1};
  //   const itemExistInCart = props.cart.find((element) => element.name === props.name);
  //   if (itemExistInCart !== undefined) {
  //     props.setCart(
  //       props.cart.map((element) => {
  //         if (element === itemExistInCart) {
  //           return {name: props.name, price: props.price, quantity: element.quantity + 1};
  //         } else {
  //           return element;
  //         }
  //       })
  //     );
  //   } else {
  //     props.setCart(props.cart.concat(itemInCart));
  //   }
  // };
  const card = (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Subtitle> <strong>Position:</strong> {props.position} <br/> <strong>Sub-Groups:</strong> {props.group} <br/> <strong>Age:</strong> {props.age}<hr/></Card.Subtitle>
        <Card.Text className="d-flex flex-column align-items-end">
          <Button variant="dark"> Add to My Bias </Button>
        </Card.Text>
      </Card.Body>
    </Card>
  );

  return card
}
