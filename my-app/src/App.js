import React, { useState } from "react";
import './App.css';
import nctData from "./assets/nct-data.json";
import NCTMember from "./components/NCTMember";
import { Container, Row, Col, Form, ListGroup, Card} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


nctData.forEach((member) => {
  member.image = process.env.PUBLIC_URL + "/" + member.image;
});

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [biasList, setBiasList] = useState([]);
  const [totalNum, setTotalNum] = useState(0);
  let total = 0;

  let filteredData = nctData.filter(member => member.group.includes("NCT 2020"));
  
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <h1><strong>My NCT Universe</strong></h1> 
            <Container>
              <Row>
                {filteredData.map((member, index) => (
                 <Col id={index} className="d-flex justify-content-around align-items-stretch">
                   <NCTMember 
                    index={index} 
                    name={member.name} 
                    image={member.image} 
                    position={member.position} 
                    group={member.group} 
                    alphabetical={member.alphabetical} 
                    age={member.age}
                    setBiasList={setBiasList} 
                    biasList={biasList}
                    totalNum={totalNum}
                    setTotalNum={setTotalNum}/>
                </Col>))}
              </Row>
            </Container>
          </Col>
          <Col lg={3}>
            <Card>
              <Card.Body>
              
              <strong>Sort by: </strong>
                <Form>
                  <div key={`radio`} className="mb-3">
                    <Form.Check
                      name="sort"
                      type={`radio`}
                      id={`radio`}
                      label={'Age'}
                      defaultChecked
                    />
                    <Form.Check
                      name="sort"
                      type={`radio`}
                      id={`radio1`}
                      label={`Alphabetical`}
                    />
                  </div>
                </Form>
                <strong>Filter by:</strong>
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
                      // onChange={selectFilterType}
                    />
                    <Form.Check
                      type={`checkbox`}
                      id={`default-checkbox2`}
                      label={`NCT DREAM`}
                      // onChange={filteredData = filteredData.filter(member => member.group.includes("NCT DREAM"))}
                    />
                    <Form.Check
                      type={`checkbox`}
                      id={`default-checkbox3`}
                      label={`NCT U`}
                      // onChange={selectFilterType}
                    />
                    <Form.Check
                      type={`checkbox`}
                      id={`default-checkbox4`}
                      label={`NCT 2018`}
                      // onChange={selectFilterType}
                    />
                    <Form.Check
                      type={`checkbox`}
                      id={`default-checkbox4`}
                      label={`NCT 2020`}
                      // onChange={selectFilterType}
                    />
                    <Form.Check
                      type={`checkbox`}
                      id={`default-checkbox4`}
                      label={`NCT 2021`}
                      // onChange={selectFilterType}
                    />
                  </div>
                </Form>        
                <strong>My Bias List:</strong>
                {biasList.map(({name, age}) => {
                  total += age
                    return (
                    <ListGroup.Item>
                      {name}: {age}
                    </ListGroup.Item>
                  )})}
                </Card.Body>
                <Card.Footer>Average Age of My Bias: {totalNum === 0 ? "" : total / totalNum}</Card.Footer>
              </Card>
          </Col>
        </Row>
      </Container>
      
      
    </div>
  );
}

export default App;
