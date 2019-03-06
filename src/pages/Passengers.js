import React, { Component } from 'react';

import FormPassenger from '../components/common/FormPassenger/FormPassenger';
import Summary from '../components/common/Summary/Summary';
import Stepper from '../components/layout/stepper/Stepper';

import { Row, Col } from 'antd';

class Passenger extends Component {
  render() {
    return (
      <div>
        <Stepper current={0}/>
        <div className="container content">
          <h2>Passenger information <span class="title-mini">Name as on ID Card / Passport / Driving License</span></h2>
          <Row>
            <Col span={16} className="col-padding">
              <FormPassenger title="Passenger 1"/>
              <FormPassenger title="Passenger 2"/>
              <FormPassenger title="Passenger 3"/>
              <div class="btn-position">
                <button class="btn-payment">Continue to Payment</button>
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