import React, { useState } from 'react';
import { Search, ChevronDown, ExternalLink, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const brandGreen = '#006A52';

  const navLinks = [
    { title: 'Services', type: 'dropdown', items: ['Haircuts', 'Styling', 'Additional Services'] },
    { title: 'Products', type: 'dropdown', items: ['Solutions', 'Tea Tree', 'Matrix'] },
    { title: 'Promotions', type: 'dropdown', items: ['Latest Offers', 'Gift Cards'] },
    { title: 'Salon Careers', type: 'external' },
    { title: 'Franchising', type: 'external' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm w-full font-sans">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
        
        {/* 1. Logo Section */}
        <div className="flex flex-col leading-none cursor-pointer shrink-0 group">
          <div className="flex items-start">
            <span className="text-[24px] md:text-[28px] font-bold text-black tracking-tight group-hover:text-[#006A52] transition-colors duration-300">
              Great Clips
            </span>
            <span className="text-[10px] mt-1.5 ml-0.5 text-black">®</span>
          </div>
          <div className="flex items-center mt-0.5">
            <span className="text-[8px] md:text-[10px] tracking-[0.2em] font-bold text-black uppercase group-hover:tracking-[0.25em] transition-all duration-300">
              IT'S GONNA BE GREAT
            </span>
            <span className="text-[7px] ml-0.5 text-black">®</span>
          </div>
        </div>

        {/* 2. Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-8 text-[14px] font-extrabold text-black ml-10">
          {navLinks.map((link) => (
            <div key={link.title} className="relative group py-2">
              <div className="flex items-center gap-1 cursor-pointer transition-all duration-300 hover:text-[#006A52] hover:translate-y-[-1px]">
                <span>{link.title}</span>
                {link.type === 'dropdown' ? (
                  <ChevronDown size={14} strokeWidth={3} className="text-[#006A52] group-hover:rotate-180 transition-transform duration-300" />
                ) : (
                  <ExternalLink size={14} strokeWidth={3} className="text-[#006A52] group-hover:scale-110 transition-transform duration-300" />
                )}
              </div>

              {/* Dropdown Menu (Desktop) */}
              {link.type === 'dropdown' && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-100 shadow-xl rounded-xl py-3 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300">
                  {link.items?.map((item) => (
                    <a key={item} href="#" className="block px-5 py-2.5 hover:bg-green-50 hover:text-[#006A52] font-semibold text-[13px] transition-all duration-200">
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 3. Right Side - Actions */}
        <div className="flex items-center gap-4 md:gap-8">
          <button className="hidden md:block text-[14px] font-extrabold text-black hover:text-[#006A52] transition-all duration-300 relative after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[2px] after:bg-[#006A52] hover:after:w-full after:transition-all">
            Sign In
          </button>
          
          {/* Main Action Button with Enhanced Hover */}
          <button 
            style={{ backgroundColor: brandGreen }} 
            className="text-white px-5 md:px-7 py-2.5 md:py-3 rounded-full flex items-center gap-2 text-[13px] md:text-[14px] font-extrabold shadow-md hover:shadow-[#006A52]/30 hover:shadow-lg hover:scale-[1.05] hover:brightness-110 active:scale-95 transition-all duration-300 shrink-0 group"
          >
            <Search size={18} strokeWidth={3} className="group-hover:rotate-12 transition-transform duration-300" />
            <span className="hidden sm:inline">Find a Salon</span>
            <span className="sm:hidden text-[10px]">Find</span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button 
            className="lg:hidden text-black hover:text-[#006A52] hover:rotate-90 transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {/* 4. Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-2xl h-[calc(100vh-80px)] overflow-y-auto z-40 animate-in fade-in slide-in-from-top duration-300">
          <div className="flex flex-col p-6 gap-6">
            {navLinks.map((link) => (
              <div key={link.title} className="flex flex-col gap-4 border-b border-gray-50 pb-4">
                <div className="flex items-center justify-between font-extrabold text-[16px] text-black hover:text-[#006A52] transition-colors cursor-pointer">
                  <span>{link.title}</span>
                  {link.type === 'external' && <ExternalLink size={18} className="text-[#006A52]" />}
                </div>
                {link.type === 'dropdown' && (
                  <div className="flex flex-col gap-4 pl-4 border-l-2 border-gray-100">
                    {link.items?.map((item) => (
                      <a key={item} href="#" className="text-[14px] font-semibold text-gray-500 hover:text-[#006A52] transition-colors">
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <button className="w-full text-center font-extrabold text-[16px] text-white py-4 rounded-xl shadow-lg transition-all active:scale-95" style={{ backgroundColor: brandGreen }}>
              Sign In
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;