// MyComponent.js
import React, { useContext } from 'react';
import MyContext from './MyContext.js';
const MyComponent = () => {
  const {
    myData,
    setMyData
  } = useContext(MyContext);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, "Data from Context: ", myData), /*#__PURE__*/React.createElement("button", {
    onClick: () => setMyData('New Value')
  }, "Change Value"));
};
export default MyComponent;