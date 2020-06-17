import React from 'react';
import ReactDOM from 'react-dom';

// Coding Best Practice : use className instead of class when adding class to a label.
const App = () => {
  const buttonText = { text: "Click Me" };
  const labelText = "Label Text :) "
  return (
    <div>
      <label className="label" htmlFor="name">
        { labelText }
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: 'blue', color: 'white' }}>
        { buttonText.text }
      </button>
    </div>
  );
};

//Take the react component and show it to the screen
ReactDOM.render(<App />, document.querySelector('#root'));