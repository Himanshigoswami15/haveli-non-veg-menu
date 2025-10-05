import React from 'react';
import { CartItem } from '../types';
import CartItemRow from './CartItemRow';
import CloseIcon from './icons/CloseIcon';
import EmptyCartIcon from './icons/EmptyCartIcon';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (itemId: number, newQuantity: number) => void;
  onRemoveItem: (itemId: number) => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem }) => {

  return (
    <>
      <div
        className={`fixed inset-0 bg-black bg-opacity-60 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      ></div>
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-[#FAF3E0] shadow-[-20px_0px_50px_-15px_rgba(123,36,28,0.1)] z-50 transform transition-transform duration-300 ease-in-out border-l border-[#7B241C]/20 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <header className="flex items-center justify-between p-6 border-b border-[#7B241C]/20">
            <h2 className="text-2xl font-serif-display font-bold text-[#7B241C] [text-shadow:0_2px_4px_rgba(123,36,28,0.3)]">Your Order</h2>
            <button onClick={onClose} className="p-1 text-gray-600 hover:text-[#7B241C]">
              <CloseIcon />
            </button>
          </header>

          {cartItems.length === 0 ? (
            <div className="flex-grow flex flex-col items-center justify-center text-center p-6">
              <div className="text-[#7B241C]/40">
                <EmptyCartIcon />
              </div>
              <p className="mt-4 text-xl text-gray-800">Your order is empty.</p>
              <p className="text-gray-600">Add items from the menu to get started.</p>
            </div>
          ) : (
            <div className="flex-grow overflow-y-auto p-6 space-y-4">
              {cartItems.map((item) => (
                <CartItemRow
                  key={item.id}
                  item={item}
                  onUpdateQuantity={onUpdateQuantity}
                  onRemove={onRemoveItem}
                />
              ))}
            </div>
          )}

          {cartItems.length > 0 && (
            <footer className="p-6 bg-[#F5EFE1] border-t border-[#7B241C]/20 shadow-inner">
              <p className="text-center text-gray-600">
                Please show this list to a member of our staff to place your order.
              </p>
            </footer>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;