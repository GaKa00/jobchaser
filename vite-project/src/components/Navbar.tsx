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
          <Link to="/">Find Jobs</Link>
        </li>
        <li>
          {" "}
          <button>Sign Out</button>
        </li>
      </ul>
      <div className="loggedin">
        {/*  Make a usecontext to display if logged in or not.
        If logged in, maybe make a profile modal */}
      </div>
    </nav>
  );
}

export default Navbar;
