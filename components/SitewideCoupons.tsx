import { Copy } from "lucide-react";

interface SitewideCouponsProps {
  showSuccessMessage: (message: string) => void;
}

export default function SitewideCoupons({ showSuccessMessage }: SitewideCouponsProps) {
  const coupons = [
    {
      id: 'longstay',
      name: 'LONGSTAY',
      amount: '₹1,500',
      description: '15% off when you book for 5 days or more and 20% off when you book for 30 days or more.',
    },
    {
      id: 'earlybird',
      name: 'EARLYBIRD',
      amount: '₹3,000',
      description: '15% off when you book for 5 days or more and 20% off when you book for 30 days or more.',
    },
    {
      id: 'rushdeal',
      name: 'RUSHDEAL',
      amount: 'Flat 10%',
      description: '15% off when you book for 5 days or more and 20% off when you book for 30 days or more.',
    },
  ];

  const handleCopy = (couponName: string) => {
    showSuccessMessage(`Coupon ${couponName} copied successfully!`);
  };

  const handleReadMore = (couponName: string) => {
    showSuccessMessage(`Reading more about ${couponName}...`);
  };

  return (
    <div className="space-y-5 md:space-y-6">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-5 md:mb-7 tracking-tight">Sitewide Coupons</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {coupons.map((coupon) => (
          <div
            key={coupon.id}
            className="flex overflow-hidden rounded-lg border border-gray-200 bg-[#f5f5f0] shadow-md hover:shadow-lg transition-all duration-300"
          >
            {/* Left price section */}
            <div className="bg-[#b66642] flex items-center justify-center px-5 py-8 text-white font-bold text-xl md:text-2xl lg:text-3xl tracking-wide rotate-180 [writing-mode:vertical-rl] coupon-jagged-edge relative">
              {coupon.amount}
            </div>

            {/* Right details section */}
            <div className="flex flex-col justify-between p-4 md:p-5 w-full bg-[#f5f5f0]">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-gray-900 font-extrabold text-lg md:text-xl lg:text-2xl tracking-tight">{coupon.name}</h2>
                  <button
                    onClick={() => handleCopy(coupon.name)}
                    className="text-[#b66642] hover:text-[#a45939] flex items-center gap-1.5 text-xs md:text-sm font-bold transition-colors"
                  >
                    <Copy size={16} />
                    Copy
                  </button>
                </div>
                <p className="text-gray-600 text-sm md:text-base lg:text-lg mt-1.5 font-normal leading-snug">
                  {coupon.description}
                </p>
              </div>
              <div className="mt-3 pt-3 border-t border-gray-300">
                <button
                  onClick={() => handleReadMore(coupon.name)}
                  className="text-[#b66642] font-semibold text-xs md:text-sm lg:text-base hover:underline transition-all"
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

