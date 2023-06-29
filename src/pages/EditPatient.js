import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from './Header';
import GetLink from "../context/api";
import { usePatientContext } from '../context/context';

function EditPatient(props) {
  const { getSinglePatient, isSingleLoading, singlePatient } = usePatientContext();
  const { id } = useParams();

  const [value, setValues] = useState(
    {
      id: id,
      fullName: "",
      phone: "",
      yearBirthday: "",
      gender: "",
      address: "",
      dateExamination: "",
      confirmOfCustomer: "",
      inputDataInvi: "",
      analysisOfCustomer: "",
      inputDataBy: "",
      statusPatient: ""
    });


  useEffect(() => {
    getSinglePatient(`${GetLink.API}/patient/${id}`);
    setValues({
      ...value,
      fullName: singlePatient.fullName,
      phone: singlePatient.phone,
      yearBirthday: singlePatient.yearBirthday,
      gender: singlePatient.gender,
      address: singlePatient.address,
      dateExamination: singlePatient.dateExamination,
      confirmOfCustomer: singlePatient.confirmOfCustomer,
      inputDataInvi: singlePatient.inputDataInvi,
      analysisOfCustomer: singlePatient.analysisOfCustomer,
      inputDataBy: singlePatient.inputDataBy,
      statusPatient: singlePatient.statusPatient,
    })

    return () => {

    }
  }, [isSingleLoading]);


  // const handlesubmit=(e)=>{
  //   e.preventDefault();


  // }

  console.log(value);
  return (
    <>
      <Header />
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
                <form 
                // onSubmit={handleSubmit}
                >
                  <div className="header">
                    <h2>
                      <strong>Input</strong>
                    </h2>
                  </div>
                  <div className="body">

                    <div className="row clearfix">
                      <div className="col-sm-4">
                        <b>FullName</b>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            onChange={e => setValues({ ...value, fullName: e.target.value })}
                            value={value.fullName}
                          />
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <b>Phone</b>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            onChange={e => setValues({ ...value, phone: e.target.value })}
                            value={value.phone}
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
                            onChange={e => setValues({ ...value, yearBirthday: e.target.value })}
                            value={value.yearBirthday}
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <div className="form-group" >
                          <div className="radio inlineblock m-r-20">
                            <b>Gender:</b>
                          </div>
                          <div className="radio inlineblock m-r-20">
                            <input
                              type="radio"
                              name="gender"
                              id="male"
                              value={true}
                              className="with-gap"
                              checked={value.gender === true}
                              onChange={() => setValues({ ...value, gender: !value.gender })}

                            />
                            <label htmlFor="male">Male</label>
                          </div>
                          <div className="radio inlineblock">
                            <input
                              type="radio"
                              name="gender"
                              id="Female"
                              className="with-gap"
                              value={false}
                              checked={value.gender === false}
                              onChange={() => setValues({ ...value, gender: !value.gender })}
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
                            onChange={e => setValues({ ...value, address: e.target.value })}
                            value={value.address}
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
                            type="date"
                            className="form-control datetimepicker"
                            onChange={e => setValues({ ...value, dateExamination: e.target.value })}
                            value={value.dateExamination}

                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <b>Status Patient</b>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            onChange={e => setValues({ ...value, statusPatient: e.target.value })}
                            value={value.statusPatient}

                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <b>Input Data By</b>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            onChange={e => setValues({ ...value, inputDataBy: e.target.value })}
                            value={value.inputDataBy}

                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <b>Analysis Of Customer</b>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            onChange={e => setValues({ ...value, analysisOfCustomer: e.target.value })}
                            value={value.analysisOfCustomer}

                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <b>Input Data Invi</b>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            onChange={e => setValues({ ...value, inputDataInvi: e.target.value })}
                            value={value.inputDataInvi}

                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <b>Confirm Of Customer</b>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            onChange={e => setValues({ ...value, confirmOfCustomer: e.target.value })}
                            value={value.confirmOfCustomer}

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
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>


    </>

  );
}

export default EditPatient;