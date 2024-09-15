import "./Form.css";
import { useState } from "react";
export default function Form() {
  let [formData, setFormData] = useState({
    fullName: "",
    userName: "",
    password: "",
  });
  // let handleNameChange = (event) => {
  //   setFullName(event.target.value);
  // };
  // let handleUserName = (event) => {
  //   setUserName(event.target.value);
  // };

  let handleInputChange = (event) => {
    // let fieldName = event.target.name;
    // let newValue = event.target.value;
    setFormData((currData) => {
      // currData[fieldName] = newValue;
      // return { ...currData, [fieldName]: newValue };
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({
      fullName: "",
      userName: "",
      password: "",
    });
  };
  return (
    <>
      <form action="./action" onSubmit={handleSubmit}>
        <label htmlFor="fullName">Full Name : </label>
        <input
          type="text"
          placeholder="enter your name"
          value={formData.fullName}
          id="fullName"
          name="fullName"
          onChange={handleInputChange}
        />
        <br />
        <label htmlFor="userName">User Name : </label>
        <input
          type="text"
          placeholder="enter your name"
          value={formData.userName}
          id="userName"
          name="userName"
          onChange={handleInputChange}
        />
        <br />
        <label htmlFor="password">Password : </label>
        <input
          type="password"
          placeholder="enter your password"
          value={formData.password}
          id="password"
          name="password"
          onChange={handleInputChange}
        />
        <br />
        <button>Submit</button>
      </form>
    </>
  );
}
