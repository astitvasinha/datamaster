import React from 'react';
import './App.css';
import SignIn from './components/SignIn';
import FileImport from './components/FileImport';
import ParseExcel from './components/ParseExcel';
import ExcelTable from './components/ExcelTable';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/FileImport' element={<FileImport />} />
        <Route path='/ParseExcel' element={<ParseExcel />} />
        <Route path='/ExcelTable' element={<ExcelTable />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
