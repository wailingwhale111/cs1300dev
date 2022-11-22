import { useState } from "react";
import './App.css';
import nctData from "./assets/nct-data.json";
import NCTItem from "./components/NCTItem";

nctData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cart, setCart] = useState([]);
  let total = 0.00;

  return (
    <div className="App">
      <h1>My NCT Universe</h1> 
      {nctData.map((item, index) => (
       <NCTItem 
       index={index}
       name={item.name} 
       image={item.image} 
       position={item.position} 
       group={item.group}
       alphabetical={item.alphabetical}
       setCart={setCart}
       cart={cart}

       ></NCTItem>
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
