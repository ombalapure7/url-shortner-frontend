import Login from "./components/Login";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Register from "./components/Register";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
import Urls from "./components/Urls";
import "./components/Footer.css";

function App() {
  return (
    <>
      <div>
        <nav
          className="navbar navbar-dark bg-dark"
          style={{ backgroundColor: "#e3f2fd" }}
        >
          <div className="container-fluid">
            <span
              style={{ margin: "0 auto", fontSize: "2rem" }}
              className="navbar-text"
            >
              <a href="/" style={{ textDecoration: "none" }}>
                URL Shortner
                <span>
                  <i className="bi bi-link-45deg"></i>
                </span>
              </a>
            </span>
          </div>
        </nav>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/urls" element={<Urls />}></Route>
          <Route path="/signup" element={<Register />}></Route>
          <Route path="/forgot-password" element={<ForgotPassword />}></Route>
          <Route
            path="/reset-password/:email"
            element={<ResetPassword />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
