import axios from "axios";
const API_URL = "/api/auth";
const register = async (user) => {
  const response = await axios.post(`${API_URL}/register`, user);
  if (register.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  console.log(response.data);
  return response.data;
};
const login = async (user) => {
  const response = await axios.post(`${API_URL}/login`, user);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const logout = () => localStorage.removeItem("user");
export default { register, login, logout };
