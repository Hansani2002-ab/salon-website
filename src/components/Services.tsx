import React from 'react';
import { Search, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import toolImg from '../assets/tool.png'; 
import colorImg from '../assets/color.jpg';
import washImg from '../assets/wash.jpg';
import gurlImg from '../assets/girl2.jpg';

const Services = () => {
  const brandGreen = '#006A52';

  const haircareServices = [
    { name: 'Bixie', traits: ['Edgy', 'Textured', 'Trendy'], img: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=300&h=350&fit=crop' },
    { name: 'Angled Bob', traits: ['Classic', 'Professional', 'Stylish'], img: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=300&h=350&fit=crop' },
    { name: 'Shoulder Length Layers with Bangs', traits: ['Effortless', 'Soft', 'Textured'], img: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=300&h=350&fit=crop' },
    { name: 'Curly Layers with Bangs', traits: ['Classic', 'Bouncy', 'Natural'], img: 'https://images.unsplash.com/photo-1576135032500-1610e2069811?q=80&w=300&h=350&fit=crop' },
  ];

  return (
    <div className="w-full bg-white font-sans overflow-hidden">

      {/* --- HERO SECTION --- */}
      
<section className="max-w-[1440px] mx-auto px-6 md:px-12 py-12 md:py-20 flex flex-col md:flex-row items-center gap-12">
  
  {/* 1. Left Content (Paragraph & Title) */}
  <div className="flex-1 text-left"> 
    <p className="text-[#006A52] font-black text-sm md:text-base uppercase tracking-widest mb-4">
      ADDITIONAL SERVICES
    </p>
    <h1 className="text-gray-950 text-4xl md:text-6xl lg:text-7xl font-black leading-[1.1] mb-8 tracking-tight">
      Haircare services to keep you looking GREAT<span className="text-xl align-top">®</span>
    </h1>
    <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-10 max-w-xl font-medium">
      Look and feel your best with extra haircare services from Great Clips. 
      Add a shampoo service, a beard trim or a neck trim to your next 
      haircut for a fully polished look.
    </p>
    <button style={{ backgroundColor: brandGreen }} className="text-white px-8 py-4 rounded-full flex items-center gap-3 text-base md:text-lg font-black shadow-lg hover:scale-105 transition-all group">
      <Search size={22} strokeWidth={3} /> Find a salon
    </button>
  </div>

  {/* 2. Right Content (Image with Pattern) */}
  <div className="flex-1 relative w-full flex justify-center lg:justify-end">
    <div className="relative w-full max-w-[550px] aspect-square">
      
      {/* circle pattern */}
      <div 
        className="absolute inset-0 rounded-[3rem] overflow-hidden" 
        style={{ 
          backgroundColor: '#006A52', 
          backgroundImage: `repeating-radial-gradient(circle at center, transparent, transparent 20px, rgba(255,255,255,0.15) 21px, transparent 22px)` 
        }}
      ></div>
      
      <img 
        src={toolImg} 
        alt="Haircare Service" 
        className="absolute inset-0 w-full h-full object-cover rounded-[3rem] z-10" 
        style={{ objectPosition: 'center center' }} 
      />
    </div>
  </div>

</section>

{/* --- 3. ADDITIONAL SERVICES GRID SECTION --- */}
<section className="bg-[#006A52] py-24 px-6 font-sans">
  <div className="max-w-[1200px] mx-auto text-center">
    
    {/* Section Title */}
    <h2 className="text-white text-4xl md:text-5xl font-black mb-16 tracking-tight">
      Additional haircare services
    </h2>

    {/* Services Grid (Cards 2 per row on desktop) */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      
      {/* 1. Bang Trim Card */}
      <div className="bg-white rounded-[2.5rem] p-12 flex flex-col items-center text-center shadow-2xl">
        <div className="mb-8 text-[#006A52]">
          {/* Scissors Icon */}
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="6" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle>
            <line x1="20" y1="4" x2="8.12" y2="15.88"></line><line x1="14.47" y1="14.48" x2="20" y2="20"></line>
            <line x1="8.12" y1="8.12" x2="12" y2="12"></line>
          </svg>
        </div>
        <h3 className="text-gray-950 text-3xl font-black mb-6">Bang Trim</h3>
        <p className="text-gray-700 text-lg leading-relaxed font-medium">
          Are your bangs getting long between haircuts? Are you constantly brushing them out of your eyes? Get a refreshed look in just a few minutes with a bang trim from Great Clips.
        </p>
      </div>

      {/* 2. Beard Trim Card */}
      <div className="bg-white rounded-[2.5rem] p-12 flex flex-col items-center text-center shadow-2xl">
        <div className="mb-8 text-[#006A52]">
          {/* Beard/Comb Icon */}
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 3h3v18H6zM15 3h3v18h-3zM9 8h6M9 13h6M9 18h6"></path>
          </svg>
        </div>
        <h3 className="text-gray-950 text-3xl font-black mb-6">Beard Trim</h3>
        <p className="text-gray-700 text-lg leading-relaxed font-medium">
          Look polished and professional with a quick beard touch-up. Our trained stylists can trim your beard to your preferred shape and length.
        </p>
      </div>

      {/* 3. Neck Trim Card */}
      <div className="bg-white rounded-[2.5rem] p-12 flex flex-col items-center text-center shadow-2xl">
        <div className="mb-8 text-[#006A52]">
          {/* Trimmer Icon */}
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="8" y="2" width="8" height="20" rx="2"></rect>
            <path d="M8 6h8M10 2v4M14 2v4"></path>
          </svg>
        </div>
        <h3 className="text-gray-950 text-3xl font-black mb-6">Neck Trim</h3>
        <p className="text-gray-700 text-lg leading-relaxed font-medium">
          Clean up excess neck hair between cuts or add on a neck trim to your haircut to complete your fresh new look. This service works especially well in combination with shorter haircuts.
        </p>
      </div>

      {/* 4. Shampoo Card */}
      <div className="bg-white rounded-[2.5rem] p-12 flex flex-col items-center text-center shadow-2xl">
        <div className="mb-8 text-[#006A52]">
          {/* Shampoo Bottle Icon */}
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 20a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V11H9z"></path>
            <path d="M12 11V7a2 2 0 0 1 2-2h1a2 2 0 0 0 2-2"></path>
          </svg>
        </div>
        <h3 className="text-gray-950 text-3xl font-black mb-6">Shampoo</h3>
        <p className="text-gray-700 text-lg leading-relaxed font-medium">
          Unwind with a relaxing shampoo service. Our stylists use your favorite professional shampoos and conditioners to clean and nourish your hair.
        </p>
      </div>

      {/* 5. Styling Card */}
      <div className="bg-white rounded-[2.5rem] p-12 flex flex-col items-center text-center shadow-2xl">
        <div className="mb-8 text-[#006A52]">
          {/* Curling Iron Icon */}
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2v14M10 16h4v4a2 2 0 0 1-2 2h0a2 2 0 0 1-2-2v-4zM10 5l4 4M14 5l-4 4"></path>
          </svg>
        </div>
        <h3 className="text-gray-950 text-3xl font-black mb-6">Styling</h3>
        <p className="text-gray-700 text-lg leading-relaxed font-medium">
          Places to go and people to see? You can add a blowdry and style to your haircut! We also offer formal styling and updos for special occasions.
        </p>
      </div>

      {/* 6. Perm Card */}
      <div className="bg-white rounded-[2.5rem] p-12 flex flex-col items-center text-center shadow-2xl">
        <div className="mb-8 text-[#006A52]">
          {/* Mirror Icon */}
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="10" r="8"></circle>
            <path d="M12 18v4M9 22h6"></path>
          </svg>
        </div>
        <h3 className="text-gray-950 text-3xl font-black mb-6">Perm*</h3>
        <p className="text-gray-700 text-lg leading-relaxed font-medium">
          Create a whole new look for yourself with a perm, a treatment that adds waves or curls to your hair. Availability varies by location.
        </p>
      </div>

    </div>

    {/* Small Note at the bottom */}
    <p className="text-white mt-16 text-sm opacity-80">
      *Service availability may vary by location.
    </p>

  </div>
</section>

{/* --- 4. DOING GREAT DEEDS SECTION --- */}
<section className="bg-[#F8F9FA] py-24 px-6 font-sans">
  <div className="max-w-[1200px] mx-auto text-center">
    
    {/* Section Header */}
    <div className="max-w-3xl mx-auto mb-16">
      <h2 className="text-gray-950 text-4xl md:text-5xl font-black mb-6 tracking-tight">
        Doing Great Deeds<span className="text-xl align-top">®</span> for those in need
      </h2>
      <p className="text-gray-600 text-lg md:text-xl font-medium leading-relaxed">
        Great Deeds<span className="text-xs align-top">®</span> causes represent our shared commitment to help those in need when it matters most. We offer two services related to our Great Deeds program.
      </p>
    </div>

    {/* Two Cards Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      
      {/* Card 1: Clips of Kindness */}
      <div className="bg-white rounded-[1.5rem] p-10 md:p-12 text-left shadow-sm border border-gray-100 flex flex-col justify-between h-full">
        <div>
          <p className="text-[#006A52] font-black text-xs uppercase tracking-[0.15em] mb-4">
            HELPING CANCER PATIENTS
          </p>
          <h3 className="text-gray-950 text-3xl font-black mb-6">
            Clips of Kindness<span className="text-lg align-top">®</span>
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed mb-10 font-medium">
            Our Clips of Kindness<span className="text-xs align-top">®</span> program offers complimentary clipper cuts to cancer patients who are facing hair loss.
          </p>
        </div>
        <button className="bg-[#006A52] text-white px-8 py-3 rounded-full font-black text-base w-fit hover:bg-[#004d3c] transition-colors">
          Learn more
        </button>
      </div>

      {/* Card 2: Wigs for Kids */}
      <div className="bg-white rounded-[1.5rem] p-10 md:p-12 text-left shadow-sm border border-gray-100 flex flex-col justify-between h-full">
        <div>
          <p className="text-[#006A52] font-black text-xs uppercase tracking-[0.15em] mb-4">
            SUPPORTING CHILDREN'S HEALTH
          </p>
          <h3 className="text-gray-950 text-3xl font-black mb-6">
            Wigs for Kids
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed mb-10 font-medium">
            Many Great Clips salons are proud to provide free haircuts to anyone who wants to donate their hair to Wigs for Kids.
          </p>
        </div>
        <button className="bg-[#006A52] text-white px-8 py-3 rounded-full font-black text-base w-fit hover:bg-[#004d3c] transition-colors">
          Learn more
        </button>
      </div>

    </div>
  </div>
</section>

{/* --- 5. GREAT THINGS TO KNOW SECTION --- */}
<section className="bg-[#006A52] py-24 px-6 font-sans">
  <div className="max-w-[1240px] mx-auto text-center">
    
    <h2 className="text-white text-4xl md:text-5xl font-black mb-16 tracking-tight">
      Great things to know
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      
      {/* Blog Card 1 */}
      <div className="bg-white rounded-3xl overflow-hidden shadow-xl flex flex-col text-left group cursor-pointer">
        <div className="h-64 overflow-hidden">
          <img 
            src={gurlImg}
            alt="Bushy eyebrows" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-8 flex flex-col flex-grow">
          <span className="bg-[#006A52] text-white text-[10px] font-black px-3 py-1 rounded w-fit mb-4 uppercase tracking-wider">
            MEN
          </span>
          <h3 className="text-gray-950 text-2xl font-black mb-4 leading-tight">
            3 tips for maintaining bushy eyebrows
          </h3>
          <p className="text-gray-600 font-medium mb-8 flex-grow">
            As men grow older, their eyebrows tend to grow bushier. So, when those brows get unruly, how can you get them back under control?
          </p>
          <button className="text-[#006A52] font-black flex items-center gap-2 hover:underline">
            Read more <ArrowRight size={18} strokeWidth={3} />
          </button>
        </div>
      </div>

      {/* Blog Card 2 */}
      <div className="bg-white rounded-3xl overflow-hidden shadow-xl flex flex-col text-left group cursor-pointer">
        <div className="h-64 overflow-hidden">
          <img 
            src={colorImg}
            alt="Hair and Beard" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-8 flex flex-col flex-grow">
          <span className="bg-[#006A52] text-white text-[10px] font-black px-3 py-1 rounded w-fit mb-4 uppercase tracking-wider">
            MEN
          </span>
          <h3 className="text-gray-950 text-2xl font-black mb-4 leading-tight">
            Find Your Perfect Hair and Beard Combo
          </h3>
          <p className="text-gray-600 font-medium mb-8 flex-grow">
            Are you looking for the perfect hair and beard combo that elevates your style and fits your face shape? Find your match!
          </p>
          <button className="text-[#006A52] font-black flex items-center gap-2 hover:underline">
            Read more <ArrowRight size={18} strokeWidth={3} />
          </button>
        </div>
      </div>

      {/* Blog Card 3 */}
      <div className="bg-white rounded-3xl overflow-hidden shadow-xl flex flex-col text-left group cursor-pointer">
        <div className="h-64 overflow-hidden">
          <img 
            src={washImg}
            alt="School dances" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-8 flex flex-col flex-grow">
          <span className="bg-[#006A52] text-white text-[10px] font-black px-3 py-1 rounded w-fit mb-4 uppercase tracking-wider">
            STYLING
          </span>
          <h3 className="text-gray-950 text-2xl font-black mb-4 leading-tight">
            9 Simple hairstyles for school dances
          </h3>
          <p className="text-gray-600 font-medium mb-8 flex-grow">
            It's school dance season! Try out one of these 9 simple hairstyles, perfect for dancing the night away!
          </p>
          <button className="text-[#006A52] font-black flex items-center gap-2 hover:underline">
            Read more <ArrowRight size={18} strokeWidth={3} />
          </button>
        </div>
      </div>

    </div>
  </div>
</section>

{/* --- 6. FIND A SALON CTA SECTION --- */}
<section className="bg-[#006A52] py-16 px-6 font-sans">
  <div className="max-w-[1100px] mx-auto">
    
    {/* Height එක අඩු කළ White Card - padding අඩු කර ඇත */}
    <div className="bg-white rounded-[2.5rem] p-10 md:p-14 shadow-2xl text-center flex flex-col items-center">
      
      {/* Icon එකත් පොඩ්ඩක් කුඩා කළා */}
      <div className="mb-6 text-[#006A52]">
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 18v-6a5 5 0 1 1 10 0v6"></path>
          <path d="M5 18h14"></path>
          <path d="M12 18v3"></path>
          <path d="M9 21h6"></path>
          <rect x="6" y="12" width="12" height="2" rx="1"></rect>
        </svg>
      </div>

      <h2 className="text-gray-950 text-4xl font-black mb-4 tracking-tight">
        Find a salon
      </h2>
      
      <p className="text-gray-600 text-lg font-medium max-w-xl mb-8 leading-relaxed">
        Ready for your next great haircut? Then Great Clips is ready for you! Find a salon or check in now.
      </p>

      <button className="bg-[#006A52] text-white px-10 py-3.5 rounded-full font-black text-lg flex items-center gap-3 hover:bg-[#004d3c] transition-all shadow-lg active:scale-95">
        <Search size={20} strokeWidth={3} />
        Find a salon
      </button>

    </div>
  </div>
</section>
      
    </div>
  );
};

export default Services;