import React from 'react';

import { Icon } from 'antd';

import './Summary.scss';

const Summary = (props) => (
  <div className="summary">
    <div className="summary__header">
      <span className="summary__title">Summary</span>
    </div>
    <div className="summary__content">
      <div className="summary__departure">
        <span className="summary__departure--title">Departure</span>
        <div className="summary__departure--icon">
          <Icon type="down" className="" /> 
        </div>
      </div>
      <div className="summary__expand">
        <Icon type="right" className="" /> 
        <p className="summary__detail">
          <span className="summary__expand--title">GA120 ( CGK-SIN )</span>
          <div className="summary__expand--date">Sat, 2 December 2017 - 14:00</div>
          <div className="summary__expand--category">Economy Class (B)</div>
        </p>
       
      </div>
      <div className="price">
        <hr/>
        <div className="price__title">Price</div>
        <div className="price__detail">
          <span>Sub Total price</span>
          <span>5,375,000</span>
        </div>
        <a href="#" className="price__details">Details</a>
        
      </div>
      <hr/>
    </div>

    <div className="summary__content">
      <div className="summary__departure">
        <span className="summary__departure--title">Return</span>
        <div className="summary__departure--icon">
          <Icon type="down" className="" /> 
        </div>
      </div>
      <div className="summary__expand">
        <Icon type="left" className="" /> 
        <p className="summary__detail">
          <span className="summary__expand--title">GA120 ( SIN-CGK )</span>
          <div className="summary__expand--date">Tue, 5 December 2017 - 14:00</div>
          <div className="summary__expand--category">Economy Class (Q)</div>
        </p>
       
      </div>
      <div className="price">
        <hr/>
        <div className="price__title">Price</div>
        <div className="price__detail">
          <span>Sub Total price</span>
          <span>6,075,000</span>
        </div>
        <a href="#" className="price__details">Details</a>
        
      </div>
    </div>

    <div className="summary__footer">
      <span>Grand Total</span>
      <span>IDR 11,450,000</span>
    </div>

  </div>

)

export default Summary