import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navcomp from './pages/Shared/Navcomp';
import Homecomp from './pages/Home/Homecomp';
import Aboutcomp from './pages/About/Aboutcomp';
import Contactcomp from './pages/Contact/Contactcomp';
import Logincomp from './pages/Login/Logincomp';
import Offercomp from './pages/Offer/Offercomp';
import Shopcomp from './pages/Shop/Shopcomp';
import AddProductcomp from './pages/AddProduct/AddProductcomp';

function App() {
  return (
    <div >
      <Navcomp></Navcomp>
      <Routes>
        <Route path='/' element={<Homecomp></Homecomp>}></Route>
        <Route path='/about' element={<Aboutcomp></Aboutcomp>}></Route>
        <Route path='/shop' element={<Shopcomp></Shopcomp>}></Route>
        <Route path='/contact' element={<Contactcomp></Contactcomp>}></Route>
        <Route path='/login' element={<Logincomp></Logincomp>}></Route>
        <Route path='/offer' element={<Offercomp></Offercomp>}></Route>
        <Route path='/add' element={<AddProductcomp></AddProductcomp>}></Route>
      </Routes>

    </div>
  );
}

export default App;
