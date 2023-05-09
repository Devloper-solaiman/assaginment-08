import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Blogs from './Pages/Blogs/Blogs';
import Review from './Pages/Review/Review';
import Dashboard from './Pages/Dashboard/Dashboard';
import About from './Pages/About/About';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/review' element={<Review></Review>}></Route>
        <Route path='/dashbord' element={<Dashboard></Dashboard>}></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>
    </>
  );
}

export default App;
