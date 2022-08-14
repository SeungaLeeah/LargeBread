import React, { memo } from 'react';
import { Routes, Route } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import LargeBread from './pages/LargeBread';
import ItemList from './components/ItemList';
import StartPage from './pages/StartPage';

const App = memo(() => {
  return (
    <div>
      <GlobalStyles/>
      <StartPage/>
      <Routes>
        <Route path='/' element={<StartPage/>}/>
      
      </Routes>
    </div>
  );
});

export default App;