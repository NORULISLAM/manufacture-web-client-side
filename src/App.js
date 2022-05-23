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
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="about" element={<About></About>} />
        <Route path="myprotfolio" element={<MyPortfolio></MyPortfolio>} />
        <Route path="Purchase" element={<Purchase></Purchase>} />
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
