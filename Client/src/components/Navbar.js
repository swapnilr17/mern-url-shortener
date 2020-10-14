import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  return (
    <div>
<nav className="navbar navbar-light bg-dark">
  <a className="navbar-brand text-light" href="/">
    <img src="https://img.icons8.com/flat_round/64/000000/synchronize.png" width="30" height="30" className="d-inline-block align-top mr-3" alt=""/>
    URL SHORTENER
  </a>
</nav>
    </div>
  );
}

export default Navbar;
