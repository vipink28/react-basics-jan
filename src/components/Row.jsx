import React from 'react';

function Row(props) {
    const { student, deleteStudent } = props;
    const { id, name, course, fees } = student;

    return (
        <tr className={fees > 20000 ? 'bg-primary' : ''}>
            <td>{id}</td>
            <td>{name}</td>
            <td>{course}</td>
            <td>{fees}</td>
            <td><button onClick={() => { deleteStudent(id) }}>Delete</button></td>
        </tr>
    );
}

export default Row;