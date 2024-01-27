import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './Context/Layout/Page/Home';
import Pagenotfound from './Context/Layout/Page/Pagenotfound';
import About from './Context/Layout/Page/About';
import Contact from './Context/Layout/Page/Contact';
import Policy from './Context/Layout/Page/Policy';
import Register from './Context/Layout/Page/Auth/Register';
import Login from './Context/Layout/Page/Auth/Login';
import Dashboard from './Context/Layout/Page/user/Dashboard';
import PrivateRoute from './Context/Routes/Private';
import ForgotPassword from './Context/Layout/Page/Auth/ForgotPassword';
import AdminRoute from './Context/Routes/AdminRoutes';
import AdminDashboard from './Context/Layout/Page/Admin/AdminDashboard';
import Createcategory from './Context/Layout/Page/Admin/Createcategory';
import CraeteProducts from './Context/Layout/Page/Admin/CraeteProducts';
import CreateUser from './Context/Layout/Page/Admin/CreateUser';
import Orders from './Context/Layout/Page/user/Orders';
import Profile from './Context/Layout/Page/user/Profile';
import Products from './Context/Layout/Page/Admin/Products';
import UpadeProduct from './Context/Layout/Page/Admin/UpadeProduct';
import Searchs from './Context/Layout/Page/Searchs';
import ProductDetails from './Context/Layout/Page/ProductDetails';
import Categories from './Context/Layout/Page/Categories';
import CategoryProduct from './Context/Layout/Page/CategoryProduct';
import CartPage from './Context/Layout/Page/CartPage';
import AdminOrders from './Context/Layout/Page/Admin/AdminOrders';


function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/product/:slug' element={<ProductDetails/>}/>
      <Route path='/categories' element={<Categories/>}/>
      <Route path='/cart' element={<CartPage/>}/>
      <Route path='/categoriy/:slug' element={<CategoryProduct/>}/>
      <Route path='/search' element={<Searchs/>}/>
      <Route path='/dashboard' element={<PrivateRoute/>}>
      <Route path='user' element={<Dashboard/>}/>
      <Route path='user/profile' element={<Profile/>}/>
      <Route path='user/orders' element={<Orders/>}/>
      </Route>
      <Route path='/dashboard' element={<AdminRoute/>}>
        <Route path='admin' element={<AdminDashboard/>}/>
        <Route path='admin/create-category' element={<Createcategory/>}/>
        <Route path='admin/create-product' element={<CraeteProducts/>}/>
        <Route path='admin/product/:slug' element={<UpadeProduct/>}/>
        <Route path='admin/product' element={<Products/>}/>
        <Route path='admin/create-user' element={<CreateUser/>}/>
        <Route path='admin/orders' element={<AdminOrders/>}/>
      </Route>
      <Route path='/register' element={<Register/>}/>
      <Route path='/forgot-password' element={<ForgotPassword/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/policy' element={<Policy/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='*' element={<Pagenotfound/>}/>
    </Routes>
    </>
  );
};

export default App;
