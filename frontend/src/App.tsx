import './App.css'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/Register';
import Dashboard from './pages/Dashboard';
import Content from './pages/Content';
import BlogDetails from './pages/BlogDetails';
import EventDetails from './pages/EventDetails';

function App() {

  return (
    <BrowserRouter>
   
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/content" element={<Content />} />
      <Route path="/blog/:id" element={<BlogDetails />} />
      <Route path="/event/:id" element={<EventDetails />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
