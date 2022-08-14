import React, { memo } from 'react';
import { Routes, Route } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import LargeBread from './pages/LargeBread';
import StartPage from './pages/StartPage';

const App = memo(() => {
  return (
    <div>
      <GlobalStyles/>
      <Routes>
        <Route path='/' exapt={true} element={<StartPage/>}/>
        <Route path='/product/:category_id' element={<LargeBread/>}/>
      </Routes>
    </div>
  );
});

export default App;