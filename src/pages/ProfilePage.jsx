import React, { useState } from 'react';
import { Camera, Edit } from 'lucide-react';

const ProfilePage = ({ userProfile, onUpdateProfile, totalReviews, totalFavorites }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(userProfile);

  const handleSave = (e) => {
      e.preventDefault();
      onUpdateProfile(formData);
      setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-[#F8EDED] pb-24 md:pb-12 pt-10">
      <div className="max-w-md mx-auto px-6">
        <h1 className="text-3xl font-black text-[#1F3F49] mb-8 tracking-tight">My Profile<span className="text-[#D25045]">.</span></h1>

        <div className="bg-white rounded-[2rem] shadow-xl shadow-[#1F3F49]/5 p-8 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-24 bg-[#1F3F49]"></div>
          
          <div className="relative mb-6 mt-8 inline-block">
            <div className="w-32 h-32 rounded-full overflow-hidden border-[6px] border-white shadow-lg mx-auto bg-slate-200">
               <img src={isEditing ? formData.avatar : userProfile.avatar} className="w-full h-full object-cover" />
            </div>
            {isEditing && (
                <div className="absolute bottom-2 right-0 bg-[#D25045] text-white p-2 rounded-full cursor-pointer hover:bg-[#b03e34]">
                    <Camera size={16} />
                </div>
            )}
          </div>

          {isEditing ? (
              <form onSubmit={handleSave} className="space-y-4 text-left">
                  <div>
                      <label className="text-xs font-bold text-[#1F3F49]/50 uppercase">Display Name</label>
                      <input 
                        type="text" 
                        value={formData.name} 
                        onChange={e => setFormData({...formData, name: e.target.value})}
                        className="w-full p-3 bg-[#F8EDED] rounded-xl border border-[#1F3F49]/10 font-bold text-[#1F3F49] focus:ring-2 focus:ring-[#D25045]"
                      />
                  </div>
                  <div>
                      <label className="text-xs font-bold text-[#1F3F49]/50 uppercase">Bio (Status)</label>
                      <input 
                        type="text" 
                        value={formData.bio} 
                        onChange={e => setFormData({...formData, bio: e.target.value})}
                        className="w-full p-3 bg-[#F8EDED] rounded-xl border border-[#1F3F49]/10 text-sm text-[#1F3F49]/80 focus:ring-2 focus:ring-[#D25045]"
                        placeholder="Student | Coffee Enthusiast"
                      />
                  </div>
                  <div>
                      <label className="text-xs font-bold text-[#1F3F49]/50 uppercase">Photo URL</label>
                      <input 
                        type="text" 
                        value={formData.avatar} 
                        onChange={e => setFormData({...formData, avatar: e.target.value})}
                        className="w-full p-3 bg-[#F8EDED] rounded-xl border border-[#1F3F49]/10 text-sm text-[#1F3F49]/80 focus:ring-2 focus:ring-[#D25045]"
                      />
                  </div>
                  <div className="flex gap-2 mt-4">
                      <button type="button" onClick={() => setIsEditing(false)} className="flex-1 py-3 rounded-xl font-bold text-[#1F3F49]/60 hover:bg-[#F8EDED]">Cancel</button>
                      <button type="submit" className="flex-1 py-3 bg-[#1F3F49] text-white rounded-xl font-bold shadow-lg hover:bg-black">Save</button>
                  </div>
              </form>
          ) : (
              <>
                <h2 className="text-2xl font-black text-[#1F3F49] mb-1">{userProfile.name}</h2>
                <p className="text-[#1F3F49]/70 font-medium mb-8">{userProfile.bio}</p>
                
                <div className="grid grid-cols-2 gap-4 text-left mb-8">
                     <div className="bg-[#F8EDED] p-4 rounded-2xl border border-[#1F3F49]/5">
                         <div className="text-2xl font-black text-[#D25045]">{totalReviews}</div>
                         <div className="text-xs font-bold text-[#1F3F49]/50 uppercase">Total Reviews</div>
                     </div>
                     <div className="bg-[#F8EDED] p-4 rounded-2xl border border-[#1F3F49]/5">
                         <div className="text-2xl font-black text-[#F38843]">{totalFavorites}</div>
                         <div className="text-xs font-bold text-[#1F3F49]/50 uppercase">My Favorites</div>
                     </div>
                </div>

                <button 
                    onClick={() => setIsEditing(true)}
                    className="w-full py-4 rounded-xl font-bold text-[#1F3F49] border-2 border-[#1F3F49]/10 hover:border-[#D25045] hover:text-[#D25045] transition-all flex items-center justify-center gap-2"
                >
                    <Edit size={18} /> Edit Profile
                </button>
              </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
