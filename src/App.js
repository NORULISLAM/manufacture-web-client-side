import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Home/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Footer from './Pages/Home/Shared/Footer/Footer';
import NotFound from './Pages/NotFound/NotFound';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';
import Purchase from './Pages/Purchase/Purchase';
import LogOut from './Pages/LogOut/LogOut';
import Loing from './Pages/Login/Loing';
import Blog from './Pages/Blog/Blog';
import Dashboard from './Pages/Dashboard/Dashboard';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import MyOrder from './MyOrder/MyOrder';
import MyProfile from './MyProfile/MyProfile';
import AddReview from './AddReview/AddReview';
import SignUp from './Pages/LogOut/SignUp';
import ManageOrder from './Pages/Dashboard/ManageOrder';
import RequireAdmin from './hooks/RequireAdmin';
import AddProduct from './Pages/AddProduct/AddProduct';
import { ToastContainer } from 'react-toastify';
import ManageProduct from './Pages/AddProduct/ManageProduct/ManageProduct';
import Payment from './Pages/Dashboard/Payment';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/home" element={<Home></Home>} />
        <Route path="about" element={<About></About>} />
        <Route path="myprotfolio" element={<MyPortfolio></MyPortfolio>} />

        <Route path="dashboard" element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>
          <Route index element={<MyOrder></MyOrder>}></Route>
          <Route path='myprofile' element={<MyProfile></MyProfile>}></Route>
          <Route path='addreview' element={<AddReview></AddReview>}></Route>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
          <Route path='manageallorders' element={<RequireAdmin><ManageOrder></ManageOrder>
          </RequireAdmin>}></Route>
          <Route path='addnewproduct' element={<RequireAdmin><AddProduct></AddProduct>
          </RequireAdmin>}></Route>
          <Route path='manageproduct' element={<RequireAdmin><ManageProduct></ManageProduct>
          </RequireAdmin>}></Route>
        </Route>
        <Route path="/Purchase/:serviceId" element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>
        }></Route>

        <Route path='/login' element={<Loing></Loing>}></Route>
        {/* <Route path='/logout' element={<LogOut></LogOut>}></Route> */}
        <Route path='/singup' element={<SignUp></SignUp>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
