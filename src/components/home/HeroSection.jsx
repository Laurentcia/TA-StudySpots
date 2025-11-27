import React from 'react';
import { Sparkles, Coffee, BookOpen } from 'lucide-react';

const HeroSection = ({ onNavigate }) => {
  return (
    <header className="relative pt-32 pb-48 overflow-hidden px-6">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F38843]/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#D25045]/10 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4"></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-block px-4 py-2 bg-white/60 backdrop-blur-md rounded-full border border-[#1F3F49]/10 mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="text-sm font-bold tracking-widest uppercase text-[#1F3F49] flex items-center gap-2">
                <Sparkles size={16} className="text-[#D25045]" /> StudySpots Era
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-6 animate-in fade-in slide-in-from-bottom-6 duration-1000 text-[#1F3F49]">
            Rise,<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D25045] to-[#F38843]">Shine, Repeat.</span>
          </h1>
          <p className="text-xl text-[#1F3F49]/70 font-medium max-w-2xl mx-auto mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            Tempat nongkrong estetik buat kamu yang mau produktif tanpa gangguan. Cari spot, pesan kopi, fokus.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
            <button 
              onClick={() => onNavigate('kafe')}
              className="px-8 py-4 bg-[#1F3F49] text-white rounded-2xl font-black shadow-xl shadow-[#1F3F49]/20 hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-2"
            >
              <Coffee size={20} /> Cari Kafe
            </button>
            <button 
              onClick={() => onNavigate('perpustakaan')}
              className="px-8 py-4 bg-white text-[#1F3F49] rounded-2xl font-black shadow-xl shadow-[#1F3F49]/5 hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-2 border-2 border-[#1F3F49]/5 hover:border-[#1F3F49]/20"
            >
              <BookOpen size={20} /> Cari Perpus
            </button>
          </div>
        </div>
      </header>
  );
};

export default HeroSection;
