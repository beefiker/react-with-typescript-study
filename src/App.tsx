import { Form, Input } from "Input";
import Number from "Number";
import React, { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("");

  const increment = () => {
    setCounter(counter + 1);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    setName(value);
  };

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(name);
  };

  return (
    <div>
      <Form onFormSubmit={onFormSubmit}>
        <Input value={name} onChange={onChange} />
      </Form>
      <Number count={counter} />
      <button onClick={increment}>increment</button>
    </div>
  );
};

export default App;
