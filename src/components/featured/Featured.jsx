import React from 'react';
import './featured.css';
import img1 from './images/Frame 684.png';
import img2 from './images/Frame 685.png';
import img3 from './images/Frame 686.png';
import img4 from './images/Frame 687.png';


const Featured = () => {
  return (
    <section className='featured'>
        <div className="top">
            <div></div>
            <span>Featured</span>
        </div>
        <div className='title'>
          <h1>New Arrival</h1>
        </div>
        <div className='grid-container'>
          <div className='grid-item-1'><img src={img1} alt="" /></div>
          <div className='grid-item-2'><img src={img2} alt="" /></div>
          <div className='grid-item-3'><img src={img3} alt="" /></div>
          <div className='grid-item-4'><img src={img4} alt="" /></div>
        </div>
    </section>
  );
};

export default Featured;

