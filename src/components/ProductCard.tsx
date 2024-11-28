import React from 'react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useAuth } from '../context/AuthContext';
import { ShoppingCart, Star, Heart } from 'lucide-react';
import { toast } from 'react-hot-toast';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { dispatch: cartDispatch } = useCart();
  const { state: wishlistState, addToWishlist, removeFromWishlist } = useWishlist();
  const { isAuthenticated } = useAuth();

  const isInWishlist = wishlistState.items.some(item => item.id === product.id);

  const discountedPrice = product.discount
    ? product.price * (1 - product.discount / 100)
    : product.price;

  const handleWishlistClick = () => {
    if (!isAuthenticated) {
      toast.error('Please login to add items to your wishlist');
      return;
    }

    if (isInWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        <button
          onClick={handleWishlistClick}
          className={`absolute top-2 right-2 p-2 rounded-full ${
            isInWishlist 
              ? 'bg-red-50 text-red-600' 
              : 'bg-gray-50 text-gray-600 hover:text-red-600'
          }`}
        >
          <Heart className={`h-5 w-5 ${isInWishlist ? 'fill-current' : ''}`} />
        </button>
        {product.discount && (
          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-semibold">
            -{product.discount}%
          </div>
        )}
        {product.stock <= 5 && (
          <div className="absolute bottom-2 left-2 bg-yellow-500 text-white px-2 py-1 rounded-full text-sm font-semibold">
            Low Stock
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-indigo-600 uppercase">
            {product.category}
          </span>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
          </div>
        </div>
        <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
        <p className="mt-1 text-gray-500 text-sm line-clamp-2">{product.description}</p>
        {product.features && (
          <div className="mt-2 flex flex-wrap gap-1">
            {product.features.map((feature, index) => (
              <span
                key={index}
                className="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full"
              >
                {feature}
              </span>
            ))}
          </div>
        )}
        <div className="mt-4 flex items-center justify-between">
          <div>
            <span className="text-xl font-bold text-indigo-600">
              ${discountedPrice.toFixed(2)}
            </span>
            {product.discount && (
              <span className="ml-2 text-sm text-gray-500 line-through">
                ${product.price.toFixed(2)}
              </span>
            )}
          </div>
          <button
            onClick={() => cartDispatch({ type: 'ADD_TO_CART', payload: product })}
            disabled={product.stock === 0}
            className={`flex items-center space-x-1 px-4 py-2 rounded-md transition-colors ${
              product.stock === 0
                ? 'bg-gray-300 cursor-not-allowed'
                : 'bg-indigo-600 text-white hover:bg-indigo-700'
            }`}
          >
            <ShoppingCart className="h-4 w-4" />
            <span>{product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};