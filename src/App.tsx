import { Routes, Route } from 'react-router-dom';
import { HireMe } from './HireMe';
import { College } from './College';
import { Resume } from './Resume';
import { Calculator } from './Calculator';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<HireMe />} />
        <Route path='/calc' element={<Calculator />} />
        <Route path='/college' element={<College />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='*' element={<HireMe />} />
      </Routes>
    </div>
  );
}

export default App;
