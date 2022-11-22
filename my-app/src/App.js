import { useState } from "react";
import './App.css';
import nctData from "./assets/nct-data.json";
import NCTMember from "./components/NCTMember";

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
      <h1>My NCT Universe</h1> 
      {nctData.map((member, index) => (
       <NCTMember 
       index={index}
       name={member.name} 
       image={member.image} 
       position={member.position} 
       group={member.group}
       alphabetical={member.alphabetical}
       setCart={setCart}
       cart={cart}

       ></NCTMember>
      ))}

      {/* <div>
        <h2>Cart</h2>
        {cart.map(({name, price, quantity}) => {
          total += price * quantity
          return (<p>{quantity} x {name}: ${price} </p>);
        })}
        <p>Total: $ {total}</p>
        
      </div> */}
    </div>
  );
}

export default App;
