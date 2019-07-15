import React, { useState } from 'react';

const SetState = ({ userData }) => {
    const [user, setData] = useState(userData || {});
    const inputStyle = {
        margin: "0 20px 10px 20px"
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...user, [name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);
    }
    
    return <div>
        <pre>User: {JSON.stringify(user, null, 2)}</pre>

        <form onSubmit={handleSubmit}>
            <h4>Names</h4>
            
            <div>
                <label htmlFor="firstNameInput">First</label>
                <input onChange={handleChange} 
                       type="text" 
                       style={inputStyle} 
                       id="firstNameInput" 
                       name="firstName" 
                       defaultValue={user.firstName}/>
            </div>

            <div>
                <label htmlFor="lastNameInput">Last</label>
                <input onChange={handleChange} 
                       type="text" 
                       style={inputStyle} 
                       id="lastNameInput" 
                       name="lastName" 
                       defaultValue={user.lastName}/>
            </div>

            <h4>Data</h4>

            <div>
                <label htmlFor="ageInput">Age</label>
                <input onChange={handleChange} 
                       type="number" 
                       style={inputStyle} 
                       id="ageInput" 
                       name="age" 
                       defaultValue={user.age}/>
            </div>

            <div>
                <span>Gender</span>
                <br/>
                <label htmlFor="genderInputMale">Male</label>
                <input onChange={handleChange} 
                        type="radio" 
                        style={inputStyle} 
                        id="genderInputMale" 
                        name="gender" 
                        value="m"
                        checked={user.gender === "m"}/>
                <label htmlFor="genderInputFemale">Female</label>
                <input onChange={handleChange} 
                        type="radio"
                        style={inputStyle}
                        id="genderInputFemale"
                        name="gender"
                        value="f"
                        checked={user.gender === "f"}/>
                <label htmlFor="genderInputOther">Other</label>
                <input onChange={handleChange} 
                        type="radio"
                        style={inputStyle}
                        id="genderInputOther"
                        name="gender"
                        value="o"
                        checked={user.gender === "o"}/>
            </div>
            
            <button type="submit">Log user</button>
        </form>
    </div>;
}

export default SetState;
