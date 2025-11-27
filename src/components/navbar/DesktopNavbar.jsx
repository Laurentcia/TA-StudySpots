import React from 'react';
import { Coffee, BookOpen, MapPin, Heart, Star } from 'lucide-react';

const getCategoryIcon = (category) => {
  if (category === 'kafe') return Coffee;
  if (category === 'perpustakaan') return BookOpen;
  return MapPin;
};

const getCategoryColor = (category) => {
  if (category === 'kafe') return 'bg-[#F38843] text-white border-[#F38843]'; // Orange
  if (category === 'perpustakaan') return 'bg-[#1F3F49] text-white border-[#1F3F49]'; // Dark Teal
  return 'bg-slate-100 text-slate-700';
};

const SpotCard = ({ spot, onClick, isFavorite }) => {
  const CategoryIcon = getCategoryIcon(spot.category);
  const categoryColorClass = getCategoryColor(spot.category);
  const primaryIconColor = spot.category === 'kafe' ? 'text-[#D25045]' : 'text-[#1F3F49]';

  return (
    <div
      onClick={() => onClick(spot.id, spot.category)}
      className="relative bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl border border-[#F38843]/20 cursor-pointer transition-all duration-300 hover:-translate-y-1 group"
    >
      <div className="relative h-44 overflow-hidden bg-[#F8EDED]">
        <img
          src={spot.image_url}
          alt={spot.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          onError={(e) => e.target.src = `https://placehold.co/800x600/1F3F49/FFFFFF?text=${spot.name.replace(/\s/g, '+')}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
        
        {isFavorite && (
            <div className="absolute top-3 right-3 bg-[#D25045] p-2 rounded-full shadow-md animate-in fade-in zoom-in">
                <Heart size={14} className="text-white fill-current" />
            </div>
        )}

        <div className="absolute bottom-3 left-4 text-white">
            <div className="flex items-center gap-1 text-[#FFF47D] mb-1">
                <Star size={14} fill="currentColor" />
                <span className="text-sm font-bold text-white">{spot.rating > 0 ? spot.rating.toFixed(1) : 'New'}</span>
            </div>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between mb-3">
          <span className={`text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full ${categoryColorClass}`}>
            <CategoryIcon size={12} className="inline mr-1 -mt-0.5" />
            {spot.category === 'kafe' ? 'Indoor / Cafe' : 'Outdoor / Library'}
          </span>
        </div>

        <h3 className="font-bold text-[#1F3F49] text-lg leading-tight mb-3 group-hover:text-[#D25045] transition-colors">
          {spot.name}
        </h3>

        <div className="flex items-center justify-between text-xs text-slate-500 border-t border-slate-100 pt-3 mt-auto">
          <div className="flex items-center space-x-1">
            <MapPin size={14} className={primaryIconColor} />
            <span className="font-medium truncate max-w-[120px]">{spot.address.split(',')[0]}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpotCard;
