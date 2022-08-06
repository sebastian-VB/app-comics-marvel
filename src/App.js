
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ListComics from './components/ListComics';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ListComics></ListComics>}></Route>
        </Routes>
      </BrowserRouter>    
    </div>
  );
}

export default App;
