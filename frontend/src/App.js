import { Routes, Route } from 'react-router-dom';
import './App.css';
import './grid.css';
import './Add.css';
import Home from './components/Home';
import Product from './components/product/Product';
import AddProduct from './components/product/AddProduct';
import EditProduct from './components/product/EditProduct';
import Sidebar from './components/Sidebar';


function App() {
 
  return (

<div className='app'>

<>
<Sidebar/>
<Routes>

 <Route path='/' element={<Home/>}/>
 <Route path='/product' element={<Product/>}/>
 <Route path='/addProduct' element={<AddProduct/>}/>
 <Route path='/editProduct' element={<EditProduct/>}/>

</Routes>
</>



</div>


 
  );
}

export default App;