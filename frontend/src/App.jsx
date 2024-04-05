import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
//import MessageContainer from "./components/messages/MessageContainer";
// eslint-disable-next-line no-unused-vars
import Conversations from "./components/sidebar/Conversations";
import Home from "./pages/home/Home";
//import Sidebar from "./components/sidebar/Sidebar";
// import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
//import Sidebar from "./components/sidebar/Sidebar";
//import Login from "./pages/login/Login";
//import Sidebar from "./components/sidebar/Sidebar";
//import Home from "./pages/home/Home";
//import Login from "./pages/login/Login";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";

function App() {
  const { authUser } = useAuthContext();
  return (
    <>
      <div className="p-4 h-screen flex items-center justify-center">
        <Routes>
          <Route path="/" element={authUser?<Home/>:<Navigate to='/login'/>} />
          <Route path="/login" element={authUser?<Navigate to='/'/> : <Login/>} />
          <Route
            path="/signup"
            element={authUser ? <Navigate to="/" /> : <SignUp />} //if user authencite so we send him to home screen
          />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}
export default App;
