import React from 'react';
import { Link} from 'react-router-dom';
import Header from './Header';
function MedicalPatient(props) {
    return (
        <>
        <Header />
            <section className="content">
                <div className="block-header">
                    <div className="row">
                        <div className="col-lg-7 col-md-6 col-sm-12">
                            <h2>Info Patient</h2>
                        </div>
                        <div className="col-lg-5 col-md-6 col-sm-12">
                            <ul className="breadcrumb float-md-right">
                                <li className="breadcrumb-item">
                                    <a href="home.html">
                                        <i className="zmdi zmdi-home" /> NBI
                                    </a>
                                </li>
                                <li className="breadcrumb-item active">Info Patient</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row clearfix">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <ul className="cbp_tmtimeline">
                                <li>
                                    <div className="cbp_tmicon">
                                        <i className="zmdi zmdi-account" />
                                    </div>
                                    <div className="cbp_tmlabel empty">
                                        {" "}
                                        <span>Info Patient </span>{" "}
                                    </div>
                                </li>
                                <li>
                                    <div className="cbp_tmicon bg-info">
                                        <i className="zmdi zmdi-format-align-left" />
                                    </div>
                                    <div className="cbp_tmlabel">
                                        <h2>
                                            <a href="javascript:void(0);">List Medical</a>{" "}
                                            <span>posted a status update</span>
                                        </h2>
                                        <div className="card">
                                            <div className="body table-responsive">
                                                <table className="table table-striped m-b-0">
                                                    <thead>
                                                        <tr>
                                                            <th>Id Medical</th>
                                                            <th data-breakpoints="xs">Day of the examination</th>
                                                            <th data-breakpoints="xs">Name Doctor</th>
                                                            <th data-breakpoints="xs">BOB</th>
                                                            <th>Status</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <Link to="/medicalPatient">Id Medical</Link>
                                                            </td>
                                                            <td>(CFO)</td>
                                                            <td>New York</td>
                                                            <td>64</td>
                                                            <td>
                                                                <span className="tag tag-success"> Active</span>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="cbp_tmicon bg-green">
                                        {" "}
                                        <i className="zmdi zmdi-case" />
                                    </div>
                                    <div className="cbp_tmlabel">
                                        <h2>
                                            <a href="javascript:void(0);">Job Meeting</a>
                                        </h2>
                                        <p>
                                            You have a meeting at <strong>Laborator Office</strong> Today.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="cbp_tmicon bg-green">
                                        {" "}
                                        <i className="zmdi zmdi-edit" />
                                    </div>
                                    <div className="cbp_tmlabel">
                                        <h2>
                                            <Link to="/editPatient">Edit Info Patient</Link>
                                        </h2>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>


        </>

    );
}

export default MedicalPatient;