import React from 'react';
import { MenuItem } from '../types';
import PlusIcon from './icons/PlusIcon';

interface MenuItemCardProps {
  item: MenuItem;
  onAddToCart: (item: MenuItem) => void;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ item, onAddToCart }) => {
  const typeIcon = {
    veg: (
      <span className="mt-1.5 flex-shrink-0 w-4 h-4 border-2 border-green-600 flex items-center justify-center rounded-sm p-0.5" aria-label="Vegetarian">
        <span className="w-full h-full bg-green-600"></span>
      </span>
    ),
    'non-veg': (
      <span className="mt-1.5 flex-shrink-0 w-4 h-4 border-2 border-[#7B241C] flex items-center justify-center rounded-sm p-0.5" aria-label="Non-Vegetarian">
        <span className="w-full h-full bg-[#7B241C]"></span>
      </span>
    ),
    egg: (
       <span className="mt-1.5 flex-shrink-0 w-4 h-4 border-2 border-yellow-500 flex items-center justify-center rounded-sm p-0.5" aria-label="Contains Egg">
        <span className="w-full h-full bg-yellow-500"></span>
      </span>
    ),
  };

  return (
    <div className="bg-white rounded-lg shadow-lg shadow-zinc-900/5 overflow-hidden flex flex-col transition-all duration-300 hover:shadow-[0_10px_25px_-5px_rgba(123,36,28,0.25),0_8px_10px_-6px_rgba(123,36,28,0.2)] border border-transparent hover:border-[#7B241C]/20">
      {item.imageUrl && (
        <div className="w-full h-48">
          <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
        </div>
      )}
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-2">
           <div className="flex items-start gap-3 pr-4">
             {typeIcon[item.type]}
            <h3 className="text-xl font-bold text-gray-800 [text-shadow:0_1px_2px_rgba(123,36,28,0.2)]">{item.name}</h3>
          </div>
          <p className="text-xl font-semibold text-[#B8860B] whitespace-nowrap">₹{item.price}</p>
        </div>
        {item.description && (
          <p className="text-gray-600 mb-4 flex-grow ml-7">{item.description}</p>
        )}
        <div className="mt-auto pt-4">
          <button
            onClick={() => onAddToCart(item)}
            className="w-full bg-[#7B241C] text-white font-bold py-2 px-4 rounded-md hover:bg-[#641E16] transition-colors flex items-center justify-center gap-2"
          >
            <PlusIcon />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItemCard;