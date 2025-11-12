'use client';

import { useState } from 'react';
import TabNavigation from './TabNavigation';
import SitewideCoupons from './SitewideCoupons';
import BonusGiftCards from './BonusGiftCards';
import PaymentOffers from './PaymentOffers';
import SuccessToast from './SuccessToast';

interface OffersContentProps {
  isSignedIn: boolean;
  setIsSignedIn: (value: boolean) => void;
}

export default function OffersContent({ isSignedIn, setIsSignedIn }: OffersContentProps) {
  const [activeTab, setActiveTab] = useState<'coupons' | 'giftcards' | 'payment'>('coupons');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const showSuccessMessage = (message: string) => {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleSignIn = () => {
    setIsSignedIn(true);
    showSuccessMessage('Successfully signed in!');
  };

  return (
    <div className="pb-4 max-w-7xl mx-auto">
      <SuccessToast message={toastMessage} show={showToast} />
      
      {/* Offers Header */}
      <div className="px-4 md:px-6 lg:px-8 py-8 md:py-10 bg-gradient-to-b from-white to-gray-50/30">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">Offers</h1>
        {!isSignedIn && (
          <>
            <p className="text-gray-600 text-base md:text-lg mb-6 font-medium">
              Sign in to unlock exclusive additional rewards
            </p>
            <button
              onClick={handleSignIn}
              className="w-full md:w-auto bg-[#b66642] text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-[#a45939] transition-all duration-300 text-base md:text-lg shadow-md hover:shadow-lg"
            >
              Sign in
            </button>
          </>
        )}
        {isSignedIn && (
          <p className="text-gray-600 text-base md:text-lg font-medium">
            Book directly with us to get exclusive benefits
          </p>
        )}
      </div>

      {/* Tab Navigation */}
      <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* All Sections on Same Page */}
      <div className="px-4 md:px-6 lg:px-8 xl:px-12 mt-6 md:mt-8 lg:mt-10 space-y-10 md:space-y-12 lg:space-y-16">
        {/* Coupons Section */}
        <section id="coupons" className="scroll-mt-24 md:scroll-mt-28">
          <SitewideCoupons showSuccessMessage={showSuccessMessage} />
        </section>

        {/* Gift Cards Section */}
        <section id="giftcards" className="scroll-mt-24 md:scroll-mt-28">
          <h2 className="font-bold text-gray-900 text-lg md:text-xl mb-5 md:mb-6 tracking-tight">Bonus gift cards:</h2>
          <BonusGiftCards
            isSignedIn={isSignedIn}
            showSuccessMessage={showSuccessMessage}
          />
        </section>

        {/* Payment Offers Section */}
        <section id="payment" className="scroll-mt-24 md:scroll-mt-28">
          <h2 className="font-bold text-gray-900 text-lg md:text-xl mb-5 md:mb-6 tracking-tight">Payment offers:</h2>
          <PaymentOffers
            isSignedIn={isSignedIn}
            showSuccessMessage={showSuccessMessage}
          />
        </section>
      </div>
    </div>
  );
}

