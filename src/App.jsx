import Test from '@/Test';
import Main from '@/pages/Main';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path="/zenpad/" element={<Main />} />
      <Route path="/zenpad/test" element={<Test />} />
    </Routes>
  );
};

export default App;
