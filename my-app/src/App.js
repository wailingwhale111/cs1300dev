import React, { useState } from "react";
import './App.css';
import nctData from "./assets/nct-data.json";
import NCTMember from "./components/NCTMember";
import { Container, Row, Col, DropdownButton, Dropdown, Form, ListGroup, Card} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


nctData.forEach((member) => {
  member.image = process.env.PUBLIC_URL + "/" + member.image;
});

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [biasList, setBiasList] = useState([]);
  const [totalNum, setTotalNum] = useState(0);
  const [position, setPosition] = useState("All");
  const [group, setGroup] = useState("All");
  const [sorting, setSorting] = useState("Age");
  let total = 0;

  const selectFilterGroup = eventKey => {
    setGroup(eventKey);
  };

  const selectFilterPosition = eventKey => {
    setPosition(eventKey)
  };

  const selectSorting = eventKey => {
    setSorting(eventKey)
  };

  const matchesFilterGroup = member => {
	// all items should be shown when no filter is selected
    if(group === "All" && position ==="All") { 
      return true
    } else if (member.group.includes(group) && position ==="All") {
      return true
    } else if (member.position.includes(position) && group ==="All") {
      return true
    } else if (member.group.includes(group) && member.position.includes(position)) {
      return true
    } else {
      return false
    }
  }

  let filteredData = nctData.filter(matchesFilterGroup);
  let sortedData = (sorting === "Age" ? filteredData.sort((a, b) => {return b.age - a.age;}) : filteredData.sort((a, b) => {return a.alphabetical - b.alphabetical;}))

  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <h1><strong>My NCT Universe</strong></h1> 
            <Container>
              <Row>
                {sortedData.map((member, index) => (
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
                <DropdownButton
                  id="dropdown-button-dark-example1"
                  variant="secondary"
                  menuVariant="dark"
                  title="Sort by:"
                  className="mt-2"
                  onSelect={selectSorting}>
                  <Dropdown.Item href="#/action-1" eventKey="Age" active> Age </Dropdown.Item>
                  <Dropdown.Item href="#/action-2" eventKey="Alphabetical"> Alphabetical </Dropdown.Item>
                </DropdownButton>
                <DropdownButton 
                  id="dropdown-button-dark-example2"
                  variant="secondary"
                  menuVariant="dark"
                  title="Filter by Position:"
                  className="mt-2"
                  onSelect={selectFilterPosition}>
                  <Dropdown.Item href="#/action-1" eventKey="All" active> All </Dropdown.Item>
                  <Dropdown.Item href="#/action-2" eventKey="Vocalist">Vocalist</Dropdown.Item>
                  <Dropdown.Item href="#/action-3" eventKey="Rapper">Rapper</Dropdown.Item>
                  <Dropdown.Item href="#/action-4" eventKey="Dancer">Dancer</Dropdown.Item>
                  <Dropdown.Item href="#/action-5" eventKey="Leader">Leader</Dropdown.Item>
                </DropdownButton>
                <DropdownButton
                  id="dropdown-button-dark-example2"
                  variant="secondary"
                  menuVariant="dark"
                  title="Filter by SubGroups button"
                  className="mt-2"
                  onSelect={selectFilterGroup}>
                  <Dropdown.Item href="#/action-6" eventKey="All" active> All </Dropdown.Item>
                  <Dropdown.Item href="#/action-7" eventKey="NCT DREAM">NCT DREAM</Dropdown.Item>
                  <Dropdown.Item href="#/action-8" eventKey="NCT 127">NCT 127</Dropdown.Item>
                  <Dropdown.Item href="#/action-9" eventKey="NCT U">NCT U</Dropdown.Item>
                  <Dropdown.Item href="#/action-10" eventKey="WayV">WayV</Dropdown.Item>
                  <Dropdown.Item href="#/action-11" eventKey="NCT 2018">NCT 2018</Dropdown.Item>
                  <Dropdown.Item href="#/action-12" eventKey="NCT 2020">NCT 2020</Dropdown.Item>
                  <Dropdown.Item href="#/action-13" eventKey="NCT 2021">NCT 2021</Dropdown.Item>
                </DropdownButton>
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
