import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import AppPromotion from './components/AppPromotion'
import Footer from './components/Footer'

function App() {
  return (
   
    <div className="min-h-screen font-sans bg-white text-gray-900 antialiased">
      
      <Navbar />

      <main>
        <Hero />
        
      </main>

    
      <Footer />

    </div>
  )
}

export default App