import React from 'react';
import './Tab.css';

const Tab = ({ label, activeTab, onClick }) => {
  return (
    <div 
      className={`tab ${activeTab === label ? 'active' : ''}`}
      onClick={() => onClick(label)}
    >
      {label}
    </div>
  );
};

export default Tab;
