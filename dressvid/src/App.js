import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar/sidebar";
import Explorepage from "./routes/Explorepage/Explorepage";
import Historypage from "./routes/Historypage/Historypage";
import WatchLaterpage from "./routes/WatchLaterpage/WatchLaterpage";
import Homepage from "./routes/Homepage/Homepage";
import { NoMatch } from "./routes/NoMatch";
import { LikeDislikepage } from "./routes/LikeDislikepage/LikeDislikepage";
import { Singlepage } from "./routes/Singlepage/Singlepage";
import Playlistpage from "./routes/PlaylistPage/Playlistpage";
import { Singleplaylistpage } from "./routes/PlaylistPage/Singleplaylistpage";
import "./App.css";
import SignInpage from "./routes/SignInPage/SignInpage";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/explore" element={<Explorepage />} />
        <Route path="/watchLater" element={<WatchLaterpage />} />
        <Route path="/history" element={<Historypage />} />
        <Route path="/likedVideos" element={<LikeDislikepage />} />
        <Route path="/singlepage/:pageid" element={<Singlepage />} />
        <Route path="/playlist/:playid" element={<Singleplaylistpage />} />
        <Route path="/playlist" element={<Playlistpage />} />
        <Route path="/signIn" element={<SignInpage />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
