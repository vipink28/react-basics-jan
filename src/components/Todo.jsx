import React from 'react';

function Todo({ todos, addTodo }) {
    console.log("Todo rendered");
    return (
        <>
            <h2>My Todos</h2>
            {todos.map((todo, index) => {
                return <p key={index}>{todo}</p>;
            })}

            <button onClick={addTodo}>Add Todo</button>
        </>
    );
}

export default React.memo(Todo);