import React from 'react';
import { Home, Coffee, BookOpen, User, Plus } from 'lucide-react';

const NavbarItem = ({ id, label, icon: Icon, currentPage, onNavigate }) => {
  const isActive = currentPage === id;
  const activeClass = 'text-[#D25045] scale-110'; 
  const inactiveClass = 'text-[#1F3F49]/60 hover:text-[#D25045]';

  return (
    <button
      key={id}
      onClick={() => onNavigate(id)}
      className={`flex flex-col items-center py-2 px-1 transition-all duration-300 ${isActive ? activeClass : inactiveClass}`}
    >
      <Icon size={24} strokeWidth={isActive ? 2.5 : 1.5} className="mb-1" />
      {isActive && <span className="w-1 h-1 bg-[#D25045] rounded-full mt-1 animate-bounce"></span>}
    </button>
  );
};

const MobileNavbar = ({ currentPage, onNavigate, onCreateSpot }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'kafe', label: 'Cafe', icon: Coffee },
    { id: 'perpustakaan', label: 'Library', icon: BookOpen },
    { id: 'profile', label: 'Profile', icon: User },
  ];

  return (
    <>
      <button
        onClick={onCreateSpot}
        className="md:hidden fixed bottom-24 right-5 z-50 w-14 h-14 bg-[#1F3F49] text-white rounded-2xl shadow-xl shadow-[#1F3F49]/30 hover:bg-[#162e36] transition-all active:scale-95 flex items-center justify-center"
      >
        <Plus className="w-7 h-7" />
      </button>

      <nav className="md:hidden fixed bottom-6 left-4 right-4 bg-white/90 backdrop-blur-xl border border-[#F38843]/20 rounded-3xl px-6 py-3 z-50 shadow-2xl shadow-[#1F3F49]/10 flex justify-between items-center">
        {navItems.map((item) => (
            <NavbarItem key={item.id} {...item} currentPage={currentPage} onNavigate={onNavigate} />
        ))}
      </nav>
    </>
  );
};

export default MobileNavbar;
