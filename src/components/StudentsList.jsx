import React, { useState } from 'react';

function StudentsList(props) {
    const data = [
        { id: 1, name: "Abhishek", course: "Python", fees: 24000 },
        { id: 2, name: "Avisha", course: "Mern", fees: 17000 },
        { id: 3, name: "Mohit", course: "Java", fees: 44000 },
        { id: 4, name: "Navneet", course: "PHP", fees: 6500 },
        { id: 5, name: "Ritika", course: "Python", fees: 25000 }
    ]

    const [studentsData, setStudentsData] = useState(data);

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Course</th>
                        <th>Fees</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        studentsData.map((student) => {
                            return (
                                student.course === "Python" ?
                                    <tr key={student.id} className={student.fees > 20000 ? 'bg-primary' : ''}>
                                        <td>{student.id}</td>
                                        <td>{student.name}</td>
                                        <td>{student.course}</td>
                                        <td>{student.fees}</td>
                                    </tr> : ""
                            )
                        })
                    }

                </tbody>
            </table>
        </div>
    );
}

export default StudentsList;