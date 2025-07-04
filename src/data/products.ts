// DEPRECATED: Products are now stored as individual files in src/products/
// Do not add new products here. Use the src/products/ folder instead.
// =============================
// HOW TO ADD A NEW PRODUCT
// =============================
// 1. Copy the template below (between the dashed lines).
// 2. Paste it inside the products array below, after the last product (before the closing ]).
// 3. Fill in the details for your new product.
// 4. Make sure each product (except the last one) ends with a comma.
//
// --------- TEMPLATE ---------
// {
//   id: 'UNIQUE_ID', // Use a new number, e.g. '21'
//   name: 'Product Name', // The name of your product
//   price: 0.00, // The price (number only, no $ sign)
//   image: 'IMAGE_URL', // Link to a product image (can use https://pexels.com or similar)
//   category: 'Category' // e.g. 'Food', 'Accessories', 'Clothing', 'Electronics', 'Beauty'
// },
// --------- END TEMPLATE -----
//
// Example:
// {
//   id: '21',
//   name: 'New Product',
//   price: 12.34,
//   image: 'https://example.com/image.jpg',
//   category: 'Food'
// },
// =============================
import { Product } from '../types';

export const products: Product[] = [
  // Food
  {
    id: '1',
    name: 'Organic Honey',
    price: 25.99,
    image: 'https://images.pexels.com/photos/33473/honey-yellow-sweet-syrup.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Food'
  },
  {
    id: '2',
    name: 'Premium Coffee Beans',
    price: 45.50,
    image: 'https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Food'
  },
  {
    id: '3',
    name: 'Artisan Chocolate',
    price: 18.75,
    image: 'https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Food'
  },
  {
    id: '4',
    name: 'Olive Oil Extra Virgin',
    price: 32.00,
    image: 'https://images.pexels.com/photos/33355/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Food'
  },
  
  // Accessories
  {
    id: '5',
    name: 'Leather Wallet',
    price: 65.00,
    image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Accessories'
  },
  {
    id: '6',
    name: 'Vintage Sunglasses',
    price: 89.99,
    image: 'https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Accessories'
  },
  {
    id: '7',
    name: 'Classic Watch',
    price: 199.00,
    image: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Accessories'
  },
  {
    id: '8',
    name: 'Designer Handbag',
    price: 125.50,
    image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Accessories'
  },
  
  // Clothing
  {
    id: '9',
    name: 'Cotton T-Shirt',
    price: 24.99,
    image: 'https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Clothing'
  },
  {
    id: '10',
    name: 'Denim Jeans',
    price: 79.00,
    image: 'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Clothing'
  },
  {
    id: '11',
    name: 'Wool Sweater',
    price: 95.00,
    image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Clothing'
  },
  {
    id: '12',
    name: 'Summer Dress',
    price: 68.50,
    image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Clothing'
  },
  
  // Electronics
  {
    id: '13',
    name: 'Wireless Earbuds',
    price: 149.99,
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Electronics'
  },
  {
    id: '14',
    name: 'Smartphone Case',
    price: 29.99,
    image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Electronics'
  },
  {
    id: '15',
    name: 'Portable Speaker',
    price: 89.00,
    image: 'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Electronics'
  },
  {
    id: '16',
    name: 'Tablet Stand',
    price: 34.99,
    image: 'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Electronics'
  },
  
  // Beauty
  {
    id: '17',
    name: 'Facial Serum',
    price: 55.00,
    image: 'https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Beauty'
  },
  {
    id: '18',
    name: 'Moisturizer Cream',
    price: 42.50,
    image: 'https://images.pexels.com/photos/3762875/pexels-photo-3762875.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Beauty'
  },
  {
    id: '19',
    name: 'Lip Balm Set',
    price: 18.99,
    image: 'https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Beauty'
  },
  {
    id: '20',
    name: 'Essential Oil Kit',
    price: 75.00,
    image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Beauty'
  }
];