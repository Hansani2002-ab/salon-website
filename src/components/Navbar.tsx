import { Search, ChevronDown, ExternalLink } from 'lucide-react';

const Navbar = () => {

  const brandGreen = '#006A52';

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm w-full font-sans">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
        
        {/* 1. Logo Section */}
        <div className="flex flex-col leading-none cursor-pointer">
          <div className="flex items-start">
            <span className="text-[28px] font-bold text-black tracking-tight">
              Great Clips
            </span>
            <span className="text-[10px] mt-1.5 ml-0.5 text-black">®</span>
          </div>
          <div className="flex items-center mt-0.5">
            <span className="text-[10px] tracking-[0.2em] font-bold text-black uppercase">
              IT'S GONNA BE GREAT
            </span>
            <span className="text-[7px] ml-0.5 text-black">®</span>
          </div>
        </div>

        {/* 2. Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-8 text-[14px] font-extrabold text-black ml-10">
          {/* Dropdown Links */}
          <div className="flex items-center gap-1 cursor-pointer group">
            <span className="group-hover:text-[#006A52] transition-colors">Services</span> 
            <ChevronDown size={14} strokeWidth={3} style={{ color: brandGreen }} />
          </div>
          
          <div className="flex items-center gap-1 cursor-pointer group">
            <span className="group-hover:text-[#006A52] transition-colors">Products</span>
            <ChevronDown size={14} strokeWidth={3} style={{ color: brandGreen }} />
          </div>
          
          <div className="flex items-center gap-1 cursor-pointer group">
            <span className="group-hover:text-[#006A52] transition-colors">Promotions</span>
            <ChevronDown size={14} strokeWidth={3} style={{ color: brandGreen }} />
          </div>

          {/* External Links with Green Icons */}
          <a href="#" className="flex items-center gap-1 group">
            <span className="group-hover:text-[#006A52] transition-colors">Salon Careers</span>
            <ExternalLink size={14} strokeWidth={3} style={{ color: brandGreen }} />
          </a>
          
          <a href="#" className="flex items-center gap-1 group">
            <span className="group-hover:text-[#006A52] transition-colors">Franchising</span>
            <ExternalLink size={14} strokeWidth={3} style={{ color: brandGreen }} />
          </a>
        </div>

        {/* 3. Right Side - Actions */}
        <div className="flex items-center gap-8">
          <button className="hidden md:block text-[14px] font-extrabold text-black hover:text-[#006A52] transition-colors">
            Sign In
          </button>
          
          <button 
            style={{ backgroundColor: brandGreen }} 
            className="text-white px-6 py-2.5 rounded-full flex items-center gap-2 text-[14px] font-extrabold hover:brightness-110 transition-all shadow-sm"
          >
            <Search size={18} strokeWidth={3} />
            Find a Salon
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;