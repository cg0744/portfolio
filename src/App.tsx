import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <main className="bg-body text-body-color min-vh-100">
      <Navbar />
      <Hero />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;