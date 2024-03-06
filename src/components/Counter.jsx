import React, { useReducer } from 'react';

const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT": return state + 1;
        case "DECREMENT": return state - 1;
        case "RESET": return 0;
        case "INCBY5": return action.payload;
        default: return state;
    }
}

// action is an object which has two properties - type and payload.
// dispatch function excepts action as an argument.
// action syntax
//  {
//     type: "INCREMENT",
//     payload: ""
// }

function Counter(props) {
    // useReducer
    const [state, dispatch] = useReducer(reducer, 0)

    return (
        <div>
            <h2>{state}</h2>
            <button onClick={() => { dispatch({ type: "INCREMENT" }) }} >Increment</button>
            <button onClick={() => { dispatch({ type: "DECREMENT" }) }}>Decrement</button>
            <button onClick={() => { dispatch({ type: "RESET" }) }}>Reset</button>
            <button onClick={() => { dispatch({ type: "INCBY5", payload: 10 }) }}>Increment by 5</button>
        </div>
    );
}

export default Counter;