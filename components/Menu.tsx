import React from 'react';
import { MenuCategory, MenuItem } from '../types';
import MenuItemCard from './MenuItemCard';

interface MenuProps {
  menuData: MenuCategory[];
  onAddToCart: (item: MenuItem) => void;
}

const Menu: React.FC<MenuProps> = ({ menuData, onAddToCart }) => {
  const formatId = (category: string) => category.toLowerCase().replace(/\s+/g, '-');
  
  return (
    <div className="space-y-16">
      {menuData.map((category) => (
        <section key={category.category} id={formatId(category.category)} className="pt-4">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-serif-display font-bold text-[#7B241C] [text-shadow:0_3px_5px_rgba(123,36,28,0.4)]">{category.category}</h2>
            {category.subCategory && (
                <p className="text-2xl mt-1 text-gray-700 font-serif-display">{category.subCategory}</p>
            )}
            {category.description && (
                <p className="text-md mt-2 text-gray-500">{category.description}</p>
            )}
            <div className="mt-4 w-24 h-1 bg-[#7B241C] mx-auto rounded"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {category.items.map((item) => (
              <MenuItemCard key={item.id} item={item} onAddToCart={onAddToCart} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Menu;