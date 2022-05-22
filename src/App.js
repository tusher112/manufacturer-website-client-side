import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './pages/Shared/Navbar';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';

function App() {
  return (
    <div className='max-w-screen-2xl mx-auto'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>

      </Routes>
    </div>
  );
}

export default App;
