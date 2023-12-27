// import logo from './logo.svg';
import "./App.css";
import { Home } from "./Home";
// import { Routes, Route, Router } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SingleMovie from "./SingleMovie";
import Error from "./Error";
import "../src/styles/styles.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="movie/:id" element={<SingleMovie />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
