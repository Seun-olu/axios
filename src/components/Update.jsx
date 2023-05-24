import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Update = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [ID, setID] = useState(null);

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  useEffect(() => {
    setFirstName(localStorage.getItem("firstName"));
    setLastName(localStorage.getItem("lastName"));
    setID(localStorage.getItem("ID"));
  }, []);

  const navigate = useNavigate();

  const sendData = () => {
    axios
      .put(`https://645cece1e01ac610589765d5.mockapi.io/crud/${ID}`, {
        firstName,
        lastName,
      })
      .then((res) => {
        console.log(res);
        alert("Success");
        navigate("/read");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()} className="form">
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={handleFirstNameChange}
          />
        </label>
        <label>
          Last Name:
          <input type="text" value={lastName} onChange={handleLastNameChange} />
        </label>
        <button type="submit" onClick={sendData}>
          Update
        </button>
      </form>
    </div>
  );
};

export default Update;
