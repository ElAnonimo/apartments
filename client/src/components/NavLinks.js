import React from 'react';
import {Link, withRouter} from 'react-router-dom';

const NavLinks = () => {
  return (
    <header className='header'>
      <div className='container-lg'>
        <Link to='/' className='header-link'>Home Page</Link>
        <Link to='/search' className='header-link'>Search</Link>
      </div>
    </header>
  );
};

export default withRouter(NavLinks);