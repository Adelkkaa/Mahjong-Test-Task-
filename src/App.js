import React from 'react';
import { Main } from './components/Main';

const App = () => {
  const arr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 77, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
    13, 14, 15, 77,
  ];
  arr.sort(() => Math.floor(Math.random() - 0.5));
  return <Main arr={arr} />;
};

export default App;
