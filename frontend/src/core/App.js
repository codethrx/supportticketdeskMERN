//routes
import RoutesTemplate from "./Routes";
//components
import Navbar from "../components/reusables/Navbar/Navbar";
//test
import { logout } from "../features/auth/authSlice";
import { useDispatch } from "react-redux";
function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
      <Navbar />
      <RoutesTemplate />
      <button onClick={() => dispatch(logout())}>logout</button>
    </div>
  );
}

export default App;
