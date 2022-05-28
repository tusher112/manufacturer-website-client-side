import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './pages/Shared/Navbar';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import SignUp from './pages/Login/SignUp';
import Notfound from './pages/404notFound/Notfound';
import Blogs from './pages/Blogs/Blogs';
import MyPortfolio from './pages/MyPortfolio/MyPortfolio';
import Dashboard from './pages/Dashboard/Dashboard';
import RequireAuth from './pages/Login/RequireAuth';

function App() {
  return (
    <div className='max-w-screen-2xl mx-auto'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path="dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} > </Route>

        <Route path='/myportfolio' element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
