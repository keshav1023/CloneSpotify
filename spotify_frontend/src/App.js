import "./output.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginComponent from "./routes/Login";
import SignupComponent from "./routes/Signup";
import HomeComponent from "./routes/Home";
import LoggedInHomeComponent from "./routes/LoggedInHome"
import UploadSong from "./routes/UploadSong";
import MyMusic from "./routes/MyMusic";
import SearchPage from "./routes/SearchPage";
import { useCookies } from "react-cookie";
import songContext from "./contexts/songContext";

function App() {
  const [currentSong, setCurrentSong] = useState(null);
  const [soundPlayed, setSoundPlayed] = useState(null);
  const [isPaused, setIsPaused] = useState(true);
  const [cookie, setCookie] = useCookies(["token"]);
  console.log(cookie.token);

  return (
    <div className="w-screen h-screen font-poppins">
      <BrowserRouter>
        {cookie.token ? (
          // Logged in routes
          <songContext.Provider 
            value={{
              currentSong, 
              setCurrentSong, 
              soundPlayed, 
              setSoundPlayed, 
              isPaused, 
              setIsPaused
            }}
          >
            <Routes>

                <Route path="/" element={<HelloComponent />} />
                <Route path="/home" element={<LoggedInHomeComponent />} />
                <Route path="/uploadSong" element={<UploadSong />} />
                <Route path="/myMusic" element={<MyMusic />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="*" element={<Navigate to="/home" />} />
            </Routes>
          </songContext.Provider>
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
