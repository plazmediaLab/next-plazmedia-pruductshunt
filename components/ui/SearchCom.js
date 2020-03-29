import React from 'react';

const SearchCom = () => {
  return (
    <form className="navbar-actions_search">
      <input type="search" placeholder="Search..." className="br-lg" />
      <button type="button" className="navbar-btnSearch">
        <i className="a-search"></i>
      </button>
  </form>
  );
};

export default SearchCom;