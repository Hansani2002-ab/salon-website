import { CheckCircle2, Scissors, ChevronRight } from 'lucide-react';
import heroVideo from '../assets/hero-bg.mp4';

// Oyaage images methana import karaganna
import menImg from '../assets/men.png';
import womenImg from '../assets/women.png';
import kidsImg from '../assets/kid.png';

const Hero = () => {
  const brandGreen = '#006A52';

  // Boxes wala data tika methana thiyenne
  const categories = [
    { title: 'Men', img: menImg, scale: 'scale-[1.9]' },
    { title: 'Women', img: womenImg },
    { title: 'Kids', img: kidsImg },
    { title: 'Seniors', img: menImg }, 
  ];

  return (
    <div className="font-sans">
      
      {/* 1. HERO SECTION */}
      <div className="relative h-[650px] w-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
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

            <button className="bg-white px-8 py-3.5 rounded-full w-fit text-[17px] font-black flex items-center gap-2.5 hover:bg-gray-50 transition-all shadow-xl">
              <CheckCircle2 size={22} strokeWidth={3} style={{ color: brandGreen }} />
              <span style={{ color: brandGreen }}>Check in</span>
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
            GREAT
            <sup className="text-[14px] md:text-[18px] relative -top-[1em] md:-top-[1.2em] ml-0.5 font-bold">
               ®
            </sup> 
            haircuts for everyone
          </h2>

          <p className="text-[18px] md:text-[20px] text-gray-700 font-medium max-w-3xl">
            Get a haircut that fits your hair, your lifestyle and your look.
          </p>

          {/* Categorized Image Boxes */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
            {categories.map((cat, index) => (
              <div key={index} className="flex flex-col items-center group cursor-pointer">
                
                {/* Green Box - overflow-visible is key for pop-out */}
<div className="bg-[#006A52] rounded-t-[40px] w-full h-[300px] relative overflow-visible mb-6">
  {cat.img ? (
    <img 
      src={cat.img} 
      alt={cat.title} 
      /* 
         Meke 'scale-125' hamawelema thiyenna damma.
         'group-hover:scale-[1.3]' dammahama hover karaddi thawa poddak loku wenawa.
      */
      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full object-contain object-bottom scale-125 origin-bottom transition-transform duration-300 group-hover:scale-[1.3]"
    />
  ) : (
    <div className="absolute inset-0 bg-black/5" />
  )}
</div>

                {/* Text Labels */}
                <div className="text-center">
                  <span className="text-[12px] font-bold uppercase tracking-widest" style={{ color: brandGreen }}>
                    Haircuts for
                  </span>
                  <h3 className="text-[32px] font-black text-black mt-1 mb-2">
                    {cat.title}
                  </h3>
                  <a 
                    href="#" 
                    className="text-[14px] font-bold flex items-center justify-center gap-1 hover:opacity-75 transition-opacity" 
                    style={{ color: brandGreen }}
                  >
                    Show me <span className="text-lg">→</span>
                  </a>
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