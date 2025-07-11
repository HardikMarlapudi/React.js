import React from 'react';
import './index.css';
/*
function Button() {

    // Inline Style CSS
    const styles = {
            backgroundColor: "hsl(200, 100%, 50%)",
            color: "white",
            padding: "10px 20px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
        }

    return (
        //<button style={styles.button}>Click me</button>
        <button style={styles}>Click me</button>
    )
}
export default Button;
*/

function Button() {

    /*
    let count = 0;

    const handleClick = (name) => {
        if(count < 3){
            count++;
            console.log(`${name} you clicked me ${count} times!`);
        }
        else{
            console.log(`${name} stop clicking me!`);
        }
    };
    */

    const handleClick = (e) => e.target.textContent = "OUCH!";

    return (
        <button onDoubleClick={(e) => handleClick(e)}>Click me</button>
    );
}
export default Button;
