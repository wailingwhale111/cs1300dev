import React, { useState } from "react";
import './App.css';
import nctData from "./assets/nct-data.json";
import NCTMember from "./components/NCTMember";
import { Container, Row, Col, Card, Form} from "react-bootstrap";
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
                 <Col id={index} className="d-flex justify-content-around align-items-stretch">
                   <NCTMember 
                index={index} 
                name={member.name} 
                image={member.image} 
                position={member.position} 
                group={member.group} 
                alphabetical={member.alphabetical} 
                age={member.age}
                setCart={setCart} 
                cart={cart}/>
                </Col>))}
              </Row>
            </Container>
          </Col>
          <Col lg={3}>
            <Card>
              <Card.Body>
                <Card.Text>
                  <h4>Sort by:</h4>
                  <Form>
                    <div key={`radio`} className="mb-3">
                      <Form.Check
                        type={`radio`}
                        id={`radio`}
                        label={'Age'}
                        defaultChecked
                      />
                      <Form.Check
                        type={`radio`}
                        id={`radio1`}
                        label={`Alphabetical`}
                      />
                    </div>
                  </Form>
                  <h4>Filter by:</h4>
                  <strong>Position</strong>
                  <Form>
                    <div key={`default-checkbox`} className="mb-3">
                      <Form.Check 
                        type={`checkbox`}
                        id={`default-checkbox1`}
                        label={`Vocalist`}
                      />
                      <Form.Check
                        type={`checkbox`}
                        id={`default-checkbox2`}
                        label={`Rapper`}
                      />
                      <Form.Check
                        type={`checkbox`}
                        id={`default-checkbox3`}
                        label={`Dancer`}
                      />
                      <Form.Check
                        type={`checkbox`}
                        id={`default-checkbox4`}
                        label={`Leader`}
                      />
                    </div>
                  </Form>
                  <strong>Sub-Groups</strong>
                  <Form>
                    <div key={`default-checkbox`} className="mb-3">
                      <Form.Check 
                        type={`checkbox`}
                        id={`default-checkbox1`}
                        label={`NCT 127`}
                      />
                      <Form.Check
                        type={`checkbox`}
                        id={`default-checkbox2`}
                        label={`NCT DREAM`}
                      />
                      <Form.Check
                        type={`checkbox`}
                        id={`default-checkbox3`}
                        label={`NCT U`}
                      />
                      <Form.Check
                        type={`checkbox`}
                        id={`default-checkbox4`}
                        label={`NCT 2018`}
                      />
                      <Form.Check
                        type={`checkbox`}
                        id={`default-checkbox4`}
                        label={`NCT 2020`}
                      />
                      <Form.Check
                        type={`checkbox`}
                        id={`default-checkbox4`}
                        label={`NCT 2021`}
                      />
                    </div>
                  </Form>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <strong>My Bias List:</strong>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
      
      
    </div>
  );
}

export default App;
