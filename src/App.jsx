import Test from '@/Test';
import Main from '@/pages/Main';
import { createContext } from 'react';

import { Routes, Route } from 'react-router-dom';

export const AppContext = createContext();

const App = () => {
  return (
    <AppContext.Provider value={{ getEditorText: null }}>
      <Routes>
        <Route path="/zenpad/" element={<Main />} />
        <Route path="/zenpad/test" element={<Test />} />
      </Routes>
    </AppContext.Provider>
  );
};

export default App;
