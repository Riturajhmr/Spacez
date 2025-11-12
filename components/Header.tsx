import Image from 'next/image';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b-2 border-gray-200 shadow-sm">
      <div className="flex items-center justify-between px-4 md:px-6 lg:px-8 py-4 md:py-5 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <Image
            src="/spacez-logo.png"
            alt="Spacez"
            width={240}
            height={80}
            className="h-16 md:h-20 lg:h-24 xl:h-28 w-auto object-contain"
            unoptimized
          />
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 md:p-3 hover:bg-gray-100 rounded-md transition-colors">
            <svg
              className="w-6 h-6 md:w-7 md:h-7 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

