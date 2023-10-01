import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './Nav'
import Books from './Books';
import Add from './Add';
import Update from './Update';
function App() {
  return (
    <div className="App">  
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path='/' element={<Books/>}></Route>
      <Route path='/add' element={<Add></Add>}></Route>
      <Route path='/update/:id' element={<Update></Update>}></Route>
    </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
