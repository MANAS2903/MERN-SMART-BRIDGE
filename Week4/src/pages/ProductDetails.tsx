import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ShoppingCart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 24999,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
    description: "High-quality wireless headphones with noise cancellation",
    features: [
      "Active Noise Cancellation",
      "40-hour battery life",
      "Premium sound quality",
      "Comfortable fit",
      "1 year warranty"
    ]
  },
  {
    id: 2,
    name: "Smart Watch Pro",
    price: 15999,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
    description: "Advanced smartwatch with health tracking features",
    features: [
      "Heart rate monitoring",
      "Sleep tracking",
      "Water resistant",
      "GPS enabled",
      "6 months warranty"
    ]
  },
  {
    id: 3,
    name: "Professional Camera",
    price: 74999,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&q=80",
    description: "Professional-grade camera for stunning photography",
    features: [
      "24.2MP sensor",
      "4K video recording",
      "Weather-sealed body",
      "Dual card slots",
      "2 years warranty"
    ]
  },
  {
    id: 4,
    name: "Designer Backpack",
    price: 5999,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80",
    description: "Stylish and functional backpack for everyday use",
    features: [
      "Water-resistant material",
      "Laptop compartment",
      "Multiple pockets",
      "Ergonomic design",
      "6 months warranty"
    ]
  }
];

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === parseInt(id || "0"));

  const formatPrice = (price: number) => {
    return price.toLocaleString('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    });
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Product not found</h2>
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 mb-8"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back to Products
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
            <p className="text-gray-600 mb-6">{product.description}</p>
            <p className="text-3xl font-bold text-indigo-600 mb-6">{formatPrice(product.price)}</p>

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Features</h2>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <button className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}