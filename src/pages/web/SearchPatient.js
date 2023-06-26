import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
function SearchPatient(props) {
    return (
        <>
        <Header />
            <section className="content">
                <div className="block-header">
                    <div className="row">
                        <div className="col-lg-7 col-md-6 col-sm-12">
                            <h2>Search Patient</h2>
                        </div>
                        <div className="col-lg-5 col-md-6 col-sm-12">
                            <ul className="breadcrumb float-md-right">
                                <li className="breadcrumb-item">
                                    <a href="home.html">
                                        <i className="zmdi zmdi-home" /> NBI
                                    </a>
                                </li>
                                <li className="breadcrumb-item active">Search Patient</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row clearfix">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="card">
                                <div className="header">
                                    <h2>
                                        <strong>Input</strong> Search Patient
                                    </h2>
                                    <ul className="header-dropdown">
                                        <li className="dropdown">
                                            {" "}
                                            <a
                                                href="javascript:void(0);"
                                                className="dropdown-toggle"
                                                data-toggle="dropdown"
                                                role="button"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                            >
                                                <i className="zmdi zmdi-more" />{" "}
                                            </a>
                                            <ul className="dropdown-menu dropdown-menu-right">
                                                <li>
                                                    <a href="javascript:void(0);">Action</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);">Another action</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);">Something else</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div className="body">
                                    <form className="form-horizontal">
                                        <div className="row clearfix">
                                            <div className="col-lg-2 col-md-2 col-sm-4 form-control-label">
                                                <label htmlFor="email_address_2">Name Patient</label>
                                            </div>
                                            <div className="col-lg-10 col-md-10 col-sm-8">
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        id="email_address_2"
                                                        className="form-control"
                                                        placeholder="Enter Name Patient"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row clearfix">
                                            <div className="col-lg-2 col-md-2 col-sm-4 form-control-label">
                                                <label htmlFor="password_2">Phone Patient</label>
                                            </div>
                                            <div className="col-lg-10 col-md-10 col-sm-8">
                                                <div className="form-group">
                                                    <input
                                                        type="password"
                                                        id="password_2"
                                                        className="form-control"
                                                        placeholder="Enter Phone patient"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row clearfix">
                                            <div className="col-sm-8 offset-sm-2">
                                                <Link to="/infoPatient">
                                                    <button
                                                        type="button"
                                                        className="btn btn-raised btn-primary btn-round waves-effect"
                                                    >
                                                        Search
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>

    );
}

export default SearchPatient;