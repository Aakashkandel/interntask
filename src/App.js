import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Search from './Components/Search';
import ApiFetch from './Components/ApiFetch';
import Home from './Components/Task4/Home';
import Welcome from './Components/Task4/Welcome';
import PageRouter from './PageRouter';
import Authentication from './ProtectedRoute/Authentication';
import Login from './Components/Task4/Login';
import Task3 from './Components/Task3';
import Task5 from './Components/Task5';

function App() {
  return (
    <BrowserRouter>
      <Routes>
       
        <Route path="/" element={<Home />} />
        <Route path="/task1" element={<Search />} />
        <Route path="/task2" element={<ApiFetch />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/task3" element={<Task3/>} />
        <Route path="/task5" element={<Task5/>} />
        <Route path="/welcome" element={<Authentication Component={PageRouter} />}>
          <Route index element={<Authentication Component={Welcome} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
