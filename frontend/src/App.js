import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from 'react'
import axios from 'axios'
// Imports for components and pages
import Nav from './components/Nav/nav'
import Login from './components/Login/login'
import Signup from './components/Signup/signup'
import MovieReviews from './Pages/MovieReviews/index'
import UsersReviews from './Pages/UsersReviews/index';
import NewReview from './Pages/NewReview/index';
import EditReview from './Pages/EditReview/index';
import Home from './Pages/Home';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  return (
    <div className="main_page">
      <div>
        <Nav />
      </div>
      
      <main>
        <Routes>
          <Route path="/Login/login" element={<Login />} />
          <Route path="/Signup/Signup" element={<Signup />} />
          {/* Page Routes  */}
          <Route path="/" element={<Home />} />
          <Route path="/MovieReviews/index" element={<MovieReviews />} />
          <Route path="/UsersReviews/index" element={<UsersReviews />} />
          <Route path="/NewReview/index" element={<NewReview />} />
          <Route path="/EditReview/index" element={<EditReview />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
