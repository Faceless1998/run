import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Runs from './pages/Runs/Runs';
import Results from './pages/Results/Results';
import Contact from './pages/Contact/Contact';
import MarathonInfo from './pages/MarathonInfo/MarathonInfo';
import Merch from './pages/Merch/Merch';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import { LanguageProvider } from './context/LanguageContext';
import './styles/global.css';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="app-container">
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/runs" element={<Runs />} />
              <Route path="/results" element={<Results />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/marathon-info/:id" element={<MarathonInfo />} />
              <Route path="/merch" element={<Merch />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
