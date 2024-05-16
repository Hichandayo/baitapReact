import "./App.css";
import About from "../React-router-baitap3/About";
import { NavLink, Route, Routes } from "react-router-dom";
import Home from "../React-router-baitap3/Home";
import Contact from "../React-router-baitap3/Contact";
import Portfolio from "../React-router-baitap3/Portfolio";
function App() {
  return (
    <>
      <div className="p-4 pt-5">
        <ul className="list-unstyled components mb-5">
          <li>
            <NavLink to="/" className="dropdown-toggle">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/portfolio">Portfolio</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </>
  );
}

export default App;
