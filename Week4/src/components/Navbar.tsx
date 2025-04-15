import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <ShoppingCart className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">ShopHub</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md">Home</Link>
            <Link to="/products" className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md">Products</Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                to="/"
                className="block text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/products"
                className="block text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Products
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}