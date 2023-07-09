import React, { useState } from 'react';

function CounterComponent() {
  const [count, setCount] = useState(0);  // Initialize the state with a value of 0

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default CounterComponent;