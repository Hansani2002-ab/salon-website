import React, { useRef } from 'react';
import salonImg from '../assets/salon.png'; 
import bixieImg from '../assets/bixie.png';
import angledBobImg from '../assets/bob.png';
import shoulderLengthImg from '../assets/layers.png';
import curlyImg from '../assets/curly.png';
import expertImg from '../assets/expert-stylist-image.jpg';
import washImg from '../assets/wash.jpg';
import colorImg from '../assets/color.jpg';
import gurlImg from '../assets/girl2.jpg';

const ServiceCard = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const brandGreen = '#006A52';

  // Scroll function 
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const haircuts = [
    { name: "Bixie", tags: "Edgy • Textured • Trendy", img: bixieImg },
    { name: "Angled Bob", tags: "Classic • Professional • Stylish", img: angledBobImg },
    { name: "Shoulder Length Layers with Bangs", tags: "Effortless • Soft • Textured", img: shoulderLengthImg },
    { name: "Curly Hair", tags: "Classic • Textured", img: curlyImg }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">

      {/* --- 1. HERO SECTION --- */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 py-16 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 text-center lg:text-left">
          <h5 className="text-[#006A52] font-black uppercase tracking-[0.2em] mb-4 text-sm md:text-base">Haircuts for</h5>
          <h1 className="text-gray-900 text-5xl md:text-7xl font-black mb-8 tracking-tighter">Women</h1>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0 font-medium">
            Look and feel your best with women’s haircuts at Great Clips. Whether your hair is long or short, thick or thin, curly or straight or somewhere in between, you can get the haircut you want at your local Great Clips salon.
          </p>
          <button className="bg-[#006A52] text-white px-10 py-4 rounded-full font-black text-lg flex items-center gap-3 mx-auto lg:mx-0 transition-all hover:bg-[#004d3b] shadow-lg group">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="group-hover:rotate-12 transition-transform"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            Find a salon
          </button>
        </div>

        <div className="flex-1 relative w-full flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[550px] aspect-square">
            <div className="absolute inset-0 rounded-[3rem] overflow-hidden" style={{ backgroundColor: brandGreen, backgroundImage: `repeating-radial-gradient(circle at center, transparent, transparent 20px, rgba(255,255,255,0.15) 21px, transparent 22px)` }}></div>
            <img src={salonImg} alt="Women's Haircut" className="absolute inset-0 w-full h-full object-cover rounded-[3rem] z-10" style={{ objectPosition: 'center 20%' }} />
          </div>
        </div>
      </section>

      {/* --- 2. EXPLORE SECTION --- */}
<section className="bg-[#006A52] py-24 px-6 font-sans">
  <div className="max-w-[1440px] mx-auto text-center relative">
    <h2 className="text-white text-4xl md:text-6xl font-black mb-6 tracking-tight">Explore women’s haircuts</h2>
    <p className="text-white opacity-90 text-lg md:text-xl mb-16 max-w-2xl mx-auto">Browse a selection of our women’s haircuts to get inspired.</p>

    {/* Scrollable Area */}
    <div 
      ref={scrollRef}
      className="flex overflow-x-auto gap-6 scrollbar-hide scroll-smooth pb-8 px-2"
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      {haircuts.map((haircut, index) => (
        <div 
          key={index} 
          className="min-w-[280px] md:min-w-[320px] flex-shrink-0 overflow-hidden flex flex-col group cursor-pointer transition-all duration-500 hover:-translate-y-2 shadow-lg rounded-[2rem] bg-white"
        >
          <div className="w-full aspect-[1.1/1] overflow-hidden bg-[#F3F4F6] flex items-center justify-center">
            <img 
              src={haircut.img} 
              alt={haircut.name} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            />
          </div>
          <div className="p-6 flex flex-col items-center flex-grow text-center">
            <h3 className="text-gray-950 font-black text-xl md:text-2xl leading-tight mb-1 group-hover:text-[#006A52] transition-colors duration-300">
              {haircut.name}
            </h3>
            <p className="text-gray-500 font-bold text-[10px] md:text-xs mb-6 uppercase tracking-widest leading-none">
              {haircut.tags}
            </p>
           <a 
              href="#" 
              onClick={(e) => e.preventDefault()} 
              className="mt-auto text-[#006A52] font-black text-sm md:text-base flex items-center justify-center gap-1 group-hover:gap-2 transition-all duration-300"
            >
            Check it out <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">→</span>
         </a>
          </div>
        </div>
      ))}
    </div>

    {/* Scroll Buttons */}
    <div className="flex justify-between items-center px-4 mt-4">
      <button 
        onClick={() => scroll('left')}
        className="bg-white p-3 rounded-lg shadow-md hover:bg-gray-100 transition-all active:scale-90"
        aria-label="Scroll Left"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#006A52" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
      </button>

      <button 
        onClick={() => scroll('right')}
        className="bg-white p-3 rounded-lg shadow-md hover:bg-gray-100 transition-all active:scale-90"
        aria-label="Scroll Right"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#006A52" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
      </button>
    </div>
  </div>
</section>

      {/* --- 3. ADDITIONAL SERVICES SECTION --- */}
      <section className="bg-[#006A52] py-24 px-6 font-sans text-white">
        <div className="max-w-[1440px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
            Additional women’s haircare services
          </h2>
          <p className="text-lg md:text-xl opacity-90 max-w-4xl mx-auto mb-24 font-medium leading-relaxed">
            Need your bangs touched up or your hair formally styled? That’s great! Just visit your local salon and we’ll be happy to help.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="mb-8 transition-transform duration-300 group-hover:scale-110">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="6" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle>
                  <line x1="20" y1="4" x2="8.12" y2="15.88"></line><line x1="14.47" y1="14.48" x2="20" y2="20"></line>
                  <line x1="8.12" y1="8.12" x2="12" y2="12"></line>
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-black tracking-tight">Bang Trim</h3>
            </div>
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="mb-8 transition-transform duration-300 group-hover:scale-110">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 20a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V11H9z"></path>
                  <path d="M12 11V7a2 2 0 0 1 2-2h1a2 2 0 0 0 2-2"></path>
                  <path d="M11 7V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v2"></path>
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-black tracking-tight">Shampoo</h3>
            </div>
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="mb-8 transition-transform duration-300 group-hover:scale-110">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20"></path><path d="M7 7l10 10"></path><path d="M17 7L7 17"></path>
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-black tracking-tight">Styling</h3>
            </div>
          </div>
          <button className="bg-white text-[#006A52] font-black py-4 px-12 rounded-full text-lg border-2 border-white shadow-lg transition-all duration-300 hover:bg-transparent hover:text-white active:scale-95">
            Learn more
          </button>
        </div>
      </section>

      {/* --- 4. GUIDANCE & CONSULTATIONS --- */}
      <section className="bg-white py-20 px-6 font-sans text-[#1a1a1a]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-24">
            <div className="flex justify-center mb-6">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#006A52" strokeWidth="1.5">
                <circle cx="6" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle>
                <line x1="20" y1="4" x2="8.12" y2="15.88"></line><line x1="14.47" y1="14.48" x2="20" y2="20"></line>
                <line x1="8.12" y1="8.12" x2="12" y2="12"></line>
              </svg>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-[1.1] max-w-3xl mx-auto">
              The haircut you want, the first time and every time
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              To make sure you get a haircut you love, we offer pre-cut consultations and store your Clip Notes—so you get the cut you want every time you step into a Great Clips salon.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-12 mt-16">
            <div className="w-full md:w-1/2">
              <img src={expertImg} alt="Expert stylist" className="w-full h-80 md:h-[450px] object-cover rounded-lg shadow-md" />
            </div>
            <div className="w-full md:w-1/2 text-left">
              <h3 className="text-3xl md:text-4xl font-black mb-6 leading-tight">Great guidance from expert stylists</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Not sure what you want? No problem. Our stylists provide a pre-haircut consultation to help you find a great look. Or if you're curious about a specific haircut, they can help you determine if it will work for your hair and your lifestyle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 5. CLIP NOTES SECTION --- */}
      <section className="bg-[#F8F9FA] py-20 px-6 font-sans">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 text-left">
            <h2 className="text-4xl md:text-5xl font-black text-[#1a1a1a] mb-8 leading-tight">Here’s something <br /> worth noting</h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-lg">
              You don’t have to remember the specific details or salon jargon to get a great haircut. Any time you visit a Great Clips salon, your stylist will add your haircut details to your Clip Notes profile. So sit back and relax knowing you’ll always get the look you love.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img src={salonImg} alt="Clip notes" className="w-full h-auto object-contain" />
          </div>
        </div>
      </section>

      {/* --- 6. GREAT THINGS TO KNOW --- */}
      <section className="bg-[#006A52] py-20 px-6 font-sans">
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="text-white text-4xl md:text-5xl font-black mb-16 tracking-tight">Great things to know</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-[2rem] overflow-hidden text-left flex flex-col h-full shadow-2xl transition-transform hover:scale-[1.02]">
              <img src={washImg} alt="Haircut Tips" className="w-full h-64 object-cover" />
              <div className="p-8 flex-grow">
                <span className="bg-[#006A52] text-white text-[10px] font-bold px-3 py-1 rounded-md uppercase tracking-widest">Haircut Tips</span>
                <h3 className="text-gray-900 text-2xl font-black mt-4 mb-4 leading-tight">How to achieve a stress-free haircut</h3>
                <p className="text-gray-600 text-base leading-relaxed">If you've ever felt anxious heading to the salon for a hair cut, you're not alone. Here are some tips to help you enjoy a stress-free haircutting experience.</p>
              </div>
              <div className="p-8 pt-0 mt-auto">
                <a href="#" className="text-[#006A52] font-bold flex items-center hover:underline group">Read more <span className="ml-2 transition-transform group-hover:translate-x-1">→</span></a>
              </div>
            </div>
            <div className="bg-white rounded-[2rem] overflow-hidden text-left flex flex-col h-full shadow-2xl transition-transform hover:scale-[1.02]">
              <img src={colorImg} alt="Styling" className="w-full h-64 object-cover" />
              <div className="p-8 flex-grow">
                <span className="bg-[#006A52] text-white text-[10px] font-bold px-3 py-1 rounded-md uppercase tracking-widest">Styling</span>
                <h3 className="text-gray-900 text-2xl font-black mt-4 mb-4 leading-tight">8 tips for protecting your hair when heat styling</h3>
                <p className="text-gray-600 text-base leading-relaxed">Flat irons, curling irons and hair dryers can damage your hair if you're not careful. Here are our tips to make sure your hair stays healthy and stylish.</p>
              </div>
              <div className="p-8 pt-0 mt-auto">
                <a href="#" className="text-[#006A52] font-bold flex items-center hover:underline group">Read more <span className="ml-2 transition-transform group-hover:translate-x-1">→</span></a>
              </div>
            </div>
            <div className="bg-white rounded-[2rem] overflow-hidden text-left flex flex-col h-full shadow-2xl transition-transform hover:scale-[1.02]">
              <img src={gurlImg} alt="Women" className="w-full h-64 object-cover" />
              <div className="p-8 flex-grow">
                <span className="bg-[#006A52] text-white text-[10px] font-bold px-3 py-1 rounded-md uppercase tracking-widest">Women</span>
                <h3 className="text-gray-900 text-2xl font-black mt-4 mb-4 leading-tight">Choosing the right products for women's hair</h3>
                <p className="text-gray-600 text-base leading-relaxed">Products that fit your hair type can go a long way in helping you achieve the look you want. See how you can choose the right products for your hair.</p>
              </div>
              <div className="p-8 pt-0 mt-auto">
                <a href="#" className="text-[#006A52] font-bold flex items-center hover:underline group">Read more <span className="ml-2 transition-transform group-hover:translate-x-1">→</span></a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default ServiceCard;