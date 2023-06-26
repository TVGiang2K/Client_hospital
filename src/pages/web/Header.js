import React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <>
      {/* Top Bar */}
      <nav className="navbar" data-theme="cyan">
        <div className="col-12" data-theme="cyan">
          <div className="navbar-header">
            <a href="#" className="bars" />
            <Link className="navbar-brand" to="/">
              <img src="assets/images/logo.jpg" width={30} />
              <span className="m-l-10">NBI</span>
            </Link>
          </div>
          <ul className="nav navbar-nav navbar-left">
            <li>
              <Link
                to="#"
                className="ls-toggle-btn"
                data-close="true"
              >
                <i className="zmdi zmdi-swap" />
              </Link>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link to="/login" className="mega-menu" data-close="true">
                <i className="zmdi zmdi-power" />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      {/* Left Sidebar */}
      <aside id="leftsidebar" className="sidebar">
        <div className="menu">
          <ul className="list">
            <li className="header">MENU</li>
            <li>
              {" "}
              <Link to="/addPatient">
                <i className="zmdi zmdi-apps" />
                <span>Add Patient</span>
              </Link >
            </li>
            <li>
              {" "}
              <Link to="/searchPatient">
                <i className="zmdi zmdi-apps" />
                <span>Search Info Patient</span>
              </Link>
            </li>
            <li>
              {" "}
              <Link to="/newMedical">
                <i className="zmdi zmdi-apps" />
                <span>New Medical</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}

export default Header;

