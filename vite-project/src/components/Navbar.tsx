import { Link } from "react-router-dom";



function Navbar() {
 

  return (
    <nav className="navbar">
      <h1>Jobchaser</h1>
      <ul>
        <li>
          <Link to="/signin">Sign In</Link>
        </li>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
        <li>
          {" "}
          <button>Sign Out</button>
        </li>
      </ul>
      <div className="loggedin">
      </div>
    </nav>
  );
}

export default Navbar;
