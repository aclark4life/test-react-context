// MyProvider.js
import React, { useState } from 'react';
import MyContext from './MyContext.js';

const MyProvider = ({ children }) => {
  const [myData, setMyData] = useState('Default Value');

  return (
    <MyContext.Provider value={{ myData, setMyData }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
