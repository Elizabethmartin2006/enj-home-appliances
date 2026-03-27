import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Addproduct from './components/Addproduct';
import Getproduct from './components/Getproduct';
import Mpesa from './components/Mpesa';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>

    <div className="App">
      <header className="App-header">
        <Navbar/>
      </header>

      

      <Routes>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/addproduct' element={<Addproduct/>}/>
        <Route path='/getproduct' element={<Getproduct/>}/>
        <Route path='/mpesa' element={<Mpesa/>}/>
        
      </Routes>
      
    </div>
    </BrowserRouter>
    
  );
}

export default App;
