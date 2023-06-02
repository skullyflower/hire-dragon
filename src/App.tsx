import { Routes, Route } from 'react-router-dom';
import { HireMe } from './HireMe';
import { Calculator } from './Calculator';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<HireMe />} />
        <Route path='/calc' element={<Calculator />} />
        <Route path='*' element={<HireMe />} />
      </Routes>
    </div>
  );
}

export default App;
