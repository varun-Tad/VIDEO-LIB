import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Sidebar from "./components/sidebar/sidebar";
import Explorepage from "./routes/Explorepage/Explorepage";
import Homepage from "./routes/Homepage/Homepage";
import WatchLaterpage from "./routes/WatchLaterpage/WatchLaterpage";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/explore" element={<Explorepage />} />
        <Route path="/watchLater" element={<WatchLaterpage />} />
      </Routes>
    </div>
  );
}

export default App;
