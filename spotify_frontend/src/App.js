//import "./App.css";
import "./output.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginComponent from "./routes/Login";
import SignupComponent from "./routes/Signup";
import HomeComponent from "./routes/Home";
import LoggedInHomeComponent from "./routes/LoggendInHome"
import UploadSong from "./routes/UploadSong";
import { useCookies } from "react-cookie";

function App() {
  const [cookie, setCookie] = useCookies(["token"]);
  console.log(cookie.token);

  return (
    <div className="w-screen h-screen font-poppins">
      <BrowserRouter>
        {cookie.token ? (
          // Logged in routes
          <Routes>
            <Route path="/" element={<HelloComponent />} />
            <Route path="/home" element={<LoggedInHomeComponent />} />
            <Route path="/uploadSong" element={<UploadSong />} />
            <Route path="*" element={<Navigate to="/home" />} />
          </Routes>
        ) : (
          
          // Logged out routes
          <Routes>
            <Route path="/home" element={<HomeComponent />} />
            <Route path="/login" element={<LoginComponent />} />
            <Route path="/signup" element={<SignupComponent />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

const HelloComponent = () => {
  return <div>This is Hello from component</div>;
};

export default App;
