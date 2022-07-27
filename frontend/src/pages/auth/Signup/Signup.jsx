import React, { useState } from "react";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { email, name, password } = formData;
  //event handlers
  const handleInputChange = (event) =>
    setFormData((prevData) => ({
      ...prevData,
      [event.target.id]: event.target.value,
    }));
  const handleSubmitForm = (event) => {
    event.preventDefault();
    console.log(formData);
  };
  return (
    <form onSubmit={handleSubmitForm}>
      <input type="name" id="name" value={name} onChange={handleInputChange} />
      <input
        type="email"
        id="email"
        value={email}
        onChange={handleInputChange}
      />
      <input
        type="password"
        id="password"
        value={password}
        onChange={handleInputChange}
      />

      <button>Register</button>
    </form>
  );
}

export default Signup;
