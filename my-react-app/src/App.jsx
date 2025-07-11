import React from 'react';
import StopWatch from './Stopwatch.jsx';
import Footer from './Footer.jsx';
import './Footer.css';
import './index.css';


// HOW TO STYLE REACT COMPONENTS WITH CSS
// --------------------------------------
// (not including external frameworks or preprocessors)

// 1. EXTERNAL
// 2. MODULES
// 3. INLINE

// props = read-only properties that are shared between components.
//         A parent component can send data to a child component.
//          <Component key=value />
/*
function App() {
  
  return (
    <>
        <Student name="Spongebob" age={30} isStudent={true}/>
        <Student name="Patrick" age={42} isStudent={false}/>
        <Student name="Squidward" age={50} isStudent={false}/>
        <Student name="Sandy" age={27} isStudent={true}/>
        <Student />
        <Footer/>
    </>
  );
}

export default App;
*/

/*
function App() {
    return (
      <>
      <UserGreeting isLoggedIn={true} username="Hardik Marlapudi" />
      <Footer />
      </>
    );
}
export default App;
*/
/*
function App() {

  const fruits = [{id: 1, name:"apple", calories: 95}, 
                  {id: 2, name: "orange", calories: 45}, 
                  {id: 3, name: "banana", calories: 105}, 
                  {id: 4, name: "coconut", calories: 159}, 
                  {id: 5, name: "pineapple", calories: 37}];        

  const vegetables = [{id: 6, name:"Potato", calories: 110}, 
                  {id: 7, name: "celery", calories: 15}, 
                  {id: 8, name: "carrots", calories: 25}, 
                  {id: 9, name: "corn", calories: 63}, 
                  {id: 10, name: "broccoli", calories: 50}];
  return(
    <>
    {fruits.length > 0 && <List items={fruits} category="Fruits"/>}
    {vegetables.length > 0 && <List items={vegetables} category="Vegetables"/>}
    <Footer/>
    </>
  )
}
export default App;
*/

// React hook = Special function that allows functional components
//              to use React features without writing class components (React v16.8)
//              (useState, useEffect, useContext, useReducer, useCallback, and more)

// useState() = A React hook that allows the creation of a stateful variable
//              AND a setter function to update its value in the Virtual DOM.
//              [name, setName]

// useContext() = React hook that allows you to share values
//                betweeen multiple levels of components
//                without passing props through each level

function App() {

    return(
      <>
      <StopWatch />
      <Footer />
      </>
    );
}

export default App;
