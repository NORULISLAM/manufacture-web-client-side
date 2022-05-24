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


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="about" element={<About></About>} />
        <Route path="myprotfolio" element={<MyPortfolio></MyPortfolio>} />
        <Route path="Purchase" element={<Purchase></Purchase>} />
        <Route path='/login' element={<Loing></Loing>}></Route>
        <Route path='/logout' element={<LogOut></LogOut>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
