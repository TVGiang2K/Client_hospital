import React from 'react';
import Header from './Header';


function Home(props) {
  return (
    <>
    <Header />
        {/* Main Content */}
        <section className="content home">
          <div className="block-header">
            <div className="row">
              <div className="col-lg-7 col-md-6 col-sm-12">
                <h2>
                  Home
                  <small className="text-muted">Welcome to NBI</small>
                </h2>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="card widget_2">
              <ul className="row clearfix list-unstyled m-b-0">
                <li className="col-lg-3 col-md-6 col-sm-12">
                  <div className="body">
                    <div className="row">
                      <div className="col-7">
                        <h5 className="m-t-0">Traffic</h5>
                        <p className="text-small">4% higher than last month</p>
                      </div>
                      <div className="col-5 text-right">
                        <h2 className="">20</h2>
                        <small className="info">of 1Tb</small>
                      </div>
                      <div className="col-12">
                        <div className="progress m-t-20">
                          <div
                            className="progress-bar l-amber"
                            role="progressbar"
                            aria-valuenow={45}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            style={{ width: "45%" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-lg-3 col-md-6 col-sm-12">
                  <div className="body">
                    <div className="row">
                      <div className="col-7">
                        <h5 className="m-t-0">Sales</h5>
                        <p className="text-small">6% higher than last month</p>
                      </div>
                      <div className="col-5 text-right">
                        <h2 className="">12%</h2>
                        <small className="info">of 100</small>
                      </div>
                      <div className="col-12">
                        <div className="progress m-t-20">
                          <div
                            className="progress-bar l-blue"
                            role="progressbar"
                            aria-valuenow={38}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            style={{ width: "38%" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-lg-3 col-md-6 col-sm-12">
                  <div className="body">
                    <div className="row">
                      <div className="col-7">
                        <h5 className="m-t-0">Email</h5>
                        <p className="text-small">Total Registered email</p>
                      </div>
                      <div className="col-5 text-right">
                        <h2 className="">39</h2>
                        <small className="info">of 100</small>
                      </div>
                      <div className="col-12">
                        <div className="progress m-t-20">
                          <div
                            className="progress-bar l-parpl"
                            role="progressbar"
                            aria-valuenow={39}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            style={{ width: "39%" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-lg-3 col-md-6 col-sm-12">
                  <div className="body">
                    <div className="row">
                      <div className="col-7">
                        <h5 className="m-t-0">Domians</h5>
                        <p className="text-small">Total registered Domain</p>
                      </div>
                      <div className="col-5 text-right">
                        <h2 className="">8</h2>
                        <small className="info">of 10</small>
                      </div>
                      <div className="col-12">
                        <div className="progress m-t-20">
                          <div
                            className="progress-bar l-turquoise"
                            role="progressbar"
                            aria-valuenow={89}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            style={{ width: "89%" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="row clearfix">
              <div className="col-lg-12">
                <div className="card">
                  <div className="header">
                    <h2>
                      <strong>Sales</strong> Report
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
                          {" "}
                          <i className="zmdi zmdi-more" />{" "}
                        </a>
                        <ul className="dropdown-menu dropdown-menu-right slideUp float-right">
                          <li>
                            <a href="javascript:void(0);">Edit</a>
                          </li>
                          <li>
                            <a href="javascript:void(0);">Delete</a>
                          </li>
                          <li>
                            <a href="javascript:void(0);">Report</a>
                          </li>
                        </ul>
                      </li>
                      <li className="remove">
                        <a role="button" className="boxs-close">
                          <i className="zmdi zmdi-close" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="body">
                    <div className="row text-center">
                      <div className="col-sm-3 col-6">
                        <h4 className="m-t-0">
                          $ 106 <i className="zmdi zmdi-trending-up col-green" />
                        </h4>
                        <p className="text-muted"> Today's Sales</p>
                      </div>
                      <div className="col-sm-3 col-6">
                        <h4 className="m-t-0">
                          $ 907 <i className="zmdi zmdi-trending-down col-red" />
                        </h4>
                        <p className="text-muted">This Week's Sales</p>
                      </div>
                      <div className="col-sm-3 col-6">
                        <h4 className="m-t-0">
                          $ 4210 <i className="zmdi zmdi-trending-up col-green" />
                        </h4>
                        <p className="text-muted">This Month's Sales</p>
                      </div>
                      <div className="col-sm-3 col-6">
                        <h4 className="m-t-0">
                          $ 67,000 <i className="zmdi zmdi-trending-up col-green" />
                        </h4>
                        <p className="text-muted">This Year's Sales</p>
                      </div>
                    </div>
                    <div id="area_chart" className="graph" />
                  </div>
                </div>
              </div>
            </div>
            <div className="row clearfix">
              <div className="col-lg-3 col-md-6 col-sm-12 text-center">
                <div className="card tasks_report">
                  <div className="body">
                    <input
                      type="text"
                      className="knob dial1"
                      defaultValue={66}
                      data-width={90}
                      data-height={90}
                      data-thickness="0.1"
                      data-fgcolor="#666"
                      readOnly=""
                    />
                    <h6 className="m-t-20">Satisfaction Rate</h6>
                    <p className="displayblock m-b-0">
                      47% Average <i className="zmdi zmdi-trending-up" />
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 text-center">
                <div className="card tasks_report">
                  <div className="body">
                    <input
                      type="text"
                      className="knob dial2"
                      defaultValue={26}
                      data-width={90}
                      data-height={90}
                      data-thickness="0.1"
                      data-fgcolor="#7b69ec"
                      readOnly=""
                    />
                    <h6 className="m-t-20">Project Panding</h6>
                    <p className="displayblock m-b-0">
                      13% Average <i className="zmdi zmdi-trending-down" />
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 text-center">
                <div className="card tasks_report">
                  <div className="body">
                    <input
                      type="text"
                      className="knob dial3"
                      defaultValue={76}
                      data-width={90}
                      data-height={90}
                      data-thickness="0.1"
                      data-fgcolor="#f9bd53"
                      readOnly=""
                    />
                    <h6 className="m-t-20">Productivity Goal</h6>
                    <p className="displayblock m-b-0">
                      75% Average <i className="zmdi zmdi-trending-up" />
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 text-center">
                <div className="card tasks_report">
                  <div className="body">
                    <input
                      type="text"
                      className="knob dial4"
                      defaultValue={88}
                      data-width={90}
                      data-height={90}
                      data-thickness="0.1"
                      data-fgcolor="#00adef"
                      readOnly=""
                    />
                    <h6 className="m-t-20">Total Revenue</h6>
                    <p className="displayblock m-b-0">
                      54% Average <i className="zmdi zmdi-trending-up" />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row clearfix">
              <div className="col-md-12 col-lg-8">
                <div className="card visitors-map">
                  <div className="header">
                    <h2>
                      <strong>Visitors</strong> Statistics
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
                          {" "}
                          <i className="zmdi zmdi-more" />{" "}
                        </a>
                        <ul className="dropdown-menu dropdown-menu-right slideUp">
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
                      <li className="remove">
                        <a role="button" className="boxs-close">
                          <i className="zmdi zmdi-close" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="body">
                    <div id="world-map-markers" className="jvector-map m-b-5" />
                    <div className="row clearfix">
                      <div className="col-lg-4 col-sm-6">
                        <div className="progress-container m-b-20">
                          <span className="progress-badge">visitor from america</span>
                          <div className="progress">
                            <div
                              className="progress-bar l-turquoise"
                              role="progressbar"
                              aria-valuenow={86}
                              aria-valuemin={0}
                              aria-valuemax={100}
                              style={{ width: "86%" }}
                            >
                              <span className="progress-value">86%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-sm-6">
                        <div className="progress-container m-b-20">
                          <span className="progress-badge">visitor from Canada</span>
                          <div className="progress">
                            <div
                              className="progress-bar l-coral"
                              role="progressbar"
                              aria-valuenow={86}
                              aria-valuemin={0}
                              aria-valuemax={100}
                              style={{ width: "86%" }}
                            >
                              <span className="progress-value">86%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-sm-6">
                        <div className="progress-container m-b-20">
                          <span className="progress-badge">visitor from asia</span>
                          <div className="progress">
                            <div
                              className="progress-bar l-blue"
                              role="progressbar"
                              aria-valuenow={86}
                              aria-valuemin={0}
                              aria-valuemax={100}
                              style={{ width: "86%" }}
                            >
                              <span className="progress-value">86%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-sm-6">
                        <div className="progress-container m-b-20">
                          <span className="progress-badge">visitor from america</span>
                          <div className="progress">
                            <div
                              className="progress-bar l-salmon"
                              role="progressbar"
                              aria-valuenow={86}
                              aria-valuemin={0}
                              aria-valuemax={100}
                              style={{ width: "86%" }}
                            >
                              <span className="progress-value">86%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-sm-6">
                        <div className="progress-container m-b-20">
                          <span className="progress-badge">visitor from Canada</span>
                          <div className="progress">
                            <div
                              className="progress-bar l-parpl"
                              role="progressbar"
                              aria-valuenow={86}
                              aria-valuemin={0}
                              aria-valuemax={100}
                              style={{ width: "86%" }}
                            >
                              <span className="progress-value">86%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-sm-6">
                        <div className="progress-container m-b-20">
                          <span className="progress-badge">visitor from asia</span>
                          <div className="progress">
                            <div
                              className="progress-bar l-amber"
                              role="progressbar"
                              aria-valuenow={86}
                              aria-valuemin={0}
                              aria-valuemax={100}
                              style={{ width: "86%" }}
                            >
                              <span className="progress-value">86%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                <div className="card">
                  <div className="header">
                    <h2>
                      <strong>Browser</strong> Usage
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
                          {" "}
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
                      <li className="remove">
                        <a role="button" className="boxs-close">
                          <i className="zmdi zmdi-close" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="body">
                    <div id="donut_chart" className="dashboard-donut-chart" />
                    <table className="table m-t-15 m-b-0">
                      <tbody>
                        <tr>
                          <td>Chrome</td>
                          <td>6985</td>
                          <td>
                            <i className="zmdi zmdi-caret-up text-success" />
                          </td>
                        </tr>
                        <tr>
                          <td>Other</td>
                          <td>2697</td>
                          <td>
                            <i className="zmdi zmdi-caret-up text-success" />
                          </td>
                        </tr>
                        <tr>
                          <td>Safari</td>
                          <td>3597</td>
                          <td>
                            <i className="zmdi zmdi-caret-down text-danger" />
                          </td>
                        </tr>
                        <tr>
                          <td>Firefox</td>
                          <td>2145</td>
                          <td>
                            <i className="zmdi zmdi-caret-up text-success" />
                          </td>
                        </tr>
                        <tr>
                          <td>Opera</td>
                          <td>1854</td>
                          <td>
                            <i className="zmdi zmdi-caret-down text-danger" />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="row clearfix">
              <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="card project_list">
                  <div className="header">
                    <h2>
                      <strong>Products</strong> List
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
                          {" "}
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
                      <li className="remove">
                        <a role="button" className="boxs-close">
                          <i className="zmdi zmdi-close" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="body">
                    <div className="table-responsive">
                      <table className="table table-hover">
                        <thead>
                          <tr>
                            <th style={{ width: 50 }}>Assigned</th>
                            <th />
                            <th>Name</th>
                            <th className="hidden-md-down">Team</th>
                            <th className="hidden-md-down" width="150px">
                              Status
                            </th>
                            <th>Priority</th>
                            <th>Due Date</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <img
                                className="rounded avatar"
                                src="assets/images/xs/avatar1.jpg"
                                alt=""
                              />
                            </td>
                            <td>
                              <a className="single-user-name" href="#">
                                Jonathan Deo
                              </a>
                              <br />
                              <small>Project Lead</small>
                            </td>
                            <td>
                              <strong>eCommerce Website</strong>
                              <br />
                              <small>Cost: $215</small>
                            </td>
                            <td className="hidden-md-down">
                              <ul className="list-unstyled team-info margin-0">
                                <li>
                                  <img
                                    src="assets/images/xs/avatar2.jpg"
                                    alt="Avatar"
                                  />
                                </li>
                                <li>
                                  <img
                                    src="assets/images/xs/avatar3.jpg"
                                    alt="Avatar"
                                  />
                                </li>
                                <li>
                                  <img
                                    src="assets/images/xs/avatar4.jpg"
                                    alt="Avatar"
                                  />
                                </li>
                                <li>
                                  <img
                                    src="assets/images/xs/avatar6.jpg"
                                    alt="Avatar"
                                  />
                                </li>
                              </ul>
                            </td>
                            <td className="hidden-md-down">
                              <div className="progress">
                                <div
                                  className="progress-bar l-blue"
                                  role="progressbar"
                                  aria-valuenow={45}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                  style={{ width: "45%" }}
                                />
                              </div>
                            </td>
                            <td>
                              <span className="badge badge-info">Medium</span>
                            </td>
                            <td>25 Dec 2017</td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                className="rounded avatar"
                                src="assets/images/xs/avatar2.jpg"
                                alt=""
                              />
                            </td>
                            <td>
                              <a className="single-user-name" href="#">
                                Jannie Dvis
                              </a>
                              <br />
                              <small>Design Lead</small>
                            </td>
                            <td>
                              <strong>One Page Landing</strong>
                              <br />
                              <small>Cost: $100</small>
                            </td>
                            <td className="hidden-md-down">
                              <ul className="list-unstyled team-info margin-0">
                                <li>
                                  <img
                                    src="assets/images/xs/avatar5.jpg"
                                    alt="Avatar"
                                  />
                                </li>
                                <li>
                                  <img
                                    src="assets/images/xs/avatar6.jpg"
                                    alt="Avatar"
                                  />
                                </li>
                              </ul>
                            </td>
                            <td className="hidden-md-down">
                              <div className="progress">
                                <div
                                  className="progress-bar l-green"
                                  role="progressbar"
                                  aria-valuenow={85}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                  style={{ width: "85%" }}
                                />
                              </div>
                            </td>
                            <td>
                              <span className="badge badge-success">High</span>
                            </td>
                            <td>21 Dec 2017</td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                className="rounded avatar"
                                src="assets/images/xs/avatar10.jpg"
                                alt=""
                              />
                            </td>
                            <td>
                              <a className="single-user-name" href="#">
                                Petere Husen
                              </a>
                              <br />
                              <small>Swift Developer</small>
                            </td>
                            <td>
                              <strong>iOS Game</strong>
                              <br />
                              <small>Cost: $890</small>
                            </td>
                            <td className="hidden-md-down">
                              <ul className="list-unstyled team-info margin-0">
                                <li>
                                  <img
                                    src="assets/images/xs/avatar7.jpg"
                                    alt="Avatar"
                                  />
                                </li>
                                <li>
                                  <img
                                    src="assets/images/xs/avatar8.jpg"
                                    alt="Avatar"
                                  />
                                </li>
                                <li>
                                  <img
                                    src="assets/images/xs/avatar9.jpg"
                                    alt="Avatar"
                                  />
                                </li>
                                <li>
                                  <img
                                    src="assets/images/xs/avatar2.jpg"
                                    alt="Avatar"
                                  />
                                </li>
                                <li>
                                  <img
                                    src="assets/images/xs/avatar3.jpg"
                                    alt="Avatar"
                                  />
                                </li>
                              </ul>
                            </td>
                            <td className="hidden-md-down">
                              <div className="progress">
                                <div
                                  className="progress-bar l-blue"
                                  role="progressbar"
                                  aria-valuenow={30}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                  style={{ width: "30%" }}
                                />
                              </div>
                            </td>
                            <td>
                              <span className="badge badge-info">Medium</span>
                            </td>
                            <td>26 Dec 2017</td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                className="rounded avatar"
                                src="assets/images/xs/avatar4.jpg"
                                alt=""
                              />
                            </td>
                            <td>
                              <a className="single-user-name" href="#">
                                John Deo
                              </a>
                              <br />
                              <small>UI UX Lead</small>
                            </td>
                            <td>
                              <strong>Digital Marketing</strong>
                              <br />
                              <small>Cost: $350</small>
                            </td>
                            <td className="hidden-md-down">
                              <ul className="list-unstyled team-info margin-0">
                                <li>
                                  <img
                                    src="assets/images/xs/avatar2.jpg"
                                    alt="Avatar"
                                  />
                                </li>
                                <li>
                                  <img
                                    src="assets/images/xs/avatar3.jpg"
                                    alt="Avatar"
                                  />
                                </li>
                                <li>
                                  <img
                                    src="assets/images/xs/avatar6.jpg"
                                    alt="Avatar"
                                  />
                                </li>
                              </ul>
                            </td>
                            <td className="hidden-md-down">
                              <div className="progress">
                                <div
                                  className="progress-bar l-amber"
                                  role="progressbar"
                                  aria-valuenow={28}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                  style={{ width: "28%" }}
                                />
                              </div>
                            </td>
                            <td>
                              <span className="badge badge-warning">Panding</span>
                            </td>
                            <td>12 Jan 2018</td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                className="rounded avatar"
                                src="assets/images/xs/avatar5.jpg"
                                alt=""
                              />
                            </td>
                            <td>
                              <a className="single-user-name" href="#">
                                Emma Welson
                              </a>
                              <br />
                              <small>Angular Developer</small>
                            </td>
                            <td>
                              <strong>Hospital Admin</strong>
                              <br />
                              <small>Hire: $45 Per Hour</small>
                            </td>
                            <td className="hidden-md-down">
                              <ul className="list-unstyled team-info  margin-0">
                                <li>
                                  <img
                                    src="assets/images/xs/avatar8.jpg"
                                    alt="Avatar"
                                  />
                                </li>
                                <li>
                                  <img
                                    src="assets/images/xs/avatar3.jpg"
                                    alt="Avatar"
                                  />
                                </li>
                                <li>
                                  <img
                                    src="assets/images/xs/avatar4.jpg"
                                    alt="Avatar"
                                  />
                                </li>
                                <li>
                                  <img
                                    src="assets/images/xs/avatar6.jpg"
                                    alt="Avatar"
                                  />
                                </li>
                                <li>
                                  <img
                                    src="assets/images/xs/avatar1.jpg"
                                    alt="Avatar"
                                  />
                                </li>
                                <li>
                                  <img
                                    src="assets/images/xs/avatar2.jpg"
                                    alt="Avatar"
                                  />
                                </li>
                              </ul>
                            </td>
                            <td className="hidden-md-down">
                              <div className="progress">
                                <div
                                  className="progress-bar l-coral"
                                  role="progressbar"
                                  aria-valuenow={45}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                  style={{ width: "45%" }}
                                />
                              </div>
                            </td>
                            <td>
                              <span className="badge badge-primary">Low</span>
                            </td>
                            <td>20 Jan 2018</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row clearfix">
              <div className="col-lg-4 col-md-12">
                <div className="card weather2">
                  <div className="city-selected body l-salmon">
                    <div className="row">
                      <div className="info col-7">
                        <div className="city">
                          <span>City:</span> New York
                        </div>
                        <div className="night">Day - 12:07 PM</div>
                        <div className="temp">
                          <h2>34°</h2>
                        </div>
                      </div>
                      <div className="icon col-5">
                        <img src="assets/images/weather/summer.svg" alt="" />
                      </div>
                    </div>
                  </div>
                  <table className="table table-striped m-b-0">
                    <tbody>
                      <tr>
                        <td>Wind</td>
                        <td className="font-medium">ESE 17 mph</td>
                      </tr>
                      <tr>
                        <td>Humidity</td>
                        <td className="font-medium">72%</td>
                      </tr>
                      <tr>
                        <td>Pressure</td>
                        <td className="font-medium">25.56 in</td>
                      </tr>
                      <tr>
                        <td>Cloud Cover</td>
                        <td className="font-medium">80%</td>
                      </tr>
                      <tr>
                        <td>Ceiling</td>
                        <td className="font-medium">25280 ft</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner" role="listbox">
                      <div className="carousel-item text-center active">
                        <div className="col-12">
                          <ul className="row days-list list-unstyled">
                            <li className="day col-4">
                              <p>Monday</p>
                              <img src="assets/images/weather/rain.svg" alt="" />
                            </li>
                            <li className="day col-4">
                              <p>Tuesday</p>
                              <img src="assets/images/weather/cloudy.svg" alt="" />
                            </li>
                            <li className="day col-4">
                              <p>Wednesday</p>
                              <img src="assets/images/weather/wind.svg" alt="" />
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="carousel-item text-center">
                        <div className="col-12">
                          <ul className="row days-list list-unstyled">
                            <li className="day col-4">
                              <p>Thursday</p>
                              <img src="assets/images/weather/sky.svg" alt="" />
                            </li>
                            <li className="day col-4">
                              <p>Friday</p>
                              <img src="assets/images/weather/cloudy.svg" alt="" />
                            </li>
                            <li className="day col-4">
                              <p>Saturday</p>
                              <img src="assets/images/weather/summer.svg" alt="" />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-md-12">
                <div className="row clearfix">
                  <div className="col-lg-12">
                    <div className="card">
                      <ul className="row profile_state list-unstyled">
                        <li className="col-lg-3 col-md-3 col-6">
                          <div className="body">
                            <i className="zmdi zmdi-eye col-amber" />
                            <h4>2,365</h4>
                            <span>Post View</span>
                          </div>
                        </li>
                        <li className="col-lg-3 col-md-3 col-6">
                          <div className="body">
                            <i className="zmdi zmdi-thumb-up col-blue" />
                            <h4>365</h4>
                            <span>Likes</span>
                          </div>
                        </li>
                        <li className="col-lg-3 col-md-3 col-6">
                          <div className="body">
                            <i className="zmdi zmdi-comment-text col-red" />
                            <h4>65</h4>
                            <span>Comments</span>
                          </div>
                        </li>
                        <li className="col-lg-3 col-md-3 col-6">
                          <div className="body">
                            <i className="zmdi zmdi-account text-success" />
                            <h4>2,055</h4>
                            <span>Profile Views</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="card activities">
                      <div className="header">
                        <h2>
                          <strong>Activities</strong>{" "}
                          <small>Recent user Activities</small>
                        </h2>
                      </div>
                      <div className="body">
                        <ul className="list-unstyled activity">
                          <li>
                            <a href="javascript:void(0)">
                              <i className="zmdi zmdi-cake bg-blue" />
                              <div className="info">
                                <h4>Admin Birthday</h4>
                                <small>Will be Dec 21th</small>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="javascript:void(0)">
                              <i className="zmdi zmdi-file-text bg-red" />
                              <div className="info">
                                <h4>Code Change</h4>
                                <small>Will be Dec 22th</small>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="javascript:void(0)">
                              <i className="zmdi zmdi-account-box-phone bg-green" />
                              <div className="info">
                                <h4>Add New Contact</h4>
                                <small>Will be Dec 23th</small>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="javascript:void(0)">
                              <i className="zmdi zmdi-email bg-amber" />
                              <div className="info">
                                <h4>New Email</h4>
                                <small>Will be July 28th</small>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="javascript:void(0)">
                              <i className="zmdi zmdi-account-box-phone bg-green" />
                              <div className="info">
                                <h4>Add New Contact</h4>
                                <small>Will be Dec 23th</small>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="card">
                      <div className="header">
                        <h2>
                          <strong>Sales</strong> Overview
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
                              {" "}
                              <i className="zmdi zmdi-more" />{" "}
                            </a>
                            <ul className="dropdown-menu dropdown-menu-right slideUp float-right">
                              <li>
                                <a href="javascript:void(0);">Edit</a>
                              </li>
                              <li>
                                <a href="javascript:void(0);">Delete</a>
                              </li>
                              <li>
                                <a href="javascript:void(0);">Report</a>
                              </li>
                            </ul>
                          </li>
                          <li className="remove">
                            <a role="button" className="boxs-close">
                              <i className="zmdi zmdi-close" />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="body">
                        <div id="m_area_chart2" style={{ height: 290 }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Jquery Core Js */}
    </>
  );
}

export default Home;
