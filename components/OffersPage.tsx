'use client';

import { useState } from 'react';
import Header from './Header';
import BottomNavigation from './BottomNavigation';
import OffersContent from './OffersContent';

export default function OffersPage() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1 pb-20 md:pb-8">
        <OffersContent isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} />
      </main>
      <BottomNavigation isSignedIn={isSignedIn} />
    </div>
  );
}

