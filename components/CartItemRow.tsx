import React from 'react';
import { CartItem } from '../types';
import PlusIcon from './icons/PlusIcon';
import MinusIcon from './icons/MinusIcon';
import TrashIcon from './icons/TrashIcon';

interface CartItemRowProps {
  item: CartItem;
  onUpdateQuantity: (itemId: number, newQuantity: number) => void;
  onRemove: (itemId: number) => void;
}

const CartItemRow: React.FC<CartItemRowProps> = ({ item, onUpdateQuantity, onRemove }) => {
  return (
    <div className="flex items-center gap-4 bg-white p-3 rounded-lg shadow-sm">
      <div className="flex-grow">
        <p className="font-bold text-gray-800">{item.name}</p>
        <p className="text-sm text-[#B8860B] font-semibold">₹{item.price.toFixed(2)}</p>
      </div>
      <div className="flex items-center gap-2 border border-[#7B241C]/20 rounded-md">
        <button
          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
          className="p-2 text-gray-700 hover:bg-[#7B241C]/10 rounded-l-md transition-colors"
          aria-label="Decrease quantity"
        >
          <MinusIcon />
        </button>
        <span className="px-2 font-bold w-8 text-center">{item.quantity}</span>
        <button
          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
          className="p-2 text-gray-700 hover:bg-[#7B241C]/10 rounded-r-md transition-colors"
          aria-label="Increase quantity"
        >
          <PlusIcon />
        </button>
      </div>
      <button 
        onClick={() => onRemove(item.id)}
        className="p-2 text-gray-500 hover:text-[#7B241C] hover:bg-[#7B241C]/10 rounded-md transition-colors"
        aria-label="Remove item"
      >
        <TrashIcon />
      </button>
    </div>
  );
};

export default CartItemRow;