import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import SignUp from './components/SignUp'; 

import { BrowserRouter, Route, Routes} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Nav/>
          <Routes>
          <Route path='/' element={<h1>hello</h1>}></Route>
          <Route path='/add' element={<h1>add</h1>}></Route>
          <Route path='/update' element={<h1>update</h1>}></Route>
          <Route path='/logout' element={<h1>logout</h1>}></Route>
          <Route path='/profile' element={<h1>profile</h1>}></Route>
          <Route path='/signup' element={<SignUp/>}></Route>
          </Routes>
          <h1>E-dashboard</h1>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;