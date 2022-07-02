import React, { useState } from "react";

export default function Memozing() {
  const [input, setInput] = useState("");
  const [count, setCount] = useState(0);

  return (
    <div>
        <h1> Without memozing</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>Increment counter</button>
      <h3>Input text: {input}</h3>
      <h3>Count: {count}</h3>
      <ChildComponent count={count} />
    </div>
  );
}

export function ChildComponent({ count }) {
  console.log("child component is rendering");
  return (
    <div>
      <h6>This is a child component.</h6>
      <h4>Count: {count}</h4>
    </div>
  );
}