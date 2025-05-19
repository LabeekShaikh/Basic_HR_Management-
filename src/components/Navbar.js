import React from 'react';
import { Link } from 'react-router-dom'; 
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar custom-navbar fixed-top">
      <div className="container-fluid d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <a className="navbar-logo" href="#">
            <img
              src="/images/7089.png_1200.png" // Corrected image path
              alt="App Logo"
              className="logo-img"
            />
          </a>
          <span className="navbar-title ms-3">Welcome</span>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <Link className="nav-link" to="/Home">Home </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link> {/* Link to About page */}
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link> {/* Link to Contact page */}
              </li>
               <li className="nav-item">
                <Link className="nav-link" to="/Services">Services</Link> {/* Link to About page */}
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Attendance">Attendance</Link> {/* Link to About page */}
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/SalaryPage">SalaryPage</Link> {/* Link to About page */}
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/TeamsRoles">TeamsRoles</Link> {/* Link to About page */}
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ShiftScheduling">ShiftScheduling</Link> {/* Link to About page */}
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/TrainingPage">TrainingPage</Link> {/* Link to About page */}
              
              </li>
            </ul>
            <div className="offcanvas-footer">
              <p className="text-center" style={{ color: "Black" }}>© 2023 Your Company</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
