import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  quantity: number;
  onQuantityChange: (quantity: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, quantity, onQuantityChange }) => {
  return (
    <div 
      className={`bg-white rounded-2xl shadow-sm border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer border-gray-200`}
    >
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-cover rounded-t-2xl"
        />
        <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg">
          <span className="text-xs font-medium text-gray-700">{product.category}</span>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-gray-800 mb-1 text-sm">{product.name}</h3>
        <p className="text-xl font-bold text-blue-600">{product.price} MAD</p>
        <div className="flex items-center gap-2 mt-3">
          <button
            className="px-2 py-1 bg-gray-200 rounded text-lg font-bold"
            onClick={() => onQuantityChange(Math.max(0, quantity - 1))}
            aria-label="Decrease quantity"
          >
            -
          </button>
          <input
            type="number"
            min={0}
            value={quantity}
            onChange={e => onQuantityChange(Math.max(0, Number(e.target.value)))}
            className="w-12 text-center border rounded"
          />
          <button
            className="px-2 py-1 bg-gray-200 rounded text-lg font-bold"
            onClick={() => onQuantityChange(quantity + 1)}
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;