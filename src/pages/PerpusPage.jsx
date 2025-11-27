import React, { useState } from 'react';
import { MapPin, Loader } from 'lucide-react';
import SpotCard from '../components/SpotCard';

const PerpusPage = ({ spots, onSpotClick, favorites }) => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredSpots = spots.filter(spot => {
      return spot.category === 'perpustakaan' && spot.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div className="min-h-screen bg-[#F8EDED] pb-24 md:pb-12 pt-10">
      <main className="max-w-7xl mx-auto px-6">
        <div className="mb-10">
          <h1 className="text-4xl md:text-6xl font-black text-[#1F3F49] tracking-tighter mb-2">Library & Parks<span className="text-[#D25045]">.</span></h1>
          <p className="text-[#1F3F49]/60 font-medium">Quiet places for deep focus.</p>
        </div>

        <div className="mb-10 relative">
            <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Library..."
                className="w-full pl-12 pr-4 py-4 border-none rounded-2xl bg-white shadow-xl shadow-[#1F3F49]/5 focus:ring-4 focus:ring-[#D25045]/20 text-[#1F3F49] font-medium placeholder-[#1F3F49]/40"
            />
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#1F3F49]/40">
                <MapPin size={20} />
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredSpots.map((spot) => (
            <SpotCard key={spot.id} spot={spot} onClick={onSpotClick} isFavorite={favorites.includes(spot.id)} />
            ))}
        </div>
        {filteredSpots.length === 0 && <div className="text-center text-[#1F3F49]/40 py-10">No spots found.</div>}
      </main>
    </div>
  );
};

export default PerpusPage;
