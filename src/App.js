
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ListComics from './components/ListComics';
import Comic from './components/Comic';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ListComics></ListComics>}></Route>
          <Route path='/comic/:id' element={<Comic></Comic>}></Route>
        </Routes>
      </BrowserRouter>    
    </div>
  );
}

export default App;
