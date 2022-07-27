import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../../features/auth/authSlice";
function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  const dispatch = useDispatch();
  //event handlers
  const handleInputChange = (event) =>
    setFormData((prevData) => ({
      ...prevData,
      [event.target.id]: event.target.value,
    }));
  const handleSubmitForm = (event) => {
    event.preventDefault();
    dispatch(login(formData, "naomi"));
  };
  return (
    <form onSubmit={handleSubmitForm}>
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

export default Login;
