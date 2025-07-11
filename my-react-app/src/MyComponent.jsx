//import { useForm } from 'react-hook-form';
//import { use, useState } from 'react';
/*
function MyComponent() {
    
   const [name, setName] = useState("Guest");
   const [age, setAge] = useState(0);
   const [isEmployed, setIsEmployed] = useState(false);

   const updateName = () => {
        setName("Spongebob");
   }

   const incrementAge = () => {
        setAge(age + 2);
   }

   const toggleEmployedStatus = () => {
        setIsEmployed(!isEmployed);
   }

   return(<div>
        <p>Name: {name}</p>
        <button onClick={updateName}>Set Name</button>

        <p>Age: {age}</p>
        <button onClick={incrementAge}>Increment Age</button>

        <p>Is Employed: {isEmployed ? "Yes" : "No"}</p>
        <button onClick={toggleEmployedStatus}>Toggle Status</button>
   </div>);

}
export default MyComponent;
*/

// onChange = event handler used primarily with form elements
//            ex. <input>, <textarea>, <select>, <radio>
//            Triggers a function every time the value of the input changes

/*
import React, {useState} from 'react';

function myComponent() {

     const [name, setName] = useState("Guest");
     const [quantity, setQuantity] = useState(1);
     const [comment, setComment] = useState("");
     const [payment, setPayment] = useState("");
     const [shipping, setShipping] = useState("Delivery");

     function handleNameChange(event) {
          setName(event.target.value);
     }

     function handleQuantityChange(event) {
          setQuantity(event.target.value);
     }

     function handleCommentChange(event) {
          setComment(event.target.value);
     }

     function handlePaymentChange(event) {
          setPayment(event.target.value);
     }

     function handleShippingChange(event){
          setShipping(event.target.value);
     }

     return (
     <div>
          <input value={name} onChange={handleNameChange}/>
          <p>Name: {name} </p>

          <input value={quantity} onChange={handleQuantityChange} type="number"/>
          <p>Quantity: {quantity}</p>

          <textarea value={comment} onChange={handleCommentChange}
          placeholder="Enter delivery instructions"/>
          <p>Comment: {comment}</p>

          <select value ={payment} onChange={handlePaymentChange}>
               <option value="">Select an Option</option>
               <option value="Visa">Visa</option>
               <option value="Mastercard">MasterCard</option>
               <option value="Giftcard">Giftcard</option>
          </select>
          <p>Payment: {payment}</p>

          <label>
               <input type="radio" value="Pick Up"
                         checked={shipping === "Pick Up"}
                         onChange={handleShippingChange}/>
               Pick up
          </label><br/>
          <label>
          <input type="radio" value="Delivery"
                         checked={shipping === "Delivery"}
                         onChange={handleShippingChange}/>
               Delivery
          </label>
          <p>Shipping: {shipping}</p>
     </div>);
}
export default myComponent;
*/


// updater function = A function passed as an argument to setState() usually
//                    ex. setYear(updater function)
//                    Allow for safe updates based on the previous state
//                    Used with multiple state updates and asynchronous functions
//                    Good practice to use updater functions

/*
import React, {useState} from 'react';
import './index.css';

function MyComponent() {

     const [count, setCount] = useState(0);

     function increment() {

          // Uses the CURRENT state to calculate the NEXT state.
          // set functions do not trigger an update.
          // React batches together state updates for performace reasons.
          // NEXT state becomes the CURRENT state after an update.

          setCount(count + 1);
          // UPDATE
     }

     function decrement() {
          setCount(count - 1);
     }

     function reset() {
          setCount(0);
     }

     return(
          <>
          <p id="counter">Count: {count}</p>

          <button id="decrement" onClick={decrement}>Decrement</button>
          <button id="reset" onClick={reset}>Reset</button>
          <button id="increment" onClick={increment}>Increment</button>
          </>
     )
}

export default MyComponent;
*/

/*
import React, {useState} from 'react';

function MyComponent() {

     const [car, setCar] = useState({
          year: 1964,
          make: "Ford",
          model: "Mustang"});

     function handleYearChange(event) {

          setCar(car => ({...car, year: event.target.value}));
     }
     function handleMakeChange(event) {

          setCar(c => ({...c, make: event.target.value}));
     }
     function handleModelChange(event) {

          setCar(c => ({...c, model: event.target.value}));
     }

     return(
          <>
          <p>Your favorite car is: {car.year} {car.make} {car.model}</p>

          <input type="number" value={car.year} onChange={handleYearChange}/>
          <input type="text" value={car.make} onChange={handleMakeChange}/>
          <input type="text" value={car.model} onChange={handleModelChange}/>
          </>
     );
}

export default MyComponent;
*/

/*
import React, {useState} from 'react';

function MyComponent() {

     const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

     function handleAddFood() {

          const newFood = document.getElementById("foodInput").value;
          document.getElementById("foodInput").value = "";

          setFoods(f => [...f, newFood]);
     }

     function handleRemoveFood(index) {

          setFoods(foods.filter((_, i) => i !== index));
     }

     return(
          <div>
               <h2>List of Food</h2>
               <ul>
                    {foods.map((food, index) => <li key={index} onClick={() => handleRemoveFood(index)}>{food}</li>)}
               </ul>
               <input type="text" id="foodInput" placeholder="Enter food name" />
               <button onClick={handleAddFood}>Add Food</button>
          </div>
     );
}

export default MyComponent;
*/

/*
import React, {useState} from 'react';

function MyComponent() {

     const [cars, setCars] = useState([]);
     const [carYear, setCarYear] = useState(new Date().getFullYear());
     const [carMake, setCarMake] = useState("");
     const [carModel, setCarModel] = useState("");
     
     function handleAddCar() {

          const newCar = {year: carYear, 
                         make: carMake, 
                         model: carModel};

          setCars(c => [...c, newCar]);

          setCarYear(new Date().getFullYear());
          setCarMake("");
          setCarModel("");
     }

     function handleRemoveCar(index) {
          setCars(c => c.filter((_, i) => i !== index));
     }

     function handleYearChange(event) {
          setCarYear(event.target.value);
     }

     function handleMakeChange(event) {
          setCarMake(event.target.value);
     }

     function handleModelChange(event) {
          setCarModel(event.target.value);
     }

     return(
     <div>
          <h2>List of Car Objects</h2>
          <ul>
               {cars.map((car, index) => <li key={index} onClick={() => handleRemoveCar(index)}>{car.year} {car.make} {car.model}</li>)}
          </ul>

          <input type="number" value={carYear} onChange={handleYearChange} />
          <input type="text" value={carMake} onChange={handleMakeChange} placeholder="Enter car make" />
          <input type="text" value={carModel} onChange={handleModelChange} placeholder="Enter car model" />
          <button onClick={handleAddCar}>Add Car</button>
     </div>
     );
}

export default MyComponent;
*/

// useEffect() = React Hook that tells React DO SOME CODE WHEN (pick one):
//               This component re-renders
//               This component mounts
//               The state of a value

// 1. useEffect(() => {})               // Runs after every re-render
// 2. useEffect(() => {}, [])          // Runs only on mount (initial render)
// 3. useEffect(() => {}, [value])     // Runs on mount + when value changes

// USES
// #1 DOM manipulation
// #2 Event Listeners
// #3 Subscriptions (real-time updates)
// #4 Fetching data from an API
// #5 Clean up when a component unmounts

/*
import React, {useState, useEffect} from "react";

function MyComponent() {

     /*
     const[count, setCount] = useState(0);
     const [color, setColor] = useState("green");

     useEffect(() => {
     document.title = `Count: ${count} ${color}`; 
     
     return () => {
          //SOME CLEANUP CODE
     }
     }, [count, color]);

     function addCount() {
          setCount (c => c + 1);
     }
     
     function resetCount() {
          setCount(0);
     }

     function subtractCount() {
          setCount (c => c - 1);
     }

     function changeColor() {
          setColor(c => c === "green" ? "red" : "green");
     }

     return (
     <>
     <p style={{color: color}}>Count: {count}</p>
     <button onClick={addCount}>Add</button>
     <button onClick={resetCount}>Reset</button>
     <button onClick={subtractCount}>Subtract</button>
     <button onClick={changeColor}>Change Color</button>
     </>
     )
}
export default MyComponent;
*/

/*
import React, {useState, useEffect} from 'react';

function MyComponent() {

     const[width, setWidth] = useState(window.innerWidth);
     const[height, setHeight] = useState(window.innerHeight);

     useEffect(() => {
          window.addEventListener("resize", handleResize);
          console.log("EVENT LISTENER ADDED");

          return () => {
               window.removeEventListener("resize", handleResize);
               console.log("EVENT LISTENER REMOVED");
          }
     },[]);

     useEffect(() => {
          document.title = `Size: ${width} x ${height}`;
     }, [width, height]);

     function handleResize() {
          setWidth(window.innerWidth);
          setHeight(window.innerHeight);
     }

     return(
     <>
          <p>Window Width: {width}px</p>
          <p>Window Height: {height}px</p>
     </>
     )
}

export default MyComponent;
*/

// useState() = Re-renders the component when the state value changes.

// useRef()   = "use Reference" Does not cause re-renders when its value changes.
//              When you want a component to "remember" some information,
//              but you don't want that information to trigger new renders.

//              1. Accessing/Interacting with DOM elements
//              2. Handling Focus, Animations, and Transitions
//              3. Managing Timers and Intervals

/*
import React, {useState, useEffect, useRef} from 'react';

function MyComponent() {

     const inputRef1 = useRef(null);
     const inputRef2 = useRef(null);
     const inputRef3 = useRef(null);

     useEffect(() => {
          console.log("COMPONENT RENDERED");
     });

     function handleClick1() {
         inputRef1.current.focus();
         inputRef1.current.style.backgroundColor = "yellow";
         inputRef2.current.style.backgroundColor = "";
         inputRef3.current.style.backgroundColor = "";
     }

     function handleClick2() {
          inputRef2.current.focus();
          inputRef1.current.style.backgroundColor = "";
          inputRef2.current.style.backgroundColor = "yellow";
          inputRef3.current.style.backgroundColor = "";
      }

      function handleClick3() {
          inputRef3.current.focus();
          inputRef1.current.style.backgroundColor = "";
          inputRef2.current.style.backgroundColor = "";
          inputRef3.current.style.backgroundColor = "yellow";
      }

     return (
          <div>
          <button onClick={handleClick1}>
               Click me 1!
          </button>
          <input ref={inputRef1}/>
          <button onClick={handleClick2}>
               Click me 2!
          </button>
          <input ref={inputRef2}/>
          <button onClick={handleClick3}>
               Click me 3!
          </button>
          <input ref={inputRef3}/>
          </div>
     );
}

export default MyComponent;
*/
