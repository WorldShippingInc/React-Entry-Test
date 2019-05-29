/**
Node Js and then npm install and npm start 

Add a Function to be called when the Random Number is clicked to change the Number Header State
The random number needs to be between 0 and 100 and showing no decimals 
Add to the log text area saying "Random Number to " and then the new number generated on a new line.  
Add a Function to be called when the Increment Number is clicked to change the Number Header State
If the number will be above 100 (an increment from 100 to 101) display an error stating that the maximum numver is 100 
Add to the log text area saying "Incremented Number to " and then the new number generated on a new line.  
If the number is greater than or equal to 50, then the number header needs to be a red. If the number is below 50, then the number header needs to be a blue. 
Add a text area for the log

Style the buttons to any extent you want to
Add an image to the background that still allows you to read everything. 

*/


import React from 'react';
import './App.css';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      numberHeader: 0,
      log: "Started Log at 0",
    };
  }


// Add a Function to be called when the Random Number is clicked to change the Number Header State
// The random number needs to be between 0 and 100 and showing no decimals 
// Add to the log text area saying "Random Number to " and then the new number generated on a new line.  


// Add a Function to be called when the Increment Number is clicked to change the Number Header State
// If the number will be above 100 (an increment from 100 to 101) display an error stating that the maximum number is 100 
// Add to the log text area saying "Incremented Number to " and then the new number generated on a new line.  



// If the number is greater than or equal to 50, then the number header needs to be a red. If the number is below 50, then the number header needs to be a blue. 

  render() {
    return (
      <div className="App">
          <h1>{this.state.numberHeader}</h1>
          <button> Random Number</button> &nbsp;
          <button> Increment Number</button>
          <br></br>
          <br></br>
          {/* Add a text area for the log */}
      </div>
    );
  }
}

export default App;
