import React from 'react';

// A reusable SVG component for the decorative flourish
const Flourish: React.FC<{ className?: string }> = ({ className }) => (
    <svg
        className={className}
        viewBox="0 0 150 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
    >
        <path
            d="M150 20 H110 C110 20 100 40 75 40 S 40 20 40 20 H0"
            stroke="currentColor"
            strokeWidth="1.5"
        />
        <circle cx="75" cy="10" r="3" fill="currentColor" />
    </svg>
);


const Header: React.FC = () => {
  return (
    <header className="py-4 border-b-2 border-[#7B241C]/20">
      <div className="container mx-auto flex items-center justify-center">
         {/* Left Decorative Element */}
        <div className="hidden md:block flex-1 text-[#7B241C]/80 pr-6 [filter:drop-shadow(0_2px_3px_rgba(123,36,28,0.4))]">
            <Flourish className="w-full h-10" />
        </div>

        {/* Logo and Title */}
        <div className="text-center flex-shrink-0 px-4">
          <img 
            src="https://ik.imagekit.io/j1fgksdwx/haveli%20logo.png?updatedAt=1757953623873" 
            alt="The Haveli Resort Logo"
            className="h-56 md:h-64 mx-auto [filter:drop-shadow(0_4px_15px_rgba(123,36,28,0.5))]"
          />
          <p className="mt-2 text-xl text-[#7B241C] font-serif-display font-bold [text-shadow:0_2px_4px_rgba(123,36,28,0.4)]">Digital Menu</p>
          <p className="mt-1 text-lg text-gray-700 font-serif-display tracking-wider font-bold [text-shadow:0_1px_3px_rgba(123,36,28,0.2)]">A Royal Culinary Experience</p>
        </div>

         {/* Right Decorative Element */}
        <div className="hidden md:block flex-1 text-[#7B241C]/80 pl-6 [filter:drop-shadow(0_2px_3px_rgba(123,36,28,0.4))]">
            <Flourish className="w-full h-10 transform scale-x-[-1]" />
        </div>

      </div>
    </header>
  );
};

export default Header;