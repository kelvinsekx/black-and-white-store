import React, { useEffect, useState } from 'react';

import { TProductInterface, getData, getCategories } from './util';
import { Provider } from './context';

function AppWrapper({ children }: { children: JSX.Element }) {
  const [state, setState] = useState<{
    cart: any;
    products: any;
    showCart: boolean;
    categories: string[];
  }>({
    cart: {},
    products: [],
    showCart: false,
    categories: [],
  });

  useEffect(function onComponentMount() {
    const init = () => {
      getData().then((data) => {
        setState((prevState) => ({
          ...prevState,
          products: data,
        }));
      });
      getCategories().then((data) => {
        setState((prev) => ({
          ...prev,
          categories: data,
        }));
      });
    };
    init();
  }, []);

  const getStateByCategory = (category: string) => {
    getData()
      .then((data) =>
        data.filter((item) => item.category === category),
      )
      .then((res) => {
        setState({
          ...state,
          products: res,
        });
      });
  };

  const addToCart = (cartItem: TProductInterface) => {
    const { cart } = { ...state };
    const { title } = cartItem;

    if (cart[title]) {
      cart[title].stock++;
    } else {
      cart[title] = cartItem;
    }

    if (cart[title].amount > cart[title].stock) {
      cart[title].amount = cart[title].stock;
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
