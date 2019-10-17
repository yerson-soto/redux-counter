import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';

function App() {

  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <main>  
      <h2>Redux Counter</h2>
      <h1>{counter}</h1>
      <button onClick={() => dispatch(increment(1))}>+</button>
      <button onClick={() => dispatch(decrement(1))}>-</button>
    </main>
  )
}

export default App;
