import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <nav class="nav-bar nav-bar-light bg-2" id="navBar_2">
      <ul class="navbar-components">
        <li class="logo" title="The name of the website">
          <a href="#!">
            <i class="a-isotype-filling"></i>
            <span>PLAZreset</span>
          </a>
        </li>
        <li class="toggle" title="Menu">
          <a href="#!">
            <i class="a-dehaze"></i>
          </a>
        </li>
        <li class="toggle-hide">
          <div class="menu-items">
            <Link href="/">
              <a class="item item-select" >Home</a>
            </Link>
            <Link href="/aboutus">
              <a class="item">About</a>
            </Link>
            <a class="item btn btn-s-c btn-secondary" href="#!">PLAZreset v1.0.0 <i class="a-cloud-download"></i></a>
          </div>
          <div class="search-items">
            <form class="search-conponents" action="search.php">
              <input class="search-input" type="search" placeholder="Search..." />
              <button class="search-button btn-s btn-br btn-primary">
                <i class="a-search"></i>
              </button>
            </form>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Header;