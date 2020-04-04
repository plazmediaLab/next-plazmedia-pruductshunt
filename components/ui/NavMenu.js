import React, { useContext } from 'react';
import Link from 'next/link';
// Context
import { FirebaseContex } from '../../Firebase';

const NavMenu = () => {

  const { userInfo } = useContext(FirebaseContex);

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
      {userInfo && 
        <li>
          <Link href="/new-product">
            <a className="nav-link">New Product</a>
          </Link>  
        </li>
      }
    </ul>
  );
};

export default NavMenu;