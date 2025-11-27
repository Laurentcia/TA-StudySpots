import React, { useState } from 'react';
import DesktopNavbar from './components/navbar/DesktopNavbar';
import MobileNavbar from './components/navbar/MobileNavbar';
import HomePage from './pages/HomePage';
import KafePage from './pages/KafePage';
import PerpusPage from './pages/PerpusPage';
import SpotDetailPage from './pages/SpotDetailPage';
import SpotFormPage from './pages/SpotFormPage';
import ProfilePage from './pages/ProfilePage';
import { INITIAL_SPOTS } from './data/spots';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [mode, setMode] = useState('list'); 
  const [selectedSpotId, setSelectedSpotId] = useState(null);
  const [editingSpotId, setEditingSpotId] = useState(null);
  
  // STATE TERPUSAT (Centralized State)
  const [spots, setSpots] = useState(INITIAL_SPOTS);
  const [favorites, setFavorites] = useState([]); // Array ID spot yang difavoritkan
  const [userProfile, setUserProfile] = useState({
      name: "Praktikan PPB",
      bio: "Student | Coffee Enthusiast",
      avatar: "https://placehold.co/400x400/D25045/FFFFFF?text=User"
  });
  const [totalUserReviews, setTotalUserReviews] = useState(0);

  const handleNavigation = (page) => { setCurrentPage(page); setMode('list'); setSelectedSpotId(null); setEditingSpotId(null); };
  const handleSpotClick = (spotId) => { setSelectedSpotId(spotId); setMode('detail'); };
  const handleCreateSpot = () => { setMode('create'); };
  const handleEditSpot = (spotId) => { setEditingSpotId(spotId); setMode('edit'); };
  const handleBack = () => { setMode('list'); setSelectedSpotId(null); setEditingSpotId(null); };
  
  // Update Spot (Create/Edit simulation)
  const handleSuccess = (newSpot) => { 
      // In real app, call API here. For now, simple update local state
      setSpots(prev => {
          const exists = prev.find(s => s.id === newSpot.id);
          if(exists) return prev.map(s => s.id === newSpot.id ? { ...s, ...newSpot } : s);
          return [newSpot, ...prev];
      });
      setMode('list'); 
      handleNavigation(newSpot.category); 
  };

  // Add Review Logic
  const handleAddReview = (spotId, reviewData) => {
      const newReview = {
          id: Date.now(),
          user: userProfile.name,
          rating: reviewData.rating,
          text: reviewData.text,
          date: "Just now"
      };

      setSpots(prevSpots => prevSpots.map(spot => {
          if (spot.id === spotId) {
              const updatedReviews = [newReview, ...spot.reviews];
              const newAvgRating = updatedReviews.reduce((acc, r) => acc + r.rating, 0) / updatedReviews.length;
              return {
                  ...spot,
                  reviews: updatedReviews,
                  reviewCount: updatedReviews.length,
                  rating: newAvgRating
              };
          }
          return spot;
      }));
      setTotalUserReviews(prev => prev + 1);
  };

  // Toggle Favorite Logic
  const handleToggleFavorite = (spotId) => {
      setFavorites(prev => {
          if (prev.includes(spotId)) return prev.filter(id => id !== spotId);
          return [...prev, spotId];
      });
  };

  // Update Profile Logic
  const handleUpdateProfile = (updatedData) => {
      setUserProfile(updatedData);
  };

  const renderCurrentPage = () => {
    if (mode === 'create') return <SpotFormPage mode="create" onBack={handleBack} onSuccess={handleSuccess} spots={spots} />;
    if (mode === 'edit') return <SpotFormPage mode="edit" onBack={handleBack} onSuccess={handleSuccess} spotId={editingSpotId} spots={spots} />;
    
    if (mode === 'detail') {
        const spot = spots.find(s => s.id === selectedSpotId);
        return <SpotDetailPage 
                  spot={spot} 
                  onBack={handleBack} 
                  onEdit={handleEditSpot} 
                  onAddReview={handleAddReview}
                  onToggleFavorite={handleToggleFavorite}
                  isFavorite={favorites.includes(selectedSpotId)}
               />;
    }

    switch (currentPage) {
      case 'kafe': return <KafePage spots={spots} onSpotClick={handleSpotClick} favorites={favorites} />;
      case 'perpustakaan': return <PerpusPage spots={spots} onSpotClick={handleSpotClick} favorites={favorites} />;
      case 'profile': return <ProfilePage 
                                userProfile={userProfile} 
                                onUpdateProfile={handleUpdateProfile} 
                                totalReviews={totalUserReviews}
                                totalFavorites={favorites.length}
                             />;
      default: return <HomePage onNavigate={handleNavigation} spots={spots} onSpotClick={handleSpotClick} favorites={favorites} />;
    }
  };

  const showNavbar = mode === 'list';

  return (
    <div className="min-h-screen bg-[#F8EDED] font-[Poppins] text-[#1F3F49]">
      {showNavbar && (
        <>
          <DesktopNavbar currentPage={currentPage} onNavigate={handleNavigation} onCreateSpot={handleCreateSpot} />
          <MobileNavbar currentPage={currentPage} onNavigate={handleNavigation} onCreateSpot={handleCreateSpot} />
        </>
      )}
      <main>{renderCurrentPage()}</main>
    </div>
  );
}
