import React from 'react';
import { Link } from 'react-router-dom';
 
 
function HomePage(props) {
    return (
        <>
         {/* <MainNavbar /> */}
          <div>
            <h1>Welcome to Blogging app</h1>
            <Link to="/"></Link>
            <h3>Click below to begin</h3>
            <button><Link to='/Login'>Login</Link></button>
            <button><Link to='/Register'>Register User</Link></button>
          </div>  
         {/* <MainFooter />   */}
        </>
    );
}
 
export default HomePage;