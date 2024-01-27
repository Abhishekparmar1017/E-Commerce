import React from 'react';
import {NavLink,Link} from 'react-router-dom';
import {FaShopify} from 'react-icons/fa';
import { useAuth } from '../auth';
import SearchInput from '../Form/SearchInput';
import useCategory from '../../hooks/useCategory';
import { useCart } from '../cart';
import { Avatar, Badge } from 'antd';

const Header = () => {
  const [auth,setAuth] = useAuth();
  const [cart] = useCart();
  const categories = useCategory(); 
  const handleLogout = () => {
    setAuth({
      ...auth, 
      user:null,
      token:''
    });
    localStorage.removeItem('auth');
    alert('Logout Successfully ');
  };
  return (
    <div>
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" 
    aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <Link className="navbar-brand" to="/"><FaShopify/>E-come</Link>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <SearchInput/>
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="/">Home</NavLink>
        </li>

        <li className="nav-item dropdown">
  <Link className="nav-link dropdown-toggle" to={'/categories'} id="navbarDropdown" 
  data-bs-toggle="dropdown" >
  categories
  </Link>
  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
    <li >
      <Link className="dropdown-item" to={'/categories'}>All Categories</Link>
    </li>
  {categories?.map((c) => (
     <li>
      <Link className="dropdown-item" to={`/categoriy/${c.slug}`}>
      {c.name}
      </Link>
     </li>
 
  ))}
   </ul>
</li>

       {
        !auth.user ? (<>
         <li className="nav-item">
          <NavLink className="nav-link" to="/register">Signup</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/login">Login</NavLink>
        </li>
        </>) :(<>
          <div>
  <li className="nav-item dropdown">
    <Link className="nav-link dropdown-toggle"id="navbarDropdown" role="button" data-bs-toggle="dropdown" 
    aria-expanded="false">
      {auth?.user?.name}
    </Link>
    <ul className="dropdown-menu">
      <li>
        <NavLink className="dropdown-item" to={`/dashboard/${auth?.user?.role === 1 ? 'admin' : 'user'}`}>
          Dashboard</NavLink>
        </li>
        <li><Link class="dropdown-item" onclick={handleLogout} to="/login">LogOut</Link></li>
     
    </ul>
   
  </li>
</div>
        </>)
       }
        <li className="nav-item">
         <Badge count ={cart?.length} showZero>
         <NavLink className="nav-link" to="/cart">
          cart
          </NavLink>
         </Badge>
        </li>
      </ul>
      
    </div>
  </div>
</nav>

    </div>
  );
};

export default Header;