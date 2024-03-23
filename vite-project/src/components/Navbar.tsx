import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { signOut } from "firebase/auth";
import auth from "../firebase/firebase-config";


function Navbar() {
  const authContext = useContext(AuthContext);
  console.log("authContext: ", authContext);

  const isAuthenticated:boolean = authContext && authContext.user !== null;
  console.log("isAuthenticated", isAuthenticated);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("User signed out successfully");
        // Additional actions after sign out, such as redirecting to another page
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };



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
          <button onClick={handleSignOut}>Sign Out</button>
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
