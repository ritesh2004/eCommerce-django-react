import './App.css';
import Navcom from './Navcom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Products from './Products';
import Addproducts from './Addproducts';
import Details from './Details';
import Update from './Update';
import Home from './Home';
// import Footer from './Footer';
import Allproducts from './Allproducts';
import Showproducts from './Showproduct';
import About from './About';
import Contact from './Contact';
import Login from './Login';
import Signin from './Signin';
import { Authprovider } from './context/Authcontext';
import PrivateRoute from './utils/PrivateRoute';
import Address from './Address';
import UpdateAddress from './UpdateAddress';
import Carts from './Carts';


function App() {
  return (
    <BrowserRouter>
    <Authprovider>
      <Navcom/>
      <Routes>
        <Route  path='/' Component={Home} />
        <Route path='/signin' Component={Signin} />
        <Route Component={PrivateRoute}>
        <Route  path='/about' Component={About} />
        <Route  path='/contact' Component={Contact} />
        <Route  path='/products' Component={Products} />
        <Route  path='/allproducts' Component={Allproducts} />
        <Route path='/addproducts' Component={Addproducts} />
        <Route path='details/:id/' Component={Details} />
        <Route path='/:id/' Component={Showproducts} />
        <Route path='/:id/update' Component={Update} />
        <Route path='/address' Component={Address} />
        <Route path='/login' Component={Login} />
        <Route path='/updateaddress/:id/' Component={UpdateAddress} />
        <Route path='/carts' Component={Carts} />
        </Route>
      </Routes>
      {/* <Footer /> */}
      </Authprovider>
    </BrowserRouter>
  );
}

export default App;
