import React, { useState, useMemo, useEffect } from 'react';
import { CartItem, MenuItem } from './types';
import { menuData } from './data/menuData';
import Header from './components/Header';
import CategoryNav from './components/CategoryNav';
import Menu from './components/Menu';
import Cart from './components/Cart';
import CartIcon from './components/icons/CartIcon';
import PhoneIcon from './components/icons/PhoneIcon';
import MailIcon from './components/icons/MailIcon';
import InstagramIcon from './components/icons/InstagramIcon';
import FacebookIcon from './components/icons/FacebookIcon';
import WebsiteIcon from './components/icons/WebsiteIcon';

const App: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [activeCategory, setActiveCategory] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const formatId = (category: string) => category.toLowerCase().replace(/\s+/g, '-');

  const filteredMenuData = useMemo(() => {
    if (!searchTerm.trim()) return menuData;

    // Normalize text: lowercase, remove special chars (keep alphanumeric & spaces)
    const normalize = (text: string) => 
      text.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim();

    const searchTokens = normalize(searchTerm).split(' ').filter(Boolean);

    if (searchTokens.length === 0) return menuData;

    return menuData.map(category => {
      const categoryNameNormalized = normalize(category.category);
      const subCategoryNormalized = category.subCategory ? normalize(category.subCategory) : '';

      const filteredItems = category.items.filter(item => {
        const itemText = normalize(`${item.name} ${item.description || ''}`);
        // Include item type (veg/non-veg/egg) in search context
        const typeText = normalize(item.type); 
        
        // Combine all contexts
        const fullContext = `${categoryNameNormalized} ${subCategoryNormalized} ${itemText} ${typeText}`;
        
        // AND logic: Item must match ALL search tokens
        return searchTokens.every(token => fullContext.includes(token));
      });

      return {
        ...category,
        items: filteredItems
      };
    }).filter(category => category.items.length > 0);
  }, [searchTerm]);

  useEffect(() => {
    // Set the first category as active initially if available
    if (filteredMenuData.length > 0 && !activeCategory) {
      setActiveCategory(formatId(filteredMenuData[0].category));
    }

    const handleScroll = () => {
      const navHeight = 80; // Offset for the sticky nav bar plus some buffer
      let currentSectionId = '';
      
      for (const section of filteredMenuData) {
        const sectionId = formatId(section.category);
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the top of the section is above our threshold, it's a candidate
          if (rect.top <= navHeight) {
            currentSectionId = sectionId;
          } else {
            // Once we find a section below the threshold, the previous one was the last valid one.
            break;
          }
        }
      }

      // Handle being at the very bottom of the page
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 2) {
        if (filteredMenuData.length > 0) {
          currentSectionId = formatId(filteredMenuData[filteredMenuData.length - 1].category);
        }
      }
      
      if (currentSectionId) {
        setActiveCategory(currentSectionId);
      } else if (filteredMenuData.length > 0 && window.scrollY < 100) {
         // Fallback to the first category if at the very top
         setActiveCategory(formatId(filteredMenuData[0].category));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [filteredMenuData, activeCategory]);


  const handleAddToCart = (item: MenuItem) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevItems.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (itemId: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      handleRemoveFromCart(itemId);
    } else {
      setCartItems((prevItems) =>
        prevItems.map((item) => (item.id === itemId ? { ...item, quantity: newQuantity } : item))
      );
    }
  };

  const handleRemoveFromCart = (itemId: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };
  
  const totalCartItems = useMemo(() => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  }, [cartItems]);

  return (
    <div className="text-gray-800 relative min-h-screen">
      <Header searchTerm={searchTerm} onSearch={setSearchTerm} />
      <CategoryNav categories={filteredMenuData.map(c => c.category)} activeCategory={activeCategory} />
      <main className="container mx-auto px-4 py-8 lg:py-12 flex min-h-[50vh]">
        <div className="w-full">
          {filteredMenuData.length > 0 ? (
            <Menu menuData={filteredMenuData} onAddToCart={handleAddToCart} />
          ) : (
            <div className="text-center py-12">
              <p className="text-2xl text-[#7B241C] font-serif-display">No items found</p>
              <p className="text-gray-600 mt-2">Try adjusting your search term.</p>
              <button 
                onClick={() => setSearchTerm('')}
                className="mt-4 text-[#7B241C] underline hover:text-[#641E16]"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>
      </main>

      <Cart 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
      />

      {/* Floating Cart Button */}
      <button 
        onClick={() => setIsCartOpen(true)}
        className="fixed bottom-6 right-6 bg-[#7B241C] text-white p-4 rounded-full shadow-xl shadow-[#7B241C]/30 hover:bg-[#641E16] transition-transform transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#641E16] focus:ring-opacity-50 z-40"
        aria-label="Open Cart"
      >
        <CartIcon />
        {totalCartItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-white text-[#7B241C] text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center border-2 border-[#7B241C]">
            {totalCartItems}
          </span>
        )}
      </button>

      <footer className="text-center py-12 bg-[#F5EFE1] mt-16 border-t border-[#7B241C]/20">
        <div className="container mx-auto px-4">
          <div className="space-y-6">
            <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
              <a href="tel:+91-9928112220" className="flex items-center gap-2 text-gray-700 hover:text-[#7B241C] transition-colors">
                <PhoneIcon />
                <span>+91-9928112220</span>
              </a>
              <a href="https://www.thehaveliresorts.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-700 hover:text-[#7B241C] transition-colors">
                <WebsiteIcon />
                <span>www.thehaveliresorts.com</span>
              </a>
            </div>
            <div className="flex justify-center items-center gap-x-6">
              <a href="mailto:admin@thehaveliresorts.com" aria-label="Email us" className="text-gray-700 hover:text-[#7B241C] transition-colors p-2">
                <MailIcon />
              </a>
              <a href="https://www.instagram.com/thehaveli.resort" target="_blank" rel="noopener noreferrer" aria-label="Visit our Instagram" className="text-gray-700 hover:text-[#7B241C] transition-colors p-2">
                <InstagramIcon />
              </a>
              <a href="https://www.facebook.com/thehaveliresort" target="_blank" rel="noopener noreferrer" aria-label="Visit our Facebook" className="text-gray-700 hover:text-[#7B241C] transition-colors p-2">
                <FacebookIcon />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;