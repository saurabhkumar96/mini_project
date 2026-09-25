import { useReducer } from 'react';

// 1. Define the initial state
const initialState = { count: 0 };

// 2. Create the reducer function (kept outside the component)
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    case 'set_value':
      return { count: action.payload }; // dynamic update using payload
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}

export default function App() {
  // 3. Initialize useReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Count: {state.count}</h2>
      
      {/* 4. Trigger updates by dispatching actions */}
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
      
      <button onClick={() => dispatch({ type: 'set_value', payload: 10 })}>
        Set to 10
      </button>
    </div>
  );
}
