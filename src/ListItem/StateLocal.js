import { useState } from "react";

export default function StateLocal() {
  return (
    <div>
        <h1>State local optimize</h1>
      <FormInput />
      <ChildComponent />
      <hr />
    </div>
  );
}

export function FormInput() {
  const [input, setInput] = useState("");

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <h3>Input text: {input}</h3>
    </div>
  );
}

export function ChildComponent() {
  console.log("child component is rendering");
  return <div>This is child component.</div>;
}