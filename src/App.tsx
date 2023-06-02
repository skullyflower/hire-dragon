import { Routes, Route } from 'react-router-dom';
import { HireMe } from './HireMe';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<HireMe />} />
        <Route path='*' element={<HireMe />} />
      </Routes>
    </div>
  );
}

export default App;
