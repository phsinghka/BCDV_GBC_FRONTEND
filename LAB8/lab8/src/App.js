import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import Home from "./components/Home.component";
import About from "./components/About.component";
import Error from "./components/Error.component";
import Contact from "./components/Contact.component";
import Student from "./components/Student.component";

function App() {
  return (
    <BrowserRouter>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/student/JIM SMITH">Student : Jim Smith</Link>
          </li>
          <li>
            <Link to="/student/JIM SMITH/10">Student : Jim Smith</Link>
          </li>
        </ul>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/student/:studentName/" element={<Student />} />
          <Route
            path="/student/:studentName/:studentNo"
            element={<Student />}
          />
          <Route element={<Error />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
