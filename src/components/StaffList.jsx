import React, { useState } from 'react';
import StaffDetails from './StaffDetails';

function StaffList(props) {

    const data = [
        { id: 1, name: "Vipin Kumar", gender: "male", department: "Developer", salary: 55000, designation: "Senior Associate" },
        { id: 2, name: "Rishita", gender: "female", department: "Human Resource", salary: 45000, designation: "HR Manager" },
        { id: 3, name: "Aman Sharma", gender: "male", department: "Management", salary: 52000, designation: "Floor Manager" },
        { id: 4, name: "Avisha", gender: "female", department: "Developer", salary: 35000, designation: "Junior Associate" },
    ]

    const [staffData, setStaffData] = useState(data);

    const [formData, setFormData] = useState(null);

    const filterDepartment = (dep) => {
        const filterdArr = data.filter((item) => item.department === dep);
        setStaffData(filterdArr);
    }

    const handleChange = (e) => {
        let { name, value } = e.target;
        setFormData((prev) => {
            return {
                ...prev,
                [name]: value,
                // id: staffData[staffData.length - 1].id + 1
            }
        })
    }

    const addStaff = (e) => {
        e.preventDefault();
        var id = staffData[staffData.length - 1].id + 1
        // setFormData((prev) => {
        //     // debugger
        //     return {
        //         ...prev,
        //         id: staffData[staffData.length - 1].id + 1
        //     }
        // })
        setStaffData((prev) => {
            return [
                ...prev,
                {
                    ...formData,
                    id: id
                }
            ]
        })
    }

    return (
        <div className='container'>
            <form>
                <input type="text" name='name' onChange={handleChange} />
                <input type="text" name='designation' onChange={handleChange} />
                <input type="text" name='salary' onChange={handleChange} />
                <select name="department" onChange={handleChange}>
                    <option value="Developer">Developer</option>
                    <option value="Human Resource">Human Resource</option>
                    <option value="Management">Management</option>
                </select>
                <input type="radio" name='gender' value='male' onChange={handleChange} /> Male
                <input type="radio" name='gender' value='female' onChange={handleChange} /> Female

                <button onClick={addStaff}>Submit</button>
            </form>



            <div className='options'>
                <button onClick={() => filterDepartment('Developer')}>Developer</button>
                <button onClick={() => filterDepartment('Human Resource')}>Human Resource</button>
                <button onClick={() => filterDepartment('Management')}>Management</button>
                <button onClick={() => filterDepartment('')}>All</button>
            </div>

            <div className="row">
                {
                    staffData.map((staff) => {
                        return (
                            <div className='column'>
                                <StaffDetails staff={staff} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default StaffList;