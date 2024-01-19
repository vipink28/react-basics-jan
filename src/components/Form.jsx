import React, { useState } from 'react';

function Form(props) {

    const [firstName, setFirstName] = useState(null);
    const [lastname, setLastName] = useState(null);

    const [formData, setFormData] = useState(null);


    const handleFirstName = (e) => {
        let val = e.target.value;
        setFirstName(val);
    }

    const handleLastName = (e) => {
        let val = e.target.value;
        setLastName(val);
    }

    const handleChange = (e) => {
        let { name, value } = e.target;
        setFormData((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }



    return (
        <div>
            <input type='text' name='firstname' onChange={handleFirstName} />

            <input type='text' name='lastname' onChange={handleLastName} />

            <p>FirstName : {firstName}</p>
            <p>LastName : {lastname}</p>


            <form>
                <div>
                    <input type="text" name='name' onChange={handleChange} />
                </div>
                <div>
                    <input type="email" name='email' onChange={handleChange} />
                </div>
                <div>
                    <input type="password" name='password' onChange={handleChange} />
                </div>
                <div>
                    <input type="number" name='contact' onChange={handleChange} />
                </div>

                <button>Submit</button>

            </form>











        </div>
    );
}

export default Form;

// {name: "abc", email:"abc", password:"abc", contact:"abcv"}