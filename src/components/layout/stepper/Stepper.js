import React, { Component } from 'react';
import './Stepper.scss';

import { Steps } from 'antd';

const Step = Steps.Step;


class Stepper extends Component {
  
  render() {
    return (
      <div className="steppers">
        <div className="container">
          <div className="stepper">
            <Steps current={this.props.current} size="small" className="stepper__left">
              <Step title="Passenger" />
              <Step title="Payment" />
              <Step title="Confirmation" />
            </Steps>
            <button className="stepper__btn">change flight</button>
          </div>
         
        </div>
      </div>
    )
  }
}

export default Stepper;