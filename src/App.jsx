import React, { memo } from 'react';
import { Routes, Route } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import LargeBread from './pages/LargeBread';
import ItemList from './components/ItemList';

const App = memo(() => {
  return (
    <div>
      <GlobalStyles/>
      <LargeBread/>
      <Routes>
        <Route path='/product/:category_id' element={<ItemList/>}/>
      </Routes>
    </div>
  );
});

export default App;