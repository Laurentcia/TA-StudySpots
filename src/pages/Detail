import React, { useState } from 'react';
import { ArrowLeft, Edit, MapPin, Star, TrendingUp, User, Wifi, Send, Heart } from 'lucide-react';

const SpotDetailPage = ({ spot, onBack, onEdit, onAddReview, onToggleFavorite, isFavorite }) => {
  const [userRating, setUserRating] = useState(0);
  const [userComment, setUserComment] = useState('');

  if (!spot) return <div className="h-screen flex items-center justify-center text-[#1F3F49]">Spot Not Found</div>;

  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (userRating === 0) return alert("Please select a rating!");
    onAddReview(spot.id, { rating: userRating, text: userComment });
    setUserRating(0);
    setUserComment('');
  };

  const isKafe = spot.category === 'kafe';

  return (
    <div className="min-h-screen bg-[#F8EDED] pb-20 font-[Poppins]">
      <div className="relative h-[40vh] w-full">
         <img src={spot.image_url} className="w-full h-full object-cover" onError={(e) => e.target.src=`https://placehold.co/800x600?text=${spot.name}`} />
         <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#F8EDED]"></div>
         <button onClick={onBack} className="absolute top-6 left-6 bg-white/20 backdrop-blur-md p-3 rounded-full text-white hover:bg-white/40 transition-all">
            <ArrowLeft size={24} />
         </button>
         
         <button 
            onClick={() => onToggleFavorite(spot.id)}
            className={`absolute top-6 right-6 p-3 rounded-full transition-all shadow-lg ${isFavorite ? 'bg-[#D25045] text-white scale-110' : 'bg-white/30 backdrop-blur-md text-white hover:bg-white/50'}`}
         >
            <Heart size={24} fill={isFavorite ? "currentColor" : "none"} />
         </button>
      </div>

      <main className="max-w-5xl mx-auto px-6 -mt-20 relative z-10">
        <div className="bg-white rounded-[2.5rem] p-8 shadow-2xl shadow-[#1F3F49]/10">
           <div className="flex justify-between items-start mb-6">
                <div>
                    <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#1F3F49] bg-${isKafe ? '[#FFF47D]' : '[#F38843]/20'} mb-3 inline-block`}>
                        {isKafe ? 'Cafe' : 'Library'}
                    </span>
                    <h1 className="text-3xl md:text-5xl font-black text-[#1F3F49] leading-tight mb-2">{spot.name}</h1>
                    <p className="text-[#1F3F49]/60 font-medium flex items-center gap-2"><MapPin size={16} /> {spot.address}</p>
                </div>
                <button onClick={() => onEdit(spot.id)} className="p-3 bg-[#F8EDED] rounded-2xl hover:bg-[#e8d8d8] text-[#1F3F49]">
                    <Edit size={20} />
                </button>
           </div>

           <p className="text-lg text-[#1F3F49] leading-relaxed font-medium mb-10 border-l-4 border-[#F38843] pl-4 italic">
             {spot.description}
           </p>

           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {[
                  { label: 'Rating', val: spot.rating > 0 ? spot.rating.toFixed(1) : '-', icon: Star, color: 'text-yellow-500' },
                  { label: 'Reviews', val: spot.reviewCount, icon: TrendingUp, color: 'text-[#D25045]' },
                  { label: 'Seats', val: spot.servings, icon: User, color: 'text-[#F38843]' },
                  { label: 'Vibe', val: 'Chill', icon: Wifi, color: 'text-[#1F3F49]' }
              ].map((s, i) => (
                  <div key={i} className="bg-[#F8EDED] p-4 rounded-2xl text-center border border-[#1F3F49]/5">
                      <s.icon className={`mx-auto mb-2 ${s.color}`} size={24} />
                      <div className="font-bold text-[#1F3F49] text-lg capitalize">{s.val}</div>
                      <div className="text-xs text-[#1F3F49]/50 font-bold uppercase tracking-wider">{s.label}</div>
                  </div>
              ))}
           </div>

           <div className="mt-12 pt-10 border-t border-[#F8EDED]">
               <h2 className="text-2xl font-bold text-[#1F3F49] mb-6">Reviews & Vibes</h2>
               
               <div className="bg-[#F8EDED]/50 p-6 rounded-3xl mb-8 border border-[#1F3F49]/5">
                   <h3 className="text-sm font-bold text-[#1F3F49]/50 uppercase tracking-wider mb-4">Drop a Review</h3>
                   <div className="flex gap-2 mb-4">
                       {[1,2,3,4,5].map(star => (
                           <button key={star} onClick={() => setUserRating(star)} className={`${star <= userRating ? 'text-yellow-500 scale-110' : 'text-slate-300'} transition-all`}>
                               <Star size={28} fill="currentColor" />
                           </button>
                       ))}
                   </div>
                   <div className="relative">
                       <textarea 
                          value={userComment}
                          onChange={(e) => setUserComment(e.target.value)}
                          placeholder="How's the wifi? Good for nugas?"
                          className="w-full p-4 rounded-xl border border-[#1F3F49]/10 focus:ring-2 focus:ring-[#D25045]/20 focus:border-[#D25045] outline-none text-[#1F3F49] bg-white"
                          rows="3"
                       />
                       <button 
                          onClick={handleSubmitReview}
                          className="absolute bottom-3 right-3 bg-[#1F3F49] text-white p-2 rounded-lg hover:bg-black transition-colors shadow-lg"
                       >
                           <Send size={18} />
                       </button>
                   </div>
               </div>

               <div className="space-y-4">
                   {spot.reviews && spot.reviews.length > 0 ? (
                       spot.reviews.map((review, idx) => (
                           <div key={idx} className="flex gap-4 p-4 border-b border-[#F8EDED] last:border-0 animate-in slide-in-from-bottom-2 fade-in duration-500">
                               <div className="w-10 h-10 bg-[#F38843] rounded-full flex items-center justify-center text-white font-bold shrink-0">
                                   {review.user.charAt(0)}
                               </div>
                               <div>
                                   <div className="flex items-center gap-2 mb-1">
                                       <span className="font-bold text-[#1F3F49]">{review.user}</span>
                                       <span className="text-xs text-[#1F3F49]/50">• {review.date}</span>
                                   </div>
                                   <div className="flex text-yellow-500 mb-1">
                                       {[...Array(review.rating)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                                   </div>
                                   <p className="text-[#1F3F49]/80 text-sm leading-relaxed">{review.text}</p>
                               </div>
                           </div>
                       ))
                   ) : (
                       <p className="text-[#1F3F49]/40 italic text-center py-4">No reviews yet. Be the first!</p>
                   )}
               </div>
           </div>
        </div>
      </main>
    </div>
  );
};

export default SpotDetailPage;
