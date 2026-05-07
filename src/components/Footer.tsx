import React from 'react';
import { ExternalLink } from 'lucide-react';

const Footer = () => {
  const brandGreen = '#006A52';
  const darkGreen = '#003d2f'; // තද කොළ පාට (App promo box එකට)

  // Social Icons with currentColor logic
  const XIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
  );
  const FacebookIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
  );
  const InstagramIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
  );
  const YoutubeIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.14 1 12 1 12s0 3.86.42 5.58a2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.86 23 12 23 12s0-3.86-.42-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>
  );

  return (
    <footer className="bg-white pt-16 pb-8 px-6 md:px-12 border-t border-gray-100 font-sans overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Left: Brand & Socials */}
          <div className="lg:col-span-1 flex flex-col items-center lg:items-start">
            {/* App Promotion Card */}
            <div 
              className="w-full max-w-[260px] rounded-xl p-5 flex items-center gap-4 mb-8 cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
              style={{ backgroundColor: darkGreen }}
            >
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center font-black text-[#006A52] text-sm shadow-md shrink-0">GC</div>
              <div className="text-white">
                <p className="text-[10px] uppercase font-bold leading-none tracking-widest opacity-90 mb-1">Download the</p>
                <h4 className="text-[18px] font-black leading-tight group-hover:scale-[1.02] transition-transform">Great Clips<sup className="text-[9px] ml-0.5 font-normal">®</sup> app</h4>
              </div>
            </div>

            {/* Social Icons with Hover state as per image */}
            <div className="flex gap-4 items-center mb-6">
              {[
                { icon: <XIcon />, label: 'X' },
                { icon: <FacebookIcon />, label: 'FB' },
                { icon: <InstagramIcon />, label: 'IG' },
                { icon: <YoutubeIcon />, label: 'YT' }
              ].map((social, idx) => (
                <div 
                  key={idx}
                  className="group w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-[#006A52] hover:border-[#006A52]"
                >
                  <div className="text-[#006A52] group-hover:text-white transition-colors duration-300 flex items-center justify-center">
                    {social.icon}
                  </div>
                </div>
              ))}
              <div className="group w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-[#006A52] hover:border-[#006A52]">
                <span className="text-[12px] font-black text-[#006A52] group-hover:text-white transition-colors duration-300">P</span>
              </div>
            </div>
            
            <p className="text-[12px] text-gray-900 font-bold">
              © 2026 Great Clips, Inc. All rights reserved.
            </p>
          </div>

          {/* Right: Site Map Columns */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10">
            {[
              {
                title: 'About',
                links: ['Overview', 'Leadership', 'Blog', 'Giving', 'Latest News']
              },
              {
                title: 'Opportunities',
                links: [
                  { name: 'Salon Careers', ext: true },
                  { name: 'Corporate Careers', ext: true },
                  { name: 'Franchising', ext: true },
                  { name: 'Real Estate', ext: false }
                ]
              },
              {
                title: 'Support',
                links: ['Customer Service', 'Check Gift Card Balance']
              },
              {
                title: 'Legal',
                links: ['Terms of Use', 'Privacy Notice', 'Accessibility Notice', 'Your Privacy Choices', 'Gift Card Terms']
              }
            ].map((section, idx) => (
              <div key={idx} className="flex flex-col">
                <h5 className="font-black text-[16px] mb-6 tracking-tight" style={{ color: brandGreen }}>
                  {section.title}
                </h5>
                <ul className="space-y-4">
                  {section.links.map((link, lIdx) => {
                    const isObj = typeof link === 'object';
                    const name = isObj ? link.name : link;
                    return (
                      <li 
                        key={lIdx} 
                        className="group flex items-center gap-1.5 text-[14px] font-bold text-gray-900 cursor-pointer w-fit"
                      >
                        <span className="relative transition-colors duration-300 group-hover:text-[#006A52]">
                          {name}
                          <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#006A52] transition-all duration-300 group-hover:w-full"></span>
                        </span>
                        {isObj && link.ext && (
                          <ExternalLink size={14} className="text-gray-300 group-hover:text-[#006A52] transition-colors" />
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Disclaimer & Links */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-[11px] text-gray-400 max-w-2xl">
              Great Clips salons are independently owned and operated franchises.
            </p>
            <div className="flex gap-6 text-[12px] font-bold text-gray-700">
                <span className="hover:text-[#006A52] cursor-pointer transition-colors border-b-2 border-transparent hover:border-[#006A52]">Sitemap</span>
                <span className="hover:text-[#006A52] cursor-pointer transition-colors border-b-2 border-transparent hover:border-[#006A52]">Contact Us</span>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;