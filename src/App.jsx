import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Create from './Pages/Create';
import Read from './Pages/Read';
import Update from './Pages/Update';

const App = () => {
  return (
    <div className='lg:max-w-7xl mx-auto min-h-screen py-20 px-4  lg:px-20'>
      <BrowserRouter >
        <Routes>
          <Route exact path='/' element={<Create />} ></Route >
          <Route exact path='/read' element={<Read />} ></Route >
          <Route exact path='/update' element={<Update />} ></Route >
        </Routes>
      </BrowserRouter>
    </div >
  )
};

export default App;
