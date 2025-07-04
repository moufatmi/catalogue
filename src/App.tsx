import React, { useState, useMemo, useEffect } from 'react';
import { Product, Category, CartItem } from './types';
// import { products } from './data/products'; // DEPRECATED
import Header from './components/Header';
import CategoryFilter from './components/CategoryFilter';
import ProductCard from './components/ProductCard';
import SelectedProductsPanel from './components/SelectedProductsPanel';

function App() {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All');
  const [selectedProducts, setSelectedProducts] = useState<CartItem[]>([]);

  // Dynamically import all product JSON files from src/products
  useEffect(() => {
    const loadProducts = async () => {
      const modules = import.meta.glob('./products/*.json');
      const productPromises = Object.values(modules).map((importFn: any) => importFn());
      const loaded = await Promise.all(productPromises);
      // Each loaded[i] is { default: Product }
      setAllProducts(loaded.map((mod) => mod.default));
    };
    loadProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'All') {
      return allProducts;
    }
    return allProducts.filter(product => product.category === selectedCategory);
  }, [selectedCategory, allProducts]);

  // Add or update product with quantity
  const handleAddOrUpdateProduct = (product: Product, quantity: number) => {
    setSelectedProducts(prev => {
      if (quantity <= 0) {
        return prev.filter(item => item.product.id !== product.id);
      }
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id ? { ...item, quantity } : item
        );
      } else {
        return [...prev, { product, quantity }];
      }
    });
  };

  const handleRemoveProduct = (productId: string) => {
    setSelectedProducts(prev => prev.filter(item => item.product.id !== productId));
  };

  const handleSendWhatsApp = () => {
    const phoneNumber = '+212698570282';
    const message = `Hello! I would like to order the following products:\n\n${selectedProducts.map((item, index) => 
      `${index + 1}. ${item.product.name} x${item.quantity} - ${(item.product.price * item.quantity).toFixed(2)} MAD`
    ).join('\n')}\n\nTotal: ${selectedProducts.reduce((sum, item) => sum + item.product.price * item.quantity, 0).toFixed(2)} MAD\n\nThank you!`;
    
    const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header selectedCount={selectedProducts.length} />
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        <CategoryFilter 
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => {
            const cartItem = selectedProducts.find(item => item.product.id === product.id);
            return (
              <ProductCard
                key={product.id}
                product={product}
                quantity={cartItem ? cartItem.quantity : 0}
                onQuantityChange={(qty) => handleAddOrUpdateProduct(product, qty)}
              />
            );
          })}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No products found in this category.</p>
          </div>
        )}
        
        {/* Add bottom padding to avoid overlap with fixed panel */}
        <div className="h-32"></div>
      </main>
      
      <SelectedProductsPanel
        selectedProducts={selectedProducts}
        onRemoveProduct={handleRemoveProduct}
        onSendWhatsApp={handleSendWhatsApp}
      />
    </div>
  );
}

export default App;