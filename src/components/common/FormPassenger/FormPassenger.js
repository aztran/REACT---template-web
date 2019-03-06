import React, { Component } from 'react';

import './FormPassenger.scss';

import { Row, Col } from 'antd';

class FormPassenger extends Component {
  render() {
    return (
      <div className="panel">
        <div className="panel__header">
          {this.props.title}
        </div>
        <div className="panel__content">
          <Row className="panel__item">
            <div class="panel__item--col">
              <Col span={6} >
              <div className="panel__data">
                  <label>
                    Title
                  </label>
                  <select className="select">
                    <option>Mr</option>
                    <option>Ms</option>
                    <option>Mrs</option>
                  </select>
              </div>
              </Col>
              <Col span={6}>
                <label>
                  First Name
                </label>
                <input type="text" />
              </Col>
              <Col span={6}>
                <label>
                  Middle Name
                </label>
                <input type="text" />
              </Col>
              <Col span={6}>
                <label>
                  Last Name
                </label>
                <input type="text" />
              </Col>
            </div>
          </Row>
          <Row className="panel__item">
            <div class="panel__item--col">
              <Col span={8}>
              <div className="panel__data">
                <label>
                  ID Number
                </label>
                <input type="text" />
              </div>
              </Col>
              <Col span={8}>
                <div className="panel__data">
                  <label>
                    Phone
                  </label>
                  <input type="text" />
                </div>
              </Col>
              <Col span={8}>
                <div className="panel__data">
                  <label>
                    Remark
                  </label>
                  <select>
                    <option selected>Set a Contact Person</option>
                    <option>Ms</option>
                    <option>Mrs</option>
                  </select>
                </div>
              </Col>
            </div>
          </Row>
        </div>
      </div>
    )
  }
}

export default FormPassenger;