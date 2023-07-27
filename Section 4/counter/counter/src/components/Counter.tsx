import React, { useState } from "react";

type CounterTypes = {
  title: string;
};

function Counter({ title }: CounterTypes) {
  const [count, setCount] = useState<number>(0);
  return (
    <div>
      <h1 id="title">{title}</h1>
      <p id="counterValue">{count}</p>
      <div className="btns">
        <button onClick={() => setCount(count - 1)} id="countDown">
          Count Down
        </button>
        <button onClick={() => setCount(0)} id="reset">
          Reset
        </button>
        <button onClick={() => setCount(count + 1)} id="countUp">
          Count Up
        </button>
      </div>
    </div>
  );
}

export default Counter;
