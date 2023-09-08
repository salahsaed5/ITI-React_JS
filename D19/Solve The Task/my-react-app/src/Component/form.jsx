import React, { useState } from "react";

const Form = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, age });
  };

  return (
    <form  onSubmit={handleSubmit}>
      <h2>User Form</h2>
      <label>
        Name:
        <input
          type="text" placeholder="Enter your Name "
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
      <label>
         <br />
        Age:
        <input
          input type="number" name="age" placeholder="Enter your age" required
          onChange={(e) => setAge(e.target.value)}
        />
        <br />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

const UserInfoDisplay = ({ userInfo }) => {
  return (
    <div style={{backgroundColor:"grey"}}>
      <h4> {userInfo.name}</h4>
      <h4> {userInfo.age}</h4>
    </div>
  );  
};

const INFO = () => {
  const [userInfo, setUserInfo] = useState(null);

  const handleFormSubmit = (data) => {
    setUserInfo(data);
  };

  return (
    <div>
      <Form onSubmit={handleFormSubmit} />
      {userInfo && <UserInfoDisplay userInfo={userInfo} />}
    </div>
  );
};

export default INFO;