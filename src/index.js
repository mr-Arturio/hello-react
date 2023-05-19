import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// reusable element `Button`, The `onClick` prop is passed as an event handler to the button, and the `children` prop is used to render the content inside the button.
const Button = (props) => {
  return <button onClick={props.onClick}>{props.children}</button>;
};

const Application = () => {

// `useState` hook to declare a piece of state called `name` and a function `setName` to update the state. The initial value of name is an empty string.
  const [name, setName] = useState("");

  const reset = () => {
    console.log("reset");
    document.querySelector("input").value = "";
    setName("");
  };

  return (
    <main>
      <input
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder='Type Your Name'
      />

// here we are using Button element, instead we can use regular HTML <button onClick={reset}> Reset </button> == not recomended
      <Button onClick={reset}>
        Reset
      </Button>
      {name && <h1>Hello {name}</h1>}
    </main>
  );

};

ReactDOM.render(<Application />, document.getElementById("root"));
