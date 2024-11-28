import React from 'react';
import { categories } from '../data/categories';
import { Laptop, Headphones, Watch, Camera, Smartphone, Gamepad } from 'lucide-react';

interface CategoryFilterProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const iconMap: Record<string, React.ElementType> = {
  Laptop,
  Headphones,
  Watch,
  Camera,
  Smartphone,
  GamepadIcon: Gamepad,
};

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <div className="mb-8">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Categories</h2>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onSelectCategory('')}
          className={`px-4 py-2 rounded-full ${
            selectedCategory === ''
              ? 'bg-indigo-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          All
        </button>
        {categories.map((category) => {
          const Icon = iconMap[category.icon];
          return (
            <button
              key={category.id}
              onClick={() => onSelectCategory(category.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full ${
                selectedCategory === category.id
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {Icon && <Icon className="h-4 w-4" />}
              <span>{category.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};