import React from 'react';
import { useAuth } from '../context/AuthContext';
import { LogIn, UserPlus, LogOut, ShoppingBag } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { LoginForm } from '../components/LoginForm';
import { SignupForm } from '../components/SignupForm';

export const Profile: React.FC = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const [showLoginForm, setShowLoginForm] = React.useState(false);
  const [showSignupForm, setShowSignupForm] = React.useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const displayName = user?.name?.split('@')[0];

  if (!isAuthenticated) {
    return (
      <div className="max-w-md mx-auto mt-10 px-4">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Welcome to ShopHub</h2>
          
          {showLoginForm ? (
            <LoginForm onClose={() => setShowLoginForm(false)} />
          ) : showSignupForm ? (
            <SignupForm onClose={() => setShowSignupForm(false)} />
          ) : (
            <div className="space-y-4">
              <button
                onClick={() => setShowLoginForm(true)}
                className="w-full flex items-center justify-center space-x-2 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
              >
                <LogIn className="h-5 w-5" />
                <span>Login</span>
              </button>
              <button
                onClick={() => setShowSignupForm(true)}
                className="w-full flex items-center justify-center space-x-2 bg-white text-indigo-600 border border-indigo-600 px-4 py-2 rounded-md hover:bg-indigo-50 transition-colors"
              >
                <UserPlus className="h-5 w-5" />
                <span>Sign Up</span>
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center space-x-4 mb-6">
          <img
            src={user.avatar}
            alt={displayName}
            className="h-16 w-16 rounded-full"
          />
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{displayName}</h2>
            <p className="text-gray-600">{user.email}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <Link
            to="/orders"
            className="flex items-center space-x-2 p-4 rounded-lg border hover:bg-gray-50 transition-colors"
          >
            <ShoppingBag className="h-6 w-6 text-indigo-600" />
            <div>
              <h3 className="font-semibold">My Orders</h3>
              <p className="text-sm text-gray-600">View your order history</p>
            </div>
          </Link>
        </div>

        <button
          onClick={handleLogout}
          className="mt-6 flex items-center space-x-2 text-red-600 hover:text-red-700 transition-colors"
        >
          <LogOut className="h-5 w-5" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};