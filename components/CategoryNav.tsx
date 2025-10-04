import React from 'react';

interface CategoryNavProps {
  categories: string[];
  activeCategory: string;
}

const CategoryNav: React.FC<CategoryNavProps> = ({ categories, activeCategory }) => {
  const formatId = (category: string) => category.toLowerCase().replace(/\s+/g, '-');
  const formatHref = (category: string) => `#${formatId(category)}`;

  return (
    <nav className="sticky top-0 bg-[#FAF3E0]/95 shadow-md z-30 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <ul className="flex flex-nowrap justify-start md:justify-center items-center py-2 space-x-2 md:space-x-6 overflow-x-auto scrollbar-hide">
          {categories.map((category) => {
            const isActive = formatId(category) === activeCategory;
            return (
              <li key={category} className="flex-shrink-0">
                <a
                  href={formatHref(category)}
                  className={`block py-2 px-3 text-sm md:text-base font-semibold border-b-2 transition-colors duration-300 ${
                    isActive
                      ? 'text-[#7B241C] border-[#7B241C] [text-shadow:0_1px_3px_rgba(123,36,28,0.3)]'
                      : 'text-gray-600 border-transparent hover:text-[#7B241C] hover:border-[#7B241C]/50'
                  }`}
                >
                  {category}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default CategoryNav;