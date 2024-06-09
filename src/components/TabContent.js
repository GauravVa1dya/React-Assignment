import React from 'react';
import './TabContent.css';

const TabContent = ({ items }) => {
  return (
    <div className="tab-content">
      {items.map((item, index) => (
        <div key={index} className="task">
          <img src={item.logo} alt={item.title} />
          <div className="task-info">
            <h3>{item.title}<span style={{fontSize:"14px",fontWeight:"400", color:"#64758B"}}> by</span> <span style={{color:"#94A3B8"}}>{item.by}</span></h3>
            <div className="tags">
              {item.usdcimage && <img src={item.usdcimage} alt={item.title} id="usdc-img" />}
              {item.usdcprice && <p>{item.usdcprice} <span>{item.usdcname} </span></p>}
              {item.prizeimage && <img src={item.prizeimage} alt={item.title} id="usdc-img1" />}
              {item.prizevalue && <p style={{fontSize:"18px",fontWeight:"400",color:"#64758B"}} id="usdc-img2">{item.prizevalue} <span></span></p>}
              {item.tags.map((tag, idx) => (
                <span key={idx} className="tag" value={tag}>{tag}</span>
              ))}
            </div>
          </div>
          <div className="task-meta">
            <span>{item.date}</span>
            <span>{item.participants} Participants</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TabContent;
