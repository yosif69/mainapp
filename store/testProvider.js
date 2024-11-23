import React, { useState } from 'react';
import TestContext from './testContext';
const TestProvider = props => {

  //1
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState([]);

  //2
  const contextValue = {
    //3
    cart,
    setCart,
    user, setUser
  }

  return (
    <TestContext.Provider
      value={contextValue}
    >
      {props.children}
    </TestContext.Provider>
  );
};

export default TestProvider;
