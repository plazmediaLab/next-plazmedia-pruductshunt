import React, { useRef, useContext } from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
// components
import NavMenu from '../ui/NavMenu';
import SearchCom from '../ui/SearchCom';
import { Avatar } from '../ui/FormStyledComponent';
// Modular-CSS
import { navBarActionToggle } from 'modular-css';
// Contex
import { FirebaseContex } from '../../Firebase';

const colors = styled.div`
  :root{
    --new-primary:    #ed4300;
    --new-secondary:  #0eccb5;
    --new-text:       #191919;
  }
`;


const Header = () => {

  // Refs
  const navbar_1 = useRef(null);
  const navActions = useRef(null);
  
  const { userInfo, firebase } = useContext(FirebaseContex);

  return (
    <nav className="navbar-component box-shadow-micro mb-3" id="navbar_1" ref={navbar_1}>
      <Link href="/">
        <a className="navbar-logo center" title="Home page name">
          <img src="./static/img/imagotype.svg" height="30px" alt="Logo Brand" />
        </a>
      </Link>
      <div className="navbar-toggle">
        <button 
          type="button"
          className="btn-toggle"
          onClick={() => navBarActionToggle(navbar_1, navActions)}
          >
          <i className="a-menu"></i>
        </button>
      </div>
      <div className="navbar-actions split" ref={navActions}>

        {/* Componente del Buscador */}
        <SearchCom />

        {/* Componente del Menu de navegación */}
        <NavMenu />

        {userInfo ? (
          <div className="navbar-actions_item  jc-end">
            <Avatar className="pr-2">
              <i className="a-plaz-astronaut mr-2 txt-brand-2"></i>
              <span className="txt-brand-2">User:</span> { userInfo.displayName }
            </Avatar>
            <div>
              <button 
                className="btn btn-l btn-l-tomato br-lg"
                onClick={() => firebase.LogOut()}
              >Log Out</button>
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