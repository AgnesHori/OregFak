import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import React from 'react';
import {MyNavbar} from './components/MyNavbar'
import {Home} from './components/Home';
import {Statistic} from './components/Statistic';
import {Filter} from './components/Filter'


function App() {

  return (
    <div className='container'>
      <BrowserRouter>
      <MyNavbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Statistic' element={<Statistic />} />
        <Route path='/Filter' element={<Filter />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
