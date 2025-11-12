import Image from 'next/image';

interface PaymentOffersProps {
  isSignedIn: boolean;
  showSuccessMessage: (message: string) => void;
}

export default function PaymentOffers({ isSignedIn, showSuccessMessage }: PaymentOffersProps) {
  const handleUnlockOffers = () => {
    showSuccessMessage('Redirecting to unlock payment offers...');
  };

  const handleReadMore = (offerName: string) => {
    showSuccessMessage(`Reading more about ${offerName}...`);
  };

  if (!isSignedIn) {
    return (
      <div className="border border-gray-200 rounded-lg overflow-hidden shadow-md bg-white hover:shadow-lg transition-all duration-300">
        {/* Top content row */}
        <div className="flex justify-between items-start p-4 md:p-5 lg:p-6 bg-white">
          {/* Left text section */}
          <div className="flex flex-col flex-1">
            <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-snug font-medium">
              Save more on your bookings
            </p>
            <p className="font-extrabold text-[#b66642] text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-1.5 mb-1.5 tracking-tight">
              upto 15% Off
            </p>
            <p className="text-sm md:text-base lg:text-lg font-bold text-[#b66642] leading-snug whitespace-nowrap">
              on select payment methods
            </p>
          </div>
          {/* Right image section */}
          <div className="relative flex items-start justify-end ml-4 md:ml-6">
            <Image
              src="/payment-offers-image.png"
              alt="Payment methods"
              className="object-contain gift-card-no-bg w-48 h-24 md:w-64 md:h-32 lg:w-72 lg:h-36"
              width={288}
              height={144}
              unoptimized
            />
          </div>
        </div>
        {/* Bottom button */}
        <button
          onClick={handleUnlockOffers}
          className="w-full bg-[#b66642] text-white text-sm md:text-base font-semibold py-2.5 md:py-3 hover:bg-[#a45939] transition-all duration-300 shadow-sm hover:shadow-md"
        >
          Unlock offers »
        </button>
      </div>
    );
  }

  // Signed-in state
  const paymentOffers = [
    {
      id: 'hdfc',
      name: 'HDFC BANK',
      discount: '10% OFF',
      description: 'Get 10% off on booking above ₹1500',
      color: 'bg-blue-600',
      logoUrl: '/hdfc-logo.png',
    },
  ];

  return (
    <div className="space-y-5 md:space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {paymentOffers.map((offer) => (
          <div
            key={offer.id}
            className="flex overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md hover:shadow-lg transition-all duration-300"
          >
            {/* Left discount strip */}
            <div className={`${offer.color} flex items-center justify-center px-5 md:px-6 py-8 md:py-10 text-white font-bold text-xl md:text-2xl lg:text-3xl tracking-wide rotate-180 [writing-mode:vertical-rl] coupon-jagged-edge relative`}>
              {offer.discount}
            </div>
            
            {/* Right content section */}
            <div className="flex flex-col justify-between p-4 md:p-5 w-full bg-white">
              {/* Header with logo */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Image
                    src={offer.logoUrl}
                    alt={`${offer.name} Logo`}
                    width={24}
                    height={24}
                    className="w-6 h-6 md:w-7 md:h-7 object-contain"
                    unoptimized
                  />
                  <h3 className="text-gray-900 font-semibold text-lg md:text-xl lg:text-2xl tracking-tight">{offer.name}</h3>
                </div>
                {/* Description */}
                <p className="text-gray-700 text-sm md:text-base mt-1 font-medium leading-snug">
                  {offer.description}
                </p>
              </div>
              
              {/* Divider and Read more */}
              <div className="mt-3 pt-3 border-t border-gray-300">
                <button
                  onClick={() => handleReadMore(offer.name)}
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

