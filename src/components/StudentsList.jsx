import React, { useState } from 'react';
import Row from './Row';

function StudentsList(props) {
    const data = [
        { id: 1, name: "Abhishek", course: "Python", fees: 24000 },
        { id: 2, name: "Avisha", course: "Mern", fees: 17000 },
        { id: 3, name: "Mohit", course: "Java", fees: 44000 },
        { id: 4, name: "Navneet", course: "PHP", fees: 6500 },
        { id: 5, name: "Ritika", course: "Python", fees: 25000 }
    ]
    const [studentsData, setStudentsData] = useState(data);

    const deleteStudent = (id) => {
        const filteredArray = studentsData.filter((item) => {
            return item.id !== id
        });
        setStudentsData(filteredArray);
    }

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
                                <Row key={student.id} student={student} deleteStudent={deleteStudent} />
                            )
                        })
                    }

                </tbody>
            </table>
        </div>
    );
}

export default StudentsList;