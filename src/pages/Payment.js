import React, { Component } from 'react';
import Payment from '../components/common/Payment/Payment';
import Summary from '../components/common/Summary/Summary';
import Stepper from '../components/layout/stepper/Stepper';

import { Link } from 'react-router-dom';

import { Row, Col } from 'antd';

class Passenger extends Component {
  render() {
    return (
      <div>
        <Stepper current={1}/>
        <div className="container content">
          <h2>Payment</h2>
          <Row>
            <Col span={16} className="col-padding">
              <Payment />
              <div class="btn-position">
                <button class="btn-payment">
                  <Link to="/list-restaurant" />
                  Continue to Payment
                
                </button>
              </div>
            </Col>
            <Col span={8}>
            <Summary />
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default Passenger;