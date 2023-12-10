// MyComponent.js
import React, { useContext } from 'react';
import MyContext from './MyContext.js';

const MyComponent = () => {
  const { myData, setMyData } = useContext(MyContext);

  return (
    <div>
      <p>Data from Context: {myData}</p>
      <button onClick={() => setMyData('New Value')}>Change Value</button>
    </div>
  );
};

export default MyComponent;
