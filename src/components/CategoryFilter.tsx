import React from 'react';
import { Category } from '../types';
import { Package, Coffee, Shirt, Smartphone, Sparkles, Grid } from 'lucide-react';

interface CategoryFilterProps {
  selectedCategory: Category | 'All';
  onCategoryChange: (category: Category | 'All') => void;
}

const categoryIcons = {
  All: Grid,
  Food: Coffee,
  Accessories: Package,
  Clothing: Shirt,
  Electronics: Smartphone,
  Beauty: Sparkles
};

const CategoryFilter: React.FC<CategoryFilterProps> = ({ selectedCategory, onCategoryChange }) => {
  const categories: (Category | 'All')[] = ['All', 'Food', 'Accessories', 'Clothing', 'Electronics', 'Beauty'];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-8">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Categories</h3>
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => {
          const Icon = categoryIcons[category];
          const isSelected = selectedCategory === category;
          
          return (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium transition-all duration-200 ${
                isSelected
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-200'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md'
              }`}
            >
              <Icon size={18} />
              <span className="text-sm">{category}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryFilter;