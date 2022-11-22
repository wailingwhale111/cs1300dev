import React, { useState } from "react";
import './App.css';
import nctData from "./assets/nct-data.json";
import NCTMember from "./components/NCTMember";
import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


nctData.forEach((member) => {
  member.image = process.env.PUBLIC_URL + "/" + member.image;
});

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cart, setCart] = useState([]);
  let total = 0.00;

  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <h1>NCT Universe</h1> 
            <Container>
              <Row>
                {nctData.map((member, index) => (
                 <Col id={index} className="d-flex align-items-stretch">
                   <NCTMember 
                index={index} 
                name={member.name} 
                image={member.image} 
                position={member.position} 
                group={member.group} 
                alphabetical={member.alphabetical} 
                setCart={setCart} 
                cart={cart}/>
                </Col>))}
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
      
      
    </div>
  );
}

export default App;
