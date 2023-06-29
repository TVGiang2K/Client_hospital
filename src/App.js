import {Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Home from './pages/Home';
import Login from './pages/SignIn';
import AddPatient from './pages/AddPatient';
import SearchPatient from './pages/SearchPatient';
import InfoPatient from './pages/InfoPatient';
import NewMedical from './pages/NewMedical';
import MedicalPatient from './pages/MedicalPatient';
import EditPatient from './pages/EditPatient';
import './assets/plugins/bootstrap/css/bootstrap.min.css';
import './assets/css/main.css';
import './assets/css/color_skins.css';
import './assets/css/timeline.css';
import './assets/plugins/bootstrap-select/css/bootstrap-select.css'
import './assets/plugins/bootstrap-material-datetimepicker/css/bootstrap-material-datetimepicker.css';
import './assets/plugins/light-gallery/css/lightgallery.css';
// import './assets/css/bootstrap.min.css' ;
// import './assets/css/color_skins.css';
// import './assets/css/main.css';
// import './assets/css/bootstrap-material-datetimepicker.css';
// import './assets/css/bootstrap-select.css';
// import './assets/css/timeline.css';
// import './assets/css/lightgallery.css';

function App() {
  return (
    <>

     <div className="theme-cyan">
        {/* ls-toggle-menu */}
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/addPatient" element={<AddPatient />} />
          <Route path="/searchPatient" element={<SearchPatient />} />
          <Route path="/infoPatient" element={<InfoPatient />} />
          <Route path="/newMedical" element={<NewMedical />} />
          <Route path="/medicalPatient" element={<MedicalPatient />} />
          <Route path="/editPatient/:id" element={<EditPatient />} />

          <Route path="/login" element={<Login />} />
        </Routes>
        </div>
    </>
  );
}

export default App;
