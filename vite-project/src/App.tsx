import "./pages/Home"
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom'
// import Dashboard from "./components/Dashboard";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import SignUpPage from "./components/SignUpPage";
import SignInPage from "./components/SignInPage";



function ProtectedRoute() {
  const isAuthenticated = false;

  return isAuthenticated ? <Outlet /> : <Navigate to="/signin" replace />;
}



function App(){

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUpPage/>} />
        <Route path="/signin" element={<SignInPage/>} />
      </Routes>
    </BrowserRouter>
  );


}


export default App;