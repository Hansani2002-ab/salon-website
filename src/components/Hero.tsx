import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';
import { CheckCircle2, Scissors, Armchair, MapPin, ClipboardList } from 'lucide-react';
import heroVideo from '../assets/hero-bg.mp4';

import menImg from '../assets/men.png';
import womenImg from '../assets/women.png';
import kidsImg from '../assets/kid.png';
import mockupImg from '../assets/mockup.png';
import haircutDetailImg from '../assets/haircut.png';
import womanImg from '../assets/girl.png';

const Hero = () => {
  const brandGreen = '#006A52';
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  
  const categories = [
    { title: 'Men', img: menImg, path: '/services/men' },
    { title: 'Women', img: womenImg, path: '/services/women' },
    { title: 'Kids', img: kidsImg, path: '/services/kids' },
    { title: 'Seniors', img: menImg, path: '/services/seniors' }, 
  ];

  const newsItems = [
    {
      title: "Love the Stanley Cup®?",
      description: "Enter on our app for your chance to win a trip for five (!!) to a 2026 Stanley Cup® Final game of your choice!",
      linkText: "Learn more",
      image: haircutDetailImg,
      bgColor: "bg-[#003d2b]"
    },
    {
      title: "Find your next great cut",
      description: "From layers to fades, our lookbook is here to inspire what's next for your hair.",
      linkText: "Browse haircuts",
      image: womanImg,
      bgColor: "bg-[#006A52]"
    },
    {
      title: "Work greatly",
      description: "Grow your career at a Great Clips salon, whether that's as a stylist, manager or receptionist.",
      linkText: "Learn more",
      image: menImg,
      bgColor: "bg-[#e8f3f0]"
    }
  ];

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      setError("Email address is required.");
      setIsSubmitted(false);
    } else if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      setIsSubmitted(false);
    } else {
      setError("");
      setIsSubmitted(true);
      console.log("Email submitted successfully:", email);
    }
  };

  return (
    <div className="font-sans bg-white overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <div className="relative h-[650px] w-full overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20 h-full max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col justify-center text-white">
          <div className="max-w-4xl"> 
            <h1 className="text-[52px] md:text-[70px] font-black leading-[1.05] tracking-tight mb-4 uppercase">
              Get in. Get out.<br />
              Look GREAT<sup className="text-[24px] ml-1 font-bold">®</sup>
            </h1>
            <div className="mb-8">
              <p className="text-[20px] md:text-[24px] font-extrabold text-white mb-3">
                Great haircuts are easier with Online Check-In
              </p>
              <p className="text-[16px] md:text-[18px] font-medium opacity-90 leading-snug max-w-xl">
                Find a salon near you and add your name to the waitlist <br className="hidden md:block" />
                from anywhere, with Online Check-In.
              </p>
            </div>
            <button className="group bg-white px-8 py-3.5 rounded-full w-fit text-[17px] font-black flex items-center gap-2.5 hover:bg-[#006A52] transition-all duration-300 shadow-xl active:scale-95">
              <CheckCircle2 size={22} strokeWidth={3} className="text-[#006A52] group-hover:text-white transition-colors duration-300" />
              <span className="text-[#006A52] group-hover:text-white transition-colors duration-300"> Check in </span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. HAIRCUTS FOR EVERYONE SECTION */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
          <div className="mb-6" style={{ color: brandGreen }}>
            <Scissors size={48} strokeWidth={1.5} className="rotate-45" />
          </div>
          <h2 className="text-[36px] md:text-[48px] font-black text-black leading-tight mb-4">
            GREAT<sup className="text-[14px] md:text-[18px] relative -top-[1em] md:-top-[1.2em] ml-0.5 font-bold">®</sup> haircuts for everyone
          </h2>
          <p className="text-[18px] md:text-[20px] text-gray-700 font-medium max-w-3xl">
            Get a haircut that fits your hair, your lifestyle and your look.
          </p>
          
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
            {categories.map((cat, index) => (
              <div key={index} className="flex flex-col items-center group cursor-pointer">
                <div className="bg-[#006A52] rounded-t-[40px] w-full h-[300px] relative overflow-visible mb-6">
                  <img 
                    src={cat.img} 
                    alt={cat.title} 
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full object-contain object-bottom scale-125 origin-bottom transition-transform duration-300 group-hover:scale-[1.3]"
                  />
                </div>
                <div className="text-center">
                  <span className="text-[12px] font-bold uppercase tracking-widest" style={{ color: brandGreen }}>Haircuts for</span>
                  <h3 className="text-[32px] font-black text-black mt-1 mb-2">{cat.title}</h3>
                  
                  
                  <Link 
                    to={cat.path} 
                    className="text-[14px] font-bold flex items-center justify-center gap-1 hover:opacity-75 transition-opacity" 
                    style={{ color: brandGreen }}
                  >
                    Show me <span className="text-lg">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. A GREAT HAIRCUT SECTION */}
      <section className="bg-white py-16 lg:py-24 px-6">
        <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
          <div className="mb-8 relative">
            <Armchair size={80} strokeWidth={1.2} className="text-[#006A52] opacity-80" />
            <div className="w-12 h-1 bg-[#006A52]/20 mx-auto mt-2 rounded-full"></div>
          </div>

          <h2 className="text-[32px] md:text-[42px] lg:text-[52px] font-black text-gray-900 leading-tight mb-6 w-full max-w-none">
            A GREAT<sup className="text-[14px] md:text-[20px] font-bold ml-1">®</sup> haircut every time, on your schedule
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 w-full">
            <div className="flex flex-col group cursor-pointer">
              <div className="relative h-[300px] md:h-[400px] rounded-[2.5rem] overflow-hidden mb-10 shadow-lg bg-[#006A52] transition-transform duration-500 group-hover:-translate-y-2">
                <img src={womanImg} className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-110" /> 
                <div className="absolute top-8 left-8 bg-white p-5 rounded-2xl shadow-2xl w-[220px] transform transition-all duration-500 group-hover:scale-105">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-green-100 p-1 rounded-full"><CheckCircle2 size={16} className="text-[#006A52]" /></div>
                    <span className="text-[10px] font-black uppercase text-gray-400">You're Checked In!</span>
                  </div>
                  <div className="h-1.5 bg-gray-100 rounded w-full overflow-hidden">
                      <div className="h-full bg-[#006A52] w-2/3 rounded"></div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-3 mb-6 transition-transform duration-300 group-hover:scale-105">
                  <MapPin size={36} className="text-[#006A52]" strokeWidth={2.5} />
                  <div className="flex flex-col items-start leading-none uppercase text-gray-900">
                    <span className="text-[26px] font-black tracking-tighter">Online</span>
                    <span className="text-[26px] font-light tracking-[0.2em] -mt-1">Check-in</span>
                  </div>
                </div>
                <button className="bg-[#006A52] text-white px-12 py-4 rounded-full font-black text-[16px] uppercase tracking-wider transition-all duration-300 hover:bg-[#004d3b] hover:shadow-[0_10px_20px_rgba(0,106,82,0.3)] active:scale-95">
                  Check In
                </button>
              </div>
            </div>

            <div className="flex flex-col group cursor-pointer">
              <div className="relative h-[300px] md:h-[400px] rounded-[2.5rem] overflow-hidden mb-10 shadow-lg bg-[#006A52] transition-transform duration-500 group-hover:-translate-y-2">
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                <img src={haircutDetailImg} className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-110" /> 
                <div className="absolute top-6 left-6 bg-white rounded-xl p-4 shadow-xl w-[200px] transition-all duration-500 group-hover:translate-x-2">
                  <div className="flex flex-col gap-1">
                    <span className="text-[#006A52] text-[10px] font-black uppercase tracking-widest border-b border-gray-100 pb-1 mb-1">Great Clips</span>
                    <span className="text-gray-900 font-black text-sm">Charlie S.</span>
                    <ul className="text-gray-600 text-[11px] font-bold space-y-0.5">
                      <li>• #4 on the sides and back</li>
                      <li>• 1" off top</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-3 mb-6 transition-transform duration-300 group-hover:scale-105">
                  <div className="border-[2.5px] border-[#006A52] p-1.5 rounded-lg">
                    <ClipboardList size={28} className="text-[#006A52]" strokeWidth={2.5} />
                  </div>
                  <div className="flex flex-col items-start leading-none uppercase text-gray-900">
                    <span className="text-[26px] font-black tracking-tighter">Clip</span>
                    <span className="text-[26px] font-light tracking-[0.2em] -mt-1">Notes<sup>®</sup></span>
                  </div>
                </div>
                <button className="bg-[#006A52] text-white px-12 py-4 rounded-full font-black text-[16px] uppercase tracking-wider transition-all duration-300 hover:bg-[#004d3b] hover:shadow-[0_10px_20px_rgba(0,106,82,0.3)] active:scale-95">
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. APP PROMOTION SECTION */}
     
<section className="bg-[#006A52] py-10 lg:py-20 px-4 md:px-12 lg:px-24 mt-20 lg:mt-40 relative overflow-visible flex items-center min-h-[400px] rounded-[2rem] lg:rounded-[2.5rem] mx-4 md:mx-10">
  <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center justify-between w-full relative">
    
    
    <div className="w-full lg:w-[45%] relative flex justify-center lg:justify-start mb-10 lg:mb-0 z-10">
      <div className="relative w-full flex justify-center">
        <img 
          src={mockupImg} 
          alt="App Mockup" 
          className="relative lg:absolute w-[280px] md:w-[350px] lg:w-auto h-auto lg:h-[550px] max-w-none object-contain drop-shadow-[0_50px_60px_rgba(0,0,0,0.45)] scale-[1.3] md:scale-[1.4] lg:scale-[1.9] top-0 lg:top-1/2 transform lg:-translate-y-1/2 left-0 lg:left-0 lg:-translate-x-[15%]" 
        />
      </div>
    </div>

    
    <div className="w-full lg:w-[55%] flex justify-center lg:justify-end z-20 mt-10 lg:mt-0 relative transform lg:translate-x-16">
      <div className="bg-white rounded-[1.5rem] p-8 md:p-14 shadow-2xl w-full max-w-[800px] relative z-30">
        <h5 className="text-[#006A52] font-semibold text-[16px] lg:text-[20px] uppercase mb-4">Download the App</h5>
        <h2 className="text-[28px] md:text-[36px] lg:text-[46px] font-black text-gray-900 leading-[1.1] mb-6">
          Quick and easy check-in <br className="hidden md:block" /> when you're on the go
        </h2>
        <p className="text-gray-600 text-[15px] lg:text-[19px] leading-relaxed mb-10 font-medium">
          Spend less time waiting and more time on what matters to you. With the Great Clips app, you can check in with just a few taps.
        </p>
        
        <form className="space-y-6" onSubmit={handleEmailSubmit}>
          <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-end"> 
            <div className="flex-grow w-full">
              <label className="block text-[12px] font-extrabold text-[#006A52] mb-2 uppercase tracking-widest text-left">Email Address*</label>
              <input 
                type="text" 
                placeholder="email" 
                value={email} 
                onChange={(e) => { setEmail(e.target.value); if (error) setError(""); }} 
                className={`w-full px-6 py-4 rounded-full border-2 bg-gray-50 outline-none font-bold text-[18px] transition-all ${error ? 'border-red-500' : 'border-gray-100 focus:border-[#006A52]'}`} 
              />
            </div>
            <button type="submit" className="bg-[#006A52] text-white font-black px-10 py-4 rounded-full transition-all shadow-lg hover:bg-[#004d3b] whitespace-nowrap">
              Email a link
            </button>
          </div>
          {error && <p className="text-red-500 text-[13px] font-bold uppercase text-left">{error}</p>}
          {isSubmitted && !error && <p className="text-green-600 text-[13px] font-bold uppercase text-left">Link sent! Check your inbox.</p>}
        </form>
      </div>
    </div>

  </div>
</section>

      {/* 5. GREAT NEWS SECTION */}
      <section className="bg-[#f4f9f7] py-24 px-6 mt-20 lg:mt-40">
        <div className="max-w-[1440px] mx-auto text-center">
          <h2 className="text-[40px] md:text-[50px] font-black text-gray-900 mb-16">Great news</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {newsItems.map((item, index) => (
              <div key={index} className="flex flex-col group cursor-pointer text-left transition-all duration-500 hover:-translate-y-2">
                <div className={`relative aspect-[1.8/1] rounded-[1.5rem] overflow-hidden mb-8 shadow-sm group-hover:shadow-xl transition-all duration-500 ${item.bgColor}`}>
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                </div>
                <div className="flex flex-col px-1">
                  <h3 className="text-[26px] font-black text-gray-900 mb-3 leading-tight tracking-tight group-hover:text-[#006A52] transition-colors duration-300">{item.title}</h3>
                  <p className="text-gray-700 text-[18px] font-medium leading-[1.6] mb-6">{item.description}</p>
                  <div className="flex items-center gap-1.5 text-[#006A52] font-extrabold text-[16px]">
                    <span className="relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-[#006A52] after:origin-bottom-right after:transition-transform after:duration-300 group-hover:after:scale-x-100 group-hover:after:origin-bottom-left">{item.linkText}</span>
                    <span className="text-xl transition-transform duration-300 group-hover:translate-x-2">→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Hero;