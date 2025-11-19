
import React, { useState, useEffect, useRef } from 'react';
import SearchIcon from './icons/SearchIcon';
import CloseIcon from './icons/CloseIcon';

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

interface HeaderProps {
  searchTerm: string;
  onSearch: (term: string) => void;
}

const Header: React.FC<HeaderProps> = ({ searchTerm, onSearch }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [localSearchTerm, setLocalSearchTerm] = useState(searchTerm);
  const inputRef = useRef<HTMLInputElement>(null);

  // Sync with external changes (e.g. Clear Search button in App)
  useEffect(() => {
    if (searchTerm === '') {
        setLocalSearchTerm('');
    } else {
        // If incoming search term is different, and we aren't focused (to avoid overwriting user typing), update.
        if (document.activeElement !== inputRef.current) {
             setLocalSearchTerm(searchTerm);
        }
        setIsSearchOpen(true);
    }
  }, [searchTerm]);

  // Debounce search input
  useEffect(() => {
    const handler = setTimeout(() => {
        if (localSearchTerm !== searchTerm) {
            onSearch(localSearchTerm);
        }
    }, 300);

    return () => clearTimeout(handler);
  }, [localSearchTerm, searchTerm, onSearch]);

  useEffect(() => {
    if (isSearchOpen && inputRef.current) {
        inputRef.current.focus();
    }
  }, [isSearchOpen]);

  const handleClear = () => {
    setLocalSearchTerm('');
    onSearch(''); // Clear immediately bypassing debounce for UI responsiveness
    setIsSearchOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalSearchTerm(e.target.value);
  };

  return (
    <header className="py-4 border-b-2 border-[#7B241C]/20 bg-[#FAF3E0] relative">
      <div className="container mx-auto flex items-center justify-center relative">
        
        {/* Search Component - Top Right Absolute */}
        <div className={`absolute right-4 top-4 z-50 transition-all duration-300 ease-in-out ${isSearchOpen ? 'w-full max-w-[240px]' : 'w-10'}`}>
            <div className={`flex items-center justify-end ${isSearchOpen ? 'bg-white/90 shadow-lg rounded-full border border-[#7B241C]/20 p-1 backdrop-blur-sm' : ''}`}>
                {isSearchOpen ? (
                    <div className="flex items-center w-full pl-3 pr-1">
                        <SearchIcon className="h-4 w-4 text-[#7B241C]/70 flex-shrink-0" />
                        <input 
                            ref={inputRef}
                            type="text" 
                            value={localSearchTerm}
                            onChange={handleInputChange}
                            placeholder="Search menu..."
                            className="w-full bg-transparent border-none focus:ring-0 text-[#7B241C] placeholder-[#7B241C]/50 text-sm px-2 py-1 font-sans outline-none"
                        />
                        <button 
                            onClick={handleClear}
                            className="p-1 text-[#7B241C]/60 hover:text-[#7B241C] hover:bg-[#7B241C]/10 rounded-full transition-colors flex-shrink-0"
                            aria-label="Clear search"
                        >
                            <CloseIcon className="h-4 w-4" />
                        </button>
                    </div>
                ) : (
                    <button 
                        onClick={() => setIsSearchOpen(true)}
                        className="p-2 text-[#7B241C] hover:bg-[#7B241C]/10 rounded-full transition-colors"
                        aria-label="Search"
                    >
                        <SearchIcon className="h-6 w-6" />
                    </button>
                )}
            </div>
        </div>

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
