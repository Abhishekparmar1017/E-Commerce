import React from 'react';
import {Link} from 'react-router-dom';
function Footer() {
  return (
    <div className='footer'>
      <h1 className="text-center">All Right Reserved By &copy; Abhi!!...</h1>
      <p className="text-center mt-2">
        <Link to="/about">About</Link>|
        <Link to="/contact">contact</Link>|
        <Link to="/policy">Privacy policy</Link>
        </p>
        
    </div>
  )
}

export default Footer
