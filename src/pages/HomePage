import React from 'react';
import { Sparkles, Coffee, BookOpen, Quote, ArrowLeft } from 'lucide-react';
import SpotCard from '../components/SpotCard';

const HomePage = ({ onNavigate, spots, onSpotClick, favorites }) => {
  
  const kafeSpots = spots.filter(s => s.category === 'kafe').slice(0, 3);
  const perpusSpots = spots.filter(s => s.category === 'perpustakaan').slice(0, 2);

  const renderSection = (title, data, category) => {
    return (
      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-black tracking-tight text-[#1F3F49] flex items-center gap-2">
            {title} <span className="text-[#D25045] text-4xl">.</span>
          </h2>
          <button
            onClick={() => onNavigate(category)}
            className="text-[#1F3F49]/40 hover:text-[#D25045] font-bold text-xs uppercase tracking-widest transition-colors"
          >
            View All
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.map((spot) => (
            <SpotCard key={spot.id} spot={spot} onClick={onSpotClick} isFavorite={favorites.includes(spot.id)} />
          ))}
        </div>
      </section>
    );
  };

  return (
    <div className="min-h-screen bg-[#F8EDED] pb-24 md:pb-12 font-[Poppins]">
      {/* Hero Section */}
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

      {/* Content */}
      <main className="max-w-7xl mx-auto px-6 -mt-24 relative z-20 space-y-12">
        {/* Quotes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#1F3F49] text-white p-8 rounded-[2.5rem] shadow-xl transform hover:-rotate-2 transition-transform duration-300">
                <Quote size={40} className="text-[#F38843] mb-4 opacity-80" />
                <p className="text-xl font-bold leading-relaxed">"Definisi produktif: Pesen kopi 1, numpang wifi 5 jam, story IG 10 kali."</p>
            </div>
            <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-[#F38843]/20 transform hover:rotate-2 transition-transform duration-300">
                <Quote size={40} className="text-[#D25045] mb-4" />
                <p className="text-xl font-bold text-[#1F3F49] leading-relaxed">"Skripsi itu dikerjain, bukan dipikirin. Tapi mikirin tempat ngerjainnya itu nomer satu."</p>
            </div>
            <div className="bg-[#D25045] text-white p-8 rounded-[2.5rem] shadow-xl transform hover:-rotate-1 transition-transform duration-300">
                <Quote size={40} className="text-[#F8EDED] mb-4 opacity-60" />
                <p className="text-xl font-bold leading-relaxed">"Ke perpus niatnya baca buku, realitanya numpang tidur kena AC dingin."</p>
            </div>
        </div>

        {renderSection("Trending Cafes", kafeSpots, 'kafe')}
        {renderSection("Open Spaces", perpusSpots, 'perpustakaan')}

        <div className="text-center py-12">
            <p className="text-[#1F3F49]/50 font-bold mb-4 uppercase tracking-widest text-sm">Ready to Focus?</p>
            <h3 className="text-3xl font-black text-[#1F3F49] mb-8">Jangan Wacana Doang.</h3>
            <button 
              onClick={() => onNavigate('kafe')}
              className="inline-flex items-center gap-2 px-10 py-5 bg-[#F38843] text-white rounded-full font-bold shadow-2xl hover:bg-[#d6702e] transition-all hover:-translate-y-1"
            >
              Cari Spot Sekarang <ArrowLeft className="rotate-180" />
            </button>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
