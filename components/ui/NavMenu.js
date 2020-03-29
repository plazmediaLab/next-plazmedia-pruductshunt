import React, { Fragment } from 'react';
import Link from 'next/link'

const NavMenu = () => {
  return (
    <ul className="navbar-actions_item">
      <li>
        <Link href="/">
          <a className="nav-link select dial">Home</a>
        </Link>
      </li>
      <li>
        <Link href="/populars">
          <a className="nav-link">Populars</a>
        </Link>
      </li>
      <li>
        <Link href="/new-product">
          <a className="nav-link">New Product</a>
        </Link>  
      </li>
    </ul>
  );
};

export default NavMenu;