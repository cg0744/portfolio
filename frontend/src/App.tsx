import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      {/* d-flex flex-column min-vh-100 ensures the footer is pushed to the bottom of the screen */}
      <div className="d-flex flex-column min-vh-100">
        
        <Navbar />
        
        {/* Main Content Area - flex-grow-1 pushes the footer down */}
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>

        <Footer />
        
      </div>
    </Router>
  );
}

export default App;