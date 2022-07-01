import { useState } from "react";

export default function ProfileTest() {
  const [input, setInput] = useState("");

  return (
    <div>
        <h1>without optimize performance</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <h3>Input text: {input}</h3>
      <ChildComponent />
    </div>
  );
}

export function ChildComponent() {
  console.log("child component is rendering");
  return <div>This is child component.</div>;
};