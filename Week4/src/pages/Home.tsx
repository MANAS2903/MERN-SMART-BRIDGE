import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 24999,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
    description: "High-quality wireless headphones with noise cancellation"
  },
  {
    id: 2,
    name: "Smart Watch Pro",
    price: 15999,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
    description: "Advanced smartwatch with health tracking features"
  },
  {
    id: 3,
    name: "Professional Camera",
    price: 74999,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&q=80",
    description: "Professional-grade camera for stunning photography"
  },
  {
    id: 4,
    name: "Designer Backpack",
    price: 5999,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80",
    description: "Stylish and functional backpack for everyday use"
  }
];

export default function Home() {
  const formatPrice = (price: number) => {
    return price.toLocaleString('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    });
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative bg-indigo-900 text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1557821552-17105176677c?w=1600&q=80"
            alt="Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Discover Premium Products
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Shop the latest trends and find exclusive deals on our premium selection of products. Best prices guaranteed!
          </p>
          <Link
            to="/products"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-900 bg-white hover:bg-indigo-50"
          >
            Shop Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>

      {/* Featured Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group"
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 group-hover:transform group-hover:scale-105">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-2">{product.description}</p>
                  <p className="text-xl font-bold text-indigo-600">{formatPrice(product.price)}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}