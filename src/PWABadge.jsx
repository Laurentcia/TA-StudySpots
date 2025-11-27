import React, { useState, useEffect } from 'react';

// Simplified version without 'virtual:pwa-register/react' dependency for preview stability
function PWABadge() {
  const [needRefresh, setNeedRefresh] = useState(false);
  const [offlineReady, setOfflineReady] = useState(false);

  // In a real Vite PWA environment, you would use useRegisterSW hook.
  // For this preview/demo, we'll simulate the UI or keep it hidden if not relevant.
  // To make it functional in your local project, uncomment the code below and install 'vite-plugin-pwa'.

  /*
  import { useRegisterSW } from 'virtual:pwa-register/react'
  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegisteredSW(swUrl, r) {
      console.log('SW Registered: ' + swUrl)
    },
    onRegisterError(error) {
      console.log('SW registration error', error)
    },
  })
  */

  // Mock functions for demonstration so the UI renders without crashing
  const close = () => {
    setOfflineReady(false);
    setNeedRefresh(false);
  };

  const updateServiceWorker = (reloadPage) => {
    console.log("Updating service worker...");
    if (reloadPage) {
        window.location.reload();
    }
  };

  // Only render if there's something to show
  if (!offlineReady && !needRefresh) {
      return null; 
  }

  return (
    <div className="fixed bottom-4 right-4 z-50" role="alert">
      <div className="bg-[#1F3F49] text-white p-4 rounded-xl shadow-2xl flex flex-col gap-2 border border-[#F38843]/50 animate-bounce">
        <div className="font-bold text-sm">
          {offlineReady ? (
            <span>Aplikasi siap digunakan offline!</span>
          ) : (
            <span>Konten baru tersedia, klik reload untuk update.</span>
          )}
        </div>
        <div className="flex gap-2 justify-end">
          {needRefresh && (
            <button 
              className="px-3 py-1 bg-[#D25045] rounded-lg text-xs font-bold hover:bg-red-600 transition-colors" 
              onClick={() => updateServiceWorker(true)}
            >
              Reload
            </button>
          )}
          <button 
              className="px-3 py-1 border border-white/30 rounded-lg text-xs hover:bg-white/10 transition-colors" 
              onClick={() => close()}
          >
              Tutup
          </button>
        </div>
      </div>
    </div>
  )
}

export default PWABadge
