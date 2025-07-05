import React from 'react';
import { CartItem } from '../types';
import { X, MessageCircle } from 'lucide-react';

interface SelectedProductsPanelProps {
  selectedProducts: CartItem[];
  onRemoveProduct: (productId: string) => void;
  onSendWhatsApp: () => void;
}

const SelectedProductsPanel: React.FC<SelectedProductsPanelProps> = ({ 
  selectedProducts, 
  onRemoveProduct, 
  onSendWhatsApp 
}) => {
  if (selectedProducts.length === 0) {
    return null;
  }

  const totalPrice = selectedProducts.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-2xl p-1 z-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-1">
          <h3 className="text-xs font-semibold text-gray-800">
            Selected ({selectedProducts.length})
          </h3>
          <div className="text-right">
            <p className="text-[10px] text-gray-600">Total</p>
            <p className="text-base font-bold text-blue-600">{totalPrice.toFixed(2)} MAD</p>
          </div>
        </div>
        
        <div className="flex gap-1 mb-1 overflow-x-auto pb-0.5">
          {selectedProducts.map((item) => (
            <div key={item.product.id} className="flex-shrink-0 bg-gray-50 rounded p-0.5 flex items-center gap-1">
              <img 
                src={item.product.image} 
                alt={item.product.name}
                className="w-12 h-12 object-contain rounded bg-white"
              />
              <div className="min-w-0">
                <p className="text-[10px] font-medium text-gray-800 truncate">{item.product.name}</p>
                <p className="text-[10px] text-gray-600">{item.product.price} MAD x {item.quantity}</p>
              </div>
              <button
                onClick={() => onRemoveProduct(item.product.id)}
                className="text-gray-400 hover:text-red-500 transition-colors p-0.5"
              >
                <X size={10} />
              </button>
            </div>
          ))}
        </div>
        
        <button
          onClick={onSendWhatsApp}
          className="w-full bg-green-600 text-white py-2 px-4 rounded font-semibold flex items-center justify-center gap-2 hover:bg-green-700 transition-colors text-base"
        >
          <MessageCircle size={20} />
          WhatsApp
        </button>
      </div>
    </div>
  );
};

export default SelectedProductsPanel;