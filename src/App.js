import {Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Home from './pages/web/Home';
import Login from './pages/auth/SignIn';
import Register from './pages/auth/SingUp';
import ForgotPassword from './pages/auth/ForgotPassword';
import AddPatient from './pages/web/AddPatient';
import SearchPatient from './pages/web/SearchPatient';
import InfoPatient from './pages/web/InfoPatient';
import NewMedical from './pages/web/NewMedical';
import MedicalPatient from './pages/web/MedicalPatient';
import EditPatient from './pages/web/EditPatient';
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
          <Route path="/editPatient" element={<EditPatient />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
        </Routes>
        </div>
    </>
  );
}

export default App;
