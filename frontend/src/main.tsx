import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      {/* This d-flex setup ensures the footer sticks to the bottom! */}
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        
        {/* Main Content Area */}
        <main className="flex-grow-1">
          <Routes>
            {/* The routes swap out the middle content instantly */}
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<h2 className="text-center mt-5">Contact Page Loading...</h2>} />
            <Route path="/login" element={<h2 className="text-center mt-5">Login Page Loading...</h2>} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;