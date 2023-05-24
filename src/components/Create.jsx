import React, { useState } from 'react';
import "./Create.css"
import axios from 'axios'
import { useNavigate } from "react-router-dom"
const Create = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };
  const navigate = useNavigate();

  const sendData = () => {
    axios.post('https://645cece1e01ac610589765d5.mockapi.io/crud',
     {firstName,
      lastName
    }).then((res)=>{
        console.log(res);
        setFirstName("");
        setLastName("");
        alert('Success')
        navigate("/read")
    }).catch((err)=>{
        console.log(err)
    })
  };

  return (
    <form onSubmit={(e)=>e.preventDefault()} className='form'>
      <label>
        First Name:
        <input type="text" value={firstName} onChange={handleFirstNameChange} />
      </label>
      <label>
        Last Name:
        <input type="text" value={lastName} onChange={handleLastNameChange} />
      </label>
      <button type="submit" onClick={sendData}>Submit</button>
    </form>
  );
};

export default Create;
