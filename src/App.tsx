import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import AppPromotion from './components/AppPromotion'
import Footer from './components/Footer'

function App() {
  return (
    /* 
       min-h-screen: Screen එකේ සම්පූර්ණ උස ගන්නවා.
       font-sans: Tailwind config එකේ අපි දාපු 'Inter' font එක apply වෙනවා[cite: 1].
       text-gray-900: Default අකුරු වල පාට තද අළු පාටක් කරනවා professional look එකක් දෙන්න[cite: 1].
    */
    <div className="min-h-screen font-sans bg-white text-gray-900 antialiased">
      
      {/* Navigation Bar: සැමවිටම උඩින් පේන්න sticky කරලා තියෙන්නේ[cite: 1] */}
      <Navbar />

      <main>
        {/* Hero Section: "Get in. Get out. Look GREAT" කියන ප්‍රධාන image එක සහ text එක[cite: 1] */}
        <Hero />

        {/* Services Section: කොණ්ඩා කැපීම් සහ අනෙකුත් සේවා ගැන විස්තර[cite: 1] */}
        <Services />

        {/* App Promotion Section: Mobile app එක download කරන්න කියන කොටස[cite: 1] */}
        <AppPromotion />
      </main>

      {/* Footer Section: අන්තිමටම තියෙන contact details සහ links[cite: 1] */}
      <Footer />

    </div>
  )
}

export default App