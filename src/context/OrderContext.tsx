import React, { createContext, useContext, useReducer } from 'react';
import { Order, CartItem, Address } from '../types';
import { v4 as uuidv4 } from 'uuid';
import { useAuth } from './AuthContext';
import { toast } from 'react-hot-toast';

interface OrderState {
  orders: Order[];
}

type OrderAction =
  | { type: 'CREATE_ORDER'; payload: { items: CartItem[], total: number, shippingAddress: Address, paymentMethod: string } }
  | { type: 'UPDATE_ORDER_STATUS'; payload: { orderId: string; status: Order['status'] } };

const OrderContext = createContext<{
  state: OrderState;
  dispatch: React.Dispatch<OrderAction>;
  placeOrder: (items: CartItem[], total: number, shippingAddress: Address, paymentMethod: string) => Promise<string>;
} | null>(null);

const orderReducer = (state: OrderState, action: OrderAction): OrderState => {
  switch (action.type) {
    case 'CREATE_ORDER': {
      const newOrder: Order = {
        id: uuidv4(),
        userId: '1', // This would come from auth context in a real app
        items: action.payload.items,
        total: action.payload.total,
        status: 'pending',
        shippingAddress: action.payload.shippingAddress,
        paymentMethod: action.payload.paymentMethod,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      return {
        ...state,
        orders: [...state.orders, newOrder],
      };
    }
    case 'UPDATE_ORDER_STATUS': {
      return {
        ...state,
        orders: state.orders.map(order =>
          order.id === action.payload.orderId
            ? { ...order, status: action.payload.status, updatedAt: new Date().toISOString() }
            : order
        ),
      };
    }
    default:
      return state;
  }
};

export const OrderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(orderReducer, { orders: [] });
  const { user } = useAuth();

  const placeOrder = async (
    items: CartItem[],
    total: number,
    shippingAddress: Address,
    paymentMethod: string
  ): Promise<string> => {
    if (!user) {
      throw new Error('User must be logged in to place an order');
    }

    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Create order
      const orderPayload = { items, total, shippingAddress, paymentMethod };
      dispatch({ type: 'CREATE_ORDER', payload: orderPayload });

      // Simulate order confirmation
      toast.success('Order placed successfully!');
      
      return state.orders[state.orders.length - 1].id;
    } catch (error) {
      toast.error('Failed to place order');
      throw error;
    }
  };

  return (
    <OrderContext.Provider value={{ state, dispatch, placeOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error('useOrder must be used within an OrderProvider');
  }
  return context;
};