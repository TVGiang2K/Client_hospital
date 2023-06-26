import React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

function Login(props) {
  return (
    <>
      <div className="theme-cyan authentication sidebar-collapse">
        <div className="page-header">
          <div
            className="page-header-image"
            style={{ backgroundImage: "url(assets/images/login.jpg)" }}
          />
          <div className="container">
            <div className="col-md-12 content-center">
              <div className="card-plain">
                <form className="form" method="" action="#">
                  <div className="header">
                    <div className="logo-container">
                      <img src="assets/images/logo.jpg" alt="" />
                    </div>
                    <h5>Log in</h5>
                  </div>
                  <div className="content">
                    <div className="input-group input-lg">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter User Name"
                      />
                      <span className="input-group-addon">
                        <i className="zmdi zmdi-account-circle" />
                      </span>
                    </div>
                    <div className="input-group input-lg">
                      <input
                        type="password"
                        placeholder="Password"
                        className="form-control"
                      />
                      <span className="input-group-addon">
                        <i className="zmdi zmdi-lock" />
                      </span>
                    </div>
                  </div>
                  <div className="footer text-center">
                    <a
                      href="index.html"
                      className="btn l-cyan btn-round btn-lg btn-block waves-effect waves-light"
                    >
                      SIGN IN
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default Login;
