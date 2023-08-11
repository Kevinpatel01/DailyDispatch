import "./App.css";
import News from "./Components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Components/About";
import Registration from "./Components/Registration";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/buisness"
            element={
              <News
                key="buisness"
                pageSize={8}
                country="in"
                category="buisness"
              />
            }
          />
          <Route
            path="/entertainment"
            element={
              <News
                key="entertainment"
                pageSize={8}
                country="in"
                category="entertainment"
              />
            }
          />
          <Route
            path="/general"
            element={
              <News
                key="general"
                pageSize={8}
                country="in"
                category="general"
              />
            }
          />
          <Route
            path="/health"
            element={
              <News key="health" pageSize={8} country="in" category="health" />
            }
          />
          <Route
            path="/science"
            element={
              <News
                key="science"
                pageSize={8}
                country="in"
                category="science"
              />
            }
          />
          <Route
            path="/sports"
            element={
              <News key="sports" pageSize={8} country="in" category="sports" />
            }
          />
          <Route
            path="/technology"
            element={
              <News
                key="technology"
                pageSize={8}
                country="in"
                category="technology"
              />
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
