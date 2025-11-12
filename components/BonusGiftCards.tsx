import Image from 'next/image';

interface BonusGiftCardsProps {
  isSignedIn: boolean;
  showSuccessMessage: (message: string) => void;
}

export default function BonusGiftCards({ isSignedIn, showSuccessMessage }: BonusGiftCardsProps) {
  const handleClaimGiftCards = () => {
    showSuccessMessage('Redirecting to claim gift cards...');
  };

  const handleCollect = (brand: string) => {
    showSuccessMessage(`${brand} gift card collected successfully!`);
  };

  const handleReadMore = (brand: string) => {
    showSuccessMessage(`Reading more about ${brand}...`);
  };

  if (!isSignedIn) {
    return (
      <div className="border border-gray-200 rounded-lg overflow-hidden shadow-md bg-white hover:shadow-lg transition-all duration-300">
        {/* Top content row */}
        <div className="flex justify-between items-start p-4 md:p-5 lg:p-6 bg-white">
          {/* Left text section */}
          <div className="flex flex-col flex-1">
            <p className="text-gray-600 text-sm md:text-base lg:text-lg font-medium whitespace-nowrap leading-snug">
              Assured vouchers up to
            </p>
            <p className="font-extrabold text-[#b66642] text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-1.5 mb-1.5 tracking-tight">
              ₹1000✨
            </p>
            <p className="text-gray-600 text-sm md:text-base lg:text-lg font-medium leading-snug">
              of trending brands
            </p>
          </div>
          {/* Right image section */}
          <div className="relative flex items-start justify-end ml-4 md:ml-6">
            <Image
              src="/gift-cards-image.png"
              alt="Gift cards"
              className="object-contain gift-card-no-bg w-48 h-24 md:w-64 md:h-32 lg:w-72 lg:h-36"
              width={288}
              height={144}
              unoptimized
            />
          </div>
        </div>
        {/* Bottom button */}
        <button
          onClick={handleClaimGiftCards}
          className="w-full bg-[#b66642] text-white text-sm md:text-base font-semibold py-2.5 md:py-3 hover:bg-[#a45939] transition-all duration-300 shadow-sm hover:shadow-md"
        >
          Claim gift cards »
        </button>
      </div>
    );
  }

  // Signed-in state
  const giftCards = [
    {
      id: 'myntra',
      name: 'MYNTRA',
      amount: '₹1,500',
      description: 'Get this gift voucher on booking above ₹2000',
      color: 'bg-[#d81b8c]',
      logoUrl: '/myntra-logo.png',
    },
    {
      id: 'hammer',
      name: 'HAMMER',
      amount: '₹1,000',
      description: 'Get this gift voucher on booking above ₹1500',
      color: 'bg-gray-900',
      logoUrl: '/hammer-logo.png',
    },
  ];

  return (
    <div className="space-y-5 md:space-y-6">
      <p className="text-gray-600 text-base md:text-lg mb-4 font-medium">
        Collect multiple of these
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {giftCards.map((card) => (
          <div
            key={card.id}
            className="flex overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md hover:shadow-lg transition-all duration-300"
          >
            {/* Left price strip */}
            <div className={`${card.color} flex items-center justify-center px-5 md:px-6 py-8 md:py-10 text-white font-bold text-xl md:text-2xl lg:text-3xl tracking-wide rotate-180 [writing-mode:vertical-rl] coupon-jagged-edge relative`}>
              {card.amount}
            </div>
            
            {/* Right content section */}
            <div className="flex flex-col justify-between p-4 md:p-5 w-full bg-white">
              {/* Header with logo and Collect */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    {card.logoUrl && (
                      <Image
                        src={card.logoUrl}
                        alt={`${card.name} Logo`}
                        width={24}
                        height={24}
                        className="w-6 h-6 md:w-7 md:h-7 object-contain"
                        unoptimized
                      />
                    )}
                    <h2 className="text-gray-900 font-semibold text-lg md:text-xl lg:text-2xl tracking-tight">{card.name}</h2>
                  </div>
                  <button
                    onClick={() => handleCollect(card.name)}
                    className="text-[#b66642] hover:text-[#a45939] font-bold text-xs md:text-sm transition-colors whitespace-nowrap"
                  >
                    Collect
                  </button>
                </div>
                {/* Description */}
                <p className="text-gray-700 text-sm md:text-base mt-1 font-medium leading-snug">
                  {card.description}
                </p>
              </div>
              
              {/* Divider and Read more */}
              <div className="mt-3 pt-3 border-t border-gray-300">
                <button
                  onClick={() => handleReadMore(card.name)}
                  className="text-[#b66642] font-semibold text-xs md:text-sm hover:underline transition-all"
                >
                  Read more
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

