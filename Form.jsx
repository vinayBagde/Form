import "./Form.css";
import { useState } from "react";
export default function Form() {
  let [fullName, setFullName] = useState("");
  let handleNameChange = (event) => {
    setFullName(event.target.value);
    console.log(event.target.value);
  };
  return (
    <>
      <form action="./action">
      <label htmlFor="name">Enter full Name : </label>
        <input
          type="text"
          placeholder="enter your name"
          value={fullName}
          onChange={handleNameChange}
          id="name"
        />

        <button>Submit</button>
      </form>
    </>
  );
}
