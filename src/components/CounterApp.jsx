import { useState } from "react";

const CounterApp = () => {

    const [counter, SetCounter] = useState(0);

    const ResetFunction = () => {
        SetCounter(0);
    }

    const IncreaseFunction = () => {
        SetCounter(counter + 1);
    }

    const DecreaseFunction = () => {
        SetCounter(counter - 1);
    }

  return (
    <div className="text-center mt-3">
      <h3>{counter}</h3>
      <div className="d-flex justify-content-center mt-3">
        <button onClick={IncreaseFunction} className="btn btn-dark mx-1">Increase</button>
        <button onClick={ResetFunction} className="btn btn-dark mx-1">Reset</button>
        <button onClick={DecreaseFunction} className="btn btn-dark mx-1">Decrease</button>
      </div>
    </div>
  );
};

export default CounterApp;
