import React from 'react';

function StaffDetails(props) {
    const { staff } = props;
    const { id, name, gender, department, designation, salary } = staff;

    return (
        <div className={`card ${gender === 'female' ? 'bg-primary' : ''}`}>
            <p>{id}</p>
            <h5>{name}</h5>
            <p>{gender}</p>
            <p>{department}</p>
            <p>{designation}</p>
            <p>{salary}</p>
        </div>
    );
}

export default StaffDetails;