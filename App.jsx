
import React, { useState } from 'react';

const App = () => {

    const [Name, newName] = useState({
        fname: "",
        lname: "",
        email: "",
        phone: "",
        qualification: "",
    });

    const Change = (event) => {

        console.log(event.target.value);
        console.log(event.target.name);

        // const value = event.target.value;
        // const name = event.target.name;

        const { value, name } = event.target;


        newName((prevState) => {
            console.log(prevState);

            return {
                ...prevState,
                [name]: value,
            };

        });
    }

    const formData = (e) => {

        e.preventDefault();
        alert('form submitted');

    }



    return (
        <>
            <form onSubmit={formData}>
                <div>
                    <h1>Hi {Name.fname} {Name.lname}</h1>
                    <h2>{Name.email}</h2>
                    <h2>{Name.phone}</h2>
                    <h2>{Name.qualification}</h2>
                    <div className="innerdiv">
                        <input placeholder="Enter your First Name" onChange={Change} name='fname'
                            value={Name.fname}
                        >
                        </input>
                    </div>
                    <div className="innerdiv">
                        <input placeholder="Enter your Last Name" onChange={Change} name='lname'
                            value={Name.lname}
                        ></input>
                    </div>
                    <div className="innerdiv">
                        <input placeholder="Enter your Email ID" onChange={Change} name='email'
                            value={Name.email}
                            autoComplete="off"
                        ></input>
                    </div>
                    <div className="innerdiv">
                        <input placeholder="Enter your Phone Number" onChange={Change} name='phone'
                            value={Name.phone}
                            autoComplete="off"
                        ></input>
                    </div>
                    <div className="innerdiv">
                        <input placeholder="Enter your Qualification" onChange={Change} name='qualification'
                            value={Name.qualification}
                            autoComplete="off"
                        ></input>
                    </div>
                </div>
                <button className="btn" type='submit'>Click Here 😄</button>
            </form>

        </>
    );

}

export default App;
