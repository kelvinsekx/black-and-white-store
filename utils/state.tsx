import React, { useEffect, useState } from 'react';

import { TProductInterface } from './util';
import products from './../products.json';
import { Provider } from './context';

function AppWrapper({ children }: { children: JSX.Element }) {
  const [state, setState] = useState<{
    cart: any;
    products: any;
    showCart: boolean;
  }>({
    cart: {},
    products: [],
    showCart: false,
  });

  useEffect(function onComponentMount() {
    const init = async () => {
      setState((prevState) => ({
        ...prevState,
        products: products.data,
      }));
    };
    init();
  }, []);

  const getStateByCategory = (category: string) => {
    if (category.toLowerCase() === 'all')
      return setState({
        ...state,
        products: products.data,
      });
    const newState = products.data.filter(
      (item) => item.category === category,
    );
    return setState({
      ...state,
      products: newState,
    });
  };

  const addToCart = (cartItem: TProductInterface) => {
    const { cart } = { ...state };
    const { name } = cartItem;

    if (cart[name]) {
      cart[name].stock++;
    } else {
      cart[name] = cartItem;
    }

    if (cart[name].amount > cart[name].stock) {
      cart[name].amount = cart[name].stock;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    setState({ ...state, cart });
  };

  const clearCart = () => {
    let cart = {};
    localStorage.removeItem('cart');
    setState({ ...state, cart });
  };

  const setCart = () => {
    setState((prev) => ({
      ...prev,
      showCart: !prev.showCart,
    }));
  };

  return (
    <Provider
      value={{
        ...state,
        addToCart,
        clearCart,
        getStateByCategory,
        setCart,
      }}
    >
      {children}
    </Provider>
  );
}

export default AppWrapper;
