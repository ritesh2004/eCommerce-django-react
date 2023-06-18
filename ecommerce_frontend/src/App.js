import logo from './logo.svg';
import './App.css';
import Navcom from './Navcom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Products from './Products';
import Addproducts from './Addproducts';
import Details from './Details';
import Update from './Update';
import Home from './Home';
import Footer from './Footer';


function App() {
  return (
    <BrowserRouter>
      <Navcom/>
      <Routes>
        <Route  path='/' Component={Home} />
        <Route  path='/products' Component={Products} />
        <Route path='/addproducts' Component={Addproducts} />
        <Route path='/:id/' Component={Details} />
        <Route path='/:id/update' Component={Update} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
