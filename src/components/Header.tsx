import React from 'react';
import { ShoppingBag } from 'lucide-react';

interface HeaderProps {
  selectedCount: number;
}

const Header: React.FC<HeaderProps> = ({ selectedCount }) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-40 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 p-2 rounded-xl">
              <ShoppingBag size={24} className="text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">Wholesale Catalog</h1>
              <p className="text-sm text-gray-600">Premium Products for Your Business</p>
            </div>
          </div>
          
          {selectedCount > 0 && (
            <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
              <span className="text-sm font-medium">{selectedCount} selected</span>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;