import "./pages/Home"
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom' 
import { useContext } from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import SignUpPage from "./components/SignUpPage";
import SignInPage from "./components/SignInPage";
import { AuthContext } from "./context/AuthContext";



function ProtectedRoute() {

  const authContext = useContext(AuthContext);

  const isAuthenticated = authContext && authContext.user !== null;
  console.log("isAuthenticated", isAuthenticated)

  return isAuthenticated ? <Outlet /> : <Navigate to="/signin" replace />;
}



function App(){
   const authContext = useContext(AuthContext);
   
   
  const isAuthenticated = authContext && authContext.user !== null;
  console.log("isAuthenticated", isAuthenticated);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/jobs" element={<ProtectedRoute />}>
          <Route path="/jobs" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );


}


export default App;