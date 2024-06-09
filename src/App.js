import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Tab from './components/Tab';
import TabContent from './components/TabContent';
import './App.css';
import SearchBar from './SearchBar/SearchBar';

const App = () => {
  const [activeTab, setActiveTab] = useState('Completed');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const tasks = {
    'Completed': [
      {
        logo: '/images/Rectangle 7.png',
        title: "Design Earn’s Talent Leaderboard",
        by: 'Superteam',
        date: '04/04/2023',
        participants: 36,
        usdcimage: '/images/token-branded_usdc.png',
        usdcprice: '700',
        usdcname :'USDC',
        prizeimage: '/images/Vector.png',
        prizevalue: '1st Place',
        tags: ['Design']
      },
      {
        logo: '/images/Rectangle 7 (1).png',
        title: 'Armada UI/UX Review',
        by: "Dean's List Dao",
        date: '21/03/2023',
        participants: 7,
        usdcimage: '',
        usdcprice: '',
        usdcname :'',
        prizeimage: '',
        prizevalue: '',
        tags: ['Design']
      },
      {
        logo: '/images/Rectangle 7 (2).png',
        title: 'Create a Frame for Farcaster',
        by: 'Deribet',
        date: '14/03/2023',
        participants: 20,
        usdcimage: '/images/token-branded_usdc.png',
        usdcprice: '500',
        usdcname :'USDC',
        prizeimage: '/images/Vector.png',
        prizevalue: '1st Place',
        tags: ['Frontend', 'Backend', 'Blockchain']
      },
      {
        logo: '/images/Rectangle 7 (4).png',
        title: 'Write a thread with memes for PP Program on Solana',
        by: 'pSTAKE Finance',
        date: '06/03/2023',
        participants: 12,
        usdcimage: '/images/token-branded_usdc.png',
        usdcprice: '100',
        usdcname :'USDC',
        prizeimage: '/images/Vector.png',
        prizevalue: '3rd Place',
        tags: ['Content']
      }
    ],
    'In Review': [
      {
        logo: '/images/Rectangle 7 (4).png',
        title: 'Create a Frame for Farcaster',
        by: 'Deribet',
        date: '14/03/2023',
        participants: 20,
        tags: ['Frontend', 'Backend', 'Blockchain']
      },
      {
        logo: '/images/Rectangle 7 (1).png',
        title: 'Write a thread with memes for PP Program on Solana',
        by: 'pSTAKE Finance',
        date: '06/03/2023',
        participants: 12,
        tags: ['Content']
      },
      {
        logo: '/images/Rectangle 7.png',
        title: "Design Earn’s Talent Leaderboard",
        by: 'Superteam',
        date: '04/04/2023',
        participants: 36,
        tags: ['Design']
      },
      {
        logo: '/images/Rectangle 7 (2).png',
        title: 'Armada UI/UX Review',
        by: "Dean's List Dao",
        date: '21/03/2023',
        participants: 7,
        tags: ['Design']
      }
    ]
  };

  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
  };

  const filteredTasks = selectedFilter === 'all' ? tasks[activeTab] : tasks[activeTab].filter(task =>
    task.tags.includes(selectedFilter)
  );

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={
              <>
                <div className="tabs-header">
                  <div className="tabs-container">
                    <div className="tabs-title">Work History</div>
                    <div className="tabs">
                      {Object.keys(tasks).map((tab) => (
                        <Tab key={tab} label={tab} activeTab={activeTab} onClick={setActiveTab} />
                      ))}
                    </div>
                    <div className="filter">
                      <label htmlFor="filter"><img src="images/filter.png"/>  Filter By</label>
                      <select id="filter" value={selectedFilter} onChange={handleFilterChange}>
                        <option value="all">All</option>
                        <option value="Content">Content</option>
                        <option value="Design">Design</option>
                        <option value="Frontend">Frontend</option>
                        <option value="Backend">Backend</option>
                        <option value="Blockchain">Blockchain</option>
                      </select>
                    </div>
                  </div>
                </div>
                <TabContent items={filteredTasks} />
              </>
            } />
          </Routes>
        </div>
        <SearchBar />
      </div>
    </Router>
  );
};

export default App;
