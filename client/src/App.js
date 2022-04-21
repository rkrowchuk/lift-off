import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import MyPosts from "./components/MyPosts";
import Guidelines from "./components/Guidelines";
import Landing from "./components/Landing";
import { Grommet } from "grommet";
import "./styles/App.scss";

export default function App() {
  return (
    <div className="App">
      <Grommet plain>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/my-posts" element={<MyPosts />} />
          <Route path="/guidelines" element={<Guidelines />} />
          <Route path="/" element={<Landing />} />
        </Routes>
      </Router>
      </Grommet>
    </div>
  );
}
