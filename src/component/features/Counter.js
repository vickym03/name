import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { inc, dec, reset, incrementByAmount } from "./CounterSlice";

function Counter() {
  const [incAmount, setIncAmount] = useState(0);
  const count = useSelector((state) => state.counter.count);
  console.log("count", count);
  const dispatch = useDispatch();

  const addValue = Number(incAmount) || 0;
  console.log("addvalue", addValue);
  return (
    <div>
      <h2>count : {count}</h2>

      <input
        type="number"
        value={incAmount}
        onChange={(e) => setIncAmount(e.target.value)}
      />

      <button onClick={() => dispatch(inc())}>inc</button>
      <button onClick={() => dispatch(dec())}>dec</button>
      <button onClick={() => dispatch(incrementByAmount(addValue))}>add</button>
      <button onClick={() => dispatch(reset())}>reset</button>
    </div>
  );
}

export default Counter;
