import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
function MedicalPatient(props) {
    return (
        <>
        <Header />
            <section className="content">
                <div className="block-header">
                    <div className="row">
                        <div className="col-lg-7 col-md-6 col-sm-12">
                            <h2>Medical Patient</h2>
                        </div>
                        <div className="col-lg-5 col-md-6 col-sm-12">
                            <ul className="breadcrumb float-md-right">
                                <li className="breadcrumb-item">
                                    <a href="home.html">
                                        <i className="zmdi zmdi-home" /> Home
                                    </a>
                                </li>
                                <li className="breadcrumb-item active">Medical Patient</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    {/* Title */}
                    <div className="row clearfix">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="card">
                                <div className="text-center m-t-30">
                                    <h2>
                                        <strong>BỆNH ÁN CHỈNH NHA</strong>
                                    </h2>
                                </div>
                                <div className="body">
                                    <div className="row clearfix">
                                        <div className="col-lg-6 col-md-6">
                                            <p>
                                                {" "}
                                                <b>Ma Ho so:</b>
                                            </p>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <p>
                                                {" "}
                                                <b>Ngay kham /chot:</b>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="row clearfix">
                                        <div className="col-lg-8 col-md-6">
                                            <p>
                                                {" "}
                                                <b>Ho vs ten: </b> vũ thị phương thảo{" "}
                                            </p>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <p>
                                                {" "}
                                                <b>ngày gắn mc: </b>3253454335645645{" "}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="row clearfix">
                                        <div className="col-lg-2 col-md-6">
                                            <p>
                                                {" "}
                                                <b>Ns:</b> 1990{" "}
                                            </p>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <p>
                                                {" "}
                                                <b>DC:</b> Ha Nội Phố - Đông Anh quận{" "}
                                            </p>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <p>
                                                {" "}
                                                <b>TG dự kiến: </b>23423534543534435{" "}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="row clearfix">
                                        <div className="col-lg-4 col-md-6">
                                            <p>
                                                {" "}
                                                <b>Giới tính: </b> xăng pha nhớt{" "}
                                            </p>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <p>
                                                {" "}
                                                <b>Số đt: </b>299999999999{" "}
                                            </p>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <p>
                                                {" "}
                                                <b>Bác sĩ:</b> Ngyễn văn A
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* #END# Title */}
                {/* Information 1 */}
                <div className="row clearfix">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="card">
                            <div className="header">
                                <h2>TIỀN SỬ </h2>
                            </div>
                            <div className="body">
                                <div className="row clearfix">
                                    <div className="col-lg-6 col-md-6">
                                        <select className="form-control show-tick">
                                            <option>Không hen suyễn</option>
                                            <option>Hen suyễn</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <select className="form-control show-tick">
                                            <option>Không có bệnh tim mạch</option>
                                            <option>Bệnh tim mạch</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <select className="form-control show-tick">
                                            <option>Không dị ứng</option>
                                            <option>Dị ứng</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <select className="form-control show-tick">
                                            <option>Bệnh khô miệng</option>
                                            <option>Không khô miệng</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-12 col-md-6">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Tiền sử khác"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* #END# Information 1 */}
                {/* Information 2 */}
                <div className="row clearfix">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="card">
                            <div className="header">
                                <h2>THÓI QUEN XẤU</h2>
                            </div>
                            <div className="body">
                                <div className="row clearfix">
                                    <div className="col-lg-6 col-md-6">
                                        <select className="form-control show-tick">
                                            <option>Không mút ngón tay</option>
                                            <option>Mút ngón tay</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <select className="form-control show-tick">
                                            <option>Không đẩy lưỡi</option>
                                            <option>Tật đẩy lưỡi</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <select className="form-control show-tick">
                                            <option>Thở miệng</option>
                                            <option>Không thở miệng</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <select className="form-control show-tick">
                                            <option>Không nghiến răng</option>
                                            <option>Nghiến răng</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-12 col-md-6">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Thói quen xấu khác"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* #END# Information 2 */}
                {/* Information 3 */}
                <div className="row clearfix">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="card">
                            <div className="header">
                                <h2>Than Phiền </h2>
                            </div>
                            <div className="body">
                                <div className="row clearfix">
                                    <div className="col-lg-12 col-md-6">
                                        <div className="row clearfix">
                                            <div className="col-lg-4 col-md-6">
                                                <p>
                                                    {" "}
                                                    <b>Ho</b>{" "}
                                                </p>
                                            </div>
                                            <div className="col-lg-4 col-md-6">
                                                <select className="form-control show-tick">
                                                    <option>Không</option>
                                                    <option>Hô ít</option>
                                                    <option>Hô vừa</option>
                                                    <option>Hô nhiều</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-6">
                                        <div className="row clearfix">
                                            <div className="col-lg-4 col-md-6">
                                                <p>
                                                    {" "}
                                                    <b>Mặt lệch </b>{" "}
                                                </p>
                                            </div>
                                            <div className="col-lg-4 col-md-6">
                                                <select className="form-control show-tick">
                                                    <option>Lệch trái</option>
                                                    <option>lệch phải</option>
                                                    <option>không lệch</option>
                                                </select>
                                            </div>
                                            <div className="col-lg-4 col-md-6">
                                                <select className="form-control show-tick">
                                                    <option>mức độ nhiều</option>
                                                    <option>mức độ ít</option>
                                                    <option>#</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-6">
                                        <div className="row clearfix">
                                            <div className="col-lg-4 col-md-6">
                                                <p>
                                                    {" "}
                                                    <b>Răng </b>{" "}
                                                </p>
                                            </div>
                                            <div className="col-lg-4 col-md-6">
                                                <select className="form-control show-tick">
                                                    <option>chen chúc</option>
                                                    <option>thưa</option>
                                                    <option>không</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-6">
                                        <div className="row clearfix">
                                            <div className="col-lg-4 col-md-6">
                                                <p>
                                                    {" "}
                                                    <b>Cười hở lợi</b>{" "}
                                                </p>
                                            </div>
                                            <div className="col-lg-4 col-md-6">
                                                <select className="form-control show-tick">
                                                    <option>không</option>
                                                    <option>ít</option>
                                                    <option>trung bình</option>
                                                    <option>nhiều</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-6">
                                        <div className="row clearfix">
                                            <div className="col-lg-4 col-md-6">
                                                <p>
                                                    {" "}
                                                    <b>Ăn nhai </b>{" "}
                                                </p>
                                            </div>
                                            <div className="col-lg-4 col-md-6">
                                                <select className="form-control show-tick">
                                                    <option>bình thường</option>
                                                    <option>khó</option>
                                                    <option>mỏi</option>
                                                    <option>đau</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-6">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Than phiền khác"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* #END# Information 3 */}
                {/* Information 4 */}
                <div className="row clearfix">
                    <div className="col-lg-8 col-md-12 col-sm-12">
                        <div className="card">
                            <div className="header">
                                <h2>Mặt thẳng</h2>
                            </div>
                            <div className="body">
                                <div className="row clearfix">
                                    <div className="col-lg-12 col-md-6">
                                        <div className="row clearfix">
                                            <div className="col-lg-6 col-md-6">
                                                <select className="form-control show-tick">
                                                    <option>Mặt TB</option>
                                                    <option>Mặt dài</option>
                                                    <option>Mặt ngắn</option>
                                                </select>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <select className="form-control show-tick">
                                                    <option>vuông</option>
                                                    <option>bầu dục</option>
                                                    <option>tam giác</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-6">
                                        <select className="form-control show-tick">
                                            <option>Bất cân xứng hai bên</option>
                                            <option>Cân xứng hai bên</option>
                                            <option>#</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-12 col-md-6">
                                        <select className="form-control show-tick">
                                            <option>Cân xứng 5 phần mặt</option>
                                            <option>Bất cân xứng 5 phần mặt</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-12 col-md-6">
                                        <select className="form-control show-tick">
                                            <option>Bất hài hòa 3 tầng mặt</option>
                                            <option>Hài hòa 3 tầng mặt</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-12 col-md-6">
                                        <select className="form-control show-tick">
                                            <option>Bất hài hòa nội bộ tầng mặt dưới</option>
                                            <option>Hài hòa nội bộ tầng mặt dưới</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-12 col-md-6">
                                        <select className="form-control show-tick">
                                            <option>Gò má trung bình</option>
                                            <option>Gò má rộng</option>
                                            <option>Gò má hẹp</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <div className=" aniimated-thumbnials list-unstyled row clearfix">
                            <a href="assets/images/image-gallery/1.jpg">
                                {" "}
                                <img
                                    className="img-fluid "
                                    src="assets/images/image-gallery/thumb/thumb-1.jpg"
                                    alt=""
                                />{" "}
                            </a>
                        </div>
                    </div>
                </div>
                {/* #END# Information 4 */}
                {/* Information 5 */}
                <div className="row clearfix">
                    <div className="col-lg-8 col-md-12 col-sm-12">
                        <div className="card">
                            <div className="header">
                                <h2>Mặt nghiêng</h2>
                            </div>
                            <div className="body">
                                <div className="row clearfix">
                                    <div className="col-lg-12 col-md-6">
                                        <div className="row clearfix">
                                            <div className="col-lg-6 col-md-6">
                                                <select className="form-control show-tick">
                                                    <option>Mặt lồi</option>
                                                    <option>Mặt lõm</option>
                                                    <option>Mặt thẳng</option>
                                                </select>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <select className="form-control show-tick">
                                                    <option>Mũi hếch</option>
                                                    <option>Mũi thẳng</option>
                                                    <option>Mũi quặp</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-6">
                                        <div className="row clearfix">
                                            <div className="col-lg-6 col-md-6">
                                                <select className="form-control show-tick">
                                                    <option>Trán thẳng</option>
                                                    <option>Trán bợt</option>
                                                    <option>Trán nhô</option>
                                                </select>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <select className="form-control show-tick">
                                                    <option>Gò má thấp</option>
                                                    <option>Gò má TB</option>
                                                    <option>Gò má cao</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-6">
                                        <select className="form-control show-tick">
                                            <option>Bờ hàm dưới phẳng</option>
                                            <option>Bờ hàm dưới trung bình</option>
                                            <option>Bờ hàm dưới dốc</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-12 col-md-6">
                                        <select className="form-control show-tick">
                                            <option>Miệng ngậm kín không căng</option>
                                            <option>Miệng ngậm kín căng</option>
                                            <option>Miệng ngậm không kín căng</option>
                                            <option>Miệng ngậm không kín</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <div className="aniimated-thumbnials list-unstyled row clearfix">
                            <a href="assets/images/image-gallery/2.jpg">
                                {" "}
                                <img
                                    className="img-fluid "
                                    src="assets/images/image-gallery/thumb/thumb-2.jpg"
                                    alt=""
                                />{" "}
                            </a>
                        </div>
                    </div>
                </div>
                {/* #END# Information 5 */}
                {/* Button */}
                <div className="row clearfix">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <h3>
                            <button
                                type="button"
                                className="btn btn-raised btn-primary btn-round waves-effect"
                            >
                                Save
                            </button>
                        </h3>
                    </div>
                </div>
                {/* #END# Button */}
            </section>


        </>

    );
}

export default MedicalPatient;