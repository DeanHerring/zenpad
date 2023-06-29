import Test from '@/Test';
import Main from '@/pages/Main';
import { Routes, Route } from 'react-router-dom';
import ThemeProvider from '@/components/Other/ThemeProvider';

const App = () => {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/zenpad/" element={<Main />} />
        <Route path="/zenpad/test" element={<Test />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
