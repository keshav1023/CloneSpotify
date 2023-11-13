import "./output.css";
import songContext from "./contexts/songContext";
import React, {useState,lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Lazy-loaded components
const HomeComponent = lazy(() => import('./routes/Home'));
const LoginComponent = lazy(() => import('./routes/Login'));
const SignupComponent = lazy(() => import('./routes/Signup'));
const LoggedInHomeComponent = lazy(() => import('./routes/LoggedInHome'));
const UploadSong = lazy(() => import('./routes/UploadSong'));
const MyMusic = lazy(() => import('./routes/MyMusic'));
const LikedSongs = lazy(() => import('./routes/LikedSongs'));
const SearchPage = lazy(() => import('./routes/SearchPage'));
const Library = lazy(() => import('./routes/Library'));
const SinglePlaylistView = lazy(() => import('./routes/SinglePlaylistView'));

function App() {

  const [currentSong, setCurrentSong] = useState(null);
  const [soundPlayed, setSoundPlayed] = useState(null);
  const [isPaused, setIsPaused] = useState(true);
  const token = localStorage.getItem("userLoginSessionToken");

  return (
    <div className="w-screen h-screen font-poppins">
      <BrowserRouter>
        <Suspense fallback={<div>Loading......</div>}>
        {token ? (
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
                <Route path="/likedSongs" element={<LikedSongs />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/library" element={<Library />} />
                <Route path="/playlist/:playlistId" element={<SinglePlaylistView />} />
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
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

const HelloComponent = () => {
  return <div>This is Hello from component</div>;
};

export default App;
