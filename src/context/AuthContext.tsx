import React, { createContext, useContext, useState } from 'react';
import { User } from '../types';
import { toast } from 'react-hot-toast';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, name: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string) => {
    try {
      // Simulate API call
      const displayName = email.split('@')[0];
      const mockUser = {
        id: Math.random().toString(36).substr(2, 9),
        name: displayName.charAt(0).toUpperCase() + displayName.slice(1),
        email,
        avatar: `https://api.dicebear.com/7.x/initials/svg?seed=${displayName}`
      };
      setUser(mockUser);
      toast.success(`Welcome back, ${mockUser.name}!`);
    } catch (error) {
      toast.error('Login failed. Please try again.');
      throw error;
    }
  };

  const signup = async (email: string, password: string, name: string) => {
    try {
      // Simulate API call
      const mockUser = {
        id: Math.random().toString(36).substr(2, 9),
        name,
        email,
        avatar: `https://api.dicebear.com/7.x/initials/svg?seed=${name}`
      };
      setUser(mockUser);
      toast.success(`Welcome, ${name}!`);
    } catch (error) {
      toast.error('Signup failed. Please try again.');
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    toast.success('Logged out successfully');
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};