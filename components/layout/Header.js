import React, { useRef } from 'react';
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

  // Refs
  const navbar_1 = useRef(null);
  const navActions = useRef(null);
  let initialIconBtnToggle = '';
  
  // onClick
  const onClickToggle = (navBar_arg, actionToggle_arg) => {   
    // Constants
    const navActionsToggle = actionToggle_arg.current.children;
    const navbarComponent = navBar_arg.current;

    // Variables
    let totalHeight = 0;

    if(!localStorage.getItem('initialIcon')){
      localStorage.setItem('initialIcon', navbarComponent.querySelector('.btn-toggle i').classList[0]);
    }else{
      initialIconBtnToggle = localStorage.getItem('initialIcon');
    };

    for (let i = 0; i < navActionsToggle.length; i++) {
      totalHeight += navActionsToggle[i].clientHeight;
    }

    navbarComponent.querySelectorAll('a , button').forEach(item => {
      item.addEventListener('click', closeToggle)
    });

    // Functions
    function openToggle(){
      navbarComponent.querySelector('.btn-toggle i').classList = [];
      navbarComponent.querySelector('.btn-toggle i').classList.add('a-clearclose');
      actionToggle_arg.current.style.height = `${totalHeight + 25}px`;
    }
    function closeToggle(){
      if(localStorage.getItem('initialIcon')){
        initialIconBtnToggle = localStorage.getItem('initialIcon');
      }
      navbarComponent.querySelector('.btn-toggle i').classList = [];
      console.log(initialIconBtnToggle);
      navbarComponent.querySelector('.btn-toggle i').classList.add(initialIconBtnToggle);
      actionToggle_arg.current.style.height = '0px';
      localStorage.removeItem('initialIcon');
    }

    // Add class for toggle
    actionToggle_arg.current.classList.toggle('navbar-actions_show')

    // Launched functions
    if(actionToggle_arg.current.classList.contains('navbar-actions_show')){
      openToggle();
    }else{
      closeToggle();
    }

    totalHeight = 0;
  };
  
  const user = false;

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
          onClick={() => onClickToggle(navbar_1, navActions)}
          >
          <i className="a-menu"></i>
        </button>
      </div>
      <div className="navbar-actions split" ref={navActions}>

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