import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount, decrementByAmount } from "../reduxtoolkit/counterSlice";

export default function Counter() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <h1> The count is: {count}</h1>
      <button className='btnStyle' onClick={() => dispatch(increment(1))}>+</button>
      <button className='btnStyle' onClick={() => dispatch(decrement(1))}>-</button>
      <button className='btnStyle' onClick={() => dispatch(incrementByAmount(10))}>
        + 10
      </button>
      <button className='btnStyle' onClick={() => dispatch(decrementByAmount(5))}>
        - 5
      </button>
    </div>
  );
}