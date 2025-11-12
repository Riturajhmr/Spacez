'use client';

import { useEffect, useState } from 'react';

interface TabNavigationProps {
  activeTab: 'coupons' | 'giftcards' | 'payment';
  setActiveTab: (tab: 'coupons' | 'giftcards' | 'payment') => void;
}

export default function TabNavigation({ activeTab, setActiveTab }: TabNavigationProps) {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
      
      // Scroll spy - detect which section is in view
      const sections = ['coupons', 'giftcards', 'payment'];
      const scrollPosition = window.scrollY + 150; // Offset for header

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveTab(sections[i] as 'coupons' | 'giftcards' | 'payment');
          break;
        }
      }
    };

    // Check initial scroll position
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setActiveTab]);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const headerOffset = 120;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const tabs = [
    { id: 'coupons' as const, label: 'Coupons' },
    { id: 'giftcards' as const, label: 'Giftcards' },
    { id: 'payment' as const, label: 'Payment Offers' },
  ];

  return (
    <div
      className={`bg-white border-b-2 border-gray-200 transition-all ${
        isSticky ? 'sticky top-14 md:top-16 z-40 shadow-md' : 'relative'
      }`}
    >
      <div className="flex px-4 md:px-6 lg:px-8 max-w-7xl mx-auto justify-center md:justify-start">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => scrollToSection(tab.id)}
            className={`px-5 md:px-8 lg:px-10 py-3 md:py-4 text-sm md:text-base lg:text-lg font-semibold border-b-4 transition-all duration-300 ${
              activeTab === tab.id
                ? 'border-[#b66642] text-[#b66642] bg-[#b66642]/5'
                : 'border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-50'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}

