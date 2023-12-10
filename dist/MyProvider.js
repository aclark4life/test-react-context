// MyProvider.js
import React, { useState } from 'react';
import MyContext from './MyContext.js';
const MyProvider = ({
  children
}) => {
  const [myData, setMyData] = useState('Default Value');
  return /*#__PURE__*/React.createElement(MyContext.Provider, {
    value: {
      myData,
      setMyData
    }
  }, children);
};
export default MyProvider;