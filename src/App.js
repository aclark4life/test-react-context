// App.js
import React from 'react';
import MyProvider from './MyProvider.js';
import MyComponent from './MyComponent.js';

const App = () => {

  return (
    <MyProvider>
        <p>Hello, world!</p>
        <MyComponent />
    </MyProvider>
  );
};

export default App;
