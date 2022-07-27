import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav>
      <h1>Logo</h1>
      <div className="buttons">
        <Link to="/login">
          <button className="btn">Login</button>
        </Link>
        <Link to="/signup">
          <button className="btn">Signup</button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
