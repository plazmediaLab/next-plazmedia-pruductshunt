import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
// components
import NavMenu from '../ui/NavMenu';
import SearchCom from '../ui/SearchCom';

const colors = styled.div`
  :root{
    --new-primary:    #ed4300;
    --new-secondary:  #0eccb5;
    --new-text:       #191919;
  }
`;

const Header = () => {

  const user = false;


  return (
    <nav className="navbar-component box-shadow-micro mb-3" id="navbar_1">
      <Link href="/">
        <a className="navbar-logo center" title="Home page name">
          <img src="./static/img/imagotype.svg" height="30px" alt="Logo Brand" />
        </a>
      </Link>
      <div className="navbar-toggle">
        <button type="button" className="btn-toggle">
          <i className="a-menu"></i>
        </button>
      </div>
      <div className="navbar-actions split">

        {/* Componente del Buscador */}
        <SearchCom />

        {/* Componente del Menu de navegación */}
        <NavMenu />

        {user ? (
          <div className="navbar-actions_item  jc-end">
            <div>
              <i className="a-plaz-astronaut mr-2 txt-brand-2"></i>
              Adian Nieves
            </div>
            <div>
              <button className="btn btn-l btn-l-tomato br-lg" id="btnTest">Log Out</button>
            </div>
          </div>
        ) : (
          <div className="navbar-actions_item  jc-end">
            <Link href="/sing-up">
              <div>
                <button className="btn btn-l btn-l-orange br-lg">Sing UP</button>
              </div>
            </Link>
            <Link href="/login">
              <div>
                <button className="btn btn-blue br-lg">Login</button>
              </div>
            </Link>
          </div>
        )}

      </div>
    </nav>
  );
};

export default Header;