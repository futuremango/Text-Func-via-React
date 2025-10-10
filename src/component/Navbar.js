import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const getNavbarStyle = () => {
    if (props.mode === "dark") {
      return { backgroundColor: "#3E6D9C", color: "white" };
    } else if (props.mode === "green") {
      return { backgroundColor: "#799351", color: "black" };
    } else if (props.mode === "red") {
      return { backgroundColor: "#A91D3A", color: "white" };
    } else {
      return { backgroundColor: "#D8D9CF", color: "#0C0950" };
    }
  };

  return (
    <nav
      className="navbar navbar-expand-lg"
      style={getNavbarStyle()}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" style={{ color: "inherit" }}>
          TextMann
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse text" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/" style={{ color: "inherit" }}>
                Home
              </Link>
              
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" style={{ color: "inherit" }}>
                About
              </Link>
            </li>
          </ul>
        </div>

        <div className="d-flex">
          {/* Dark Mode */}
          <div className={`form-check form-switch mx-2 text-${props.mode === "light" ? "dark" : "light"}`}>
            <input
              className="form-check-input"
              type="checkbox"
              id="darkswitch"
              checked={props.mode === "dark"}
              onChange={(e) => props.toggleMode(e.target.checked ? "dark" : "light")}
            />
            <label className="form-check-label">Dark Mode</label>
          </div>

          {/* Green Mode */}
          <div className={`form-check form-switch mx-2 text-${props.mode === "green" ? "light" : "success"}`}>
            <input
              className="form-check-input"
              type="checkbox"
              id="greenswitch"
              checked={props.mode === "green"}
              onChange={(e) => props.toggleMode(e.target.checked ? "green" : "light")}
            />
            <label className="form-check-label">Green Mode</label>
          </div>

          {/* Red Mode */}
          <div className={`form-check form-switch mx-2 text-${props.mode === "red" ? "light" : "danger"}`}>
            <input
              className="form-check-input"
              type="checkbox"
              id="redswitch"
              checked={props.mode === "red"}
              onChange={(e) => props.toggleMode(e.target.checked ? "red" : "light")}
            />
            <label className="form-check-label">Red Mode</label>
          </div>
        </div>
      </div>
    </nav>
  );
}
