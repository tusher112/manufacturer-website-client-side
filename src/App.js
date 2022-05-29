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
import Users from './pages/Dashboard/Users';
import MyOrder from './pages/Dashboard/MyOrder';
// import RequireAdmin from './pages/Login/RequireAdmin';
import MyProfile from './pages/Dashboard/MyProfile';
import ManageAllOrders from './pages/Dashboard/ManageAllOrders';
import ManageAllProduct from './pages/Dashboard/ManageAllProduct';
import AddProduct from './pages/Dashboard/AddProduct';
import MyReview from './pages/Dashboard/MyReview';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className='max-w-screen-2xl mx-auto'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        
        <Route path="/dashboard" element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
        <Route index element={<MyProfile></MyProfile>}></Route>
        <Route path="order" element={<MyOrder></MyOrder>}></Route>
        <Route path="review" element={<MyReview></MyReview>}></Route>
        <Route path="users" element={<Users></Users>}></Route>
        <Route path="order" element={<MyOrder></MyOrder>}></Route>
        <Route path="addproduct" element={<AddProduct></AddProduct>}></Route>
        <Route path="manageorder" element={<ManageAllOrders></ManageAllOrders>}></Route>
        <Route path="manageproduct" element={<ManageAllProduct></ManageAllProduct>}></Route>

        </Route>


        <Route path='/myportfolio' element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
