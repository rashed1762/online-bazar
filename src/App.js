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
import Cartcomp from './Cart/Cartcomp';
import AdminDashboard from './Dashbord/AdminDashboard';
import Alluser from './Dashbord/Alluser';
import Register from './pages/Login/Register';
import RequireAuth from './pages/Login/RequireAuth';
import Prodetails from './pages/Home/Prodetails';

function App() {
  return (
    <div >
      <Navcomp></Navcomp>
      <Routes>
        <Route path='/' element={<Homecomp></Homecomp>}></Route>
        <Route path='/:productId' element={<Prodetails></Prodetails>}></Route>
        <Route path='/home' element={<Homecomp></Homecomp>}></Route>
        <Route path='/home/:productId' element={<Prodetails></Prodetails>}></Route>
        <Route path='/about' element={<Aboutcomp></Aboutcomp>}></Route>
        <Route path='/shop' element={
          <RequireAuth>
            <Shopcomp></Shopcomp>
          </RequireAuth>
        }></Route>
        <Route path='/shop/:productId'></Route>
        <Route path='/contact' element={<Contactcomp></Contactcomp>}></Route>
        <Route path='/dashboard' element={<AdminDashboard></AdminDashboard>}>
        <Route path='user' element={<Alluser></Alluser>}></Route>
        <Route path='add' element={<AddProductcomp></AddProductcomp>}></Route>


        </Route>
        <Route path='/login' element={<Logincomp></Logincomp>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/cart' element={<Cartcomp></Cartcomp>}></Route>
        
        <Route path='/offer' element={<Offercomp></Offercomp>}></Route>
        
      </Routes>

    </div>
  );
}

export default App;
