import React, { useState, useEffect } from 'react';
import { ArrowLeft, Loader, Check } from 'lucide-react';

const SpotFormPage = ({ mode, onBack, onSuccess, spotId, spots }) => {
    const isEdit = mode === 'edit';
    const [formData, setFormData] = useState({ name: '', category: 'kafe', address: '' });
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        if(isEdit && spotId) {
            const s = spots.find(x => x.id === spotId);
            if(s) setFormData({ name: s.name, category: s.category, address: s.address });
        }
    }, [isEdit, spotId, spots]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            onSuccess({ id: spotId || `new-${Date.now()}`, ...formData, rating: 0, reviewCount: 0, reviews: [] });
        }, 1000);
    };

    return (
        <div className="min-h-screen bg-[#F8EDED] pb-20 pt-6 px-4">
             <div className="max-w-2xl mx-auto bg-white rounded-3xl p-8 shadow-xl">
                 <div className="flex items-center gap-4 mb-8">
                     <button onClick={onBack} className="p-2 bg-[#F8EDED] rounded-full hover:bg-slate-200"><ArrowLeft size={20}/></button>
                     <h1 className="text-2xl font-black text-[#1F3F49]">{isEdit ? 'Edit Spot' : 'Add New Spot'}</h1>
                 </div>
                 <form onSubmit={handleSubmit} className="space-y-6">
                     <div>
                         <label className="font-bold text-[#1F3F49] block mb-2">Spot Name</label>
                         <input required type="text" value={formData.name} onChange={e=>setFormData({...formData, name: e.target.value})} className="w-full p-4 bg-[#F8EDED] rounded-xl border border-[#1F3F49]/10 focus:ring-2 focus:ring-[#D25045]" placeholder="e.g. Ka.Ma Coffee"/>
                     </div>
                     <div className="grid grid-cols-1 gap-4">
                         <div>
                            <label className="font-bold text-[#1F3F49] block mb-2">Category</label>
                            <select value={formData.category} onChange={e=>setFormData({...formData, category: e.target.value})} className="w-full p-4 bg-[#F8EDED] rounded-xl border border-[#1F3F49]/10">
                                <option value="kafe">Indoor/Cafe</option>
                                <option value="perpustakaan">Outdoor/Library</option>
                            </select>
                         </div>
                     </div>
                     <div>
                         <label className="font-bold text-[#1F3F49] block mb-2">Address</label>
                         <input required type="text" value={formData.address} onChange={e=>setFormData({...formData, address: e.target.value})} className="w-full p-4 bg-[#F8EDED] rounded-xl border border-[#1F3F49]/10 focus:ring-2 focus:ring-[#D25045]" placeholder="Short address"/>
                     </div>
                     <button disabled={loading} className="w-full py-4 bg-[#1F3F49] text-white rounded-xl font-bold hover:bg-black shadow-lg flex justify-center items-center gap-2">
                         {loading ? <Loader className="animate-spin"/> : <><Check size={20}/> Save Spot</>}
                     </button>
                 </form>
             </div>
        </div>
    )
}

export default SpotFormPage;
