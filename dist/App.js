// App.js
import React from 'react';
import MyProvider from './MyProvider.js';
import MyComponent from './MyComponent.js';
const App = () => {
  return /*#__PURE__*/React.createElement(MyProvider, null, /*#__PURE__*/React.createElement("p", null, "Hello, world!"), /*#__PURE__*/React.createElement(MyComponent, null));
};
export default App;