import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CareerPage from './components/CareerPage/CareerPage';
import JobDetailPage from './components/JobDetailPage/JobDetailPage';
import JobListPage from './components/JobListPage/JobListPage';
import ApplyJobTemplate from './components/ApplyJobTemplate/ApplyJobTemplate';
import SumbitAppBannner from './components/SumbitAppBannner/SumbitAppBannner';


import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<CareerPage />} />
          <Route path="/job/:id" element={<JobDetailPage />} />
          <Route path="/list/:id" element={<JobListPage />} />
          <Route path="/template/:id" element={<ApplyJobTemplate />} />
          <Route path='/SumbitApp' element={<SumbitAppBannner/>}/>
        </Routes>
      </div>  
    </Router>
  );
}

export default App;
