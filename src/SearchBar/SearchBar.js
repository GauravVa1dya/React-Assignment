import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <span className="search-icon"><img src='images/uil_search.png' /></span>
      <input type="text" placeholder="Search Bounties, Profiles, and more..." />
    </div>
  );
};

export default SearchBar;
