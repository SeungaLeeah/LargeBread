import React, { memo } from 'react';
import GlobalStyles from './GlobalStyles';
import LargeBread from './pages/LargeBread';

const App = memo(() => {
  return (
    <div>
      <GlobalStyles/>
      <LargeBread/>
    </div>
  );
});

export default App;