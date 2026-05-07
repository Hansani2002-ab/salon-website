import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import ServiceCard from './components/ServiceCard';
import Services from './components/Services';

function App() {
  return (
    <Router>
      <div className="min-h-screen font-sans bg-white text-gray-900 antialiased">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <main>
              <Hero />
              
            </main>
          } />
          
          <Route path="/services/:category" element={<ServiceCard />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;