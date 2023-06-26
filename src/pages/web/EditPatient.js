import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
function EditPatient(props) {
    return (
        <>
          <Header/>
            <section className="content">
  <div className="block-header">
    <div className="row">
      <div className="col-lg-7 col-md-6 col-sm-12">
        <h2>Form Edit Patient</h2>
      </div>
      <div className="col-lg-5 col-md-6 col-sm-12">
        <ul className="breadcrumb float-md-right">
          <li className="breadcrumb-item">
            <a href="home.html">
              <i className="zmdi zmdi-home" /> NBI
            </a>
          </li>
          <li className="breadcrumb-item active">Form Edit Patient</li>
        </ul>
      </div>
    </div>
  </div>
  <div className="container-fluid">
    {/* Input */}
    <div className="row clearfix">
      <div className="col-lg-12 col-md-12 col-sm-12">
        <div className="card">
          <div className="header">
            <h2>
              <strong>Input</strong>
            </h2>
          </div>
          <div className="body">
            <h2 className="card-inside-title">Info Patient</h2>
            <div className="row clearfix">
              <div className="col-sm-4">
                <b>FullName</b>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="FullName"
                  />
                </div>
              </div>
              <div className="col-sm-4">
                <b>Phone</b>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Phone"
                  />
                </div>
              </div>
              <div className="col-sm-4">
                <b>Year Birthday</b>
                <div className="form-group form-float">
                  <input
                    type="number"
                    className="form-control"
                    name="number"
                    min={1900}
                    required=""
                  />
                </div>
              </div>
              <div className="col-sm-12">
                <div className="form-group">
                  <div className="radio inlineblock m-r-20">
                    <b>Gender:</b>
                  </div>
                  <div className="radio inlineblock m-r-20">
                    <input
                      type="radio"
                      name="gender"
                      id="male"
                      className="with-gap"
                      defaultValue="option1"
                    />
                    <label htmlFor="male">Male</label>
                  </div>
                  <div className="radio inlineblock">
                    <input
                      type="radio"
                      name="gender"
                      id="Female"
                      className="with-gap"
                      defaultValue="option2"
                      defaultChecked=""
                    />
                    <label htmlFor="Female">Female</label>
                  </div>
                </div>
              </div>
              <div className="col-sm-12">
                <b>Address</b>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Address"
                  />
                </div>
              </div>
            </div>
            <h2 className="card-inside-title">Input Status</h2>
            <div className="row clearfix">
              <div className="col-sm-6">
                <b>Examination Date</b>
                <div className="input-group">
                  <span className="input-group-addon">
                    <i className="zmdi zmdi-calendar" />
                  </span>
                  <input
                    type="text"
                    className="form-control datetimepicker"
                    placeholder="Please examination date & time..."
                  />
                </div>
              </div>
              <div className="col-sm-12">
                <b>Input Data By</b>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Input Data By"
                  />
                </div>
              </div>
              <div className="col-sm-12">
                <b>Input Data Invi</b>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Input Data Invi"
                  />
                </div>
              </div>
            </div>
            <div className="row clearfix">
              <div className="col-sm-12">
                <button
                  type="button"
                  className="btn btn-raised btn-primary btn-round waves-effect"
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


        </>

    );
}

export default EditPatient;