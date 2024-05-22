import React from 'react'
import './App.css';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import PregnancyFormPage from './pages/PregnancyFormPage';
import Age from './pages/Age';
import BloodPressure from './pages/BloodPressure';
import BMI from './pages/BMI';
import DiabetesPedigreeFunction from './pages/DiabetesPedigreeFunction';
import Glucose from './pages/Glucose';
import Insulin from './pages/Insulin';
import ResultPage from './pages/ResultPage';
import SkinThickness from './pages/SkinThickness';
import FourOFour from './pages/FourOFour';

import {Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/signup" element={<SignupPage/>}/>
      <Route path="/pregnancyform" element={<PregnancyFormPage/>}/>
      <Route path="/age" element={<Age/>}/>
      <Route path="/bloodpressure" element={<BloodPressure/>}/>
      <Route path="/bmi" element={<BMI/>}/>
      <Route path="/diabetespedigreefunction" element={<DiabetesPedigreeFunction/>}/>
      <Route path="/glucose" element={<Glucose/>}/>
      <Route path="/insulin" element={<Insulin/>}/>
      <Route path="/result" element={<ResultPage/>}/>
      <Route path="/skinthickness" element={<SkinThickness/>}/>
      <Route path="*" element={<FourOFour/>}/>
    </Routes>
  )
}

export default App